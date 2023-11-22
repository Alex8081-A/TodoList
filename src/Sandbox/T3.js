import React, {useState} from 'react';

const T3 = () => {

    const [text, setText] = useState('');
    const [checked, setChecked] = useState(true);
    const [value, setValue] = useState('');

    function handleChange(event) {
		setValue(event.target.value);
	}

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={event=> setText(event.target.value)}
            />
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <select value={value} onChange={handleChange}>
			<option>text1</option>
			<option>text2</option>
			<option>text3</option>
			<option>text4</option>
		</select>
        </div>
    );
};

export default T3;