const React = require('react');
const Title = props => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, props.componentData.name), /*#__PURE__*/React.createElement("ul", null, props.componentData.data.map((element, index) => /*#__PURE__*/React.createElement("li", {
  key: index
}, /*#__PURE__*/React.createElement("a", {
  href: element.text.url
}, element.text.txt), /*#__PURE__*/React.createElement("span", null, element.text.subTxt), /*#__PURE__*/React.createElement("a", {
  href: element.text.citeUrl
}, element.text.cite)))));
module.exports = Title;