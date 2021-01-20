//TASK ONE
function makeRows(row) {
	var puzzle = [];
	
    for (var r = 0; r < 4; r++) {
		puzzle.push(row.slice());
	}
	return puzzle;
}

// TESTING TASK 1

//  console.log("\n     ------")
//  console.log("     TASK 1")
//  console.log("     ------\n")

//  var row = [1, 2, 3, 4];
//  var puzzle = makeRows(row);

//  //console.log(puzzle);
//  console.log(visPuzzle(puzzle));


//TASK TWO

// this is the constructor of the queue data structure
function Queue() {
	this.arr = [];
	this.head = function() {
		return this.arr[0];
	};
	this.dequeue = function() {
		if (this.arr.length == 0) {
			return "Queue underflow!";
		} else {
			return this.arr.shift();
		}
	};
	this.enqueue = function(o) {
		this.arr.push(o);
	};
	this.isEmpty = function() {
			return this.arr.length == 0;
	};
}

/*
    step 1: convert the array into a queue
    step 2: permute the queue
    step 3: convert the queue back into an array
*/
function permuteRow(row, p) {
    // converting the array into a queue
    var arrQueue = new Queue();
	for (var a = 0; a < row.length; a++) {
	  arrQueue.enqueue(row[a]);
	}

    // permuting the queue
	for (var q = 0; q < p; q++) {
	  arrQueue.enqueue(arrQueue.head());
	  arrQueue.dequeue();
	}
    
    // converting the queue back into an array
    var queueArr = [];
	while (arrQueue.isEmpty() === false) {
		queueArr.push(arrQueue.head());
		arrQueue.dequeue();
	}
	return queueArr; 
}

// TESTING TASK 2

//  console.log("\n     ------")
//  console.log("     TASK 2")
//  console.log("     ------\n")

//  var row = [1, 2, 3, 4];
//  console.log(permuteRow(row, 2));


//TASK THREE
function permutePuzzle(puzzle, p, q, r) {
    puzzle[1] = permuteRow(puzzle[1], p);
    puzzle[2] = permuteRow(puzzle[2], q);
    puzzle[3] = permuteRow(puzzle[3], r);
	return puzzle;
}

// TESTING TASK 3

//  console.log("\n     ------")
//  console.log("     TASK 3")
//  console.log("     ------\n")

//  var row = [1, 2, 3, 4];
//  var puzzle = makeRows(row);
//  var Rows = permutePuzzle(puzzle,1,2,3);

// // console.log(Rows);
//  console.log(visPuzzle(Rows));


function linearSearch(array, item) {
	var n = array.length;
	for (var i = 0; i < n; i++) {
		if (array[i] == item) {
			return true;
		}
 	}
	return false;
}

// CHECKING PSEUDOKU COLUMN CONDITIONS
// var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [2, 3, 4, 1], [4, 1, 2, 3]];
// console.log(visPuzzle(puzzle));
// var check = [];

// for (var i = 0; i <= 3; i++) {
//    check[i] = puzzle[i][0];
// }
// console.log(check);

// console.log(linearSearch(check,1)) //True
// console.log(linearSearch(check,2)) //True
// console.log(linearSearch(check,3)) //False
// console.log(linearSearch(check,4)) //True

//TASK FOUR
function checkColumn(puzzle, j) {
	var columnJ = [puzzle[0][j],puzzle[1][j],puzzle[2][j],puzzle[3][j]];

	for (var c = 1; c < puzzle.length; c++) {
		if (linearSearch(columnJ,c) == false) return false;
	}
	return true;
}

// TESTING TASK FOUR

//  console.log("\n     ------")
//  console.log("     TASK 4")
//  console.log("     ------\n")

//  var puzzle = [[1,2,3,4], [2,3,4,1], [3,4,1,2], [4,1,2,3]];
//  console.log(visPuzzle(puzzle));
//  console.log(checkColumn(puzzle,1));

//  puzzle = [[1,2,3,4], [2,3,4,1], [2,3,4,1], [4,1,2,3]];
//  console.log(visPuzzle(puzzle));
//  console.log(checkColumn(puzzle,2));


//TASK FIVE
function colCheck(puzzle) {
    for (var c = 0; c < puzzle.length; c++) {
        if(checkColumn(puzzle,c) == false) return false;
    }
    return true;
}

