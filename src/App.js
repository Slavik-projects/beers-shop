import { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './navbar/Home.js';
import Favourites from './navbar/Favourites.js';
import Navbar from './navbar/Navbar.js';
import { createContext } from 'react';

export const BeerContext = createContext();

function reducer(state, item) {
	return [...state, item]
}
console.log(reducer)

function App(){
	const [mix, setMix] = useReducer(reducer, []);
	
	return (
		<BeerContext.Provider value={{ mix, setMix }}>
		<Router>
			<div className='App'>
			<Navbar  />
			<Routes>
				<Route exact path='/' element={< Home  />}></Route>
				<Route exact path='/favourites' element={< Favourites />}></Route>
			</Routes>
			</div>
		</Router>
		</BeerContext.Provider>
	   )
}

export default App;
