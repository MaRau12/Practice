import React, { useState } from "react";

export const PetCard = ({ item }) => {
    
    return <div className="col">
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Age: {item.age}</p>
            </div>

        </div>
    </div>
};

/*
{item, deletePet, editPet }
const [petToBeEdited, setPetToBeEdited] = useState(item);

            {deletePet ? <div className="card-footer">
                <button className="btn btn-danger" onClick={() => deletePet()}>X</button>
                <button className="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target={"#editPet" + item.id} >Edit</button>
                <div className="modal fade" id={"editPet" + item.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Edit pet</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input value={petToBeEdited.name} placeholder="Pet name" onChange={(e) => setPetToBeEdited({ ...petToBeEdited, name: e.target.value })}></input>
                                <input type="number" value={petToBeEdited.age} placeholder="Pet age" onChange={(e) => setPetToBeEdited({ ...petToBeEdited, age: parseInt(e.target.value) })}></input>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success" onClick={() => {
                                    if (petToBeEdited.name && petToBeEdited.age) { editPet(petToBeEdited) }
                                }}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null}
            */