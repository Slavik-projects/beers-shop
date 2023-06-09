import React, { useContext, useState } from "react";
import PropTypes from 'prop-types';
import { BeerContext } from "../App";
import './SearchItem.css'

export default function SearchItem({ image, name, id }) {
	const { setMix } = useContext(BeerContext);
	function updating() {
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
		<div className="searched">
			<div className="searched__cnt">
			<h3 className="searched__name">
				{name}
			</h3>
				<div className="searched__img">
					<img src={image} alt='OOOPS'/>
				</div>
				<span onClick={handleClick} style={{ fontSize: '150%', cursor: 'pointer', color: active ? "yellow" : "orange" }} className="stars">★</span>
				<button onClick={updating} className="searched__btn" type="submit">Add item</button>
			</div>
		</div>
	)
}

SearchItem.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}