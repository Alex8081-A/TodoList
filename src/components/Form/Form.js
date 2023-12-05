import React, { useRef } from "react";
import FormItem from "../FormItem/FormItem";

const renderItems = (config) => config.map((item, index) => <FormItem {...item} key={index}/>)

const Form = (props) => {

    const ref = useRef(null);

    const serializeForm = (formNode) => {

    const { elements } = formNode
    const data = Array.from(elements)
      .map((element) => {
      const { name, type } = element
      const value = type === 'checkbox' ? element.checked : element.value

      return { name, value }
      })
      .filter((item) => !!item.name)

    console.log(data.reduce((acc, n) => (acc[n.name] = n.value, acc), {}))
    }

    /*const serializeForm = (formNode) => {
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
      }*/
    
    const handleForm = (event) => {
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