import React, {useEffect, useState} from 'react';
import './Hooks.css';

export function Hooks() {
    const [car, setCar] = useState({
        Brand: "",
        Model: "",
        Year: ""
    });

    const getSelectOptions = ((property) =>
            <select value={car[property]} onChange={(event) => setCar({...car, [property]: event.target.value})}>
                <option value="">--Select--</option>
                <option value={property + " 1"}>{property + " 1"}</option>
                <option value={property + " 2"}>{property + " 2"}</option>
                <option value={property + " 3"}>{property + " 3"}</option>
                <option value={property + " 4"}>{property + " 4"}</option>
                <option value={property + " 5"}>{property + " 5"}</option>
            </select>
    );

    var message = "";
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        message = "This car is available in dealership near you : \n" + car.Brand + " - " + car.Model + " - " + car.Year;
    }, [car]);

    let submitButton = car.Brand !== "" && car.Model !== "" && car.Year !== "" &&
        (<>
            <br/>
            <br/>
            <button onClick={() => alert(message)}>Submit</button>
        </>);

    const result = car.Brand !== "" && car.Model !== "" && car.Year !== "" &&
        (<>
            <br/><br/>
            <label className="hookResult">
                Result : {car.Brand} - {car.Model} - {car.Year}
            </label>
        </>);

    return (
        <div>
            <h2>Hooks - </h2>
            <div>
                <label className="selectOption">
                    Car : &nbsp;
                    {getSelectOptions("Brand")}
                </label>
                <label className="selectOption">
                    Model : &nbsp;
                    {getSelectOptions("Model")}
                </label>
                <label className="selectOption">
                    Year : &nbsp;
                    {getSelectOptions("Year")}
                </label>
                {result}
                {submitButton}
            </div>
        </div>
    );
}
