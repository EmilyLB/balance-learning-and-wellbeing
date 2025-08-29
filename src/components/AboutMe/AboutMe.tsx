import styles from "./AboutMe.module.css";

export const AboutMe = () => {
	return (
		<section>
			<h2 className={styles.h2}>About Me</h2>
			<div className={styles.wrapper}>
				<img
					src="../../../public/Profile Picture.JPG"
					alt="profile"
					className={styles.image}
				/>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nibh
					eu nibh imperdiet venenatis at ornare augue. Aenean sed orci vel
					libero convallis tempus. Maecenas a venenatis metus, sed blandit sem.
					Nam quis sollicitudin ex. Donec vel ligula ornare, placerat metus vel,
					sollicitudin ipsum.
				</p>
			</div>
			<p className={styles.text}>
				Morbi a vulputate sem. Aliquam commodo in ex a gravida. Aenean consequat
				efficitur nisl, at tincidunt mauris volutpat sed. Aliquam ut aliquet
				elit, sit amet fermentum lectus. Praesent in ipsum vestibulum, dapibus
				sapien eu, pellentesque neque. In diam ex, gravida sagittis convallis
				cursus, placerat in nunc. Etiam ac purus tincidunt, facilisis diam sed,
				vestibulum sem. Donec efficitur diam diam, at porta enim lobortis eu.
				Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
				cubilia curae; Maecenas tempus tempus ultrices.
			</p>
		</section>
	);
};
