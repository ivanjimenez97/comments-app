import app from "./app.js";
import { PORT } from "./config.js";

app.get("/", (req, res) => {
  res.send("<h1>Hello NODEJS!</h1>");
});

app.post("/login", (req, res) => {});

app.post("/register", (req, res) => {});

app.post("/logout", (req, res) => {});

app.get("/protected", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
