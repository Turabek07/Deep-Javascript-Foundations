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

function teacher() { }

var myTeacher = function anotherTeacher() {
    console.log(anotherTeacher)
}

console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher);//but there will be REFERENCE ERROR because anotherTeacher function is not in the "GLOBAL SCOPE"

// NAMED FUNCTION EXPRESSSIONS //

var clickhandler = function () { // <- anonymus Function expression

}
var keyhandler = function keyhandler() { // <- named Function expression

}
// NAMED FUNCTIONS BENEFITS:
// 1.Reliable function self-refernce (recursion,etc)
//2.More debuggable stack traces
// 3.More self-documenting code

//-----------------------------------------------------------------------------------------------------------------------------
//ARROW FUNCTIONS //
const numbers = [1, 2, 3, 4];

// Using traditional function as a callback
const squaredNumbers = numbers.map(function (num) {
    return num * num;
});

// Using arrow function as a callback
const squaredNumbersArrow = numbers.map((num) => num * num);

console.log(squaredNumbers);
console.log(squaredNumbersArrow);


// Traditional Function
function sumArray(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}


// Arrow Function with Block Statement
const sumArrayArrow = (numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArrayArrow([1, 2, 3, 4])); // Output: 10


// --------------------------------------------------------------------------------------------------------


// (Named)declaration Function 
//             >
//    Named Function Expression         
//             >
//    Anonymus Function Expression  <-- this means:FUnction Declaration has some benefits over a Named Function Expression but Named Function expression has Huge benefits over a Anonymus Function expression


// Function Declaration
function addNumbers(a, b) {
    return a + b;
}

// Calling the function
const sum = addNumbers(5, 10);
console.log(sum); // Output: 15

//----------------------------------------------

// Named Function Expression
const multiplyNumbers = function multiply(a, b) {
    return a * b;
};

// Calling the function
const product = multiplyNumbers(3, 7);
console.log(product); // Output: 21

//----------------------------------------------

// Anonymous Function Expression
const divideNumbers = function (a, b) {
    return a / b;
};

// Calling the function
const result = divideNumbers(20, 5);
console.log(result); // Output: 4


// Some Solutions
// Examples for Function Declaration //

function getStudentById(studentId) {
    return studentRecords.find(function matchId(record) {
        return (record.id == studentId);
    })
}

function printRecords(recordIds) {
    var records = recordIds.map(getStudentById);
    records.sort(function sortByNmaeAsc(record1, record2) {
        if (record1.name < record2.name) {
            return -1
        }
        else if (record1.name > record2.name) {
            return 1
        }
        else {
            return 0
        }
    })
    records.forEach(function printRecord(record) {
        console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Nor Paid"}`);
    })
}


function paidStudentsEnrollement() {
    var idsToEnroll = studentRecords.filter(function needsToEnroll(record) {
        return (record.paid && !currentEnrollment.includes(record.id));
    })
        .map(function getStudentID(record) {
            return record.id
        })
    return [...currentEnrollment, ...idsToEnroll];
}

function remindUnpaid(recordIds) {
    var unPaidIds = recordIds.filter(function isunPaid(studentId) {
        var record = getStudentById(studentId);
        return !record.paid
    })
    printRecords(unPaidIds)
}
//---------------------

// Examples to Arrow Function
var getStudentById = studentId =>
    studentRecords.find(
        record => record.id == studentId
    )

var printRecords = recordIds =>
    recordIds.map(getStudentById)
        .sort(
            (record1, record2) => (record1.name < record2.name) ? -1 : (record1.name > record2.name) ? 1 : 0
        )
        .forEach(
            record => console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Nor Paid"}`)
        )

var paidStudentEnroll = () => [
    ...currentEnrollment,
    ...(
        studentRecords.filter(
            record => (record.paid && !currentEnrollment.includes(record.id))
        )
            .map(record => record.id)
    )
];

var remindUnpaid = recordids =>
    printRecords(
        recordids.filter(
            studentId => !getStudentById(studentId).paid
        )
    );

