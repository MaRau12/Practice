const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pets: [],
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
        let newPet = { id: higherId + 1, name: name };
        setStore({ pets: [...pets, newPet] });
      },

      getAllPets: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/pets");
        const data = await response.json();
        setStore({ pets: data.pets });
      },
    },
  };
};

export default getState;
