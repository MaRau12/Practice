const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			pets: [ {id:1, name: "Frida", age: 2}, 
				    {id:2, name: "Franz", age: 3}, 
				    {id:3, name: "Fred", age: 5},
				
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			addNewPet: (name) => {
				const pets = getStore().pets;

				let higherId = 0;
				for (let x = 0; x < pets.length; x++) {
					if (pets[x].id > higherId) {
						higherId = pets[x].id;
					}
				}
				let newPet = { id: higherId + 1, name: name }
				setStore({ pets: [...pets, newPet] })
		}

	}
	};
};


export default getState;
