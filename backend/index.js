// const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
var app = express();
const SpotifyWebApi = require("spotify-web-api-node");

app.use(cors());

// connectToMongo();
const port = 8000;

// For JSON Return
app.use(express.json());

app.post("/login", (req, res) => {
  const code = req.body.code;

  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http:localhost:3000",
    clientId: "3452dcaaaffa4f279eb9f6f1a7354a54",
    clientSecret: "46f3411061df407cbb40ca4ef6dea3bf",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        rexpiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});
//Available Routes
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello There !");
});
