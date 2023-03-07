const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mongoconnection = require("./config/mongoconf.json");
const mongo = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const TodoRouter = require("./routes/todo.routes");
app.use("/", TodoRouter);

const server = http.createServer(app);

mongo
  .connect(mongoconnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected"))
  .catch((err) => console.log(err));

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

