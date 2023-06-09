import React, { useContext, useState } from "react";

import PropTypes from 'prop-types';
import './BeerItem.css'
import { BeerContext } from "../App";


export default function BeerItem({ image, name, id }) {

   const { setMix } = useContext(BeerContext);
   
	function update() {
		setMix({
		name,
		image,
		id
		});
		
	}

	const [active, setActive] = useState(false);
	const handleClick = () => {
		setActive(!active);
	 };

   return (
		<div className="wrapper">
			<div className="wrapper__cnt" >
			<h3 className="beer__name">
				{name}
			</h3>
				<div className="beer__img">
					<img src={image} alt='OOOPS'/>
				</div>
				<span onClick={handleClick} style={{ cursor: "pointer", fontSize: '150%', color: active ? "orange" : "yellow" }} className="star">★</span>
				<button onClick={update} className="beer__btn" type="submit">Add item</button>
			</div>
		</div>
	)
}

BeerItem.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}