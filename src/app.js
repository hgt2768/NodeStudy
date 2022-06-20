// 기본
const express = require("express");
const app = express();
app.use(express.json());

// 뷰엔진 : ejs
const ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", "./views");

// 미들웨어
const indexRouter = require("./routers/index");
app.use("/", indexRouter);

// 정적 파일 제공
app.use(express.static("models"));
app.use(express.static("routers"));
app.use(express.static("views"));
app.use(express.static("images"));
app.use(express.static("uploads"));
app.use(express.static("js"));
app.use(express.static("css"));

module.exports = app;
