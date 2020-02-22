import React from 'react';
import {useState} from "react";

export function StateHook() {
    const [car, setCar] = useState("Hyundai");
    const [model, setModel] = useState("Model 2");
    const [year, setYear] = useState("2019");
    return (
        <div>
            <h2>State Hook - </h2>
            <div>
                {car} - {model}  - {year}
            </div>
            <br/>
            <div>
                <label>Car : </label>
                <select value={car} onChange={(event) => setCar(event.target.value)}>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Ford">Ford</option>
                    <option value="GM">GM</option>
                </select><br/>
                <label>Model : </label>
                <select value={model} onChange={(event) => setModel(event.target.value)}>
                    <option value="Mode 1">Model 1</option>
                    <option value="Model 2">Model 2</option>
                    <option value="Model 3">Model 3</option>
                </select><br/>
                <label>Year : </label>
                <select value={year} onChange={(event) => setYear(event.target.value)}>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}
