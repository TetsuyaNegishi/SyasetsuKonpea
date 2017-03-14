import express from 'express';
import { getYomiuriOpinions, getYomiuriOpinion } from './server/yomiuri';

const app = express();

// HTTPリクエストを受け取る部分
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/yomiuri', (req, res) => {
  const url = req.query.url;
  if (url) {
    getYomiuriOpinion(url).then((data) => {
      res.json({ result: 'OK', data });
    }).catch((error) => {
      res.json({ result: 'NG', error });
    });
  } else {
    getYomiuriOpinions().then((data) => {
      res.json({ result: 'OK', data });
    }).catch((error) => {
      res.json({ result: 'NG', error });
    });
  }
});

// サーバーを起動する部分
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
