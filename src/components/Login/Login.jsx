import { useState, useRef } from 'react';
import { Form } from '../Form/Form';
import { InputGroup } from '../InputGroup/InputGroup';
import { Input } from '../Input/Input';
import { ToggledMessage } from '../ToggledMessage/ToggledMessage';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { Button } from '../Button/Button';
import { authApi } from '../../api/auth';

import styles from './Login.module.css';

export const Login = ({ onLogin = () => alert('logged in') }) => {
    const formRef = useRef(null);
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onInputChange = () => {
        if (error) {
            setError(null);
        }

        setIsValid(formRef.current.checkValidity());
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        
        const email = data.get('email');
        const password = data.get('password');

        if (!email || !password) {
            setError('Please fill in all required fields.');
            return;
        }

        setIsLoading(true);
        setError(null);

        authApi.login(email, password)
            .then(() => {
                onLogin();
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <Form onSubmit={onSubmit} ref={formRef}>
            <h2 className={styles.title}>Log into your account</h2>

            <InputGroup>
                <label htmlFor="email">Email</label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="example@gmail.com"
                    required
                    onChange={onInputChange}
                />
            </InputGroup>

            <InputGroup>
                <label htmlFor="password">Password</label>
                <PasswordInput
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    onChange={onInputChange}
                />
            </InputGroup>

            <div className={styles.forgotPassword}>
                <a href="#">Forgot password?</a>
            </div>

            <ToggledMessage className={styles.errorMessage} message={error} />

            <Button type="submit" disabled={isLoading || !isValid || !!error} isLoading={isLoading}>
                {isLoading ? 'Logging in' : 'Log In'}
            </Button>
        </Form>
    )
};
