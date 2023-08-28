const createGrid = () => {
    const markup = `
    <div class="container" id="container" style="display: grid;
                                                 border: 1px black solid; 
                                                 height:100%; 
                                                 width: 100%">
    </div> `
    document.body.innerHTML += markup
}

const layoutGrid = (height, width) => {
    const container = document.getElementById('container')
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`
}

const fillGrid = (x, y, blockSize, numOfBlocks, color) => {
    const container = document.getElementById('container')
    const test = Array(num_of_blocks).keys()
            for (var i of test){
                let markup = `<div id="card ${i}" 
                                   style="grid-column: ${Math.floor(Math.random() * y) + 1} / span ${blockSize}; 
                                          grid-row: ${Math.floor(Math.random() * x) + 1} / span ${blockSize};
                                          background-color: ${color};
                                          border: 1px black solid;">${i}</div>`
                container.innerHTML += markup
            };
}   