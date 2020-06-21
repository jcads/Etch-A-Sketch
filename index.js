const gridLength = document.querySelector(".container").
    getBoundingClientRect().width;
var hoverCount = 1;

function createGrid(numTiles) {
    for (var i = 0; i < numTiles; i++) {
        for (var j = 0; j < numTiles; j++) {
            $(".container").prepend(`<div id=${i+j} class="inner"></div>`);
            //add hover event
            $(`#${i+j}`).hover((e) => {
                $(e.target).css({"background-color": randomRGB(hoverCount)});
                hoverCount += .1;               
                setTimeout($(e.target).off("mouseenter mouseleave"), 200);
            });
        }
    }

    var tile = $(".inner");
    tile.width(gridLength/numTiles);
    tile.height(gridLength/numTiles);

    const totalLength = tile.width() * numTiles;
    //if the length of each cell multiplied by the num of cells is not equal
    //to the original grid length
    if (totalLength != gridLength) {
        // set the width and height of the grid equal to the new length
        $(".container").css({"width": `${totalLength}px`, "height": `${totalLength}px`});
    }
}

function randomRGB(blackRatio) {
    if (Math.floor(blackRatio) == 2) {
        hoverCount = 1;
        return "rgb(0, 0, 0)";
    }

    var red = Math.floor(Math.floor(Math.random() * 257) / blackRatio);
    var green = Math.floor(Math.floor(Math.random() * 257) / blackRatio);
    var blue = Math.floor(Math.floor(Math.random() * 257) / blackRatio);

    return `rgb(${red}, ${green}, ${blue})`;
}

$("#new").click(() => {
    var numOfTiles = parseInt(prompt("How many squares per side"));
    $(".inner").remove();
    createGrid(numOfTiles);
})

$("#reset").click(() => {
    $(".inner").css("background-color", "white");
})


createGrid(64);

