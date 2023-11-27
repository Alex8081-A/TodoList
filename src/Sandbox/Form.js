import React from "react";
import Select from "../components/inputs/Select/Select";
import Text from "../components/inputs/Text/Text";
import Checkbox from "../components/inputs/Checkbox/Checkbox";

<Form config={
    [
        {
            type: 'select',
        },
        {
            type: 'text',
        },
        {
            type: 'checkbox',
        },
    ]
}/>

const Form = (config) => {

    const renderItems = config.map((item) => {
        if(item.type === 'select') return <Select/>
        if(item.type === 'text') return <Text/>
        if(item.type === 'checkbox') return <Checkbox/>
    })

    return ( 
        <form>
            { [...renderItems(config)] }
        </form>
    );
}

export default Form;