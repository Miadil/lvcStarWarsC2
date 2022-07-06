import { useState, useEffect } from "react"
import axios from "axios"

import Card from "../components/Card"

import "./Characters.css"

const Characters = (props) => {
	const [characters, setCharacters] = useState([])
	const [deleteChara, setDeleteChara] = useState("")

	const getData = async () => {
		// const result = await axios.get(
		// 	"https://miadil.github.io/starwars-api/api/all.json"
		// )
		// setCharacters(result.data)
		axios
			.get("https://miadil.github.io/starwars-api/api/all.json")
			.then((res) => setCharacters(res.data))
	}
	useEffect(() => {
		getData()
	}, [])

	useEffect(() => {
		setCharacters(
			characters.filter((character) => {
				return character.id !== deleteChara
			})
		)
	}, [deleteChara])

	return (
		<div className="globalCharact">
			{characters.map((character) => {
				return (
					<Card
						key={character.id}
						id={character.id}
						name={character.name}
						image={character.image}
						setDeleteChara={setDeleteChara}
					/>
				)
			})}
		</div>
	)
}
export default Characters
