import './sidebar.css'
import image1 from './Assets/Image_1.jpg'

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className='profile-container'>
                <img src={image1} alt="profile"/>
                <div className="profile-info"><p>Name: </p><span>{props.name}</span></div>
                <div className="profile-info"><p>Age: </p><span>{props.age}</span></div>
                <div className="profile-info"><p>Gender: </p><span>{props.gender}</span></div>
                <div className="profile-info"><p>Height: </p><span>{props.height}</span></div>
            </div>
            <div></div>
        </div>
    )
}

export default Sidebar;