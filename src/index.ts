import express from 'express';

import categories from './routes/categories';

const app = express();

const port = 3000;

app.use('/categories', categories(null));

app.listen(port, () => console.log(`server started on ${port}`));
