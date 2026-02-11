import express, { json } from 'express'; // require -> common JS
import { moviesRouter } from './routes/movies.js';
import { corsMiddleware } from './middlewares/cors.js';

const app = express();
app.use(corsMiddleware());
app.use(json());
app.disable('x-powered-by'); // Deshabilitar el header x-Powered-By: express

// Todos los recursos que sean MOVIES se identifica con /movies
app.use('/movies', moviesRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
	console.log(`servidor escuchando en el puerto http://localhost:${PORT}`);
});
