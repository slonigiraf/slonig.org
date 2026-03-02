// LoadingInfo.tsx (Server Component)
type Props = {};

export default function LoadingInfo({}: Props) {
  return (
    <>
      <div className="loading-overlay" aria-label="Loading" role="status">
        <div className="loading-inner">
          {/* Math corners loader (server-safe SVG + pure CSS animation) */}
          <svg className="loading-spinner" viewBox="0 0 24 24" aria-hidden="true">
            {/* corners only (no border) */}
            <text className="c c1" x="6.0" y="8.4" textAnchor="middle">
              +
            </text>
            <text className="c c2" x="18.0" y="8.4" textAnchor="middle">
              ×
            </text>
            <text className="c c3" x="18.0" y="19.6" textAnchor="middle">
              =
            </text>
            <text className="c c4" x="6.0" y="19.6" textAnchor="middle">
              −
            </text>
          </svg>

          <div className="loading-text">Loading</div>
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
          gap:16px;
          color: var(--primary-color);
        }

        .loading-spinner{
          width:70px;
          height:70px;
        }

        /* corner glyph style (bigger) */
        .loading-spinner .c{
          font: 900 12px/1 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          fill: currentColor;
          opacity: 0.22;
          paint-order: stroke;       /* makes text edges crisp if we add stroke later */
        }

        /* animate “active corner” */
        .loading-spinner .c1{ animation: corner 1.2s steps(1,end) infinite; }
        .loading-spinner .c2{ animation: corner 1.2s steps(1,end) infinite; animation-delay: 0.3s; }
        .loading-spinner .c3{ animation: corner 1.2s steps(1,end) infinite; animation-delay: 0.6s; }
        .loading-spinner .c4{ animation: corner 1.2s steps(1,end) infinite; animation-delay: 0.9s; }

        @keyframes corner{
          0%   { opacity: 1; fill: #f19135; }
          24%  { opacity: 1; fill: #f19135; }
          25%  { opacity: 0.22; fill: currentColor; }
          100% { opacity: 0.22; fill: currentColor; }
        }

        .loading-text{
          font-size:20px;
          font-weight:600;
          text-align:center;
          color: var(--primary-color);
        }

        @keyframes loadingHide {
          to {
            opacity:0;
            visibility:hidden;
            pointer-events:none;
          }
        }
      `}</style>
    </>
  );
}