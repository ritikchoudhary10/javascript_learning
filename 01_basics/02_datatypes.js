"use strict"
/*
   > The "use strict" directive enables JavaScript's strict mode. 
   > JavaScript's strict mode was introduced in ECMAScript 5. 
   > It enforces stricter parsing and error handling on the code at runtime. 
   > It also helps you write cleaner code and catch errors and bugs that
    might otherwise go unnoticed.
*/

/*
    NOTE:---> Javascript is loosely typed programming language so here we don't
              define datatype explicitly . Javascript infer the type from the assigned 
              value from the variable.
*/

let num=18
/* 
    NUMBER  datatype 
         --> Primitive datatype used to store any numeric value either it 
             is a integer or decimal value.
    Range --> 2 to the powerof 53.

*/
// let num2=121212121121212121212121212121211121212121212121
     //   Compile time error we will get 
     //   Numeric literals with absolute values equal to 2^53 
     //   or greater are too large to be represented accurately as integers.

let num2=121212121121212121212121212121211121212121212121n

/*
    BIGINT datatype
    --> Primitive datatype used to store numeric data which number datatype 
        is unable to store and this datatype is implemented by using suffix 'n'.

    Range more than Number datatype
*/

let name="Ritik"
/*
    STRING datatype
    --> Primitive datatype used to store string literals or value inside a 
        variable. This datatype can stor any kind of value in this variable because
        in realword what we write or what we gives input all can be represented with String.
*/

let isActive=true;
/*
    BOOLEAN datatype 
        --> primitive datatype used to store boolean values .
            these values can be true or false or 0 or 1 . 
            these values 0 and 1 comes when boolean is typecasted
*/