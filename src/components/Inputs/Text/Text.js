import React, {useState} from 'react';

const Text = (props) => {

    const [text, setText] = useState(props.defaultValue);

    return (
        <div>
            <input
                required={props.required}
                placeholder={props.placeholder}
                type="text"
                value={text}
                onChange={event=> setText(event.target.value)}
            />
        </div>
    );
};

export default Text;