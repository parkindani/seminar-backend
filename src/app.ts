import express from  'express';
import { Board } from './@core/types/types';

const app = express();

app.get('/', (req, res, next) => {
    res.send('ok');
});

app.get('/api/article', (req, res, next) => {
  const boards: Board[] = [
    {id: 141, content: '첫 번째 게시글 입니다.'},
    {id: 145, content: '두 번째 게시글 입니다.'}
  ]
  res.send(boards);
});

app.listen(3030, () => {
   console.log('listening') ;
});