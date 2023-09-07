const React = require('react');
const CompTitle = require('./components/title.js');
const data = require('../data.json');

const Page = () => (
    <div>
        {[...Array(80).keys()].map((value, index) => (
            <CompTitle key={index} componentData={data} />
        ))}
    </div>
);

 module.exports = Page;

