import React from 'react';
import {useState} from "react";
import './Hooks.css';

export function Hooks() {
    const [car, setCar] = useState({
        type : "",
        model : "",
        year : ""
    });
    return (
        <div>
            <h2>Hooks - </h2>
            <div>
                <label className="selectOption">
                    Car : &nbsp;
                    <select value={car.type} onChange={(event) => setCar({...car, type : event.target.value})}>
                        <option value="">Select Car</option>
                        <option value="Car 1">Car 1</option>
                        <option value="Car 2">Car 2</option>
                        <option value="Car 3">Car 3</option>
                        <option value="Car 4">Car 4</option>
                        <option value="Car 5">Car 5</option>
                    </select>
                </label>
                <label className="selectOption">
                    Model : &nbsp;
                    <select value={car.model} onChange={(event) => setCar({...car, model : event.target.value})}>
                        <option value="">Select Model</option>
                        <option value="Mode 1">Model 1</option>
                        <option value="Model 2">Model 2</option>
                        <option value="Model 3">Model 3</option>
                        <option value="Model 4">Model 4</option>
                        <option value="Model 5">Model 5</option>
                    </select>
                </label>
                <label  className="selectOption">
                    Year : &nbsp;
                    <select value={car.year} onChange={(event) => setCar({...car, year : event.target.value})}>
                        <option value="">Select Year</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                    </select>
                </label>
                <br/>
                <label className="hookResult">Result : {car.type} - {car.model}  - {car.year}</label>
                <br/>
                { car.type!=="" && car.model!=="" && car.year!=="" && (<button onClick={() => alert("clicked")}>Submit</button>)}
            </div>
        </div>
    );
}
