const express = require('express');

const app = express();

const port = 4000;

app.use(express.urlencoded({extended: true})); // "qs" package is used when extended is set to true;
app.use(express.json());

const traineesRoute = require('./routes/traineeRoutes');
app.use("/api/v1/trainees", traineesRoute);

// app.use("/api/v1/trainers", () => {});
// app.use("/api/v1/batches", () => {})
// app.use("/api/v1/classes", () => {});

app.use("/*", (req, res) => {res.send("No Route Matches your Request!")});

app.listen(port, () => console.log("Server is listening on port " + port));