import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const DisplayCharacter = (props) => {
	const [character, setCharacter] = useState({})
	let params = useParams()
	console.log(params.id)
	useEffect(() => {
		axios
			.get(`https://miadil.github.io/starwars-api/api/id/${params.id}.json`)
			.then((res) => console.log(res.data) || setCharacter(res.data))
	}, [])
	return (
		<div>
			je suis sur la page DisplayCharacter
			<p>{character.name}</p>
			<img src={character.image} alt={character.name} />
			<div>{character.eyeColor}</div>
		</div>
	)
}
export default DisplayCharacter
