import React from "react";
import Select from "../components/Inputs/Select/Select";
import Text from "../components/Inputs/Text/Text";
import Checkbox from "../components/Inputs/Checkbox/Checkbox";
/*import Button from "../components/Inputs/Button/Button";*/

const FormItem = (props) => {

    const Wrapper = (props) => {
        return <div>
            {props.label ? <p>{props.label}</p> : undefined}
            {props.children}
        </div>
    }

    if(props.type === 'select') return <Wrapper {...props}><Select defaultValue ={props.defaultValue} name={props.name}/></Wrapper>
    if(props.type === 'text') return <Wrapper {...props}><Text defaultValue ={props.defaultValue} placeholder={props.placeholder} required={props.required} name={props.name}/></Wrapper>
    if(props.type === 'checkbox') return <Wrapper {...props}><Checkbox defaultValue ={props.defaultValue} name={props.name}/></Wrapper>
    return undefined
}

const renderItems = (config) => config.map((item) => <FormItem {...item}/>)

const Form = (props) => {
    
    

    /*function showForm() {
        const form = document.getElementById('form');
        console.log(form);
    }*/
    
    function serializeForm(formNode) {
        const { elements } = formNode

  Array.from(elements)
    .forEach((element) => {
      const { name } = element
      console.log({ name })
    })
          }
      
        
    function handleForm(event) {
            event.preventDefault()
            serializeForm(applicantForm)
        }

        const applicantForm = document.getElementById('form')
      

    return ( 
        <form id="form">
            { [...renderItems(props.config)] }
            <input 
                type='button'
                value='Отправить'
                onClick={handleForm}/>
        </form>
    );
}

export default Form;