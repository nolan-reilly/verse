import { useState, useEffect, useRef } from "react";

export default function DraggableImageCanvas({ images, setImages }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [containerRect, setContainerRect] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [imageSizes, setImageSizes] = useState({});
  const containerRef = useRef(null);
  const prevContainerSize = useRef({ width: 0, height: 0 });
  const imageRefs = useRef({});

  const overflowPercent = 25; // % of each image allowed to overflow
  const [edgeProximity, setEdgeProximity] = useState({});

  const calculateEdgeProximity = (
    imgs,
    containerWidth,
    containerHeight,
    sizes
  ) => {
    const prox = {};
    const threshold = 50; // px
    imgs.forEach((img) => {
      const s = sizes[img.id] || { width: 100, height: 100 };
      const right = containerWidth - (img.x + s.width);
      const bottom = containerHeight - (img.y + s.height);
      prox[img.id] = {
        right: right <= threshold,
        bottom: bottom <= threshold,
        rightDistance: right,
        bottomDistance: bottom,
      };
    });
    return prox;
  };

  const updateMeasurements = () => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const cWidth = rect.width;
    const cHeight = rect.height;

    // measure rendered images
    const sizes = {};
    images.forEach((img) => {
      const el = imageRefs.current[img.id];
      if (el) {
        const r = el.getBoundingClientRect();
        sizes[img.id] = { width: r.width, height: r.height };
      } else {
        sizes[img.id] = {
          width: 100 * (img.scale || 1),
          height: 100 * (img.scale || 1),
        };
      }
    });

    const prox = calculateEdgeProximity(
      images,
      prevContainerSize.current.width,
      prevContainerSize.current.height,
      sizes
    );
    setEdgeProximity(prox);

    setContainerRect({
      left: rect.left,
      top: rect.top,
      width: cWidth,
      height: cHeight,
    });
    setImageSizes(sizes);

    // adjust for resize
    if (prevContainerSize.current.width) {
      adjustImagesOnResize(
        prevContainerSize.current.width,
        prevContainerSize.current.height,
        cWidth,
        cHeight,
        sizes,
        prox
      );
    }

    ensureImagesInBounds(cWidth, cHeight, sizes);
    prevContainerSize.current = { width: cWidth, height: cHeight };
  };

  const adjustImagesOnResize = (oldW, oldH, newW, newH, sizes, prox) => {
    setImages((prev) =>
      prev.map((img) => {
        const s = sizes[img.id];
        let x = img.x;
        let y = img.y;
        if (prox[img.id]?.right)
          x = newW - s.width - prox[img.id].rightDistance;
        if (prox[img.id]?.bottom)
          y = newH - s.height - prox[img.id].bottomDistance;
        return { ...img, x, y };
      })
    );
  };

  const ensureImagesInBounds = (cW, cH, sizes) => {
    setImages((prev) =>
      prev.map((img) => {
        const s = sizes[img.id] || { width: 100, height: 100 };
        const maxOX = s.width * (overflowPercent / 100);
        const maxOY = s.height * (overflowPercent / 100);
        const x = Math.max(-maxOX, Math.min(cW - s.width + maxOX, img.x));
        const y = Math.max(-maxOY, Math.min(cH - s.height + maxOY, img.y));
        return x === img.x && y === img.y ? img : { ...img, x, y };
      })
    );
  };

  useEffect(() => {
    const init = setTimeout(updateMeasurements, 200);

    let timer;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(updateMeasurements, 100);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(init);
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, [images.length]);

  useEffect(() => {
    const onImgLoad = () => setTimeout(updateMeasurements, 50);
    const imgs = document.querySelectorAll(".draggable-image");
    imgs.forEach((i) => i.addEventListener("load", onImgLoad));
    return () => imgs.forEach((i) => i.removeEventListener("load", onImgLoad));
  }, [images]);

  const handleDragStart = (clientX, clientY, id) => {
    const item = images.find((img) => img.id === id);
    const maxZ = Math.max(...images.map((img) => img.zIndex));
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, zIndex: maxZ + 1 } : img))
    );
    setDraggedItem({
      id,
      offsetX: clientX - containerRect.left - item.x,
      offsetY: clientY - containerRect.top - item.y,
    });
  };

  const handleMouseDown = (e, id) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY, id);
  };
  const handleTouchStart = (e, id) => {
    const t = e.touches[0];
    handleDragStart(t.clientX, t.clientY, id);
  };

  const moveItem = (clientX, clientY) => {
    if (!draggedItem) return;
    const s = imageSizes[draggedItem.id] || { width: 100, height: 100 };
    const maxOX = s.width * (overflowPercent / 100);
    const maxOY = s.height * (overflowPercent / 100);
    let x = clientX - containerRect.left - draggedItem.offsetX;
    let y = clientY - containerRect.top - draggedItem.offsetY;
    x = Math.max(-maxOX, Math.min(containerRect.width - s.width + maxOX, x));
    y = Math.max(-maxOY, Math.min(containerRect.height - s.height + maxOY, y));
    setImages((prev) =>
      prev.map((img) => (img.id === draggedItem.id ? { ...img, x, y } : img))
    );
  };

  const onMouseMove = (e) => moveItem(e.clientX, e.clientY);
  const onTouchMove = (e) => {
    e.preventDefault();
    moveItem(e.touches[0].clientX, e.touches[0].clientY);
  };

  const endDrag = () => {
    if (draggedItem) {
      const prox = calculateEdgeProximity(
        images,
        containerRect.width,
        containerRect.height,
        imageSizes
      );
      setEdgeProximity(prox);
    }
    setDraggedItem(null);
  };

  const saveImageRef = (id, el) => {
    if (el) imageRefs.current[id] = el;
  };

  return (
    <div
      ref={containerRef}
      className="drag-container"
      onMouseMove={onMouseMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchMove={onTouchMove}
      onTouchEnd={endDrag}
      onTouchCancel={endDrag}
    >
      {images.map((img) => (
        <div
          key={img.id}
          className={`draggable-image-item ${
            draggedItem?.id === img.id ? "active" : ""
          }`}
          style={{ left: `${img.x}px`, top: `${img.y}px`, zIndex: img.zIndex }}
          onMouseDown={(e) => handleMouseDown(e, img.id)}
          onTouchStart={(e) => handleTouchStart(e, img.id)}
        >
          <img
            ref={(el) => saveImageRef(img.id, el)}
            src={img.url}
            alt="draggable"
            className="draggable-image"
            style={{
              transform: `scale(${img.scale || 1})`,
              transformOrigin: "top left",
            }}
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}
