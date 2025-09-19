import { useState } from "react";
import { SectionHeader } from "../SectionHeader";
import styles from "./Testimonial.module.css";

const sampleSlides = [
	{
		title: "Testimonial 1",
		body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
	},
	{
		title: "Testimonial 2",
		body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
	},
	{
		title: "Testimonial 3",
		body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
	},
	{
		title: "Testimonial 4",
		body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
	},
];

export const Testimonials = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleForwardButtonClick = () => {
		if (slideIndex >= sampleSlides.length - 1) {
			setSlideIndex(0);
		} else {
			setSlideIndex((slideIndex) => slideIndex + 1);
		}
	};

	const handleBackwardButtonClick = () => {
		if (slideIndex <= 0) {
			setSlideIndex(sampleSlides.length - 1);
		} else {
			setSlideIndex((slideIndex) => slideIndex - 1);
		}
	};

	return (
		<section>
			<SectionHeader headerText="Testimonials" />
			<ul className={styles.slidesList}>
				<p className={styles.slidesText}>"{sampleSlides[slideIndex].body}"</p>
				<p>-{sampleSlides[slideIndex].title}</p>
			</ul>
			<div className={styles.slidesButtonsWrapper}>
				<button
					type="button"
					onClick={handleBackwardButtonClick}
					className={styles.slidesButtons}
				>
					{"<"}
				</button>
				<button
					type="button"
					onClick={handleForwardButtonClick}
					className={styles.slidesButtons}
				>
					{">"}
				</button>
			</div>
		</section>
	);
};
