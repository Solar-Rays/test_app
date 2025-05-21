import './sidebar.css'
import image1 from './Assets/Image_1.jpg'
import image3 from './Assets/Image_3.jpg'

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className='profile-container'>
                <img src={image3} alt="profile"/>
                <div className="profile-info"><p>Name: </p><span>{props.name}</span></div>
                <div className="profile-info"><p>Age: </p><span>{props.age}</span></div>
                <div className="profile-info"><p>Gender: </p><span>{props.gender}</span></div>
                <div className="profile-info"><p>Height: </p><span>{props.height}</span></div>
            </div>
        </div>
    )
}

export default Sidebar;