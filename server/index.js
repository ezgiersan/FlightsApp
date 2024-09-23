const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const moment = require("moment");
const mongoose = require("mongoose");
const Flight = require("./models/FlightModel");

require("dotenv").config();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// Preflight OPTIONS isteğine yanıt ver
app.options("*", cors());

const uri = process.env.MONGODB_URI;
console.log("uri", process.env.MONGODB_URI);

const header = {
  Accept: "application/json",
  app_id: "2fe2e911",
  app_key: "dc44c9c186cc9ccfdfaa7b1fd2c66c55",
  ResourceVersion: "v4",
};

app.get("/flights", (req, res) => {
  const { fromScheduleDate, toScheduleDate, route } = req.query;

  // Tarih kontrolü
  if (fromScheduleDate && toScheduleDate) {
    const startDate = moment(fromScheduleDate);
    const endDate = moment(toScheduleDate);
    const diffInDays = endDate.diff(startDate, "days");

    // 3 den fazlaysa hata ver
    if (diffInDays > 3) {
      return res
        .status(400)
        .send(
          "The date interval is not valid. Allowed days between the from and to dates is 3."
        );
    }
  }

  axios
    .get("https://api.schiphol.nl/public-flights/flights", {
      headers: header,
      params: {
        route: route,
        fromScheduleDate: fromScheduleDate,
        toScheduleDate: toScheduleDate,
      },
    })
    .then((response) => res.json(response.data))
    .catch((error) => res.status(500).send(error));
});

app.get("/airlines", (req, res) => {
  axios
    .get("https://api.schiphol.nl/public-flights/airlines", { headers: header })
    .then((response) => res.json(response.data))
    .catch((error) => res.status(500).send(error));
});

app.post("/save-flight", async (req, res) => {
  try {
    // Gelen veriyi al
    const flightData = req.body;

    // Aynı flightNumber ile var olan bir belgeyi kontrol et
    const existingFlight = await Flight.findOne({
      flightNumber: flightData.flightNumber,
    });
    if (existingFlight) {
      return res
        .status(409)
        .send({ error: "A flight with this number already exists." });
    }

    const newFlight = new Flight({
      id: flightData.id,
      lastUpdatedAt: flightData.lastUpdatedAt,
      actualLandingTime: flightData.actualLandingTime,
      airlineCode: flightData.airlineCode,
      flightName: flightData.flightName,
      flightNumber: flightData.flightNumber,
      scheduleDate: flightData.scheduleDate,
      scheduleDateTime: flightData.scheduleDateTime,
      terminal: flightData.terminal,
      route: {
        destinations: flightData.route.destinations,
        eu: flightData.route.eu,
        visa: flightData.route.visa,
      },
      scheduleTime: flightData.scheduleTime,
      estimatedLandingTime: flightData.estimatedLandingTime,
    });

    // MongoDB'ye kaydet
    await newFlight.save();

    res.status(200).send({ message: "Flight data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send({ error: "Error saving data" });
  }
});

app.get('/my-flights', async (req, res) => {
  try {
    // Database'deki tüm verileri çek
    const flights = await Flight.find({});
    
    res.status(200).send(flights);
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).send({ error: 'Error fetching flights' });
  }
});


app.listen(5050, () => {
  console.log("Server is running on port 5050");
});

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = mongoose;
