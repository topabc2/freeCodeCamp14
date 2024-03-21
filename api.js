'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');
const bodyParser = require("body-parser");

module.exports = function (app) {

  app.use(bodyParser());
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let row = 0;
      let column = 0;
      let valid = true;
      let conflict = [];
      let value = req.body.value;
      let coordinate = req.body.coordinate;
      let puzzle = req.body.puzzle;
      let regexp = /[A-I][1-9]/gi;

      if(!coordinate || !puzzle || !value) {
        res.json({ error: "Required field(s) missing" });
      }

      if(!regexp.test(coordinate) || coordinate.length > 2) {
        res.json({ error: "Invalid coordinate" });
      }

      regexp = /[1-9]/gi;

      if(!regexp.test(value) || value.length > 1) {
        res.json({ error: "Invalid value" });
      }

      if(puzzle.length !== 81) {
        res.json({ error: "Expected puzzle to be 81 characters long" });
      }

      for(let i = 0; i < 81; i++) {
        if(puzzle[i] !== "." && puzzle[i] !== "9" && puzzle[i] !== "8" && puzzle[i] !== "7" && puzzle[i] !== "6" && puzzle[i] !== "5" && puzzle[i] !== "4" && puzzle[i] !== "3" && puzzle[i] !== "2" && puzzle[i] !== "1") {
          res.json({ error: "Invalid characters in puzzle" });
        }
      }

      if(req.body.coordinate[0] === 'A') {
        row = 1;
      } else if(req.body.coordinate[0] === 'B') {
        row = 2;
      } else if(req.body.coordinate[0] === 'C') {
        row = 3;
      } else if(req.body.coordinate[0] === 'D') {
        row = 4;
      } else if(req.body.coordinate[0] === 'E') {
        row = 5;
      } else if(req.body.coordinate[0] === 'F') {
        row = 6;
      } else if(req.body.coordinate[0] === 'G') {
        row = 7;
      } else if(req.body.coordinate[0] === 'H') {
        row = 8;
      } else if(req.body.coordinate[0] === 'I') {
        row = 9;
      }

      column = Number(req.body.coordinate[1]);

      if(!solver.checkRowPlacement(req.body.puzzle, row, column, Number(req.body.value))) {
        valid = false;
        conflict.push("row");
      }

      if(!solver.checkColPlacement(req.body.puzzle, row, column, Number(req.body.value))) {
        valid = false;
        conflict.push("column");
      }

      if(!solver.checkRegionPlacement(req.body.puzzle, row, column, Number(req.body.value))) {
        valid = false;
        conflict.push("region");
      }

        if(req.body.puzzle[(row - 1) * 9 + column - 1] !== ".") {
          if(solver.checkRegionPlacement && solver.checkColPlacement && solver.checkRowPlacement) {
            res.json({ valid: true });
          }

          res.json({ valid: false });
        }

      if(valid) {
        res.json({ valid: valid });
      }

      res.json({ valid: valid, conflict: conflict });
    });
    
  app.route('/api/solve')
    .post((req, res) => {
      let puzzle = req.body.puzzle;

      if(!puzzle) {
        res.json({ error: "Required field missing" });
      }

      if(puzzle.length !== 81) {
        res.json({ error: "Expected puzzle to be 81 characters long" });
      }

      for(let i = 0; i < 81; i++) {
        if(puzzle[i] !== "." && puzzle[i] !== "9" && puzzle[i] !== "8" && puzzle[i] !== "7" && puzzle[i] !== "6" && puzzle[i] !== "5" && puzzle[i] !== "4" && puzzle[i] !== "3" && puzzle[i] !== "2" && puzzle[i] !== "1") {
          res.json({ error: "Invalid characters in puzzle" });
        }
      }

      if(!solver.solve(puzzle)) {
        res.json({ error: "Puzzle cannot be solved" });
      }

      res.json({ solution: solver.solve(puzzle) });
    });
};
