class Checker {
    static isNumber(value) {
      return typeof value === 'number' && !isNaN(value);
    }
  
    static isString(value) {
      return typeof value === 'string';
    }
  
    static isArray(value) {
      return Array.isArray(value);
    }
  }
  
  // Example usage
  const checker = new Checker();
  
  console.log(checker.isNumber(42));        // true
  console.log(checker.isNumber('42'));      // false
  console.log(checker.isString('Hello'));   // true
  console.log(checker.isString(42));         // false
  console.log(checker.isArray([1, 2, 3]));   // true
  console.log(checker.isArray('Not an array')); // false
  