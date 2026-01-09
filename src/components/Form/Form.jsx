import styles from './Form.module.css';

export const Form = ({ children, ...formProps }) => {
    return (
        <form className={styles.form} {...formProps}>
            {children}
        </form>
    );
};