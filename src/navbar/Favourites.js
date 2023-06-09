import React, { useContext } from 'react';
import '../navbar/Favourites.css';
import { BeerContext } from '../App';
import { useState } from 'react';



const Favourites = () => { 
	const { mix } = useContext(BeerContext); 
	const [copy, setCopy] = useState(mix);
	
   const handleDelete = (id) => {
      const list = copy.filter((l, index) => index !== id);
		setCopy(list);
	}
	return ( 
	      <>
			<div className='favourites'>
			   <ul className='favourites__items'>
			      {copy.map((obj, index) => (
			         <li key={index}>
				         <div className='favourites__name'>{obj.name}</div>
				         <div className='favourites__img'><img src={obj.image} alt=''></img></div>
							<div><MyButton /></div>
				         <button className='favourites__remove' onClick={() => handleDelete(index)}>Remove</button>
			         </li>))}
			   </ul>
		   </div>
		</>
	)
	
}



export function MyButton() {
	let [count, setCount] = useState(1);
   if(count <=0){
   return setCount(1);
	}
	function addBeer() {
	  setCount(count + 1);
	}
   function extractBeer(){
		setCount(count - 1);
	}
	return (
		<>
		<div className='favourites__quantity'>Quantity: {count}</div>
	  <button className='favourites__more' onClick={addBeer}>
		 More
	  </button>
	  <button className='favourites__less' onClick={extractBeer}>
		 Less
	  </button>
	  </>
	);
 }


export default Favourites;
