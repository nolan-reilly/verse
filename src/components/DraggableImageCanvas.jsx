import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function DraggableImageCanvas({
  images,
  setImages,
  canDrag = true,
}) {
  /* -----------------------------
   *  Local state & refs
   * ----------------------------*/
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

  const calculateEdgeProximity = (imgs, cW, cH, sizes) => {
    const prox = {};
    const threshold = 50; // px
    imgs.forEach((img) => {
      const s = sizes[img.id] || { width: 100, height: 100 };
      const right = cW - (img.x + s.width);
      const bottom = cH - (img.y + s.height);
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
    const cW = rect.width;
    const cH = rect.height;

    // measure rendered images (scale applied)
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

    // edge proximity before layout fixes
    const prox = calculateEdgeProximity(
      images,
      prevContainerSize.current.width,
      prevContainerSize.current.height,
      sizes
    );
    setEdgeProximity(prox);

    setContainerRect({ left: rect.left, top: rect.top, width: cW, height: cH });
    setImageSizes(sizes);

    // adjust for resize
    if (prevContainerSize.current.width) {
      adjustImagesOnResize(
        prevContainerSize.current.width,
        prevContainerSize.current.height,
        cW,
        cH,
        sizes,
        prox
      );
    }

    ensureImagesInBounds(cW, cH, sizes);
    prevContainerSize.current = { width: cW, height: cH };
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
    const onLoad = () => setTimeout(updateMeasurements, 50);
    const list = document.querySelectorAll(".draggable-image");
    list.forEach((i) => i.addEventListener("load", onLoad));
    return () => list.forEach((i) => i.removeEventListener("load", onLoad));
  }, [images]);

  const startDrag = (clientX, clientY, id) => {
    if (!canDrag) return;
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
    if (!canDrag) return;
    e.preventDefault();
    startDrag(e.clientX, e.clientY, id);
  };
  const handleTouchStart = (e, id) => {
    if (!canDrag) return;
    const t = e.touches[0];
    startDrag(t.clientX, t.clientY, id);
  };

  const moveItem = (clientX, clientY) => {
    if (!canDrag || !draggedItem) return;
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
    if (!canDrag) return;
    moveItem(e.touches[0].clientX, e.touches[0].clientY);
  };

  const endDrag = () => {
    if (!canDrag) return;
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
      style={{ cursor: canDrag ? "grab" : "default" }}
    >
      {images.map((img) => (
        <div
          key={img.id}
          className={`draggable-image-item ${
            draggedItem?.id === img.id ? "active" : ""
          }`}
          style={{
            left: `${img.x}px`,
            top: `${img.y}px`,
            zIndex: img.zIndex,
            cursor: canDrag ? "grab" : "default",
          }}
          onMouseDown={canDrag ? (e) => handleMouseDown(e, img.id) : undefined}
          onTouchStart={
            canDrag ? (e) => handleTouchStart(e, img.id) : undefined
          }
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
