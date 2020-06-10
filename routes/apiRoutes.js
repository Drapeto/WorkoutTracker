const workoutModel = require("../workoutModel");

module.exports = function (app) {

    // home route index  GET
    

    // Get route for api/workouts/range ***
    app.get("/api/workouts/range", (req, res) => {
        workoutModel.find().limit(7).then(function (data) {
            res.json(data);
        });
    });

    app.get("/api/workouts", (req, res) => {
        workoutModel.find().then(function (data) {
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


};