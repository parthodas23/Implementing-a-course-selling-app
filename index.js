const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const app = express();

app.use(bodyParser.json());
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on the ${port}.`);
});
