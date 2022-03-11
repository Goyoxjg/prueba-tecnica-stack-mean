import express from 'express';
import routerIndex from "./routes/index.js";
import routesNumbers from "./routes/numbers.js";

const app = express();

app.get('/', routerIndex);

app.use('/api/numbers/', routesNumbers);

export default app;
