const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('965436705698-rvfovn07e6tvd3oq1csvadv21d1t34hv.apps.googleusercontent.com');

app.use(bodyParser.json());
app.use(cors());

app.post('/api/google-login', async (req, res) => { // Added a slash before "api/google-login"
    try {
        const data = await client.verifyIdToken({
            idToken: req.body.token,
            audience: '965436705698-rvfovn07e6tvd3oq1csvadv21d1t34hv.apps.googleusercontent.com', // Add the correct audience
        });
        res.status(200).json(data.getPayload());
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' }); // Handle errors
    }
});

app.listen(4001, () => {
    console.log('Server is ready at http://localhost:4001'); // Changed https to http
});
