
# Significance of union and intersection types in Typescript

TypeScript allows us to build new types from the exting types using a variety of operators. There are variety of combine type with what  we can combine multiple types. The most common combine types are union and intersection. In this blog we're going to learn about the importance of union and intersection types.


## Union Types
```javascript
function Squire(x:string | number) {
    if(typeof x === "string"){
        return Number(x)* Number(x)
    } else if(typeof x ===  "number"){
        return x*x
    }
  }
```

In the above example we are creating a function that will return the squire of the passing value. Here we don't know if the user is gonna send a string or a number value. But With the help of union operator ( | ) we can handle both the number and string formate for this function. Without union operator we would need to create two saperate functions, one for them for the string input types and one for the number input type. Union types just saves our day.



## Intersection Types
```javascript
type CarInfo = {
    name: string,
    model: string,
    year: number,
    price: number
}

type CarFunctionality = {
    startEngine: ()=>void,
    stopEngine: ()=>void
}

type Car = CarInfo & CarFunctionality
```

In the above example we have CarInfo type where we can have all the informations about the Car like name, model, year etc But cars functionality is  available in the CarFunctionality type like starting the engine or stoping the engine. A complete car cannot have just the car info or just the car functionality. In order to have complete car we need both of  the car informations and functionalities in there. So, we need to combine those two types. Here the intersection ( & ) type comes handy. We can combine this two types and create a new Car type where we are having all of the Car informations and Car functionalities at the same time.



