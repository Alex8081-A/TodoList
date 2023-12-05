import React, {useState} from 'react';

const Select = (props) => {

    const [value, setValue] = useState(props.placeholder);

    const handleChange = (event) => {
		setValue(event.target.value);
	}

    const Option = (props) => {

        return <option value={props.value}>{props.label}</option>
    }

    const arr = props.options
    const arr1 =  arr.map((elem, index) => {
        return (
            <Option label={elem.label} value={elem.value} key={index}/>
        ) 
    })

    return (
        <div>
            <select value={value} onChange={handleChange} name={props.name} placeholder={props.placeholder}>
            <option disabled hidden>{props.placeholder}</option>
            {arr1}
		    </select>
        </div>
    );
};

export default Select;