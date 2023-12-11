const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5173;

app.use(express.json());

// JWT Secret Key
const secretKey = 'your-secret-key';

// Örnek kullanıcı verisi
const users = [
  { id: 1, username: 'john', password: 'password' },
  { id: 2, username: 'jane', password: 'secure123' },
];

// JWT Oluşturma Fonksiyonu
function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
}

// Kullanıcı Girişi
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Korumalı Rota
app.get('/protected', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token missing' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    res.json({ message: 'Protected route', user: decoded });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
