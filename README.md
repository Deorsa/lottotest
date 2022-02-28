To overcome a CORS error i'm using a proxy. To activate the proxy
navigate to https://cors-anywhere.herokuapp.com/ in you browser click the start demo button.

# Lottotest

This project is an excercise to demonstrate ability in Angular.  The requirements outlined below need to be satisfied.  It is design to 
test:
- Basic understanding of HTTP communication
- User interface design in HTML and CSS/SASS
- Basic angular routing
- Form validation concepts
- Algorithms and array handling

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

You may use external libraries if required.  Try not to bloat it though.

Please fork this repository and send us back a public version.

## Requirements

This project is a simple lottery ticket purchasing screen.  It will allow the user to purchase
up to 10 lines of 6 numbers between 1 and 45.

The form built in this task must use Angular's Reactive Forms.

The form should be in its own component and routed to using the angular routing.  You can use the cli to generate the component as `ng g c buy-tickets`.  See the `angular-routing.module.ts` file where there is already a `/buy-tickets` route.

The user must be able to add and remove lines as they see fit.  Entering in their personal choices or requesting a set of random numbers.

The random numbers must be obtained via HTTP requests to this [Random Number API](http://www.randomnumberapi.com/).  Bonus points if dependency injection is used to provide this functionality via a service.

It must look at least a little nice, with just a touch of CSS - please don't use the default unstyled buttons and inputs.

It must validate that the user has:
- Filled in all of the appropriate boxes.
- Not added duplicate numbers on each line.
- Not added duplicate lines.

The user should press a button to trigger the validation and be appropriately warned of success or failure.

## Time limitations

There is no time limit but ideally it should not take longer than two days.
You can send it unfinished if you think it requires more time.
