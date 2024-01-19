const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const { registeredUsers } = require ('./utils/mock/mock.js')

// Enable CORS for all requests
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { userName, password } = req.body;
    const user = registeredUsers.find(item => item.userName === userName && item.password === password);
    if (user) {
        res.send({statusCode: 200, statusMessage:  'success', message: 'user is registered'})
    }
    else {
        res.status(401).send({statusCode: 401, statusMessage: 'error', "message": "invalid username or password"});
    }
});

app.get('/echo', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

