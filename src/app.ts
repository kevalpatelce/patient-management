import express from "express";
import patientRoutes from "./routes/patient.route";

const app = express();
app.use(express.json());

app.use("/patients", patientRoutes);

app.get("/", (_req, res) => {
  res.send("Serverless Express API Running");
});

export default app;
