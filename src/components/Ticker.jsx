export default function Ticker({ items }) {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        <span className="ticker-label">عاجل</span>
        <div className="ticker-track">
          <span className="ticker-text">
            {items.map((t, i) => (
              <span key={i}>{t} &nbsp;&nbsp; • &nbsp;&nbsp;</span>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}
