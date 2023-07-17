import styles from './Navbar.module.css';

const NavBarItem = (props) => {
    return (
        <span className={`${styles.navbarItem} ${props.active ? styles.border : ""}`}>
            <i className={`fa ${props.icon}`}></i>
            <span> {props.type}</span>
        </span>
    );
};

export default NavBarItem;