var currentEnrollment = [410, 105, 664, 375];
var studentRecords = [
    { id: 313, name: "Frank", paid: true },
    { id: 423, name: "Zuzy", paid: true },
    { id: 123, name: "John", paid: false },
    { id: 324, name: "Fry", paid: false },
    { id: 387, name: "Karol", paid: false },
    { id: 613, name: "Zuzu", paid: true },
    { id: 393, name: "Jony", paid: true },
    { id: 785, name: "Mac", paid: false },
    { id: 643, name: "Jack", paid: false },
    { id: 395, name: "Sui", paid: true },
    { id: 163, name: "Seea", paid: true },
    { id: 205, name: "Alan", paid: false },
]

// -----------------------------------------------------------------------------------------------------

// LEXICAL SCOPE AND DYNAMIC SCOPE //

function outer() {
    const outerVariable = 'Outer';

    function inner() {
        const innerVariable = 'Inner';
        console.log(innerVariable);  // Output: Inner
        console.log(outerVariable);  // Output: Outer
    }

    inner();
}

outer();
//   In this example, the inner function has access to both innerVariable and outerVariable.
//   It can access innerVariable because it is declared within the same scope.
//   It can access outerVariable because it is declared in the outer scope(in the outer function), which is the lexical parent of the inner function.

//   Lexical scoping facilitates modular and maintainable code by providing clear boundaries for variable accessibility.
//   It allows for predictable variable resolution, as the scope of a variable can be determined by examining the code's structure without the need to track runtime context or execution flow. 




const globalVariable = 'Global';

function outer() {
    console.log(globalVariable);  // Output: Global
}

outer();
// In this example, the outer function does not declare a variable called globalVariable. However, it can access the globalVariable
//  defined outside the function because of lexical scope. The outer function "looks up" the variable in the surrounding scope, finding it in the global scope.


// HOISTING //

// 1.Variable Hoisting:
// Variable declarations, using either var, let, or const, are hoisted to the top of their scope but are not initialized.
//  If you try to access the variable before its declaration, it will exist but hold the value undefined.

console.log(myVar); // Output: undefined
var myVar = 42;
console.log(myVar); // Output: 42

// The variable myVar is hoisted, but its assignment (= 42) is not,
//  so it is undefined until the assignment statement is reached during execution.


//   2. Function Hoisting:
// Function declarations are fully hoisted, including both the function name and its definition.
//  This means you can call a function even before its actual declaration in the code.

foo(); // Output: "Hello from foo!"

function foo() {
    console.log("Hello from foo!");
}

// The function foo is hoisted to the top of the scope, so it can be called anywhere within the same scope.



// 3.Block Scopes and Hoisting:
// Variables declared with let and const in block scopes (e.g., inside if statements or loops) are hoisted as well but remain in the 
// "temporal dead zone" until their actual declaration. Trying to access them before the declaration results in a ReferenceError.


if (true) {
    console.log(myVar); // Output: ReferenceError: Cannot access 'myVar' before initialization
    let myVar = 42;
}

//   In this example, myVar is hoisted to the top of the block, 
//   but it is in the temporal dead zone until the let myVar = 42; statement is encountered.

// Hoisting is a language feature designed to provide flexibility in how code is written, 
// but it's best practice to declare variables and functions before using them to avoid any confusion or unexpected behavior. Additionally, 
// using let and const for variable declarations in block scopes can help prevent issues caused by hoisting in those cases.

// Var Hoisting

// In JavaScript, variables declared with var are hoisted to the top of their scope, but only the declaration is hoisted, not the initialization. 
// This means that the variable is recognized throughout its scope, but its value will be undefined until it is assigned a value in the code.


console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

// **********
var x; // Declaration is hoisted
console.log(x); // Output: undefined
x = 10; // Initialization remains in place
console.log(x); // Output: 10


// Let and Const Hoisting

// Variables declared with let and const also hoist, but they have a slightly different behavior compared to var.
// Hoisting with let and const works the same way, but they are not initialized with undefined. Instead
// they enter into the "temporal dead zone," where you cannot access them before they are declared in the code.
// Attempting to access them before the declaration will result in a ReferenceError.

console.log(y); // Throws ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Output: 20


let a; // Declaration is hoisted, but not initialized
console.log(a); // Throws ReferenceError: Cannot access 'y' before initialization
a = 20; // Initialization remains in place
console.log(a); // Output: 20



// To summarize, both var, let, and const are hoisted, but var is initialized with undefined and accessible before its declaration,
// while let and const enter the temporal dead zone and cannot be accessed before they are declared.
//  It is considered good practice to declare variables at the beginning of their scope to avoid confusion and potential issues with hoisting