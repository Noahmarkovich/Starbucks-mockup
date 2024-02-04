export function DataEditForm({ cardValue, changeInput }) {
  return (
    <div className="card-edit">
      <label>Card title:</label>
      <input
        name="title"
        type="text"
        value={cardValue.title}
        onChange={changeInput}
      />
      <label>Card content:</label>
      <textarea
        name="paragraph"
        value={cardValue.paragraph}
        onChange={changeInput}
      />
      <label>Button label:</label>
      <input
        name="button"
        type="text"
        value={cardValue.button}
        onChange={changeInput}
      />
      <label>Background color:</label>
      <input
        name="backgroundColor"
        type="color"
        value={cardValue.backgroundColor}
        onChange={changeInput}
      />
      <label>Text color:</label>
      <input
        name="color"
        type="color"
        value={cardValue.color}
        onChange={changeInput}
      />
      <label>Image link:</label>
      <input
        name="imageUrl"
        type="text"
        value={cardValue.imageUrl}
        onChange={changeInput}
      />
    </div>
  );
}
