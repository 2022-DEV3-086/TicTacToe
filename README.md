# Tic Tac Toe

This is a game project developed in ReactJS that helps users to play Tic Tac Toe game with the rules provided below.

### Rules

1.  X always goes first.

2.  Players cannot play on a played position.

3.  Players alternate placing X’s and O’s on the board until either:

     - One player has three in a row, horizontally, vertically or diagonally.
 
     - All nine squares are filled.

4.  If a player is able to draw three X’s or three O’s in a row, that player wins.

5.  If all nine squares are filled and neither player has three in a row, the game is a draw.

## Getting Started

1. Checkout the source code.

2. Open the source code directory in command line interface(CLI) and run `npm install`. This will add all the dependencies mentioned in the `package.json` file.

3. Run `npm start` for opening the app in the development mode. The application can be seen in `http://localhost:3000/`.

4. Run `npm test`  for launching the test runner in the interactive watch mode. 

5. Run `npm run build` for building the app for production to the `build` folder.

6. Run `npm run coverage` for obtaining test coverage report.
   
### Test Coverage Report
>    
>     PASS  src/tictactoe/TicTacToe.test.js
>     PASS  src/board/Board.test.js
>     PASS  src/status/Status.test.js
>    
>    File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
>    -------------------|---------|----------|---------|---------|-------------------
>    All files          |     100 |      100 |     100 |     100 |                   
>     board             |     100 |      100 |     100 |     100 |                   
>      Board.js         |     100 |      100 |     100 |     100 |                   
>     constants         |     100 |      100 |     100 |     100 |                   
>      Constants.js     |     100 |      100 |     100 |     100 |                   
>      TestConstants.js |     100 |      100 |     100 |     100 |                   
>     status            |     100 |      100 |     100 |     100 |                   
>      Status.js        |     100 |      100 |     100 |     100 |                   
>     tictactoe         |     100 |      100 |     100 |     100 |                   
>      TicTacToe.js     |     100 |      100 |     100 |     100 |                   
>    
>    
>    Test Suites: 3 passed, 3 total 
> 
>    Tests:       23 passed, 23 total 
> 
>    Snapshots:   0 total  
> 
>    Time:        0.928 s, estimated 1 s  
> 
>    Ran all test suites.