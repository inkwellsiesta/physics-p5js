# p5js Physics Engine

## Getting started

### Running the app

* Clone the physics-p5js project from `https://github.com/inkwellsiesta/physics-p5js.git` into a new Cloud9 workspace
* Open your new workspace
* Double-click on `index.html`
* Click Preview -> Live Preview File at the top of the window
* Click the button in right pane next to "Browser" that says "pop out in new window"

## Instructions

Your first task is to take Firebase messages from the message store and display them
in chatty's UI.

You can already send new messages to Firebase and see new messages from everyone
else in the console, but it will be more convenient for most users to see
messages in the provided `<textarea>`.

**You are going to be editing `sketch.js`, dont' worry about changes anywhere else**

1. Get the `<textarea>` in JavaScript using `document.getElementById`
2. Add some "static" text to the text area using `.value`
3. Update the `<textarea>` with every new message that comes in with the username and message added together (concatenated) as a single string
4. Add *all* the messages to the `<textarea>` by separating with a newline character `'\n'`

## Background reading

* [p5js](https://p5js.org/reference/)
* [Hooke's law](https://en.wikipedia.org/wiki/Hooke%27s_law/)
* [Euler method](https://en.wikipedia.org/wiki/Euler_method/)
