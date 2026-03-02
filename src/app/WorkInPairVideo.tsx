type Props = {};

export default function WorkInPairVideo({}: Props) {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, var(--primary-color) 0 70%, transparent 70% 100%)`,
        }}
      />

      {/* keep margins on iPad too */}
      <div className="px-10 sm:px-0 md:px-10">
        <div className="relative w-full max-w-4xl mx-auto aspect-video isolate">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/work_in_pair.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Students work in pairs using Slonig"
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