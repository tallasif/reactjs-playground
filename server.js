const express = require("express");
const React = require("react");
const {
    renderToStaticMarkup,
    renderToPipeableStream,
} = require("react-dom/server");

const Page = require("./dist/page.js");

const app = express();
const port = 4080;

app.use("/stream", function (req, res) {
    const { pipe } = renderToPipeableStream(React.createElement(Page), {
        onShellReady() {
            res.setHeader('Content-type', 'text/html');
            pipe(res);
        },
    });
});

app.use("/", function (req, res) {
    const html = renderToStaticMarkup(React.createElement(Page)); // react
    res.send(html);
});

app.listen(port, () => {
    console.info(`Search app listening on port ${port}`);
});
