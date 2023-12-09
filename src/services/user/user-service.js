// user-service.js

import userData from '../../data/user.json';

const getUserByUsernameAndPassword = (users, email, password) => {
  // Kullanıcı adı ve şifre ile eşleşen bir kullanıcıyı ara
  const user = users.find(u => u.email === email && u.password === password);

  return user ? { user, token: user.token } : null; // Kullanıcı bulunamazsa null döndür
};

export { getUserByUsernameAndPassword };



