const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const fs = require("fs");

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




