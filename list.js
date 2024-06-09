const generateLanguageList = (languages, titleColor = '#ffffff', backgroundColor = '#2d2d2d') => {
    const totalSize = Object.values(languages).reduce((acc, lang) => acc + lang.size, 0);

    const barSegments = Object.keys(languages).map(lang => {
        const language = languages[lang];
        const percentage = ((language.size / totalSize) * 100).toFixed(2);
        return `<div style="width: ${percentage}%; background-color: ${language.color}; height: 15px;"></div>`;
    }).join('');

    let html = `<div style="background-color: ${backgroundColor}; color: white; font-family: Arial, sans-serif; padding: 20px; width: 430px; margin: auto;">
                <h2 style="color: ${titleColor}; text-align: center;">Most Used Languages</h2>
                <div style="display: flex; width: 100%; border-radius: 10px; overflow: hidden; margin-bottom: 20px;">
                    ${barSegments}
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">`;

    Object.keys(languages).forEach((key, index) => {
        const language = languages[key];
        const percentage = ((language.size / totalSize) * 100).toFixed(2);
        html += `
            <div style="width: 210px; display: flex; align-items: center; margin-bottom: 5px;">
            <span style="display: inline-block; width: 15px; height: 15px; background-color: ${language.color}; margin-right: 10px; border-radius: 50%;"></span>
            ${language.name} ${percentage}%
            </div>
        `;
    });

    html += `</div></div>`;
    return html;
};

module.exports = { generateLanguageList };