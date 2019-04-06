# Essen Energy Hackathon Application 2019

This is a little web application build on top of Next.js to visualize how to shift a load.

## How to get started

Install required packages:

`yarn`

Start Next.js dev server:

`yarn run dev`

Open localhost:3000 in your browser and you can see the result.

## How to recompile & deploy the smart contract

cd in the ethereum folder

`cd ethereum`

Compile via:

`node compile.js`

Don't forget to change the contract path in the compile script and to paste your seed phase in the deploy.js.

In the same directory, deploy via:

`node deploy.js`
