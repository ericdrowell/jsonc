#JSOND (Working Draft)

JSOND stands for "JSON Declarations".  It is a declarative language which is a subset of JSON.  Rather than representing objects, JSOND represents logical declarations. For example, the following condition:

    if (((a=="b") || (c>d)) && e!="f") {
      g="h";
    }

can be represented as

    var logic = 
      {"if": [
        {"and": [
          {"or": [
            {"eq": ["$a", "b"]},
            {"gt": ["$c", 5]}
          ]}, 
          {"not": {"eq": ["$e", "f"]}}
        ]},
        {"set": ["$g", "h"]}
      ]};
    
Arrays are used to pass paramaters.  the assignment `"set": ["$g", "h"]` means set the variable g to the string value "h".  

## Why is this useful?

* JSOND enables computer scientists to write logic with a standard syntax that can be compiled or interpreted in any language.  This means that you can write logic in JSOND, and execute it in JavaScript, PHP, Java, Scala, Ruby, or whatever.  The JSOND project outlines the specification and will eventually support compilers and interpreters for every major language on the planet.  
* You can change logic on the fly before interpreting it
* You can dynamically build logic at run time
* You can serialize and deserialize logic safely (I'm looking at you, eval)
* You can make logic changes without redeploying your application

## Full list of declarations

| Type           | Usage                                           | # Paramters |
| ---------------|-------------------------------------------------|-------------|
| **Logic**
| and            | return true if all parameters return true       | N           |
| or             | return true if any paramter returns true        | N           |
| not            | return true if A is false                       | 1           |
| if             | if A is true, execute B, else execute C         | 2-3         |
| **Comparison** 
| eq             | return true if A and B are equal                | 2           |
| gt             | return true if A is greater than B              | 2           |
| lt             | return true if A is less than B                 | 2           |
| ge             | return true if A is greater than or equal to B  | 2           |
| le             | return true if A is less than or equal to B     | 2           |
| **Assignment**     
| set            | set A to B                                      | 2           |
| **Arithmetic**    
| add            | return A + B                                    | N           |
| sub            | return A - B                                    | N           |
| div            | return A / B                                    | N           |
| mod            | return A % B                                    | N           |


