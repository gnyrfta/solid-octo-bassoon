const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
suite("Function convertHandler.getNum(input)", function () {
    test("Whole number input", function (done) {
      let input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    test("Decimal Input", function (done) {
      let input = "32.2L";
      assert.equal(convertHandler.getNum(input), 32.2);
      done();
    });
    test("Testing fractional Input", function (done) {
      let input = "40/3L";
	assert.equal(convertHandler.getNum(input), (40 / 3).toFixed(5));
      done();
    });
    test("Fractional input with decimal", function(done) {
	let input = "40.2/3";
	assert.equal(convertHandler.getNum(input),(40.2/3).toFixed(5));
	done();
    });
    test("Throw error on double-fraction",function(done) {
	let input = "3/4/5"
	assert.equal(convertHandler.getNum(input), undefined);
	done();
    });
    test("default to a numerical input of 1 when no numerical input is provided.",function(done) {
	let input=""
	assert.equal(convertHandler.getNum(input), 1);
	done();
    });
    test("Correctly read each valid input unit.",function(done) {
	let input="l"
	assert.equal(convertHandler.getUnit(input), "L");
	input="gal"
	assert.equal(convertHandler.getUnit(input), "gal");
	input="mi"
	assert.equal(convertHandler.getUnit(input), "mi");
	input="km"
	assert.equal(convertHandler.getUnit(input), "km");
	input="lbs"
	assert.equal(convertHandler.getUnit(input), "lbs");
	input="kg"
	assert.equal(convertHandler.getUnit(input), "kg");
	done();
    });
        test("Correctly return an error for an invalid input unit",function(done) {
	let input="quacksome"
	assert.equal(convertHandler.getUnit(input), undefined);
	done();
	});
    test("Correctly return the correct returnunit for each valid input unit",function(done) {
	 let input="lbs"
	 assert.equal(convertHandler.getReturnUnit(input), "kg");
	 input="kg"
	 assert.equal(convertHandler.getReturnUnit(input), "lbs");
	 input="mi"
	 assert.equal(convertHandler.getReturnUnit(input), "km");
	 input="km"
	 assert.equal(convertHandler.getReturnUnit(input), "mi");
	 input="L"
	 assert.equal(convertHandler.getReturnUnit(input), "gal");
	 input="gal"
	 assert.equal(convertHandler.getReturnUnit(input), "L");
	done();
    });
     test("correctly return the spelled-out string unit for each valid input unit.",function(done) {
	 let input="lbs"
	 assert.equal(convertHandler.spellOutUnit(input), "pounds");
	 input="kg"
	 assert.equal(convertHandler.spellOutUnit(input), "kilograms");
	 input="mi"
	 assert.equal(convertHandler.spellOutUnit(input), "miles");
	 input="km"
	 assert.equal(convertHandler.spellOutUnit(input), "kilometers");
	 input="L"
	 assert.equal(convertHandler.spellOutUnit(input), "liters");
	 input="gal"
	 assert.equal(convertHandler.spellOutUnit(input), "gallons");
	done();
     });
     test("correctly convert gal to L",function(done) {
	 let amount = 1.0;
	 let unit = 'gal';
	 assert.equal(convertHandler.convert(amount,unit), 3.78541);
	 done();
     });

     test("correctly convert L to gal",function(done) {
	 let amount = 1.0;
	 let unit = 'L';
	 assert.equal(convertHandler.convert(amount,unit), 0.26417);
	 done();
     });
     test("correctly convert mi to km",function(done) {
	 let amount = 1.0;
	 let unit = 'mi';
	 assert.equal(convertHandler.convert(amount,unit), 1.60934);
	 done();
     });
     test("correctly convert km to mi",function(done) {
	 let amount = 1.0;
	 let unit = 'km';
	 assert.equal(convertHandler.convert(amount,unit), 0.62137);
	 done();
     });
     test("correctly convert kg to lbs",function(done) {
	 let amount = 1.0;
	 let unit = 'kg';
	 assert.equal(convertHandler.convert(amount,unit),2.20462);
	 done();
     });
         test("correctly convert lbs to kg",function(done) {
	 let amount = 1.0;
	 let unit = 'lbs';
	 assert.equal(convertHandler.convert(amount,unit),0.45359);
	 done();
     });
});
});
