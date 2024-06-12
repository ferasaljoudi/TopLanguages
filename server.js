const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const { fetchTopLanguages } = require('./fetcher');
const { generateLanguageChartSVG } = require('./chart');
const { generateLanguageListSVG } = require('./list');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 86;

app.use(favicon(path.join(__dirname, 'public', 'icon.png')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/top-langs/image', async (req, res) => {
    const { username, format, titleColor, backgroundColor } = req.query;

    if (!username) {
        return res.status(400).send('Missing required parameter: username');
    }

    const formattedTitleColor = titleColor ? `#${titleColor}` : '#FFFFFF';
    const formattedBackgroundColor = backgroundColor ? `#${backgroundColor}` : '#0d1117';

    const currentDateTime = new Date().toLocaleString();
    console.log(`[${currentDateTime}] Received request for username: ${username}, format: ${format}, titleColor: ${formattedTitleColor}, backgroundColor: ${formattedBackgroundColor}`);

    try {
        const languages = await fetchTopLanguages(username);

        if (format === 'list') {
        const svg = generateLanguageListSVG(languages, formattedTitleColor, formattedBackgroundColor);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(svg);
        } else {
        const svg = generateLanguageChartSVG(languages, formattedTitleColor, formattedBackgroundColor);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(svg);
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
