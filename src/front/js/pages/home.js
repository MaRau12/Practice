import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PetCard } from "../component/petcard.js";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	
		<div className="container text-center mt-5">
			<input onKeyUp={(e) => {
				if (e.key == "Enter") {
					actions.addNewPet(e.target.value);
				}
			}} />
			<div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
				{store.pets.map((item) => {
					return <PetCard key={item.id} item={item} />
				})}
			</div>
			</div>
	);
};

/*
	<div className="container text-center mt-5">
			<input onKeyUp={(e) => {
				if (e.key == "Enter") {
					actions.addNewPet(e.target.value);
				}
			}} />
</div>
*/	
		