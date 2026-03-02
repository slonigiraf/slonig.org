// LoadingInfo.tsx (Server Component)

type Props = {};

export default function LoadingInfo({}: Props) {
  return (
    <>
      <div className="loading-overlay" aria-label="Loading" role="status">
        <div className="loading-inner">
          {/* Spinner (SVG, server-safe) */}
          <svg
            className="loading-spinner"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              opacity="0.2"
            />
            <path
              d="M21 12a9 9 0 0 0-9-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
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
          gap:16px;
          color: var(--primary-color);
        }
        .loading-spinner{
          width:70px;
          height:70px;
          animation: spin 1s linear infinite;
        }
        .loading-text{
          font-size:20px;
          font-weight:600;
          text-align:center;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* after 3s: make it non-interactive + invisible */
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