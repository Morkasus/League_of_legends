'use strict'

var mongoose = require('mongoose');
mongoose.connect("mongodb://admin:123456@ds019033.mlab.com:19033/league_of_legends");
var User = require('../registration/user.js');
var Game = require('../events_manager/game.js');


module.exports = class Statistics {
    
    showAchievements(userName) {

    }
    
    //Helpers methods
    getWinsCount(games) {}
    getFriends(games) {}
    getLastVictory(games) {}
    getLastDefet(games) {}
    
    sendResult() {} //Build response json
}

