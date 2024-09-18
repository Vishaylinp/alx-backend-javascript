import express from 'express';
import Routing from './routes/index';

const app = express()
const port = 1245

Routing(app);

app.listen(port, () => {

});

export default app;
