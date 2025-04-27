import { useState, useEffect, useRef } from "react";

export default function DraggableImageCanvas({
  images,
  setImages,
  canDrag = true,
}) {
  const [draggedItem, setDraggedItem] = useState(null); // renamed back
  const [sizes, setSizes] = useState({});
  const containerRef = useRef(null);
  const prevSize = useRef({ w: 0, h: 0 });
  const imgRefs = useRef({});

  const OVERFLOW = 0.25;
  const SNAP = 50;

  /* ---------- helpers ---------- */
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const saveRef = (id, el) => el && (imgRefs.current[id] = el);

  const measure = () => {
    if (!containerRef.current) return;
    const box = containerRef.current.getBoundingClientRect();

    /* measure images (after scale) */
    const sz = {};
    images.forEach((i) => {
      const r = imgRefs.current[i.id]?.getBoundingClientRect();
      sz[i.id] = r ? { w: r.width, h: r.height } : { w: 100, h: 100 };
    });
    setSizes(sz);

    /* snap right / bottom aligned on resize */
    if (prevSize.current.w) {
      setImages((prev) =>
        prev.map((i) => {
          const { w, h } = sz[i.id];
          const right = prevSize.current.w - (i.x + w);
          const bottom = prevSize.current.h - (i.y + h);
          let x = i.x,
            y = i.y;
          if (right <= SNAP) x = box.width - w - right;
          if (bottom <= SNAP) y = box.height - h - bottom;
          return x === i.x && y === i.y ? i : { ...i, x, y };
        })
      );
    }

    /* keep within overflow limits */
    setImages((prev) =>
      prev.map((i) => {
        const { w, h } = sz[i.id];
        const maxOX = w * OVERFLOW;
        const maxOY = h * OVERFLOW;
        const x = clamp(i.x, -maxOX, box.width - w + maxOX);
        const y = clamp(i.y, -maxOY, box.height - h + maxOY);
        return x === i.x && y === i.y ? i : { ...i, x, y };
      })
    );

    prevSize.current = { w: box.width, h: box.height };
  };

  /* run measure after mount, resize, img load */
  useEffect(() => {
    const t = setTimeout(measure, 200);
    const onR = () => requestAnimationFrame(measure);
    window.addEventListener("resize", onR);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onR);
    };
  }, [images.length]);

  useEffect(() => {
    const imgs = document.querySelectorAll(".draggable-image");
    const ld = () => requestAnimationFrame(measure);
    imgs.forEach((i) => i.addEventListener("load", ld));
    return () => imgs.forEach((i) => i.removeEventListener("load", ld));
  }, [images]);

  /* ---------- drag logic ---------- */
  const begin = (cx, cy, id) => {
    if (!canDrag) return;
    const box = containerRef.current.getBoundingClientRect();
    const target = images.find((i) => i.id === id);

    /* bring to front */
    const maxZ = Math.max(...images.map((i) => i.zIndex));
    setImages((p) =>
      p.map((i) => (i.id === id ? { ...i, zIndex: maxZ + 1 } : i))
    );

    setDraggedItem({
      id,
      offsetX: cx - box.left - target.x,
      offsetY: cy - box.top - target.y,
    });
  };

  const move = (cx, cy) => {
    if (!draggedItem) return;
    const box = containerRef.current.getBoundingClientRect();
    const { w, h } = sizes[draggedItem.id] || { w: 100, h: 100 };
    const maxOX = w * OVERFLOW;
    const maxOY = h * OVERFLOW;

    const x = clamp(
      cx - box.left - draggedItem.offsetX,
      -maxOX,
      box.width - w + maxOX
    );
    const y = clamp(
      cy - box.top - draggedItem.offsetY,
      -maxOY,
      box.height - h + maxOY
    );

    setImages((p) =>
      p.map((i) => (i.id === draggedItem.id ? { ...i, x, y } : i))
    );
  };

  const stop = () => setDraggedItem(null);

  /* ---------- container props ---------- */
  const props = {
    ref: containerRef,
    className: "drag-container",
    style: {
      cursor: canDrag ? "grab" : "auto",
      touchAction: canDrag ? "none" : "auto",
    },
  };
  if (canDrag) {
    props.onMouseMove = (e) => move(e.clientX, e.clientY);
    props.onMouseUp = stop;
    props.onMouseLeave = stop;
    props.onTouchMove = (e) => move(e.touches[0].clientX, e.touches[0].clientY);
    props.onTouchEnd = stop;
    props.onTouchCancel = stop;
  }

  return (
    <div {...props}>
      {images.map((img) => (
        <div
          key={img.id}
          className={`draggable-image-item ${
            draggedItem?.id === img.id ? "active" : ""
          }`}
          style={{
            left: img.x,
            top: img.y,
            zIndex: img.zIndex,
            pointerEvents: canDrag ? "auto" : "none",
          }}
          onMouseDown={
            canDrag ? (e) => begin(e.clientX, e.clientY, img.id) : null
          }
          onTouchStart={
            canDrag
              ? (e) => begin(e.touches[0].clientX, e.touches[0].clientY, img.id)
              : null
          }
        >
          <img
            ref={(el) => saveRef(img.id, el)}
            src={img.url}
            alt=""
            className="draggable-image"
            style={{
              transform: `scale(${img.scale ?? 1})`,
              transformOrigin: "top left",
              userSelect: "none",
            }}
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}
