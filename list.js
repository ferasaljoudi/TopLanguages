const generateLanguageListSVG = (languages, titleColor = '#FFFFFF', backgroundColor = '#0d1117') => {
    const totalSize = Object.values(languages).reduce((acc, lang) => acc + lang.size, 0);

    // Calculating the widths for the bar segments
    let currentX = 0;
    const barWidth = 250;
    const barSegments = Object.keys(languages).map(lang => {
        const language = languages[lang];
        const percentage = ((language.size / totalSize) * 100).toFixed(2);
        const segmentWidth = (barWidth * (parseFloat(percentage) / 100)).toFixed(2);
        const segment = `<rect x="${currentX}" width="${segmentWidth}" height="10" fill="${language.color}"></rect>`;
        currentX += parseFloat(segmentWidth);
        return segment;
    }).join('');

    // Calculating SVG height based on the number of languages
    const rowHeight = 25;
    const columnCount = 2;
    const languageCount = Object.keys(languages).length;
    const svgHeight = 100 + Math.ceil(languageCount / columnCount) * rowHeight;

    const circleRadius = 5;
    const fontSize = 11;

    let svg = `
    <svg width="300" height="${svgHeight}" viewBox="0 0 300 ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="descId">
        <title id="titleId"></title>
        <desc id="descId"></desc>
        <style>
            .header { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${titleColor}; animation: fadeInAnimation 0.8s ease-in-out forwards; }
            @supports(-moz-appearance: auto) { .header { font-size: 15.5px; } }
            @keyframes slideInAnimation { from { width: 0; } to { width: calc(100%-100px); } }
            @keyframes growWidthAnimation { from { width: 0; } to { width: 100%; } }
            .stat { font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #ffffff; }
            @supports(-moz-appearance: auto) { .stat { font-size:12px; } }
            .bold { font-weight: 700 }
            .lang-name { font: 400 11px "Segoe UI", Ubuntu, Sans-Serif; fill: #ffffff; }
            .stagger { opacity: 0; animation: fadeInAnimation 0.3s ease-in-out forwards; }
            #rect-mask rect { animation: slideInAnimation 1s ease-in-out forwards; }
            .lang-progress { animation: growWidthAnimation 0.6s ease-in-out forwards; }
            @keyframes scaleInAnimation { from { transform: translate(-5px, 5px) scale(0); } to { transform: translate(-5px, 5px) scale(1); } }
            @keyframes fadeInAnimation { from { opacity: 0; } to { opacity: 1; } }
        </style>

        <rect data-testid="card-bg" x="0.5" y="0.5" rx="4.5" height="99%" stroke="#e4e2e2" width="299" fill="${backgroundColor}" stroke-opacity="0" />
        <g data-testid="card-title" transform="translate(0, 35)">
            <g transform="translate(150, 0)">
                <text x="0" y="0" text-anchor="middle" class="header" data-testid="header">Most Used Languages</text>
            </g>
        </g>
        <g data-testid="main-card-body" transform="translate(0, 55)">
            <svg data-testid="lang-items" x="25">
                <!-- Background rectangle with rounded corners -->
                <rect x="0" y="0" width="${barWidth}" height="10" fill="#000" rx="1" ry="1"></rect>
                <!-- Bar segments -->
                <g mask="url(#rect-mask)">
                    ${barSegments}
                </g>
                <mask id="rect-mask">
                    <rect x="0" y="0" width="${barWidth}" height="10" fill="white" rx="3" />
                </mask>
                <g transform="translate(0, 25)">
                    ${Object.keys(languages).map((key, index) => {
                        const language = languages[key];
                        const percentage = ((language.size / totalSize) * 100).toFixed(2);
                        const x = index % columnCount === 0 ? 0 : 150;
                        const y = Math.floor(index / columnCount) * rowHeight;
                        return `
                            <g transform="translate(${x}, ${y})">
                                <g class="stagger" style="animation-delay: ${450 + index * 150}ms">
                                    <circle cx="5" cy="6" r="${circleRadius}" fill="${language.color}" />
                                    <text data-testid="lang-name" x="15" y="10" class='lang-name'>${language.name} ${percentage}%</text>
                                </g>
                            </g>`;
                    }).join('')}
                </g>
            </svg>
        </g>
    </svg>`;

    return svg;
};

module.exports = { generateLanguageListSVG };
