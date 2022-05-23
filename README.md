# MEMORY CARD GAME

# 👉[LIVE PREVIEW](https://vikms95.github.io/react-memory-card) 👈

![alt text](src/assets/memolearn-preview.png?raw=true "screenshot of memory card gameplay")

## Description

This is a memory card game that consists of 7 phases.
The user can click the cards that are displayed. Each time a card is clicked, the player will get one point added to their score. 
If the user clicks a card that was already clicked, the score will be reset to 0 and will be brought back to the beggining of the game (just like in old-school videogames :D).
The best score of the user in the current session will be stored between games so it can challenge itself with getting the highest score possible, or who knows, maybe beating the game ;)

## Project Objectives

1. Build a memory game of programming tools, languages and concepts
2. Learn the usage of functional components
3. Take my first steps with Typescript typing system

## What I've learnt with this project

1. Use of React hooks and learn their quirks and differences opposed to what the lifecycle methods do offer
2. Defining interfaces for a given variable, parameters or function return values
3. Setting up a project with React and Typescript
4. Organize state to make sure all the rerenders are provided with the synced information of state

## Technologies used

1. React
2. Typescript
3. Jest

## Challenges I faced 

1. Creating interfaces for my components props so they would get the types they expected. Looked up on the internet some tutorials.
2. Setting up and using React with Typescript. It first felt super clunky but I ended up finding a good configuration.
3. Manage the phase update everytime the user would reach the end of every phase. I had to rearrange my state to accomplish this. 

## Room for improvement
Styling could be improved
Add localStorage functionality or database to store the highest score among users
Usage of some Hooks to avoid repeating code and make it look cleaner
