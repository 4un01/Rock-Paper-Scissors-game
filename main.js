let rockDiv = document.querySelector('.rock');
let paperDiv = document.querySelector('.paper');
let scissorsDiv = document.querySelector('.scissors');

function randomNum(){
    let rNum = Math.floor(Math.random() * 3);
    return rNum;
}


function rockGame() {
    let userChoice = 0;
    let computerChoice = randomNum();
    let fight = document.querySelector('.battleAnimation');
    let container = document.querySelector('.mainContainer');
    let score = document.querySelector('.score');

    let won = document.getElementById('won');
    let lost = document.getElementById('lost');
    let draw = document.getElementById('draw');
    
    let paper = document.querySelector('.rockVsPaper');
    let rock = document.querySelector('.rockVsRock');
    let scissors = document.querySelector('.rockVsScissors');
    
    score.style.display = 'none';
    container.style.display = 'none';
    fight.style.display = 'flex'; 

    setTimeout(
        () => {
            fight.style.display = 'none';
            score.style.display = 'flex';

            if(computerChoice === 2){
                scissors.style.display = 'flex';
                let wonNum = parseInt(won.innerHTML);
                wonNum++;
                won.innerHTML = wonNum;
                scissors.addEventListener('click', () => {
                    scissors.style.display = 'none'
                    container.style.display = 'flex';
                }, {once: true});
            }
            else if(computerChoice === 1){
                paper.style.display = 'flex';
                let lostNum = parseInt(lost.innerHTML);
                lostNum++;
                lost.innerHTML = lostNum;
                paper.addEventListener('click', () => {
                    paperDiv.style.display = 'none'
                    container.style.display = 'flex';
                }, {once: true});
            }
            else{
                rock.style.display = 'flex'
                let drawNum = parseInt(draw.innerHTML);
                drawNum++;
                draw.innerHTML = drawNum;
                rock.addEventListener('click', () => {
                    rock.style.display = 'none'
                    container.style.display = 'flex';
                }, {once: true});
            }
            console.log(computerChoice)
        }, 2500
    );
}

function paperGame() {
    let userChoice = 1;
    let computerChoice = randomNum();

    let fight = document.querySelector('.battleAnimation');
    let container = document.querySelector('.mainContainer');
    let score = document.querySelector('.score');
    
    let won = document.getElementById('won');
    let lost = document.getElementById('lost');
    let draw = document.getElementById('draw');

    let paper = document.querySelector('.paperVsPaper');
    let rock = document.querySelector('.paperVsRock');
    let scissors = document.querySelector('.paperVsScissors');
    
    score.style.display = 'none';
    container.style.display = 'none';
    fight.style.display = 'flex'; 

    setTimeout(
        () => {
            fight.style.display = 'none';
            score.style.display = 'flex';

            if(computerChoice === 0){
                rock.style.display = 'flex';
                let wonNum = parseInt(won.innerHTML);
                wonNum++;
                won.innerHTML = wonNum;
                rock.addEventListener('click', () => {
                    rock.style.display = 'none'
                    container.style.display = 'flex';
                }, {once: true});
            }
            else if(computerChoice === 2){
                scissors.style.display = 'flex';
                let lostNum = parseInt(lost.innerHTML);
                lostNum++;
                lost.innerHTML = lostNum;
                scissors.addEventListener('click', () => {
                    scissors.style.display = 'none'
                    container.style.display = 'flex';
                }, {once: true});
            }
            else{
                paper.style.display = 'flex'
                let drawNum = parseInt(draw.innerHTML);
                drawNum++;
                draw.innerHTML = drawNum;
                paper.addEventListener('click', () => {
                    paper.style.display = 'none'
                    container.style.display = 'flex';
                }, {once: true});
            }
            console.log(computerChoice)
        }, 2500
    );
}

function scissorsGame() {
    let userChoice = 0;
    let computerChoice = randomNum();

    let fight = document.querySelector('.battleAnimation');
    let container = document.querySelector('.mainContainer');
    let score = document.querySelector('.score');

    let paper = document.querySelector('.scissorsVsPaper');
    let rock = document.querySelector('.scissorsVsRock');
    let scissors = document.querySelector('.scissorsVsScissors');
    
    container.style.display = 'none';
    score.style.display = 'none';
    fight.style.display = 'flex'; 

    setTimeout(
        () => {
            fight.style.display = 'none';
            score.style.display = 'flex';

            if(computerChoice === 1){
                paper.style.display = 'flex';
                let wonNum = parseInt(won.innerHTML);
                wonNum++;
                won.innerHTML = wonNum;
                paper.addEventListener('click', () => {
                    paper.style.display = 'none'
                    container.style.display = 'flex';
                }, {once: true});
            }
            else if(computerChoice === 0){
                rock.style.display = 'flex';
                let lostNum = parseInt(lost.innerHTML);
                lostNum++;
                lost.innerHTML = lostNum;
                rock.addEventListener('click', () => {
                    rock.style.display = 'none'
                    container.style.display = 'flex';
                }, {once: true});
            }
            else{
                scissors.style.display = 'flex'
                let drawNum = parseInt(draw.innerHTML);
                drawNum++;
                draw.innerHTML = drawNum;
                scissors.addEventListener('click', () => {
                    scissors.style.display = 'none'
                    container.style.display = 'flex';
                }, {once: true});
            }
            console.log(computerChoice)
        }, 2500
    );
}


rockDiv.addEventListener('click', rockGame);
paperDiv.addEventListener('click', paperGame);
scissorsDiv.addEventListener('click', scissorsGame);