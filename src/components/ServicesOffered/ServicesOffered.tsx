import { SectionHeader } from "../SectionHeader";
import styles from "./ServicesOffered.module.css";

export const ServicesOffered = () => {
	return (
		<section>
			<SectionHeader headerText="Services Offered" />
			<div className={styles.imgWrapper}>
				<img
					src="/balance-learning-and-wellbeing/ButterlyLogo.png"
					alt="logo"
					className={styles.img}
				/>
			</div>
			<div className={styles.boxesWrapper}>
				<ul className={styles.ul}>
					<li className={styles.box}>
						<h3>Children</h3>
						<p>
							Sed elit est, venenatis sed convallis ac, consequat in nisi. Sed
							condimentum tortor at massa molestie, at tempus dui vehicula.
							Nulla dapibus orci vehicula augue pellentesque viverra. Aliquam
							erat volutpat. Etiam volutpat facilisis sem, vel gravida justo
							iaculis vel.
						</p>
					</li>
					<li className={styles.box}>
						<h3>Teenagers</h3>
						<p>
							Sed elit est, venenatis sed convallis ac, consequat in nisi. Sed
							condimentum tortor at massa molestie, at tempus dui vehicula.
							Nulla dapibus orci vehicula augue pellentesque viverra. Aliquam
							erat volutpat. Etiam volutpat facilisis sem, vel gravida justo
							iaculis vel.
						</p>
					</li>
					<li className={styles.box}>
						<h3>Adults</h3>
						<p>
							Sed elit est, venenatis sed convallis ac, consequat in nisi. Sed
							condimentum tortor at massa molestie, at tempus dui vehicula.
							Nulla dapibus orci vehicula augue pellentesque viverra. Aliquam
							erat volutpat. Etiam volutpat facilisis sem, vel gravida justo
							iaculis vel.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};
