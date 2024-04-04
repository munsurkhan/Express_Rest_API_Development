const express = require('express');
const {router} = require("express/lib/application");

const app = new express();

app.use("api/v1",router)