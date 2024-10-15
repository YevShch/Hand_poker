import { expect, test } from 'vitest';
import CompareHands from '../classes/CompareHands.js';
import createHandWithSuits from './helpers/createHandWithSuits.js' 
import Card from '../classes/Card.js';
import hands from './helpers/fileReader.js'; // Import data from the file

test( 'CompareHands should assign higher points to stronger hands', () => {
  for ( let i = 0; i < hands.length - 1; i++ ) {
    const higherHand = createHandWithSuits( hands[ i ] );  // Create hand with suits
    const lowerHand = createHandWithSuits( hands[ i + 1 ] );

    console.log( 'Testing hands:' );
    console.log( 'Higher hand:', higherHand.cards ); // Ensure 'cards' is printed here
    console.log( 'Lower hand:', lowerHand.cards );  // Ensure 'cards' is printed here

    // Ensure the hands have the 'cards' property
    expect( higherHand ).toHaveProperty( 'cards' );
    expect( lowerHand ).toHaveProperty( 'cards' );

    console.log( "Compare hands:" );
    console.log( CompareHands.comparer( higherHand, lowerHand ) );

    expect( CompareHands.comparer( higherHand, lowerHand ) ).toEqual( higherHand );
  }
} );
