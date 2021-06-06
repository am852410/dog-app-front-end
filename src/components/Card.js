export default function Card(props) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={props.image} />
            <span className="card-title">{props.title}</span>
          </div>
          <div className="card-content">
            <p>{props.description}</p>
          </div>
          <div className="card-action">
            <a href="#">More Information</a>
          </div>
        </div>
      </div>
    </div>
  );
}
