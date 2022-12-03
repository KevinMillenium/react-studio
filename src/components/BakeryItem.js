// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
	return (
      <div className="bakery-item">
        <img className="image" src={props.item.image}></img>
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
        <p>{props.item.price}</p>
        <img>{props.item.image}</img>
      </div>
    );
}
