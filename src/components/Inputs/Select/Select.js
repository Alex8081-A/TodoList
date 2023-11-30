import React, {useState} from 'react';

const Select = (props) => {

    const [value, setValue] = useState(props.defaultValue);

    function handleChange(event) {
		setValue(event.target.value);
	}

    return (
        <div>
            <select value={value} onChange={handleChange} name={props.name} placeholder={props.placeholder}>
            <option value="" disabled selected>Select your option</option>    
			<option>text1</option>
			<option>text2</option>
			<option>text3</option>
			<option>text4</option>
		</select>
        </div>
    );
};

export default Select;