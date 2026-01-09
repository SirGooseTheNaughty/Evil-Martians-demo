import styles from './Button.module.css';

export const Button = ({ children, isLoading, ...buttonProps }) => {
    return (
        <button className={`${styles.button} ${isLoading ? styles.loading : ''}`} {...buttonProps}>
            {children}
        </button>
    );
}