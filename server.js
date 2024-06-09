const express = require('express');
const { fetchTopLanguages } = require('./fetcher');
const { generateLanguageChart } = require('./chart');
const { generateLanguageList } = require('./list');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/top-langs/image', async (req, res) => {
    const { username, format, titleColor, backgroundColor } = req.query;

    if (!username) {
    return res.status(400).send('Missing required parameter: username');
    }

    console.log(`Received request for username: ${username}, format: ${format}, titleColor: ${titleColor}, backgroundColor: ${backgroundColor}`);

    try {
    const languages = await fetchTopLanguages(username);

    if (format === 'list') {
        const html = await generateLanguageList(languages, titleColor, backgroundColor);
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    } else {
        const buffer = await generateLanguageChart(languages);
        res.setHeader('Content-Type', 'image/png');
        res.send(buffer);
    }
    } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
