import React, { useState } from 'react'
import './MainContent.css'
import image2 from './Assets/Image_2.jpg'
import image3 from './Assets/Image_3.jpg'

function MainContent() {

    var [defaultImage, setImage] = useState(false)

    function changeImage () {
        setImage(defaultImage = !defaultImage);
    }

    return (
        <div className="content-container">
            <h1>About Me</h1>
            <div className='main-info'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero consequatur sit reprehenderit impedit vel deleniti aperiam quia eveniet voluptas. Aliquam omnis nam veritatis similique. Fuga a dicta inventore necessitatibus?</p>
                <img src={defaultImage ? image2 : image3} alt="" width="100px" />
            </div>
            <p onClick={changeImage} className="change-btn">Change Image</p>
        </div>
    )
}

export default MainContent;