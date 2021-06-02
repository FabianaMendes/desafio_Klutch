import './style.css';
import { ReactComponent as Logo } from '../../assets/KlutchLogo.svg';
import MenuIcon from "../../assets/hamburguer.svg";
import AddIcon from "../../assets/addIcon.svg";
import Archive from "../../assets/filing1.svg";
import { Link } from 'react-router-dom';

type Props = {
    title: String;
}

export default function Navbar({title}: Props) {
    return(
        <div className="navbar">
            <nav className="menu-superior">
                <Link to="/">
                    <img src={MenuIcon} alt="hamburguer.svg"/>
                </Link>
                <Logo className="logo"/>
            </nav>
            <div className="title">
                <img src={AddIcon} alt="addIcon.svg" id="img1"/>
                <img src={Archive} alt="archieve.svg" />
                <h1>{title}</h1>
            </div>
        </div>
    );
}