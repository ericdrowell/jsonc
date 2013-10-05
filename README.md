#JSOND

JSOND stands for (JSON Declarations).  It is a superset of JSON.  Rather than representing objects, JSOND represents logical declarations. For example, the following condition:

`if ((a==b) || (c>d) && e!=f) {
  g=h;
}`

can be represented as

`"if": [
  "and": [
    "or": [
      "eq": ["a", "b"],
      "gt": ["c", "d"]
    ],
    "ne": ["e", "f"]
  ],
  set: [g, h]
]`

## Why is this useful?

JSOND enables computer scientists to write logic with a standard syntax that can be compiled and executed in any language.  This means that you can write logic in JSOND, and execute it in JavaScript, PHP, Java, Scala, Ruby, or whatever.  The JSOND project outlines the specification and will eventually support compilers for every major language on the planet.

## Full list of declarations

