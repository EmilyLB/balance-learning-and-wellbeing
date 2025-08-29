import styles from "./NavBarDesktop.module.css";

export const NavBarDesktop = () => {
	return (
		<div className={styles.navBar}>
			<ul className={styles.ul}>
				<li className={styles.li}>Services</li>
				<li className={styles.li}>About Me</li>
				<li className={styles.li}>Testimonials</li>
				<li className={styles.li}>Fees</li>
				<li className={styles.finalLi}>Contact Me</li>
			</ul>
		</div>
	);
};
