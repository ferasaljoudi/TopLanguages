const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const width = 800;
const height = 400;
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

const generateLanguageChart = async (languages) => {
  const languageNames = Object.keys(languages);
  const languageSizes = languageNames.map(name => languages[name].size);
  const languageColors = languageNames.map(name => languages[name].color);

  const configuration = {
    type: 'bar',
    data: {
      labels: languageNames,
      datasets: [{
        label: 'Most Used Languages',
        data: languageSizes,
        backgroundColor: languageColors,
      }],
    },
    options: {
      indexAxis: 'y', // Set the index axis to 'y' for horizontal bars
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Most Used Languages',
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    },
  };

  return await chartJSNodeCanvas.renderToBuffer(configuration);
};

module.exports = { generateLanguageChart };
