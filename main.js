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

// indicies of all elemnts in the Array
let orderRange = [...Array(blocks.length).keys()];


// Add Order css Property to Game Blocks
blocks.forEach((block,index) => {

    block.style.order = orderRange[index];

});

