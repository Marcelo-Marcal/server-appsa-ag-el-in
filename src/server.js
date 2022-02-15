const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const app = express()
const cors = require("cors");
import { router } from './routes';

const app = express();

app.use(router);
app.use(cors());

app.use(express.json({ limit: '5mb' }))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3333, () => console.log('Server is running!'));

