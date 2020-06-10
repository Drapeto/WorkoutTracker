const workoutModel = require("../workoutModel");

module.exports = function (app) {

    // home route index  GET
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "./public", "index.html"));
    });


    // GET route excersise
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(_dirname, "./public", "exercise.html"));
    });

    //  GET route for /stats

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(_dirname, "./public", "stats.html"));
    });

    // Get route for api/workouts/range ***
    app.get("/api/workouts/range", (req, res) => {
        workoutModel.create(body).then(function (data) {
            res.json(data);
        });
    });

    // POST route /api/workouts
    app.post("/api/workouts", ({ body }, res) => {
        workoutModel.create(body).then(function (data) {
            res.json(data);
        });
    });


    // UPDATE route api/workouts/:id
    app.put("/api/workouts/:id", (req, res) => {
        workoutModel
            .update(
                {
                    _id: req.params.id,
                },
                {
                    $push: {
                        exercises: req.body,
                    },
                }
            )
            .then(function (data) {
                res.json(data);
            });
    });

    // POST workout ****
};