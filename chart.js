const { createCanvas } = require('canvas');

const generateLanguageChartSVG = (languages, titleColor = '#FFFFFF', backgroundColor = '#0d1117') => {
    const totalSize = Object.values(languages).reduce((acc, lang) => acc + lang.size, 0);

    // Calculating the widths for the bar segments
    const languageNames = Object.keys(languages);
    const languageSizes = languageNames.map(name => languages[name].size);
    const languageColors = languageNames.map(name => languages[name].color);

    const barHeight = 20;
    const barSpacing = 10;
    const chartWidth = 650;
    const maxBarWidth = chartWidth - 100;
    const minBarWidth = 2;
    const fontSize = 14;
    const textPadding = 10;

    // Measuring the maximum width of the language names
    const canvas = createCanvas(800, 200);
    const context = canvas.getContext('2d');
    context.font = `${fontSize}px Arial`;
    const maxTextWidth = Math.max(...languageNames.map(name => context.measureText(name).width));
    const barStartX = maxTextWidth + 2 * textPadding;

    const chartHeight = (barHeight + barSpacing) * languageNames.length + 50;

    const bars = languageNames.map((name, index) => {
        const percentage = (languageSizes[index] / totalSize * 100).toFixed(2);
        const barWidth = Math.max((maxBarWidth * (percentage / 100)).toFixed(2), minBarWidth);
        const y = index * (barHeight + barSpacing) + 50;
        return `
        <text x="${textPadding}" y="${y + barHeight / 2 + 5}" font-family="Arial" font-size="${fontSize}" fill="#ffffff" text-anchor="start">${name}</text>
        <rect x="${barStartX}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${languageColors[index]}" rx="2" ry="2"></rect>
        <text x="${barStartX + parseFloat(barWidth) + textPadding}" y="${y + barHeight / 2 + 5}" font-family="Arial" font-size="${fontSize}" fill="#ffffff" text-anchor="start">${percentage}%</text>
        `;
    }).join('');

    const svg = `
    <svg width="${chartWidth}" height="${chartHeight}" viewBox="0 0 ${chartWidth} ${chartHeight}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="descId">
        <title id="titleId"></title>
        <desc id="descId"></desc>
        <style>
            .header { font: 600 26px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${titleColor}; animation: fadeInAnimation 0.8s ease-in-out forwards; }
            @supports(-moz-appearance: auto) { .header { font-size: 20.5px; } }
            .bar-label { font: 600 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #ffffff; }
            @supports(-moz-appearance: auto) { .bar-label { font-size: 12px; } }
            @keyframes fadeInAnimation { from { opacity: 0; } to { opacity: 1; } }
        </style>

        <rect width="${chartWidth}" height="${chartHeight}" fill="${backgroundColor}" rx="10" ry="10"></rect>
        <text x="${chartWidth / 2}" y="30" text-anchor="middle" class="header">Most Used Languages</text>
        ${bars}
    </svg>`;

    return svg;
};

module.exports = { generateLanguageChartSVG };