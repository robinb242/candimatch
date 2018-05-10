var express = require("express");
var path = require("path");
var db = require("../db");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.render("home");
	});

	app.get("/survey", function(req, res) {
		res.render("survey");
	});

	app.get("/userPage", function(req, res) {
		res.render("userPage");
	});
}