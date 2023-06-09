import React, { useReducer, useState, useEffect, createContext} from 'react';
import BeerBuilder from './BeerBuilder';
import Context from './Context';
import App from '../App';
import Search from './Searching';
function Home (){

	return(
	   <>
      <BeerBuilder />
		</>
	)
	
}

export default Home;

