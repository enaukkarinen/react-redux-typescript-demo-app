
require('ts-node').register({
    project: './tsconfig.webpack.json'
});

module.exports = require('./config/webpack.config').default;