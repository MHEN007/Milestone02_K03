const getUserData = require("../API.js");

document.querySelector('.user > span').innerHTML = getUserData.username + '!';