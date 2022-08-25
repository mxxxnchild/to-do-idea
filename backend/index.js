import express from 'express';
import path, { dirname } from 'path';
import { requestTime, logger } from './middlewares.js';
import serverRoutes from './routes/servers.js';


const __dirname = path.resolve()
const app = express()
const PORT = 3000

import bodyParser from "body-parser";
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.resolve(__dirname, 'frontend')))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(serverRoutes)

app.get('/', (req, res) => {
	res.render('index', { title: 'Main Page', active: 'main' })
})

app.get('/my-to-do', (req, res) => {
	res.render('my-to-do', { title: 'My ToDo', active: 'my-to-do' })
})


app.listen(PORT, () => {
	console.log(`Сервер запущен на порту: ${PORT}...`)
})