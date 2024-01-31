export function Card({ card, onButtonClick }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: card.backgroundColor,
        color: card.color,
      }}
    >
      <div className="card-text-container">
        <h1>{card.title}</h1>
        <div className="card-p">{card.paragraph}</div>
        <button
          onClick={onButtonClick}
          className="round-clear-button"
          style={{
            color: card.color,
            borderColor: card.color,
          }}
        >
          {card.button}
        </button>
      </div>
      <div className="card-image-container">
        <img src={card.imageUrl} alt={card.title} />
      </div>
    </div>
  );
}
