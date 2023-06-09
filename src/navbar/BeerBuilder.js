import React, {  useEffect, useState } from "react";
import BeerItem from "./BeerItem";
import Search from "./Searching";
import './BeersBuilder.css';


export default function BeerBuilder() {

	const [items, setItems] = useState([]);
   
	const fetchData = () => {
		fetch("https://api.punkapi.com/v2/beers?page=2&per_page=6")
		.then(response => {
			return response.json()
		})
		.then(data => {
			setItems(data)
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

   

	return(
		
      <div className='items'>
			   <Search />
			{items.length > 0 && (
				<div className='items__cnt'>
					{items.map((item) => (
						<BeerItem
						key={item.id}
						image={item.image_url}
						name={item.name}
						id={item.id}
						/>
					))}
				</div>
			)}
		</div>
		
	)
}