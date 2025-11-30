require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/DB.JS');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/attendance', require('./routes/attendance'));

app.get('/', (req, res) => res.send('Attendance API running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
