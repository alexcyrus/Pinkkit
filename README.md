Written Answers

JavaScript

1. Does JavaScript pass parameters by value or by reference?
In JavaScript, primitive data types are passed by value, and objects are passed by reference. Since objects can be mutated by passing it as a parameter to a function, parameters are thus passed by reference.

2. What is logged by the following code and why? 
const arr = [10, 12, 15, 21];
 for (var i = 0; i < arr.length; i++) {
   setTimeout(function() {
     console.log('Index: ' + i + ', element: ' + arr[i]);
}, 3000); }

Answer? Index: 4, element: undefined
Why? The following is an example of a JavaScript closure. The for loop displays numbers sequentially, and the setTimeout() function delays the execution of a function.

3. How would you compare two objects in JavaScript? 
JavaScript has built-in equality operators that check for object equality. Example below:

var captainAmerica = {
    occupation: "Superhero",
    team: "Avengers"
};
var ironMan = {
    occupation: "Superhero",
    team: "Avengers"
};

function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    // If we made it this far, objects
    // are considered equivalent
    return true;
}
// Outputs: true
console.log(isEquivalent(captainAmerica, ironMan));

4. Implement a recursive fibonacci function 
function fib(num) {
  if (num <= 1) return 1;

  return fib(num - 1) + fib(num - 2);
}

React

1. List the phases of the React component lifecycle
Initialization
- The React component is setting up the initial states and default props, if applicable.
Mounting
- The React component is ready to mount in the browser DOM. This phase gives hook methods for before and after mounting of components.
Updating
- This phase starts when the React component has taken birth on the browser and grows by receiving new updates. The component can be updated either by sending new props or updating the state.
Unmounting
-The component is not needed in this phase and thus will be unmounted from the DOM.

2.  What is the role of the reducer in Redux?
The reducer specifies how the application’s state changes in response to actions sent to the store. In Redux, all of the application’s state is stored as a single object. Once the state object is designed, the reducer is a pure function that takes the previous state and an action, and returns the next state.

3.  Show how you would embed 2+ components into one in React
The following code loops through the numbers array using the map() function. An <li> element is returned for each item. Afterwords, the resulting array of elements are assigned to listItems. The entire listItems array is included inside a <ul> element and rendered to the DOM.
  
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

Coding Exercise

For my coding exercise, I created a web front end to the Reddit API called Pinkkit, using vanilla JavaScript, HTML, CSS, and Fetch API. Users can search for a list of suggested topics, including any custom topic of their choice. Users can either limit the number of results or view all the results per page. I implemented the Fetch API to fetch data from the Reddit API. The fetch() method takes one mandatory argument and returns a Promise that resolves to the Response to that request. Once the results are shown on the page, users can see the posts' image (if any), title, link, subreddit, and score. For this exercise, I decided not to use any component-based frameworks for the purpose of challenging my pure JavaScript skills.

If I had more time, I would have implemented proper pagination as well as subreddit details for the topics.

Instructions for running application:
1. Install Parcell using Yarn
yarn global add parcel-bundler

2. Serve on localhost:1234
parcel index.html