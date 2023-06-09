import React, { useState } from "react";
import SearchItem from "./SearchItem";
import './SearchItem.css'
function Search() {
   const [id, setId] = useState('');
	const [data, setData] = useState([]);
	
      const handleSearch = async () => {
			if((id != '') && (id != 0)){
            try {
					const data = await (await fetch(`https://api.punkapi.com/v2/beers/${id}`)).json()
					setData(data)
				} catch (err) {
					console.log(err.message)
				}
			}
			
		}
	
	
	return (
		<div>
			<div className="searching">
			<input className="searching__input" value={id} onChange={e => setId(e.target.value)}  required="required" placeholder="Search for beer..." />
			<button className="searching__btn" type="submit" onClick={handleSearch} >Search</button>
			</div>
			<div>
				{data.map((one) => (
               <SearchItem 
					   key={one.id}
						image={one.image_url}
						name={one.name}
						id={one.id}/>
				))}
			</div>
		</div>
	)
}

export default Search;