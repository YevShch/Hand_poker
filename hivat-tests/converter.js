import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// // Get the path to the current file (replacement for __dirname in ES modules)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Path to the combinations.txt file
// const filePath = path.join(__dirname, 'combinations.txt');

// Function to load only card ranks (5th column) from the file
// export function loadHandsFromFile ( filePath ) {

  // Get the path to the current file (replacement for __dirname in ES modules)
  const __filename = fileURLToPath( import.meta.url );
  const __dirname = path.dirname( __filename );

  // Path to the combinations.txt file
  const filePath = path.join( __dirname, 'combinations.txt' );

  
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n');
  const hands = [];

  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts.length < 6) continue; // Skip lines with insufficient data

    const ranks = parts.slice(5, 10).join(' '); // Extract only card ranks (5th column)
    hands.push(ranks); // Add ranks to the array
  }

  console.log('Hands:', hands);
  export default hands;
// }