// TESTING TASK FIVE

 console.log("\n     ------")
 console.log("     TASK 5")
 console.log("     ------\n")

//  var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
//  console.log(visPuzzle(puzzle));
//  console.log(colCheck(puzzle));

//  puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [2, 3, 4, 1], [4, 1, 2, 3]];
//  console.log(visPuzzle(puzzle));
//  console.log(colCheck(puzzle));

 puzzle = [[1, 4, 4, 2], [2, 3, 3, 1], [3, 2, 1, 3], [4, 1, 2, 4]];
 console.log(visPuzzle(puzzle));
 console.log(colCheck(puzzle));


function makeGrid(puzzle, row1, row2, col1, col2) {
	//this copies all elements in a grid from co-ordinates (row1, col1) to (row2,col2) to an array
	var array = [];
	for (var i = row1; i <= row2; i++) {
		for (var j = col1; j <= col2; j++) {
			array.push(puzzle[i][j]);
		}
	}
	return array;
}

// puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
// console.log(visPuzzle(puzzle));
// console.log(makeGrid(puzzle, 0, 1, 0, 1))
// console.log(makeGrid(puzzle, 2, 3, 2, 3))

// Top Left: 1 = [0,0], 2 = [0,1], 2 = [1,0], 3 = [1,1]
// Bottom Left: 2 = [2,0], 3 = [2,1], 4 = [3,0], 1 = [3,1]

// Top Right: 3 = [0,2], 4 = [0,3], 4 = [1,2], 1 = [1,3]
// Bottom Right: 4 = [2,2], 1 = [2,3], 2 = [3,2], 3 = [3,3]

/*
    *********--------			-----------------
    * 1 | 2 * 3 | 4 |			| 1 | 2 | 3 | 4 |
    -----------------			-----------------
    * 3 | 4 * 1 | 2 |			| 3 | 4 | 1 | 2 |
    *********--------			--------*********
    | 3 | 3 | 4 | 1 |			| 2 | 3 * 4 | 1 *
    -----------------			-----------------
    | 4 | 1 | 2 | 3 |			| 4 | 1 * 2 | 3 *
    -----------------			--------*********
    
	[0,1,0,1] Returns the top left sub grid [1, 2, 3, 4]
	[2,3,2,3] Returns the bottom right sub grid [4, 1, 2, 3]
*/

//TASK SIX
function checkGrid(puzzle, row1, row2, col1, col2) {
	for (var c = 1; c < puzzle.length; c++) {
      if (linearSearch(makeGrid(puzzle, row1, row2, col1, col2),c) == false) {
          return false;
      }
	}
	return true;
}

// TESTING TASK SIX

 console.log("\n     ------")
 console.log("     TASK 6")
 console.log("     ------\n")

//  var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
//  console.log(visPuzzle(puzzle));
//  console.log(checkGrid(puzzle, 0, 1, 2, 3));

//  puzzle = [[1, 2, 3, 4], [3, 4, 1, 2], [4, 1, 2, 3], [4, 1, 2, 3]];
//  console.log(visPuzzle(puzzle));
//  console.log(checkGrid(puzzle, 0, 1, 0, 1));

puzzle = [[1, 4, 4, 2], [2, 3, 3, 1], [3, 2, 1, 3], [4, 1, 2, 4]];
console.log(visPuzzle(puzzle));
console.log(checkGrid(puzzle,0,1,0,1));


//TASK SEVEN
function checkGrids(puzzle) {
	var subGridCount = 0
	if(checkGrid(puzzle,0,1,0,1) == true) subGridCount ++;
	if(checkGrid(puzzle,2,3,0,1) == true) subGridCount ++;
	if(checkGrid(puzzle,0,1,2,3) == true) subGridCount ++;
	if(checkGrid(puzzle,2,3,2,3) == true) subGridCount ++;
    if (subGridCount == 4) return true;
    return false;
}

// TESTING TASK SEVEN

//  console.log("\n     ------")
//  console.log("     TASK 7")
//  console.log("     ------\n")

//  var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
//  console.log(visPuzzle(puzzle));
//  console.log(checkGrids(puzzle));

//  puzzle = [[1, 2, 3, 4], [3, 4, 1, 2], [4, 1, 2, 3], [2, 3, 4, 1]];
//  console.log(visPuzzle(puzzle));
//  console.log(checkGrids(puzzle));


