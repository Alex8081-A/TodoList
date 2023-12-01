import React from "react";
import Form from "../components/Form/Form";

function T4() {
    return (
        <div>
            <Form config={
                [
                    {
                        type: 'select',
                        label: 'test',
                        name: 'select',
                        placeholder: 'Выберите вариант',
                        options: [
                            {
                                label: 'text1',
                                value: '1',
                            },
                            {
                                label: 'text2',
                                value: '2',
                            },
                            {
                                label: 'text3',
                                value: '3',
                            },
                            {
                                label: 'text4',
                                value: '4',
                            },
                        ]
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