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
        (record1,record2)=> (record1.name < record2.name) ? -1 : (record1.name > record2.name) ? 1 : 0
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