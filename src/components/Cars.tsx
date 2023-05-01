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
                        <th>{elem.manufacturer} </th>
                        <th>{elem.model} </th>
                    </tr>
                )
            })}
        </tbody>
    );
};

export default Cars;