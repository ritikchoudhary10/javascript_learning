/* 
#   Why do we need variable ?
        - we need variable to store information for 
        performing some operation that can be initialization logic 
        or validation logic or mathematical calculation logic.

        -to perform all these opration we require a variable to store
         the data.

#   There are basically 3 keywords are there in javascript 
    to declare a variable :-
    1> var
    2> const
    3> let

    Examples -:
 */
   //1> with const keyword
    const accountId=12345;

   //2>with let keyword
    let accountEmail="ritik@google.com"

   //3>with var keyword
    var accountPassword="Ritik@123"

   //4>without using any keyword
    accountCity="Vidisha"
    

    //@ const account;
      //err msg --> const declarations must be initialized.
      // if we dont initialize const variable the compiler
      // will show error 

   

      console.log(accountEmail);

      // 0--> We can use another method of console to print out data 
      //       this is a fancier way to print data .
      
      console.table([accountEmail,accountId,accountPassword,accountCity])
      /*
            the data will be printed in the given below format.\
            this only reduces use typing console.log() again and again
            ┌─────────┬────────────────────┐
            │ (index) │       Values       │
            ├─────────┼────────────────────┤
            │    0    │ 'ritik@google.com' │
            │    1    │       12345        │
            │    2    │    'Ritik@123'     │
            │    3    │  'Madhya Pradesh'  │
            └─────────┴────────────────────┘
         */
        // Now lets change the data in the variable that we have created
         
         // @  accountId=2
         //   TypeError: Assignment to constant variable
         //   It is not allowed to reasign a value after the 
         //   constant variable declaration with assigned value

         accountEmail="ritik@microsoft.com"
         accountPassword="Ritik@111"
         accountCity="Indore"

       console.table([accountEmail,accountId,accountPassword,accountCity])
      /*
            Values gets changed in all the variables except const
            ┌─────────┬───────────────────────┐
            │ (index) │        Values         │
            ├─────────┼───────────────────────┤
            │    0    │ 'ritik@microsoft.com' │
            │    1    │         12345         │
            │    2    │      'Ritik@111'      │
            │    3    │       'Indore'        │
            └─────────┴───────────────────────┘
      */
     /*
           Q> What is a const , let , var and why without using any of three keyword 
               i an able to create variable ?
            -->To declare a variable in javascript we have 3 ways 
                  - using const keyword this declaration doesn't allow further assignments
                  - using let keyword this declaration is used to define variable 
                  - using var keyword this declaration is used to define variable

            NOTE :- declaring a variable without any of these 3 keyword is not recommended ,it is bad 
                     coding practice.
               
               In mordern javscript practice we dont use var keyword for declaring a variable .
                  because in earlier time there was no any concept called scope due which too many problems
                  are faced by the developers.

               To overcome these problems and make js more developer friendly a concept called  scope
                have been introduced by ECMAScript (an organisation for writing standereds for javascript) 
                in its ES6 version
               --> Why we are not using var instead using let and const ?
                     --: var doesn't provide scope due which this creates a conflict between variables  
                           with same name in different scopes .
                           So as a solution let and const keywords are introduced which removes the confilct
                           with the same name variable but are in different scope.
               
               These scope can be ablock scope or functional scope.
               
               NOTE:--> Prefer not to use var because of issue in block scope and functional scope.


            Q> What we will get on console if we print a variable which we doesn't assign any value ?
               --> Undefined
           
               Undefined is the base of next file .........!
     */
    