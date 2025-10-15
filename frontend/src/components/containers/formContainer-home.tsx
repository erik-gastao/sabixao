import React from "react";
import styles from "./formContainer-home.module.css";  // Note the ./ instead of .

interface FormContainerHomeProps {
    children: React.ReactNode;
}

const FormContainerHome: React.FC<FormContainerHomeProps> = ({ children }) => {
    return <div className={styles.formContainer}>{children}</div>;
};

export default FormContainerHome;
