import NavBarItem from "./NavbarItem";
import styles from './Navbar.module.css';

const NavBarList = [
	{
		"type": "Stays",
		"icon": "fa-bed",
		"active": true
	},
	{
		"type": "Flights",
		"icon": "fa-plane",
		"active": false
	},
	{
		"type": "Car rentals",
		"icon": "fa-car",
		"active": false
	},
	{
		"type": "Attractions",
		"icon": "fa-bed",
		"active": false
	},
	{
		"type": "Airport taxis",
		"icon": "fa-taxi",
		"active": false
	}
];

const NavBar = (props) => {
    const navBarItems = NavBarList.map((item) => {
        return (
            <NavBarItem type={item.type} icon={item.icon} active={item.active} />
        );
    });
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.logoText}>Booking Website</span>
                <button className={styles.button}>Login</button>
                <button className={styles.button}>Register</button>
            </div>
            <div className={styles.menu}>
                {navBarItems}
            </div>
        </div>
    );
};

export default NavBar;