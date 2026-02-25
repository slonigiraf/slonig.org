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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, var(--primary-color) 0 50%, transparent 50% 100%)`,
        }}
      />

      {/* keep margins on iPad too */}
      <div className="px-10 sm:px-0 md:px-10">
        <div className="relative w-full max-w-4xl mx-auto aspect-video isolate">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={src}
              title="Students work in pairs using Slonig"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Evidence: right bottom */}
          <img
            src="/evidence.png"
            alt="Evidence"
            className="
              pointer-events-none absolute z-20
              right-10 bottom-4 md:right-19 md:bottom-8
              w-24 sm:w-24 md:w-46
              translate-x-1/2 translate-y-1/2
              drop-shadow-md
            "
          />
        </div>
      </div>
    </div>
  );
}