'use strict';//With strict mode you can not use undeclared variables.
/*

    So what is this "require?"

require() is not part of the standard JavaScript API. But in Node.js, it's a built-in function with a special purpose: to load modules.

Modules are a way to split an application into separate files instead of having all of your application in one file. This concept is also present in other languages with minor differences in syntax and behavior, like C's include, Python's import, and so on.

One big difference between Node.js modules and browser JavaScript is how one script's code is accessed from another script's code.

    In browser JavaScript, scripts are added via the <script> element. When they execute, they all have direct access to the global scope, a "shared space" among all scripts. Any script can freely define/modify/remove/call anything on the global scope.

    In Node.js, each module has its own scope. A module cannot directly access things defined in another module unless it chooses to expose them. To expose things from a module, they must be assigned to exports or module.exports. For a module to access another module's exports or module.exports, it must use require().
// joseph from stackoverflow
*/

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');
const express = require('express');
let app = express();

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();


app.route('/api/convert')
    .get(function (req, res) {
	let input = req.query.input;
	let initNum = convertHandler.getNum(input);
	let initUnit= convertHandler.getUnit(input);
	let returnUnit = convertHandler.getReturnUnit(initUnit);
	let returnNum = convertHandler.convert(initNum,initUnit);
	//Strings from numbers:
	let initUnitString = convertHandler.spellOutUnit(initUnit);
	let returnUnitString = convertHandler.spellOutUnit(returnUnit);
	let initNumStore=initNum;
	initNum=parseFloat(initNum);
	returnNum=parseFloat(returnNum);	
	let stringValue = initNum+" "+initUnitString+" converts to "+returnNum+" "+returnUnitString;
	let result = {initNum,initUnit,returnNum,returnUnit,string:stringValue};

	if(initUnit===undefined && initNumStore===undefined)
	{
	    res.json('invalid number and unit');
	}
	else if(initNumStore===undefined)
	{
	    res.json('invalid number');
	}
	else if(initUnit===undefined)
	{
	    console.log('sending');
	    res.json('invalid unit');
	}
	else
	{
	    res.json(result);
	}
//	res.redirect('/');//I guess this just reloads the page? Doesnt sem to be necessary.
  });
};
