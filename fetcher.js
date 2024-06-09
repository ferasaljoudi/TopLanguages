const axios = require('axios');
require('dotenv').config();

const fetcher = (variables) => {
  return axios.post(
    'https://api.github.com/graphql',
    {
      query: `
      query userInfo($login: String!) {
        user(login: $login) {
          repositories(ownerAffiliations: OWNER, first: 100) {
            nodes {
              name
              isFork
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
      `,
      variables,
    },
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    },
  );
};

const fetchTopLanguages = async (username) => {
  const res = await fetcher({ login: username });

  if (res.data.errors) {
    throw new Error(res.data.errors[0].message || 'Error fetching data');
  }

  let repoNodes = res.data.data.user.repositories.nodes;

  let languages = {};

  repoNodes
    .filter((node) => node.languages.edges.length > 0)
    .forEach((node) => {
      node.languages.edges.forEach((lang) => {
        const { name, color } = lang.node;
        const size = lang.size;

        if (languages[name]) {
          languages[name].size += size;
          languages[name].count += 1;
        } else {
          languages[name] = {
            name,
            color,
            size,
            count: 1,
          };
        }
      });
    });

  return Object.keys(languages)
    .sort((a, b) => languages[b].size - languages[a].size)
    .reduce((result, key) => {
      result[key] = languages[key];
      return result;
    }, {});
};

module.exports = { fetchTopLanguages };
