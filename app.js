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


// Negative Zero //

//   var trendrate = -0
//   trendrate === -0  // true

//   trendrate.toString() // '0' OOPS
//   trendrate === 0 // true OOPS


// Fundamental Objects //
// Built-in Objects
// Native Functions

// Use new               Dont use:
// Object()                // String()
// Array()                 //Number()
// Function()              // Boolean()
// Date()
// RegExp()
// Error();       
// let yesterday = new Date("July 6, 2023")
// console.log(yesterday.toUTCString());

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

//    console.log(Number(""));   // 0
//     Number("  \t\n");     // 0
//     Number(null);        // 0
//     Number(undefined);   // NaN
//     Number( [] );       // 0
//     Number( [1,2,3] );  //NaN
//     Number( [null] );   // 0
//     Number( [undefined] ); // 0
//     Number( {} );   // NaN

//     String( -0 )  // "0"
//     String( null )  // "null"
//     String( undefined ) // "undefined"
//     String( [null] )   // " "
//     String( [undefined] ) // " "

//     Boolean( new Boolean(false) ) // "true"


// Coercion Exercises

// function isValidName(name) {
//     if (typeof name == "string" && name.trim().length >= 3) {
//         return true
//     }
//     return false;
// }

// function houseAttended(attended, length) {
//     if (typeof attended == 'string' && attended.trim() != "") {
//         attended = Number(attended)
//     }
//     if (typeof length == 'string' && length.trim() != "") {
//         length = Number(length)
//     }
//     if (
//         typeof attended == 'number' &&
//         typeof length == 'string' &&
//         attended >= 0 &&
//         length >= 0 &&
//         Number.isInteger(attended) &&
//         Number.isInteger(length) &&
//         attended <= length
//     ) {
//       return true
//     }
//     return false;
// }



                                 // EQUALITY //
                            // == VS === //
    // == allows coercion (types different) == COERCIVE EQUALITY
    // === disallows coercion (types same) === NON-COERCIVE EQUALITY

// let x = null;
// let y = undefined;

// console.log(x == y);

    // == Summary
// If the types are same : ===
// If null or undefined: equal
// If non-primitives: ToPrimitive
// Prefer: ToNumber


   // Double Equals Corner cases

   // [] == ![]  > true ?!!!! wat!!

//    var workStudents = []
//    var workStudents1 = []
//    if(workStudents == !workStudents1) let me show how algorith works
// if([] == false)
// if("" == false)
// if(0 == false)
// if(0 == 0)
//this is how algorithm works

// DOUBLE EQUALS CORNER CASES WITH BOOLEANS:

// var workStudents = []

// if(workStudents){
//     // answer will be true
// }
// if(workStudents == true){
//     // here answer will be false there is the corner case with booleans :(
// }
// if(workStudents == false){
//     //but there will be false answer :(
// }


    // how we can avoid corner cases with Double equals
    // There is some tips you should AVOID
    // 1:   == with 0 or "" (or even "  ")
    // 2. == with non-primitivies
    // 3. == true or == false: allow ToBoolean or use ===

     


                   // TYPESCRIPT AND FLOW //

    // Benefits
// Catch type-related mistakes
// Communicate type intent 
// Provide IDE feedback

   // Caveats - Ogohlantirishlar

// Inferencing is best-guess, not a guarantee
// Annotations are optional 
// Any part of application that is not typed introduces uncertanity 

//let student: string = "Kyle"
// let student: number = 14;


   // Pros                                                        // Cons
//They make types more  obvious in code                      |  They use "non-JS-standard" syntax (or code comments)
//Familiarity: they look like other language's type systems  |  They require* a build process, which raises the barrier to entry
//Extremely popular these days                               |  Their sophistication can be intimidating to those without prior formal types experience
//They're very sophisticated and good at what they do        |  They focus more on "static types" (variables, parameters, returns, properties, etc) than value types
//                                                           |  The only way to have confidence over the runtime behavior is to limit/eliminate dynamic typing




               // SCOPE //
