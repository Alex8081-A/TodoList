import React, {useState} from 'react';

const Select = (props) => {

    const [value, setValue] = useState(props.placeholder);

    function handleChange(event) {
		setValue(event.target.value);
	}

    return (
        <div>
            <select value={value} onChange={handleChange} name={props.name} placeholder={props.placeholder} options={props.options} label={props.label}>
            <option disabled hidden>{props.placeholder}</option>
			<option>{props.options[0].label}</option>
			<option>{props.options[1].label}</option>
			<option>{props.options[2].label}</option>
			<option>{props.options[3].label}</option>
		</select>
        </div>
    );
};

export default Select;