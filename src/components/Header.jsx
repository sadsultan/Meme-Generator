import logo from '../assets/troll-face.png';
import './Header.css';

export default function Header(){
    return(
        <header>           
            <img src={logo} className='logo' alt="Troll Face" />
            <h1 className='title'>Meme Generator</h1>
            <p className='reference'>React Course - Project 3</p>
        </header>
    )
}