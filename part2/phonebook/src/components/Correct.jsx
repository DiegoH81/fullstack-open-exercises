import { useEffect, useState } from 'react'
import '../style.css'

const Correct = (props) => {
    if (props.content === null)
        return nulll;
    else
        return (
            <div className='correct'>
                {props.content}
            </div>
        )
}



export default Correct