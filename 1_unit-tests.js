const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver();

suite('Unit Tests', () => {
    test("valid puzzle string of 81 characters", function() {
        assert.equal(solver.solve("1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37."), '135762984946381257728459613694517832812936745357824196473298561581673429269145378');
    });

    test("puzzle string with invalid values", function() {
        assert.equal(solver.solve("test"), false);
    });

    test("puzzle string that is not 81 characters long", function() {
        assert.equal(solver.solve("test"), false);
    })

    test("valid row placement", function() {
        assert.equal(solver.checkRowPlacement("1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.", 1, 2, 3), true);
    });

    test("invalid row placement", function() {
        assert.equal(solver.checkRowPlacement("1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.", 1, 2, 1), false);
    });

    test("valid column placement", function() {
        assert.equal(solver.checkColPlacement("1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.", 1, 2, 5), true);
    });

    test("invalid column placement", function() {
        assert.equal(solver.checkColPlacement("1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.", 1, 2, 2), false);
    });

    test("valid region placement", function() {
        assert.equal(solver.checkRegionPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..', 1, 1, 1), true);
    });

    test("invalid region placement", function() {
        assert.equal(solver.checkRegionPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..', 1, 1, 2), true);
    });

    test("valid puzzle strings pass the solver", function() {
        assert.equal(solver.solve('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'), '135762984946381257728459613694517832812936745357824196473298561581673429269145378');
    });

    test("invalid puzzle strings fail the solver", function() {
        assert.equal(solver.solve("test"), false);
    });

    test("solver returns the expected solution", function() {
        assert.equal(solver.solve('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'), '135762984946381257728459613694517832812936745357824196473298561581673429269145378');
    });
});
