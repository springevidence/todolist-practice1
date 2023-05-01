import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}
const Button = (props: ButtonType) => {
    const onClockHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClockHandler}>{props.name}</button>
        </div>
    );
};

export default Button;