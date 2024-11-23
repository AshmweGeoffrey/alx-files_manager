import express from 'express';
import injectRoutes from './routes'

const server = express();
const port = 5000;
const host = 'localhost';

// Debugging middleware
server.use((req, res, next) => {
  console.log('Received request:', req.method, req.url);
  console.log('Headers:', req.headers);
  next();
});

// Body parsing middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Debugging middleware after body parsing
server.use((req, res, next) => {
  console.log('Parsed body:', req.body);
  next();
});

// Apply routes
injectRoutes(server)

server.listen(port, () => {
    console.log(`Server Running at ${port}`);
});
