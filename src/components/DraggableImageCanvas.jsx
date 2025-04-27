import { useState, useEffect, useRef } from "react";

/** Drag-and-drop header.  If `canDrag` is false:
 *  - images are locked in place
 *  - area allows normal page scrolling on mobile
 */
export default function DraggableImageCanvas({
  images,
  setImages,
  canDrag = true,
}) {
  /* ---------- state & refs ---------- */
  const [dragged, setDragged] = useState(null); // {id, offsetX, offsetY}
  const [sizes, setSizes] = useState({}); // { id: {w,h} }
  const container = useRef(null);
  const refs = useRef({}); // image nodes

  const allowOverflow = 0.25; // 25 %

  /* ---------- helpers ---------- */
  const saveRef = (id, el) => el && (refs.current[id] = el);

  const within = (val, min, max) => Math.max(min, Math.min(max, val));

  const calcSizes = () => {
    const s = {};
    images.forEach((img) => {
      const r = refs.current[img.id]?.getBoundingClientRect();
      s[img.id] = r ? { w: r.width, h: r.height } : { w: 100, h: 100 };
    });
    setSizes(s);
  };

  /* ---------- resize / load listeners ---------- */
  useEffect(() => {
    calcSizes();
    const onResize = () => requestAnimationFrame(calcSizes);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [images.length]);

  useEffect(() => {
    const imgs = document.querySelectorAll(".draggable-image");
    const loaded = () => requestAnimationFrame(calcSizes);
    imgs.forEach((i) => i.addEventListener("load", loaded));
    return () => imgs.forEach((i) => i.removeEventListener("load", loaded));
  }, [images]);

  /* ---------- dragging ---------- */
  const start = (clientX, clientY, id) => {
    const box = container.current.getBoundingClientRect();
    const target = images.find((i) => i.id === id);
    setDragged({
      id,
      offsetX: clientX - box.left - target.x,
      offsetY: clientY - box.top - target.y,
    });
  };

  const move = (clientX, clientY) => {
    if (!dragged) return;
    const cBox = container.current.getBoundingClientRect();
    const { w, h } = sizes[dragged.id] || { w: 100, h: 100 };
    const maxOX = w * allowOverflow;
    const maxOY = h * allowOverflow;

    const x = within(
      clientX - cBox.left - dragged.offsetX,
      -maxOX,
      cBox.width - w + maxOX
    );
    const y = within(
      clientY - cBox.top - dragged.offsetY,
      -maxOY,
      cBox.height - h + maxOY
    );

    setImages((prev) =>
      prev.map((img) => (img.id === dragged.id ? { ...img, x, y } : img))
    );
  };

  const stop = () => setDragged(null);

  /* ---------- props depending on canDrag ---------- */
  const divProps = {
    ref: container,
    className: "drag-container",
    style: {
      cursor: canDrag ? "grab" : "auto",
      touchAction: canDrag ? "none" : "auto", // lets page scroll when locked
    },
  };

  if (canDrag) {
    divProps.onMouseMove = (e) => move(e.clientX, e.clientY);
    divProps.onMouseUp = stop;
    divProps.onMouseLeave = stop;
    divProps.onTouchMove = (e) =>
      move(e.touches[0].clientX, e.touches[0].clientY);
    divProps.onTouchEnd = stop;
    divProps.onTouchCancel = stop;
  }

  /* ---------- render ---------- */
  return (
    <div {...divProps}>
      {images.map((img) => (
        <div
          key={img.id}
          className="draggable-image-item"
          style={{
            left: img.x,
            top: img.y,
            zIndex: img.zIndex,
            pointerEvents: canDrag ? "auto" : "none",
          }}
          onMouseDown={
            canDrag ? (e) => start(e.clientX, e.clientY, img.id) : null
          }
          onTouchStart={
            canDrag
              ? (e) => start(e.touches[0].clientX, e.touches[0].clientY, img.id)
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
            }}
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}
