import express from 'express';
import serverless from 'serverless-http';

const app = express();
app.use(express.json());

// Routes
app.get('/api/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

app.get('/api/messages', (req, res) => {
  res.json({ message: 'Get all messages' });
});

// ONLY EXPORT handler
export const handler = serverless(app);
