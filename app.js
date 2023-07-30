var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const chanmiRouter = require("./routes/chanmi");
const dogRouter = require("./routes/dog");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/dogs", dogRouter);
app.use("/ch", chanmiRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;

// POST articles/1/comments/3/reports
// DELETE articles/:articleId/comments/:commentId/reports

// POST articles
// DELETE articles/:articleId

// GET articles

// 댓글쓰기
// POST articles/:articleId/comments

// 댓글을 신고하기 ( = 신고를 만들다. )
// POST articles/:articleId/comments/:commentId/reports

// articlesRouter;
// commentsRouter;
// reportsRouter;
// POST reports?articleId=100
