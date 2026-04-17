module.exports = {
  platform: 'github',
  token: process.env.RENOVATE_TOKEN,
  hostRules: [
    {
      matchHost: 'https://api.github.com/repos/fortnox-internal/renovate-config',
      token: process.env.FORTNOX_INTERNAL_TOKEN
    }
  ]
};
