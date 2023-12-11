// user-service.js
const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

export const createUser = async (newUser) => {
  try {
    const response = await fetch(USERS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const createdUser = await response.json();
    console.log('Kullanıcı başarıyla oluşturuldu:', createdUser);

    return createdUser;
  } catch (error) {
    console.error('Kullanıcı oluşturulurken bir hata oluştu:', error);
    throw error;
  }
};

// Diğer CRUD işlemlerini eklemek isterseniz aşağıdaki gibi devam edebilirsiniz

export const getUsers = async () => {
  try {
    const response = await fetch(USERS_API_URL);
    const users = await response.json();
    console.log('Kullanıcılar başarıyla getirildi:', users);

    return users;
  } catch (error) {
    console.error('Kullanıcı bilgileri alınırken bir hata oluştu:', error);
    throw error;
  }
};

export const updateUser = async (userId, updatedData) => {
  try {
    const response = await fetch(`${USERS_API_URL}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    const updatedUser = await response.json();
    console.log('Kullanıcı başarıyla güncellendi:', updatedUser);

    return updatedUser;
  } catch (error) {
    console.error('Kullanıcı güncellenirken bir hata oluştu:', error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${USERS_API_URL}/${userId}`, {
      method: 'DELETE',
    });

    console.log('Kullanıcı başarıyla silindi.');

    // Silinen kullanıcının bilgilerini döndürmek istiyorsanız, response.json() kullanabilirsiniz.
  } catch (error) {
    console.error('Kullanıcı silinirken bir hata oluştu:', error);
    throw error;
  }
};






