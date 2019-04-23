# Simple chatbot sample #

This is a simple chatbot demo built with [Express](https://expressjs.com/), [node-nlp](https://www.npmjs.com/package/node-nlp), [ReactJS](https://reactjs.org/) and [Redux](https://redux.js.org/).

## Project Structure ##
```
.
├── chtbot-api
└── chatbot-ui

```
`chatbot-api`: Contains backend codes written in Express and the natural language utilities node-nlp
`chatbot-ui`: Contains frontend codes written in ReactJS and Redux

## Install packages need for the project ##
Install npm packages in project root folder, `./chatbot-api` and `./chatbot-ui` first using `npm install`.

## To start the project ##
To start the frontend and backend concurrently,run `npm start` in project root folder.

To start backend only, run `npm start` in `./chatbot-api`. The Express server default serves at port `3100`.

To start the frontend only, run `npm start` in `./chatbot-ui`.

## Project Settings ##
**To change the default port of Express server:**
Change the variable `PORT` which can be found inside `./chatbot-api/.env`.

**To change the default API domain in frontend:**
Change the variable `REACT_APP_API_DOMAIN` which can be found inside `./chatbot-ui/.env`.

## Adding data to train the chatbot ##
The mapping of question and answers are put inside `./chatbot-api/data/questions` and `./chatbot-api/data/answers`. The data will then be used by [node-nlp](https://www.npmjs.com/package/node-nlp).

For details node-nlp please read [example usage](https://www.npmjs.com/package/node-nlp#example-of-use) provided by [node-nlp](https://www.npmjs.com/package/node-nlp).

***

### Special thanks ###

All my friends who have given me comments on this project. It really helped me a lot in making this project better!
