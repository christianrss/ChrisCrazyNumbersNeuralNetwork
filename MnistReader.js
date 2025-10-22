const fs = require("fs");

function readIdxFile(filepath) {
    const data = fs.readFileSync(filepath);
    
    let offset = 0;

    const magicNumber = data.readUint32BE(0);
    console.log(magicNumber);
}

readIdxFile("./datasets/mnist/train-images.idx3-ubyte");

// 0 0 1 0 1 0 1 0
// FA
// 109