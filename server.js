import express from 'express';
import bodyParser from 'body-parser'; // PARSE HTML BODY

const app = express();
const port = process.env.PORT || 5000;

import mongoose from 'mongoose';

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb://localhost/memoapp');

app.use(bodyParser.json());
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
