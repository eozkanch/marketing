// server.js
const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 5173;

app.use(express.json());

const usersFilePath = 'src/api/users.json';

// Mevcut kullanıcıları getiren endpoint
app.get('/users', async (req, res) => {
  try {
    const usersData = await fs.readFile(usersFilePath, 'utf-8');
    const users = JSON.parse(usersData);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Yeni kullanıcı ekleyen endpoint
app.post('/users', async (req, res) => {
    try {
      const newUser = req.body;
      const usersData = await fs.readFile(usersFilePath, 'utf-8');
      const existingUsers = JSON.parse(usersData);
      const updatedUsers = [...existingUsers, newUser];
      await fs.writeFile(usersFilePath, JSON.stringify(updatedUsers, null, 2));
      res.json(updatedUsers);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

  
