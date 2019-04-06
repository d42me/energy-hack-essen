const routes = require('next-routes')();

routes.add('/loads/:address', '/loads/detail');

module.exports = routes;
