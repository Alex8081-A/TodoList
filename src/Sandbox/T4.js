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
                        /*defaultValue: 'text3',*/
                        name: 'select',
                    },
                    {
                        type: 'text',
                        label: 'test',
                        defaultValue: 'something',
                        placeholder : 'somethinggg',
                        required: 'required',
                        name: 'text',
                    },
                    {
                        type: 'checkbox',
                        label: 'test',
                        defaultValue: false,
                        name: 'checkbox',
                    },
                
            ]}/>
        </div>
    );
}

export default T4;