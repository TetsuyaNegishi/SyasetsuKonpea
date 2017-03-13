import express from 'express';

const app = express();

// HTTPリクエストを受け取る部分
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// サーバーを起動する部分
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});