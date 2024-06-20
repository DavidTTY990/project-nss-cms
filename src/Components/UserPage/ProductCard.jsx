export default function ProductCard() {
  return (
    <div className="col">
      <div
        className="card h-100"
        data-bs-target="#exampleModal"
        data-bs-toggle="modal"
      >
        <img
          src="http://fakeimg.pl/300x300/"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>
    </div>
  );
}
