const React = require('react');
const Title = (props) => (
    <div>
        <div>{props.componentData.name}</div>
        <ul>
            {props.componentData.data.map((element, index) => (
                <li key={index}>
                    <a href={element.text.url}>{element.text.txt}</a>
                    <span>{element.text.subTxt}</span>
                    <a href={element.text.citeUrl}>{element.text.cite}</a>
                </li>
            ))}
        </ul>
    </div>
);

module.exports = Title;