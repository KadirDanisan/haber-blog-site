const API_URL = 'http://localhost:3001';

export const signUp = async (param) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
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
        const response = await fetch(`${API_URL}/auth/login`, {
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

export const getCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            // Durum koduna göre hata mesajları
            if (response.status === 404) {
                throw new Error('Kategori bulunamadı!');
            } else {
                throw new Error('Kategori listeleme işlemi başarısız!');
            }
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Hatası:', error.message);
        throw error;
    }
};

export const getCategory = async (id) => {
    try {
      const response = await fetch(`${API_URL}/categories/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Kategori detayı alınamadı!');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  