import React, {useState} from 'react';

const Checkbox = () => {

    const [checked, setChecked] = useState(true);

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        </div>
    );
};

export default Checkbox;