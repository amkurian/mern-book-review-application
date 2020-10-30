const express = require("express"),
         cors = require("cors"),
          app = express()
          app.use(express.json());
          port = 8000,

app.use(cors());
app.use(express.static(__dirname + "/client/build"));

require("./server/utils/mongoo")().then(db => {
    app.db = db;
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})
require("./server/utils/routes")(app);

app.all('*', (req, res, next) => {
    res.sendFile(__dirname + "/client/build/index.html");
});
// mongo.initDb();
