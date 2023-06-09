import React, { useReducer } from "react";
import Favourites from "./Favourites";
import Home, { BeerContext } from "./Home";
import { useContext } from "react";

function reducer(state, item) {
	return [...state, item]
}

export default function Context(){
	const [mix, setMix] = useReducer(reducer, []);
	console.log(mix)
	return(
		<>
		<Home />
		<Favourites />
		</>
	)
}