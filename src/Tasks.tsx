import React from 'react';
import {dataType} from "./App";

type TasksPropsType = {
    data: dataType
}
function Tasks(props: TasksPropsType) {
    return (
        <div>
            <h1>Список студентов:</h1>
            <div>{props.data.students}</div>
        </div>
    );
}

export default Tasks;