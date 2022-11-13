let spaces = document.querySelectorAll('.space');
let info = document.querySelector('.info');
let player = 'X';
let computer = 'O';
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// clicking spaces and checking for winner each time
spaces.forEach(function(space){
    space.addEventListener('click', function(){
        space.innerText = player;
        checkWinner()
        player = player == "X" ? computer : "X";
    })
})

// check possible combinations for winners
function checkWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(i => spaces[i].innerText.trim() === player)
        if(check){
            info.textContent = `${player || computer} Wins!`;
            
        }
    })
}

//disable user clicking after game ends
function disableClick(){

}

// restart game button
function restart(){
   return spaces.forEach (function(space){
    space.textContent = '';
    info.textContent = '';
   })
}

//show winner
function showWinner(){
        info.textContent = `${player || computer} Wins!`;
    }