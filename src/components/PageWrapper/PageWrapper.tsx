import type { ReactNode } from "react";
import styles from "./PageWrapper.module.css";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
