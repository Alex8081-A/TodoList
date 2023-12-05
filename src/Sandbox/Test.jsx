import React, {useEffect, useState} from 'react';

const Square = (props) => {

    return (
        <div style={{background: props.color ?? 'pink', height: '100px', width: '200px'}}>
            {props.text}
        </div>
    )
}
const Test = (props) => {

    const [test, setTest] = useState(0);
    const [test2, setTest2] = useState(0);
    const arr = [{color: 'red', text: 'Hello' }, {color: 'green', text: 'World'}, {color: 'blue', text: 'asdas'}];
    const arr2 = [<Square text={'Hello'}/>, <Square text={'World'}/>]
    const arr3 = arr.map((elem, index) => {
        return <Square text={elem.text} color={elem.color} key={index}/>
    })
    useEffect(() =>
        {

            console.log('Test = ', test )
        }, [])

    return (
        <div>
            {/* <Square text={'Hello1'} color={'green'}/> */}
            {/* <Square text={'World'} color={'blue'}/> */}
            {/* <Square text={'asdad'} /> */}
            {arr3}
            {test}
            {test2}
            <button onClick={() => {setTest(test + 1)}}>+++</button>
            <button onClick={() => {setTest2(test2 + 1)}}>+++2</button>
        </div>
    );
};

export default Test;