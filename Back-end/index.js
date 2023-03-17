// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "DELETED_BEFORE_GİTHUB_PUSH";
const authToken = "DELETED_BEFORE_GİTHUB_PUSH";
const client = require("twilio")(accountSid, authToken);
const cors = require("cors")

const express = require("express");
const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/twilio/:phoneNumber", async (req, res) => {
    const phoneNumber = req.params.phoneNumber
    const response = await client.lookups.v2
    .phoneNumbers(phoneNumber)
    .fetch()
    res.status(200).json({valid:response.valid})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
