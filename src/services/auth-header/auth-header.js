// services/authService.js

import { services } from "../";

export const authHeader = () => {
    // Kullanıcı bilgilerini içeren JSON dosyasını burada kullanın
    const user = services.user.getUser(); // Burada kullanıcı bilgilerini almanız gerekir

    // JSON dosyasında token bilgisini bulun
    const token = user.token;

    let headers = {};

    if (token) {
        headers = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
    }

    return headers;
};

