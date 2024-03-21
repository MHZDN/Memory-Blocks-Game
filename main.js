document.querySelector(".control-buttons span").onclick = function() {

    let yourname =prompt("whats your Name?");

    if (yourname == null || yourname == ""){

        document.querySelector(".name span").innerHTML = 'Unknown';

    } else {

        document.querySelector(".name span").innerHTML = yourname;

    }
    // remove splash screen
    document.querySelector(".control-buttons").remove(); 

};

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

// indicies of all elemnts in the Array (... split the keys from (0-19))
let orderRange = [...Array(blocks.length).keys()];

// Shuffle Array 
shuffle(orderRange);

// Shuffling Function
function shuffle(array){
    // Current -> current index of Numbers of items in array
    // temp ->
    // random -> random index
    let current = array.length,
        temp,
        random
    while(current>0){
        // get Random number
        random=Math.floor(Math.random()*current);
        current--; // Loop number of array
        
        // Randomization
        temp = array[current]; 
        array[current]=array[random];
        array[random] = temp;
        
    }
    return array;
}


// Add Order css Property to Game Blocks
blocks.forEach((block,index) => {

    // css order
    block.style.order = orderRange[index];

    // Add Click Event
    block.addEventListener('click', function () {

        // Trigger The Flip Block Function
        flipBlock(block);

    });
    
});

// Flipping Blocks Function
function flipBlock(selectedBlock) {

    // Add Class is-flipped to block that is clicked
    selectedBlock.classList.add('is-flipped');

    // Filters all blocks by is fliped
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    
    if(allFlippedBlocks.length == 2){
    console.log('Two Selected')

    // Dont allow opening more than 2 blocks at the same time
    stopClicking();

    // Check the 2 selcted Blocks if they are matching 
    matchBlocks(allFlippedBlocks[0],allFlippedBlocks[1]);
    }
}

// Dont allow opening more than 2 blocks at the same time
function stopClicking(){

    // Add Class No Clicking on Main Container so non of the Blocks in container can be clikced
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {

    // Remove class no-clicking after the duration set
    blocksContainer.classList.remove('no-clicking');

    }, duration);
}

// Checks if the blocks are Matched
function matchBlocks(block1, block2){

    let triesElement = document.querySelector('.tries span')

    if(block1.dataset.technology==block2.dataset.technology){
        
        // if the cards match remove is-flipped so the user can flip more cards
        block1.classList.remove('is-flipped');
        block2.classList.remove('is-flipped');
        // to make the two cards stay flipped if they matched
        block1.classList.add('has-match');
        block2.classList.add('has-match');
    }else{
        // Failed to match increase wrong tries by 1
        triesElement.innerHTML = parseInt(triesElement.innerHTML)+1;

        // if the cards dont match unflip them for the user to try again
        setTimeout(() => {
            block1.classList.remove('is-flipped');
            block2.classList.remove('is-flipped');
        },duration);
    }

}