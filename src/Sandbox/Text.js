import React, {useState} from 'react';

const Text = () => {

    const [text, setText] = useState('');

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={event=> setText(event.target.value)}
            />
        </div>
    );
};

export default Text;