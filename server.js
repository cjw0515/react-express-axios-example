import express from 'express';
import bodyParser from 'body-parser'; // PARSE HTML BODY
import path from 'path';
import api from './routes';

const app = express();
const port = process.env.PORT || 5000;

import mongoose from 'mongoose';

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb://localhost/memoapp');

app.use(bodyParser.json());
app.use('/api', api);
console.log(path.join(__dirname, './client/public'));
console.log('__dirname: ',__dirname);

app.get('/api/hello', (req, res) => {
  res.send(
    [
      {
        title: 'title',
        writer: 'Employed',
        date: '2018-04-13',
        views:2
      },
      {
        title: 'title2',
        writer: 'Employed2',
        date: '2018-04-13',
        views:10
      }
    ]

  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
