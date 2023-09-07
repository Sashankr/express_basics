const express = require("express");
const app = express();

app.use("/users", (req, res, next) => {
  console.log("middleware 1");
  res.send(`
    <h1>Users List</h1>
    <a href="/">Home</a>    
  `);
});

app.use("/", (req, res, next) => {
  console.log("middleware 2");
  res.send(`
    <h1>Homepage</h1>
    <a href="/users">Users</a>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
