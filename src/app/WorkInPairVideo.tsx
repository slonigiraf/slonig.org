type Props = {};

export default function WorkInPairVideo({}: Props) {
  const videoId = "z0oQM6yRUmY";

  const src =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1` +
    `&mute=1` +
    `&loop=1` +
    `&playlist=${videoId}` +
    `&controls=0` +
    `&modestbranding=1` +
    `&rel=0` +
    `&playsinline=1`;

  return (
    <div className="relative w-full">
      {/* Background: top half primary color, bottom half none */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, var(--primary-color) 0 50%, transparent 50% 100%)`,
        }}
      />

      {/* 16:9 container */}
      <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-2xl">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title="Students work in pairs using Slonig"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}