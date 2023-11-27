import React from "react";
import Form from "./Form";

function T4() {
    return (
        <div>
            <Form config={
                [
                    {
                        type: 'select',
                        label: 'test',
                    },
                    {
                        type: 'text',
                        label: 'test',
                        defaultValue: 'something',
                        placeholder: 'Что-то',
                    },
                    {
                        type: 'checkbox',
                    },
                
            ]}/>
        </div>
    );
}

export default T4;