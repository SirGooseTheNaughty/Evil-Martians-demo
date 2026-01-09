import { useState } from "react";
import { Input } from "../Input/Input";

import EyeOn from '../../assets/icons/eye-on.svg?react';
import EyeOff from '../../assets/icons/eye-off.svg?react';

import styles from './PasswordInput.module.css';

export const PasswordInput = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.passwordInput}>
            <Input type={visible ? "text" : "password"} {...props} />

            <button
                className={styles.toggle}
                type="button"
                onClick={() => setVisible(!visible)}
                aria-label={visible ? "Hide password" : "Show password"}
            >
                <div aria-hidden="true">{visible ? <EyeOn /> : <EyeOff />}</div>
            </button>
        </div>
    );
}