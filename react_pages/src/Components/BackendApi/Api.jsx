const API_URL = 'http://localhost:3001/auth';

export const signUp = async (param) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(param),
        });

        if (!response.ok) {
            throw new Error('Kayıt işlemi başarısız!');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const login = async (parametre) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(parametre),
        });

        if (!response.ok) {
            throw new Error('Giriş işlemi başarısız!');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};