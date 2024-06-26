import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productsRoute from './src/routes/products.route.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/products', productsRoute.router);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});