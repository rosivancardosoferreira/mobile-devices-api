const express = require("express");
const cors = require("cors");
const routes = require("./app/routes");
const app = express();
const wbm = require('wbm');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR"
    );
    if (req.headers.origin) {
        res.header("Access-Control-Allow-Origin", req.headers.origin);
    }
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});


// wbm.start({showBrowser: true, qrCodeData: true, session: false})
// .then(async qrCodeData => {
//     console.log(qrCodeData); // show data used to generate QR Code
//     await wbm.waitQRCode();
//     // waitQRCode() is necessary when qrCodeData is true
//     // ...
//     await wbm.end();
// } ).catch(err => { console.log(err); });


app.use(routes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ message: error.message });
});

app.listen(process.env.PORT || 3333, () => {
    console.log(`Server running in port ${process.env.PORT || 3333}`);
});