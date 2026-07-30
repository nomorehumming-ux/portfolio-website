import { useState, useCallback, useEffect } from "react";

export default function ImageLightbox({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, showNext, showPrev]);

  return (
    <>
      <div className="lightbox-grid">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="lightbox-grid__item"
            onClick={() => setActiveIndex(index)}
          >
            <img src={image.src} alt={image.alt ?? ""} loading="lazy" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="lightbox__backdrop"
            aria-label="Close"
            onClick={close}
          />
          <img
            className="lightbox__image"
            src={images[activeIndex].src}
            alt={images[activeIndex].alt ?? ""}
          />
          <button
            type="button"
            className="lightbox__prev"
            aria-label="Previous image"
            onClick={showPrev}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox__next"
            aria-label="Next image"
            onClick={showNext}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
