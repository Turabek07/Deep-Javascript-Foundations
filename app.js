                                    // TYPES //
            // PRIMITIVE TYPES //
// undefined                  /// undeclared
// string                     /// null
// number                     /// function
// boolean                    /// array
// object                     /// bigint
// symbol


var v;
typeof v;   //"undefined"

v = '1';
typeof v;   //'string'

v = 2;
typeof v;   //'Number'

v = true;
typeof v;  //'Boolean'

v = {};
typeof v;  //"Object"

v = Symbol();
typeof v;   //"symbol"

typeof doesnotExist;  //"undefined"

var v = null;
typeof v    //"object"

v = function(){};
typeof v;   //"function"

v = [1,2,3]
typeof v;   //'object'

var v = 42n 
// or //
var v = BigInt(42)
console.log(typeof v);  //"bigint"