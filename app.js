                                    // TYPES //
            // PRIMITIVE TYPES //
// undefined                  /// undeclared
// string                     /// null
// number                     /// function
// boolean                    /// array
// object                     /// bigint
// symbol


// var v;
// typeof v;   //"undefined"

// v = '1';
// typeof v;   //'string'

// v = 2;
// typeof v;   //'Number'

// v = true;
// typeof v;  //'Boolean'

// v = {};
// typeof v;  //"Object"

// v = Symbol();
// typeof v;   //"symbol"

// typeof doesnotExist;  //"undefined"

// var v = null;
// typeof v    //"object"

// v = function(){};
// typeof v;   //"function"

// v = [1,2,3]
// typeof v;   //'object'

// var v = 42n 
// // or //
// var v = BigInt(42)
// console.log(typeof v);  //"bigint"
     

                               // ABSTRACT OPERATIONS > TOSTRING() > TONUMBER > TOBOOLEAN //
             // when  we use toNumber abstract operation we get like this answear
 // "" - 0                           
//  "0xaf"  - 175
// "0" - 0
// "-0" -  -0
// "009" - 9
// "3.14159" - 3.14159
// "0." - 0
// ".0" - 0
// "." - NaN
// [""] > 0
// ["0"] > 0
// ["-0"] > -0
// [null] > 0
// [undefined] > 0
// [1,2,3] > NaN
// [[[[]]]] > 0


              // TOBOOLEAN ABSTRACT OPERATIONS //
 
    // FALSY     ------     TRUTHY //
   // 0,-0                  "foo"
   // null                  23
   // NaN                   {a:1}
   // false                 true
   // undefined             function(){}
   //                       ... also it is more truthy value



                // Coercion: Corner Cases List  //

   console.log(Number(""));   // 0
    Number("  \t\n");     // 0
    Number(null);        // 0
    Number(undefined);   // NaN
    Number( [] );       // 0
    Number( [1,2,3] );  //NaN
    Number( [null] );   // 0
    Number( [undefined] ); // 0
    Number( {} );   // NaN

    String( -0 )  // "0"
    String( null )  // "null"
    String( undefined ) // "undefined"
    String( [null] )   // " "
    String( [undefined] ) // " "

    Boolean( new Boolean(false) ) // "true"


