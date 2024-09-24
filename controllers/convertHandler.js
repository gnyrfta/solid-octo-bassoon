function ConvertHandler() {
  
    this.getNum = function(input) {

	let resultString;
	
	let integerRegex=/[0-9]+/
	let floatRegex = /\d+(\.\d+)?/
	let fractionRegex=/\d+(\.\d+)?\/\d+(\.\d+)?/
	let doubleFractionRegex=/\S*\/\S*\// //zero or more not ws followed by slash followed by zero or more not ws followed by slash.
	let result;
	if(doubleFractionRegex.test(input))
	{
	    console.log("Double fraction");
	    result=undefined;
	}
	else if(fractionRegex.test(input))
	{
	    console.log("A fraction.");
	    resultString=input.match(fractionRegex);
	    let splitResult = resultString[0].split('/');
	    let denominator = parseFloat(splitResult[0]);
	    let nominator = parseFloat(splitResult[1]);
	    result=denominator/nominator;
	    result=result.toFixed(5);
	}
	else if(floatRegex.test(input))
	{
	    console.log("A float.");
	    resultString = input.match(floatRegex);
	    result = parseFloat(resultString[0]);      
	}
	else if(integerRegex.test(input))
	{
	    resultString = input.match(integerRegex);
	    result = parseFloat(resultString);
	}
	else
	{
	    resultString=1;
	    result = parseFloat(resultString);
	}
	if(!result==undefined)
	{
	    result = Number(result).toFixed(5);
	}
	return result;
    };
  
    this.getUnit = function(input) {
	let characterRegex=/[a-z]+/i
	let result=input.match(characterRegex)[0];
	if(result!=='L' && result!=='l')
	{
	    result=result.toLowerCase();
	}
	else
	{
	    result='L';
	}
	switch(result) {
	case 'L': break;
	case 'gal': break;
	case 'mi': break;
	case 'km': break;
	case 'lbs': break;
	case 'kg': break;
	default: result=undefined;
	}
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
      switch(initUnit) {
      case 'gal':
	  result='L';
	  break;
      case 'L':
	  result='gal';
	  break;
      case 'lbs':
	  result='kg';
	  break;
      case 'kg':
	  result='lbs';
	  break;
      case 'mi':
	  result='km';
	  break;
      case 'km':
	  result='mi';
	  break;
      default:
	  result='unknown';
      }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    	switch(unit) {
	case 'L': result='liters'; break;//Using american spelling. 
	case 'gal': result='gallons'; break;
	case 'mi': result='miles'; break;
	case 'km': result='kilometers';break;
	case 'lbs': result='pounds'; break;
	case 'kg': result='kilograms'; break;
	default: result=undefined;
	}
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    let result;
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      switch(initUnit) {
      case 'L':
	  result=initNum/galToL;
	  break;
      case 'gal':
	  result=initNum*galToL;
	  break;
      case 'mi':
	  result=initNum*miToKm;
	  break;
      case 'km':
	  result=initNum/miToKm;
	  break;
      case 'kg':
	  result=initNum/lbsToKg;
	  break;
      case 'lbs':
	  result = initNum*lbsToKg;
	  break;
      case 'kg':
	  result= initNum/lbsToKg;
	  break;
      default :
	  result=initNum; //Why?
      }
      result = Number(result).toFixed(5);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    return result;
  };
  
}

module.exports = ConvertHandler;
