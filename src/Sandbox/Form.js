import React, { useRef } from "react";
import Select from "../components/Inputs/Select/Select";
import Text from "../components/Inputs/Text/Text";
import Checkbox from "../components/Inputs/Checkbox/Checkbox";

const FormItem = (props) => {


    let formInput; 
    if(props.type === 'select') formInput = <Select defaultValue ={props.defaultValue} name={props.name} placeholder={props.placeholder}/>
    if(props.type === 'text') formInput = <Text defaultValue ={props.defaultValue} placeholder={props.placeholder} required={props.required} name={props.name}/>
    if(props.type === 'checkbox') formInput = <Checkbox defaultValue ={props.defaultValue} name={props.name}/>

    return (
        <div style={{border: '1px solid black', padding: '20px'}}>
            {props.label ? <label>{props.label}</label> : undefined}
            {formInput}
        </div>
    )
}

const renderItems = (config) => config.map((item) => <FormItem {...item}/>)

const Form = (props) => {

    const ref = useRef(null);

    function serializeForm(formNode) {
        const { elements } = formNode
      
        const data = new FormData()
      
        Array.from(elements)
          .filter((item) => !!item.name)
          .forEach((element) => {
            const { name, type } = element
            const value = type === 'checkbox' ? element.checked : element.value
      
            data.append(name, value)
          })
          console.log(Object.fromEntries(data.entries()))
        return data
      }
    
    function handleForm(event) {
            event.preventDefault()
            serializeForm(ref.current)
        }

    return ( 
        <form id="form" ref={ref} onSubmit={handleForm}>
            { [...renderItems(props.config)] }
            <button type="submit">Отправить</button>
        </form>
    );
}

export default Form;