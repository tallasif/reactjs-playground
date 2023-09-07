const React = require('react');
const CompTitle = require('./components/title.js');
const data = require('../data.json');
const Page = () => /*#__PURE__*/React.createElement("div", null, [...Array(80).keys()].map((value, index) => /*#__PURE__*/React.createElement(CompTitle, {
  key: index,
  componentData: data
})));
module.exports = Page;