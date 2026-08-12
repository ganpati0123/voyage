import { useEffect, useRef, useState } from 'react';

interface SketchfabEmbedProps {
  modelId: string;
  title: string;
}

/**
 * Renders a Sketchfab 3D model as a prominent foreground element.
 * Autoplay + autospin so the model starts and loops automatically.
 * Lazy-mounts the iframe only when the section scrolls near the viewport
 * so off-screen iframes don't burn resources.
 */
const SketchfabEmbed: React.FC<SketchfabEmbedProps> = ({ modelId, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const embedSrc = `https://sketchfab.com/models/${modelId}/embed?autostart=1&autospin=1.5&ui_controls=0&ui_infos=0&ui_watermark=0&ui_settings=0&ui_annotations=0&ui_hint=0&ui_inspector=0&ui_stop=0&ui_help=0&ui_vr=0&ui_loading=0`;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: 0.72,
      }}
    >
      {shouldLoad && (
        <>
          <iframe
            title={title}
            src={embedSrc}
            frameBorder={0}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '130%',
              height: '130%',
              transform: 'translate(-50%, -50%)',
              border: 'none',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,2,6,0.55) 0%, rgba(0,4,12,0.35) 50%, rgba(0,2,6,0.65) 100%)',
            pointerEvents: 'none',
          }} />
        </>
      )}

    </div>
  );
};

export default SketchfabEmbed;
