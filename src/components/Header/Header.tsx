
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons/faMoneyBillWave";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css"

const Header = () => {
    return (
        <header className="header_container">
            <FontAwesomeIcon icon={faMoneyBillWave} color ="#7Af1a7" size="2x"/>
            <h2>My Header</h2>
        </header>
    );
};

export default Header;
