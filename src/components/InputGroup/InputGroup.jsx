import { useState, useRef, useEffect } from "react";
import { ToggledMessage } from '../ToggledMessage/ToggledMessage';

import styles from './InputGroup.module.css';

export const InputGroup = ({ children }) => {
    const groupRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const input = groupRef.current.querySelector('input');

        const checkValidity = () => {
            setError(input.validationMessage || null);
        };

        input.addEventListener('blur', checkValidity);

        return () => input.removeEventListener('blur', checkValidity);
    }, []);

    return (
        <div className={styles.inputGroup} ref={groupRef}>
            {children}
            <ToggledMessage className={styles.errorMessage} message={error} />
        </div>
    );
};
