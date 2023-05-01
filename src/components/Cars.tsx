import React from 'react';

export type CarsPropsType = {
    data: Array<CarsType>
}

export type CarsType = {
    manufacturer: string
    model: string
}
const Cars = (props: CarsPropsType) => {
    return (
        <tbody>
            {props.data.map((elem, i) => {
                return (
                    <tr>
                        <th key={i+1}>{elem.manufacturer} </th>
                        <th key={i}>{elem.model} </th>
                    </tr>
                )
            })}
        </tbody>
    );
};

export default Cars;