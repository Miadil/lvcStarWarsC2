import { Routes, Route } from "react-router-dom"

import Home from "./screens/Home"
import Characters from "./screens/Characters"
import DisplayCharacter from "./screens/DisplayCharacter"
import Header from "./components/Header"

import "./App.css"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="characters/:id" element={<DisplayCharacter />} />
			</Routes>
		</div>
	)
}

export default App
