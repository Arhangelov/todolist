const config = require("./config/config");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes");

const app = express();

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);