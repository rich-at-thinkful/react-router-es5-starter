var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var App = require('./components/App');

module.exports = (
  <Router history={browserHistory}>
    <Route component={App} path="/" />
  </Router>
);

