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
                        defaultValue: 'text3',
                    },
                    {
                        type: 'text',
                        label: 'test',
                        defaultValue: 'something',
                        placeholder: 'somethinggg',
                        required: 'required',
                    },
                    {
                        type: 'checkbox',
                        label: 'test',
                        defaultValue: false,
                    },
                
            ]}/>
        </div>
    );
}

export default T4;