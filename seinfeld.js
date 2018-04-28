// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "seinfeld_db"
});


// Initiate MySQL Connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });



app.get("/cast", function(req, res) {

connection.query("SELECT * FROM actors", function(err, result) {

    var html = "<h1>Seinfeld Actors</h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>Actor: " + result[i].name + " </p></li>";
        html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
        html += "<p>Attitude: " + result[i].attittude + " </p></li>"
      }

      html += "</ul>";

      res.send(html);

    });
});


app.get("/coolness-chart", function(req, res) {

    connection.query("SELECT * FROM actors", function(err, result) {
    
        var html = "<h1>Seinfeld Coolness Chart</h1>";
    
        html += "<ul>";
    
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Actor: " + result[i].name + " </p></li>";
            html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
          }
    
          html += "</ul>";
    
          res.send(html);
    
        });
    });

    app.get("/attitude-chart/:att", function(req, res) {

        connection.query("SELECT * FROM actors", function(err, result) {
        
            var html = "<h1>Seinfeld Coolness Chart</h1>";
        
            html += "<ul>";
        
            for (var i = 0; i < result.length; i++) {
                html += "<li><p> ID: " + result[i].id + "</p>";
                html += "<p>Actor: " + result[i].name + " </p></li>";
                html += "<p>Attitude: " + result[i].attittude + " </p></li>"
              }
        
              html += "</ul>";
        
              res.send(html);
        
            });
        });

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  