//TASK EIGHT
function makeSolution(row) {
	var puzzle = [];
	puzzle = makeRows(row);
	permutePuzzle(puzzle,2,1,3);
	colCheck(puzzle);
	checkGrids(puzzle);
	
	// checkGrid(puzzle, 0, 1, 0, 1);
	// checkGrid(puzzle, 0, 1, 2, 3);
	// checkGrid(puzzle, 2, 3, 0, 1);
	// checkGrid(puzzle, 2, 3, 2, 3);

	// console.log("all columns -", colCheck(puzzle));
	// console.log("top-left sub-grid -", checkGrid(puzzle, 0, 1, 0, 1));
	// console.log("top-right sub-grid -", checkGrid(puzzle, 0, 1, 2, 3));
	// console.log("bottom-left sub-grid -", checkGrid(puzzle, 2, 3, 0, 1));
	// console.log("bottom-right sub-grid -", checkGrid(puzzle, 2, 3, 2, 3),'\n');
	return puzzle;
}

// TESTING TASK EIGHT

//  console.log("\n     ------")
//  console.log("     TASK 8")
//  console.log("     ------\n")

//  var row = [1, 2, 3, 4];
//  console.log(visPuzzle(makeSolution(row)));


// a function to randomly select n (row,column) entries of a 2d array with size columns and size rows, where size is assumed to be an integer and n is also assumed to be an integer
function entriesToDel(n) {
	if (n <= 16) {
		// this creates an array of all the rows and column indices
		var array = [];
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				array[j+(4 * i)] = [i,j];
			}
		}
		// this creates a new array, called array2 to store randomly chose elements of the array that will be removed, and then removes those elements from array
		var num = 16;
		var array2 = [];
		for (var i = 0; i < n; i++) {
			var x = Math.round((num - i - 1) * Math.random());
			array2[i] = array[x];
			array.splice(x,1);
		}
		return array2;
	}
	return "Number of elements to delete exceeds size of array!";
}

// TASK NINE
function genPuzzle(row, n) {
	var puzzle = [];
    var dispose = entriesToDel(n);
	puzzle = makeSolution(row);
	
    /*  
        Loops through array, gets elements of blank[][] array
        and randomly plugs it into the puzzle each time it is generated
    */
    for (var d = 0; d < dispose.length; d++) {
        puzzle[dispose[d][0]][dispose[d][1]] = " ";
    }
	return puzzle;
}

// TESTING TASK NINE

// console.log("\n     ------")
// console.log("     TASK 9")
// console.log("     ------\n")

// var row = [1, 2, 3, 4];
// console.log(visPuzzle(genPuzzle(row, 0)));


// The following function is used to visualise the puzzles
function visPuzzle(puzzle) {
	var viz = "";

	for (var i = 0; i < puzzle.length; i++) {
		for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "----";
		}
		viz = viz + "-\n";
		for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "| " + puzzle[i][j] + " ";
		}
		viz = viz + "| " + "\n";
	}
	for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "----";
	}
	viz = viz + "-";

	return viz;
}


// DO NOT DELETE BELOW THIS LINE OR NOTHING WILL WORK AND YOU MAY GET NO MARKS
module.exports = {makeRows : makeRows, makeSolution : makeSolution, genPuzzle : genPuzzle, checkGrid : checkGrid, checkGrids : checkGrids, colCheck : colCheck, checkColumn : checkColumn, permuteRow : permuteRow, permutePuzzle : permutePuzzle}

function createPuzzle() {
	function swap(array, i, j) {
		var x = array[i];
		array[i] = array[j];
		array[j] = x;
		return array;
	}
	var row = [2,3,1,4];
	var rand = [Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())]
	if (rand[0]==1) {
		swap(row,0,1);
	}
	if (rand[1]==1) {
		swap(row,1,2);
	}
	if (rand[2]==1) {
		swap(row,2,3);
	}
	if (rand[3]==1) {
		swap(row,0,3);
	}
	var puzzle = genPuzzle(row,3 + Math.round(7*Math.random()));
	var string = "";
	for (var i = 0; i < 4; i++) {
		string += "<tr>";
		for (var j = 0; j < 4; j++) {
  		string += "<td>" + puzzle[i][j] + "</td>";
		}
		string += "</tr>";
	}
	document.getElementById("1").innerHTML = string
}