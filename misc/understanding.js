const fs = require('fs');
const path = require('path');

/**
 * Get absolute path of a file using `path.resolve`
 */
const filePath = path.resolve('./foo.txt');
console.log('File path ::', filePath);

/**
 * Create a new file & write data to it, using
 * `fs.writeFileSynce`
 */
fs.writeFileSync(filePath, 'I am a HUMAN, Machine!');


/**
 * Delete a file if it exists using `fs.unlinkSync`
 */
fs.unlinkSync(filePath);

/**
 * Get information (meta data) about a file if it exits otherwise, elegantly
 * exit & console a message that the file does not exist.
 */
try {
  const information = fs.statSync('./foo.txt');
  console.log('Information of file is ::', information);
} catch (error) {
  console.log('File does not exist :(');
}

/**
 * @description Function that returns `bool` if a file path exists or not.
 * @param {String} file
 * @returns {Boolean}
 */
function doesFileExit (file) {
  try {
    fs.statSync(file);
    return true
  } catch (error) {
    return false;
  }
}

console.log(doesFileExit(filePath) ? 'Success' : 'We are dooomed');