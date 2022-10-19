let player = true;
let game = true;
const cells = document.querySelectorAll(".game__cell");
let turn_counts = 0;

const o = '<svg role="img" class="o" fill="currentColor" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m 7,0.5 c 3.589862,0 6.5,2.9101429 6.5,6.5 0,3.589857 -2.910138,6.5 -6.5,6.5 C 3.4101382,13.5 0.5,10.589857 0.5,7 0.5,3.4101429 3.4101382,0.5 7,0.5 Z M 2.0697816,7 c 0,2.722896 2.2073183,4.930222 4.9302184,4.930222 2.7229001,0 4.930218,-2.207326 4.930218,-4.930222 C 11.930218,4.2771314 9.7229001,2.0697779 7,2.0697779 4.2770999,2.0697779 2.0697816,4.2771314 2.0697816,7 Z"/></svg>'
const x = '<svg width="16px" class="x" fill="currentColor" height="16px" viewBox="0 0 16 16" class="bi bi-x" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'

cells.forEach(element => {
    element.addEventListener("click", (item) => {
        if (game) {
            if (player) {
                item.target.innerHTML = x;
            } else {
                item.target.innerHTML = o;
            }
            turn_counts+=1;
            win_check();
            player = !player;
        }
    }, {once: true})
});

function win_check() {
    if (cells[0].innerHTML === cells[4].innerHTML & cells[4].innerHTML === cells[8].innerHTML) {
        if (cells[0].innerHTML != "") { 
            win(cells[0].firstChild.classList[0])
            drowline("first_diaganal", cells[0].firstChild.classList[0])
        }
    }
    if (cells[2].innerHTML === cells[4].innerHTML & cells[4].innerHTML === cells[6].innerHTML) {
        if (cells[2].innerHTML != "") { 
            win(cells[2].firstChild.classList[0])
            drowline("second_diaganal", cells[2].firstChild.classList[0])
        }
    } 
    
    if (cells[0].innerHTML === cells[1].innerHTML & cells[1].innerHTML === cells[2].innerHTML) {
        if (cells[0].innerHTML != "") { 
            win(cells[0].firstChild.classList[0])
            drowline("first_row", cells[0].firstChild.classList[0])
        }
    }
    if (cells[3].innerHTML ===  cells[4].innerHTML & cells[4].innerHTML === cells[5].innerHTML) {
        if (cells[3].innerHTML != "") { 
            win(cells[3].firstChild.classList[0])
            drowline("second_row", cells[3].firstChild.classList[0])
        }
    }
    if (cells[6].innerHTML === cells[7].innerHTML & cells[7].innerHTML === cells[8].innerHTML) {
        if (cells[6].innerHTML != "") { 
            win(cells[6].firstChild.classList[0])
            drowline("third_row", cells[6].firstChild.classList[0])
        }
    }
    
    if (cells[0].innerHTML === cells[3].innerHTML & cells[3].innerHTML === cells[6].innerHTML) {
        if (cells[0].innerHTML != "") { 
            win(cells[0].firstChild.classList[0])
            drowline("first_column", cells[0].firstChild.classList[0])
        }
    }
    if (cells[1].innerHTML === cells[4].innerHTML & cells[4].innerHTML === cells[7].innerHTML) {
        if (cells[1].innerHTML != "") { 
            win(cells[1].firstChild.classList[0])
            drowline("second_column", cells[1].firstChild.classList[0])
        }
    }
    if (cells[2].innerHTML === cells[5].innerHTML & cells[5].innerHTML === cells[8].innerHTML) {
        if (cells[2].innerHTML != "") { 
            win(cells[2].firstChild.classList[0])
            drowline("third_column", cells[2].firstChild.classList[0])
        }
    } 

    if (turn_counts == 9 & game) {
        tie();
    }
}

function drowline(pos, sign) {
    if (sign == "x") {
        document.querySelector(".line").style.backgroundColor = "rgb(84, 84, 84)";
    } else {
        document.querySelector(".line").style.backgroundColor = "rgb(242, 235, 211)";
    }
    document.querySelector(".line").classList.add("line__" + pos);
}

function win(side) {
    document.querySelector(".win").classList.add("_active");
    document.querySelector(".win").innerHTML = (side.toUpperCase() + " Wins");
    game = false;
}

function tie() {
    document.querySelector(".win").classList.add("_active");
    document.querySelector(".win").innerHTML = ("Tie");
    game = false;
}