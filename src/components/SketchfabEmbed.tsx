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
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const embedSrc = `https://sketchfab.com/models/${modelId}/embed?autostart=1&autospin=0.4&ui_controls=0&ui_infos=0&ui_watermark=0&ui_settings=0&ui_annotations=0&ui_hint=0&ui_inspector=0&ui_stop=0&ui_help=0&ui_vr=0&ui_loading=0`;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4 / 3',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(201,162,46,0.22)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
        background: 'rgba(2,8,18,0.6)',
      }}
    >
      {shouldLoad && (
        <iframe
          title={title}
          src={embedSrc}
          frameBorder={0}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      )}
      {!shouldLoad && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(201,162,46,0.5)',
          fontFamily: 'var(--font-pirate)',
          fontSize: '20px',
        }}>
          Loading 3D…
        </div>
      )}
    </div>
  );
};

export default SketchfabEmbed;
