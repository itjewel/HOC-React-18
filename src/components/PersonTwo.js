import React, {useState} from 'react'
import HOCPerson from '../HOC/HOCPerson'


const PersonTwo = (children) => {

    return (
        <div>
            <h2>Jewel is offering ${children.money}</h2>
            <button onClick={children.increaseMoney}>Increase Money</button>
        </div>
    )
}

export default HOCPerson(PersonTwo)