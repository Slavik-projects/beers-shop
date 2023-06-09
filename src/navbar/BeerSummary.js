import React, { useReducer, createContext } from "react";
//import BeerItem from '../navbar/BeerItem.js';
import BeerBuilder from "./BeerBuilder";


export default function BeerSummary(){
   return (
		<div className="wrapper">
      <h2>You selected</h2>
      <BeerBuilder />
	   </div>
	)
}