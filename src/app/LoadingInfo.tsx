// LoadingInfo.tsx (Server Component)
type Props = {};

export default function LoadingInfo({}: Props) {
  return (
    <>
      <div className="loading-overlay" aria-label="Loading" role="status">
        <div className="loading-inner">
          {/* ✅ 2x bigger square (corner spacing doubled) */}
          <svg className="loading-spinner" viewBox="0 0 132 132" aria-hidden="true">
            {/* icon size ≈ 48 (24 * scale 2), margin M=10, opposite origin=74 */}

            {/* Top-left: Calculator */}
            <g className="c c1" transform="translate(10 10) scale(2)">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="16" y1="10" x2="16" y2="10" />
              <line x1="12" y1="10" x2="12" y2="10" />
              <line x1="8" y1="10" x2="8" y2="10" />
              <line x1="16" y1="14" x2="16" y2="14" />
              <line x1="12" y1="14" x2="12" y2="14" />
              <line x1="8" y1="14" x2="8" y2="14" />
              <line x1="16" y1="18" x2="16" y2="18" />
              <line x1="12" y1="18" x2="12" y2="18" />
              <line x1="8" y1="18" x2="8" y2="18" />
            </g>

            {/* Top-right: BookOpen */}
            <g className="c c2" transform="translate(74 10) scale(2)">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </g>

            {/* Bottom-right: Languages */}
            <g className="c c3" transform="translate(74 74) scale(2)">
              <path d="m5 8 6 6" />
              <path d="m4 14 6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="m22 22-5-10-5 10" />
              <path d="M14 18h6" />
            </g>

            {/* Bottom-left: Microscope */}
            <g className="c c4" transform="translate(10 74) scale(2)">
              <path d="M6 18h8" />
              <path d="M3 22h18" />
              <path d="M14 22a7 7 0 1 0 0-14h-1" />
              <path d="M9 14h2" />
              <path d="M9 2h6v6H9z" />
              <path d="M10 8v6" />
            </g>
          </svg>

          <div className="loading-text">Loading…</div>
        </div>
      </div>

      <style>{`
        .loading-overlay{
          position:fixed;
          inset:0;
          z-index:9999;
          display:grid;
          place-items:center;
          background:#fff;
          animation: loadingHide 0s linear 4s forwards;
        }

        .loading-inner{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          gap:18px;
          color: var(--primary-color);
        }

        .loading-spinner{
          width:140px;
          height:140px;
          display:block;
        }

        .loading-spinner .c{
          stroke: currentColor;
          fill: none;
          stroke-width: 2.4;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0.22;
        }

        .loading-spinner .c1{ animation: corner 1.2s steps(1,end) infinite; }
        .loading-spinner .c2{ animation: corner 1.2s steps(1,end) infinite; animation-delay: 0.3s; }
        .loading-spinner .c3{ animation: corner 1.2s steps(1,end) infinite; animation-delay: 0.6s; }
        .loading-spinner .c4{ animation: corner 1.2s steps(1,end) infinite; animation-delay: 0.9s; }

        @keyframes corner{
          0%   { opacity: 1; stroke: #f19135; }
          24%  { opacity: 1; stroke: #f19135; }
          25%  { opacity: 0.22; stroke: currentColor; }
          100% { opacity: 0.22; stroke: currentColor; }
        }

        .loading-text{
          font-size:22px;
          font-weight:600;
          line-height:1.1;
          text-align:center;
          color: var(--primary-color);
          width:100%;
        }

        @keyframes loadingHide {
          to { opacity:0; visibility:hidden; pointer-events:none; }
        }
      `}</style>
    </>
  );
}