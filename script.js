const _ = {

    //recreation of the clamp method
    clamp(number, lower, upper){
      let lowerClampedValue = Math.max(number, lower)
      let clampedValue = Math.min(lowerClampedValue, upper)
      return clampedValue
    },
    
    //recreation of the inRange method
    inRange(number, startVal, endVal){
      let startSub;
      if(endVal === undefined){
        endVal = startVal;
        startVal= 0;
      }
      if(startVal > endVal){
        startSub = startVal;
        startVal = endVal;
        endVal = startSub;
      }
      if(number < startVal){
        return false;
      } else if (number >= endVal){
        return false;
      } else {
        return true;
      }
    },
  
    //recreation of the words method
    words(string){
      let stringList = string.split(' ');
      return stringList;
    },
    
    //recreation of the pad method
    pad(string, len){
      let diff;
      let diffFinal;
      let paddingAmtEnd;
      if(len <= string.length){
        return string;
      } else {
        let startPaddingLength = Math.floor((len - string.length)/2);
        let endPaddingLength = len - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString
      }
    },
    
    //recreation of the has method
    has(object, key){
      if(object[key]){
        return true;
      } else {
        return false;
      }
    },
    
    //recreation of the invert method
    invert(object){
      let invertedObject = {};
      for(let key in object){
        let originalValue = object[key];
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    },
    
    //recreation of the findKey method
    findKey(object, func){
      for(let key in object){
        if(func(object[key])){
          return key;
        } return undefined;
      }
    },
  
    //recreation of the drop method
    drop(array, num){
      let arrayCopy;
      if(!num){
        num = 1;
      } 
      arrayCopy = array.slice(num);
      return arrayCopy
    },
  
    //recreation of the dropWhile method
    dropWhile(array, predicate){
      for(let i = 0; i < array.length; i++){
        while(predicate(array[i], i, array)){
          array.shift();
        }
        return array;
      }
    },
  
    //recreation of the chunk method
    chunk(array, size){
      let generatedChunks = [];
      if(!size){
        size = 1;
      } else {
        for(let i = 0; i < array.length; i+=size){
          let chunk = array.slice(i, i+size);
          generatedChunks.push(chunk);
        }
      }
      return generatedChunks;
    }
  };