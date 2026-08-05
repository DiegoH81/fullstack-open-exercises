import { useState } from 'react'
import Input from './Input'


const Form = (props) => {
    return (
        <form>
            <Input text = "name" handler = {props.handlerName} />
            <Input text = "phone" handler = {props.handlerPhone} />

            <div>
            <button type="submit" onClick={props.onClick}>add</button>
            </div>
        </form>
    )
}

export default Form