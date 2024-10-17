import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the path to the current file (replacement for __dirname in ES modules)
const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

// Path to the combinations.txt file
const filePath = path.join( __dirname, 'poker_combos.txt' );

// Function to load hands from file
const data = fs.readFileSync( filePath, 'utf-8' );
const lines = data.split( '\n' );
const hands = [];

for ( const line of lines ) {
  const parts = line.trim().split( /\s+/ );
  if ( parts.length < 6 ) continue; // Skip lines with insufficient data

  // Extract ranks (cards)
  const ranks = parts.slice( 5, 10 ).join( ' ' );

  // Extract combination type (the second-to-last column, e.g., 'SF', '4K', etc.)
  const combinationType = parts[ 10 ];

  hands.push( { ranks, combinationType } ); // Store both ranks and combination type
}

// console.log( 'Hands:', hands );

export default hands;
