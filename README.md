#  ToDo List

This project was created with Redux pattern. It is an app to add new items to a ToDo List. You can delete elements in the list, mark them as completed or cleanup the whole list. The input is configured to start typing right as the app starts and you can add the item with "ENTER" or with the button provided. 
It uses Ant.design for UI components and LocalStorage for presistency of the data. 

## Extra

The app was also developed with the useReducer hook, I finished the app first with this approach since I found it simplier and faster, but I was adviced to do it with what I was asked, redux.
A [Link](https://www.robinwieruch.de/redux-vs-usereducer) provided by a mentor suggested this following approaches:
- Use useState for basic and simple/small size applications.
- Use useState + useReducer + useContext for advanced/medium size applications.
- Use useState/useReducer + Redux for complex/large size applications.

You can find this approach with only the useReducer Hook in the branch `dev-hooks`, it is working as fine as the main branch, but with this different approach.

## Available Scripts

In the project directory, to get started you must run:

### `npm install`

It is used to install all the dependencies used in the app.

## Run App

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
