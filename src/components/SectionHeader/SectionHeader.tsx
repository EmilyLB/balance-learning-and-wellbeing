import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
	headerText: string;
};

export const SectionHeader = ({ headerText }: SectionHeaderProps) => {
	return <h2 className={styles.h2}>{headerText}</h2>;
};
