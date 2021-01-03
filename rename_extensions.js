const fs = require('fs')
const path = require('path')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// Get extensions and validate input
const extensionFrom = argv.from ? argv.from : ''
const extensionTo = argv.to ? argv.to : ''

if (!extensionFrom || !extensionTo) {
    throw new Error("No extension was given for either To or From")
} 

if (extensionFrom === extensionTo) {
    throw new Error("Extensions given are the same")
}

// get directory 
let dir = argv.dir ? '/' + argv.dir : ''
dir = __dirname + dir

// Grab all files in directory
let files
try {
    files = fs.readdirSync(dir)
}
catch (e) {
    throw new Error(`directory: ${dir} does not exist`);
}

// replace all files with given extension except this file
for (const file of files) {
    if(path.extname(file) == extensionFrom && file !== path.basename(__filename)) {
        fs.rename(file, path.parse(file).name + extensionTo, err => console.log(err))
    }
}

