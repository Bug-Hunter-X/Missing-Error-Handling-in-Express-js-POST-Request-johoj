const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Validate user data
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    //Further processing of user data
    console.log(user);
    res.status(201).send();
  } catch (error) {
    console.error('Error processing user data:', error);
    res.status(500).json({ error: 'Failed to process user data' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));