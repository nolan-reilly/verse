import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function ProfileHeader({ profileURL, description }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const toggleFollow = () => setIsFollowing(!isFollowing);
  const [images, setImages] = useState([
    { id: 1, url: "post-images/01.jpg", x: 50, y: 50, zIndex: 1 },
    { id: 2, url: "post-images/02.jpg", x: 150, y: 100, zIndex: 1 },
    { id: 3, url: "post-images/03.jpg", x: 250, y: 30, zIndex: 1 },
  ]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [containerRect, setContainerRect] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [imageSizes, setImageSizes] = useState({});
  const containerRef = useRef(null);

  // Overflow amount (% of image size that can go outside boundaries)
  const overflowPercent = 25; // 25% of the image can go outside

  // Update container and image measurements
  const updateMeasurements = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerRect({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      });

      // Measure all images
      const sizes = {};
      images.forEach((img) => {
        const imgElement = document.querySelector(
          `.draggable-image-item[data-id="${img.id}"] img`
        );
        if (imgElement) {
          sizes[img.id] = {
            width: imgElement.offsetWidth,
            height: imgElement.offsetHeight,
          };
        }
      });
      setImageSizes(sizes);

      // Keep images within bounds after resize
      ensureImagesInBounds(rect.width, rect.height, sizes);
    }
  };

  // Function to ensure images stay within bounds after resize
  const ensureImagesInBounds = (containerWidth, containerHeight, sizes) => {
    setImages((prev) =>
      prev.map((img) => {
        const imgSize = sizes[img.id] || { width: 100, height: 100 };
        const maxOverflowX = imgSize.width * (overflowPercent / 100);
        const maxOverflowY = imgSize.height * (overflowPercent / 100);

        // Adjust positions if they're outside bounds
        const newX = Math.max(
          -maxOverflowX,
          Math.min(containerWidth - imgSize.width + maxOverflowX, img.x)
        );
        const newY = Math.max(
          -maxOverflowY,
          Math.min(containerHeight - imgSize.height + maxOverflowY, img.y)
        );

        // Only update if position changed
        if (newX !== img.x || newY !== img.y) {
          return { ...img, x: newX, y: newY };
        }
        return img;
      })
    );
  };

  // Set up measurements and resize handling
  useEffect(() => {
    // Initial measurement after a short delay to ensure rendering
    const initTimer = setTimeout(updateMeasurements, 100);

    // Set up resize handler
    window.addEventListener("resize", updateMeasurements);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("resize", updateMeasurements);
    };
  }, [images.length]); // Only re-run if the number of images changes

  // Unified drag start handler
  const handleDragStart = (clientX, clientY, id) => {
    const item = images.find((img) => img.id === id);
    const maxZIndex = Math.max(...images.map((img) => img.zIndex));

    setImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, zIndex: maxZIndex + 1 } : img
      )
    );

    setDraggedItem({
      id,
      offsetX: clientX - containerRect.left - item.x,
      offsetY: clientY - containerRect.top - item.y,
    });
  };

  // Mouse handlers
  const handleMouseDown = (e, id) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY, id);
  };

  // Touch handlers
  const handleTouchStart = (e, id) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY, id);
  };

  // Move handler with flexible boundary constraints
  const handleMove = (clientX, clientY) => {
    if (!draggedItem) return;

    const imgSize = imageSizes[draggedItem.id] || { width: 100, height: 100 };

    // Calculate allowed overflow based on image dimensions
    const maxOverflowX = imgSize.width * (overflowPercent / 100);
    const maxOverflowY = imgSize.height * (overflowPercent / 100);

    // Calculate new position
    let newX = clientX - containerRect.left - draggedItem.offsetX;
    let newY = clientY - containerRect.top - draggedItem.offsetY;

    // Images can go slightly outside the container bounds
    newX = Math.max(
      -maxOverflowX,
      Math.min(containerRect.width - imgSize.width + maxOverflowX, newX)
    );
    newY = Math.max(
      -maxOverflowY,
      Math.min(containerRect.height - imgSize.height + maxOverflowY, newY)
    );

    setImages((prev) =>
      prev.map((img) =>
        img.id === draggedItem.id ? { ...img, x: newX, y: newY } : img
      )
    );
  };

  // Mouse move
  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  // Touch move
  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  // Unified drag end
  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-row justify-between">
        <img className="profile-picture" src={profileURL} />

        <div className="flex flex-row">
          <div className="flex flex-row gap-16 align-center">
            <button
              onClick={toggleFollow}
              className={`profile-follow-btn ${isFollowing ? "following" : ""}`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <Link className="profile-message-btn" to="/messaging">
              Message
            </Link>
          </div>
        </div>
      </div>

      <p className="text-extra-small">{description}</p>

      {/* Draggable Area */}
      <div
        ref={containerRef}
        className="drag-container"
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onTouchCancel={handleDragEnd}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className={`draggable-image-item ${
              draggedItem?.id === image.id ? "active" : ""
            }`}
            style={{
              left: `${image.x}px`,
              top: `${image.y}px`,
              zIndex: image.zIndex,
            }}
            data-id={image.id}
            onMouseDown={(e) => handleMouseDown(e, image.id)}
            onTouchStart={(e) => handleTouchStart(e, image.id)}
          >
            <img
              src={image.url}
              alt="Draggable content"
              className="draggable-image"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
