const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.static("/public"))
app.use(cors())

app.listen(3000, () => {
    console.log("Server Running On Port 3000!");
});
