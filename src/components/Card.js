import "./Card.css"
import { Link } from "react-router-dom"

const Card = ({ image, name, id, setDeleteChara }) => {
	const urlId = `/characters/${id}`
	return (
		<div className="cardGlobal">
			<Link to={urlId}>
				<div>
					<img className="CardPhoto" src={image} alt={name} />
					<p className="nameText">{name}</p>
				</div>
			</Link>
			<input type="button" value="X" onClick={() => setDeleteChara(id)} />
		</div>
	)
}
export default Card
