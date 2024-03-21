class SudokuSolver {

  validate(puzzleString) {
    if(puzzleString.length === 81) {
      return true;
    }

    return false;
  }

  checkRowPlacement(puzzleString, row, column, value) {
    for(let i = (row - 1) * 9; i < row * 9; i++) {
      if(puzzleString[i] == value && column!== i % 9 + 1) {
        return false;
      }
    }

    return true;
  }

  checkColPlacement(puzzleString, row, column, value) {
    for(let i = column - 1; i < 81; i += 9) {
      if(puzzleString[i] == value && Math.floor(i / 9) !== row - 1) {
        return false;
      }
    }

    return true;
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    let k = 0;
    let l = 0;
    
    if(row <= 3) {
      k = 0;
      if(column <= 3) {
        l = 0;
      } else if(column <= 6) {
        l = 3;
      } else if(column <= 9) {
        l = 6;
      }
    } else if(row <= 6) {
      k = 3;
      if(column <= 3) {
        l = 0;
      } else if(column <= 6) {
        l = 3;
      } else if(column <= 9) {
        l = 6;
      }
    } else if(row <= 9) {
      k = 6;
      if(column <= 3) {
        l = 0;
      } else if(column <= 6) {
        l = 3;
      } else if(column <= 9) {
        l = 6;
      }
    }

    for(let i = k; i < k + 3; i++) {
      for(let j = l; j < l + 3; j++) {
        if(puzzleString[i * 9 + j] == value && !(row - 1 == k && column - 1 == l)) {
          return false;
        }
      }
    }

    return true;
  }

  solve(puzzleString) {
    let arr = [];

    for(let i = 0; i < 81; i++) {
      if(puzzleString[i] !== "." && puzzleString[i] !== "9" && puzzleString[i] !== "8" && puzzleString[i] !== "7" && puzzleString[i] !== "6" && puzzleString[i] !== "5" && puzzleString[i] !== "4" && puzzleString[i] !== "3" && puzzleString[i] !== "2" && puzzleString[i] !== "1") {
        return false;
      }
    }

    if(puzzleString.length !== 81) {
      return false;
    }

    for(let i = 0; i < 81; i++) {
      arr.push([]);
      if(puzzleString[i] === '.') {
        for(let j = 1; j <= 9; j++) {
          if(this.checkRowPlacement(puzzleString, Math.floor(i / 9) + 1, i % 9 + 1, j)) {
            if(this.checkColPlacement(puzzleString, Math.floor(i / 9) + 1, i % 9 + 1, j)) {
              if(this.checkRegionPlacement(puzzleString, Math.floor(i / 9) + 1, i % 9 + 1, j)) {
                arr[i].push(j);
              }
            }
          }
        }
      }
    }

    for(let a = 0; a < arr.length; a++) {
      for(let i = 0; i < arr.length; i++) {
        if(arr[i].length === 1 && arr[i][0]) {
          puzzleString = puzzleString.split('');
          puzzleString[i] = arr[i][0];
          puzzleString = puzzleString.join('');

          for(let j = Math.floor(i / 9) * 9; j < Math.floor(i / 9) * 9 + 9; j++) {
            if(arr[j].includes(arr[i][0]) && j !== i) {
              arr[j].splice(arr[j].indexOf(arr[i][0]), 1);
            }
          }

          for(let j = i % 9; j <= i % 9 + 72; j += 9) {
            if(arr[j].includes(arr[i][0]) && i !== j) {
              arr[j].splice(arr[j].indexOf(arr[i][0]), 1);
            }
          }

          let k = 0;
          let l = 0;
          
          if(Math.floor(i / 9) + 1 <= 3) {
            k = 0;
            if(i % 9 + 1 <= 3) {
              l = 0;
            } else if(i % 9 + 1 <= 6) {
              l = 3;
            } else if(i % 9 + 1 <= 9) {
              l = 6;
            }
          } else if(Math.floor(i / 9) + 1 <= 6) {
            k = 3;
            if(i % 9 + 1 <= 3) {
              l = 0;
            } else if(i % 9 + 1 <= 6) {
              l = 3;
            } else if(i % 9 + 1 <= 9) {
              l = 6;
            }
          } else if(Math.floor(i / 9) + 1 <= 9) {
            k = 6;
            if(i % 9 + 1 <= 3) {
              l = 0;
            } else if(i % 9 + 1 <= 6) {
              l = 3;
            } else if(i % 9 + 1 <= 9) {
              l = 6;
            }
          }
      
          for(let b = k; b < k + 3; b++) {
            for(let j = l; j < l + 3; j++) {
              if(arr[b * 9 + j].includes(arr[i][0]) && b * 9 + j !== i) {
                arr[b * 9 + j].splice(arr[b * 9 + j].indexOf(arr[i][0]), 1);
              }
            }
          }

          arr[i].pop();
        }
      }
    }

    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length > 0) {
        return false;
      }
    }

    for(let i = 0; i < 81; i++) {
      if(puzzleString[i] === ".") {
        return false;
      }
    }

    return puzzleString;
  }
}

module.exports = SudokuSolver;

