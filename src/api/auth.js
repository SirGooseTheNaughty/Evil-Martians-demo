class AuthApi {
    login(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'valid@email.com') {
                    resolve({ success: true });
                } else {
                    reject(new Error('Invalid email or password'));
                }
            }, 1000);
        });
    }
}

export const authApi = new AuthApi();
