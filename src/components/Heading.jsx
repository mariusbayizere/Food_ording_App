import { IMG_LOGO } from "../utils/images_path";
const Heading = () => {
    return (<div className='heading'>
        <div className='logo-container'>
            <img  className='logo' src={IMG_LOGO}></img>
        </div>

        <div className='nav-item'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>

            </ul>
        </div>
    </div>)
}

export default Heading;