import express from "express";
import { Request } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { dataDestinations } from "./data/destinations";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors<Request>());
app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/destinations", async (req, res) => {
  const destinations = await prisma.destination.findMany({
    orderBy: { name: "asc" },
  });

  res.json(destinations);
});

app.get("/destinations/:destinationId", async (req, res) => {
  const id = req.params.destinationId;

  const destination = await prisma.destination.findUnique({
    where: { id },
  });

  if (!destination) {
    return res.status(404).json({});
  }

  return res.status(200).json(destination);
});

app.post("/destinations/multiple", async (req, res) => {
  const destination = await prisma.destination.createMany({
    data: dataDestinations,
    skipDuplicates: true,
  });

  return res.json(destination);
});

app.post("/destinations", async (req, res) => {
  const destination = await prisma.destination.create({
    data: req.body,
  });

  return res.json(destination);
});

app.put("/destinations/:destinationId", async (req, res) => {
  const id = req.params.destinationId;
  const destination = await prisma.destination.update({
    where: { id },
    data: req.body,
  });

  return res.json(destination);
});

app.delete("/destinations", async (req, res) => {
  await prisma.destination.deleteMany();

  return res.send({
    status: "ok",
    message: "All destinations have been deleted",
  });
});

app.delete("/destinations/:id", async (req, res) => {
  const id = req.params.id;
  await prisma.destination.delete({
    where: { id },
  });

  return res.send({
    status: "ok",
    message: `One destination by id ${id} has been deleted`,
  });
});

app.get("/", async (req, res) => {
  res.send(
    `
  <h1>TravelScope REST API</h1>
  <h2>Available Routes</h2>
  <pre>
    GET, POST /destinations
    GET, PUT, DELETE /destinations/:id
  </pre>
  `.trim()
  );
});

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`REST API listening at http://localhost:${port}`);
});
