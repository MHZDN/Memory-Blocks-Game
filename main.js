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

let blocksContainer = document.querySelector(".memory-game-Container");

let blocks = Array.from(blocksContainer.children);