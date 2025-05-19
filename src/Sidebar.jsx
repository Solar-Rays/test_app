import React from 'react'
import metadata from './metadata.js'


function Sidebar (props) {
    return (
        <div>
            <img src="./Assets/Image_1.jpg" alt="Image 1" width="100px"/>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}

export default Sidebar;