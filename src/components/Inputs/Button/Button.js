import React from "react";

const Button = (props) => {

    return (
        <div>
            <input
                type='button'
                value='Отправить'
                onClick={() => console.log('')}
            />
        </div>
    );
};

export default Button;