import React, {useState} from 'react';

const Checkbox = (props) => {

    const [checked, setChecked] = useState(props.defaultValue);

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        </div>
    );
};

export default Checkbox;