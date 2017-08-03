var mysql = require('mysql');
var config = require('../config');
var conn = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    port: config.mysql.port,
    connectionLimit: 100
});

function strIsInt(str) {
    return /^\d+$/.test(str);
}
function strIsFloat(str) {
    return !isNaN(parseFloat(str));
}
function showQueryError(err, res) {
    console.log(err);
    res.json({
        status: 0,
        error_message: "Unknown server error"
    })
}
module.exports = function (app) {
    app.get('/api/v1/get/truck/:id', function (req, res) {
        var id = req.params.id;
        conn.query("SELECT `id`, DATE_FORMAT(`last_updated`, '%Y-%m-%d %H:%i:%s') AS `last_updated`, `pos_x`, `pos_y` FROM `truck` WHERE `id`=" + id, function (err, rows) {
            if (err) {
                showQueryError(err, res);
            }
            else if (rows.length != 0) {
                res.json({
                    status: 1,
                    data: rows[0]
                });
            } else {
                res.json({
                    status: 0,
                    error_message: "Truck not found"
                });
            }
        });
    });
    app.get('/api/v1/get/food', function (req, res) {
        conn.query("SELECT `id`, `name`, `truck_id`, DATE_FORMAT(`date`, '%Y-%m-%d') AS `date` FROM `food`", function (err, rows) {
            if (err) {
                showQueryError(err, res);
            }
            else {
                res.json({
                    status: 1,
                    data: rows
                });
            }
        });
    });
    app.get('/api/v1/get/food/:truck_id/today', function (req, res) {
        conn.query("SELECT * FROM `food` WHERE `date` = CURDATE() AND `truck_id` = " + req.params.truck_id, function (err, rows) {
            if (err) {
                showQueryError(err, res);
            }
            else {
                var data = [];
                for (var i = 0; i < rows.length; i++) {
                    data.push(rows[i].name);
                }
                res.json({
                    status: 1,
                    data: data
                });
            }
        });
    });
    app.post('/api/v1/post/truck/update', function (req, res) {
        if (strIsInt(req.body.id) && strIsFloat(req.body.pos_x) && strIsFloat(req.body.pos_y)) {
            var updateQuery = "UPDATE `truck` SET `pos_x` = " + req.body.pos_x + ", `pos_y` = " + req.body.pos_y + ", `last_updated` = NOW() WHERE `id` = " + req.body.id;
            var insertQuery = "INSERT INTO `location` VALUES (NULL, " + req.body.id + ", NOW(), " + req.body.pos_x + ", " + req.body.pos_y + ")";
            conn.query("SELECT * FROM `truck` WHERE `id` = " + req.body.id, function (err, rows) {
                if (err) {
                    showQueryError(err, res);
                }
                else if (rows.length != 0) {
                    conn.query(updateQuery, function (err2, rows2) {
                        if (err2) {
                            showQueryError(err2, res);
                        }
                        else {
                            conn.query(insertQuery, function (err3, rows3) {
                                if (err3) {
                                    showQueryError(err3, res);
                                } else {
                                    res.json({
                                        status: 1
                                    });
                                }
                            });
                        }
                    });
                } else {
                    res.json({
                        status: 0,
                        error_message: "Cannot find truck with ID " + req.body.id
                    })
                }
            });
        } else {
            res.json({
                status: 0,
                error_message: "Cannot convert ID to integer or convert position to float"
            });
        }
    });
    app.post('/api/v1/post/food/add', function (req, res) {
        var truckID = req.body.truck_id;
        var foodName = req.body.food_name;
        if (strIsInt(truckID) && typeof (foodName) != undefined) {
            conn.query("SELECT * FROM `truck` WHERE `id` = " + truckID, function (err, rows) {
                if (rows.length != 0) {
                    var query = "INSERT INTO `food` VALUES (NULL, '" + foodName + "', " + truckID + ", NOW())";
                    conn.query(query, function (err, rows) {
                        res.json({
                            status: 1
                        });
                    });
                } else {
                    res.json({
                        status: 0,
                        error_message: "Truck not found"
                    })
                }
            });
        } else {
            res.json({
                status: 0,
                error_message: "Error collecting data"
            });
        }
    });
    app.post('/api/v1/post/food/update', function (req, res) {
        var id = req.body.id;
        var foodName = req.body.food_name;
        if (strIsInt(id) && typeof (foodName) != undefined) {
            conn.query("SELECT * FROM `food` WHERE `id` = " + id, function (err, rows) {
                if (err) {
                    showQueryError(err, res);
                }

                if (rows.length != 0) {
                    conn.query("UPDATE `food` SET `name` = '" + foodName + "' WHERE `id` = " + id, function (err2, rows2) {
                        if (err2) {
                            showQueryError(err2, res);
                        }
                        else {
                            res.json({
                                status: 1
                            });
                        }
                    });
                } else {
                    res.json({
                        status: 0,
                        error_message: "Food of ID " + id + " not found"
                    })
                }
            });
        } else {
            res.json({
                status: 0,
                error_message: "Error collecting data"
            })
        }
    });
}