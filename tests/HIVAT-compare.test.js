import { expect, test } from 'vitest';
import CompareHands from '../classes/CompareHands.js';
import createHandWithSuits from './helpers/createHandWithSuits.js' 
import hands from './helpers/fileReader.js'; 

test( 'CompareHands should assign higher points to stronger hands', () => {
  for ( let i = 0; i < hands.length - 1; i++ ) {
    const higherHand = createHandWithSuits( hands[ i ] );  // Create hand with suits
    const lowerHand = createHandWithSuits( hands[ i + 1 ] );

    console.log( `\n\n--- Testing round ${ i + 1 } ---` );

    const higherHandCards = higherHand.cards.map( card => `${ card.suit }${ card.rank }` ).join( ', ' );
    const lowerHandCards = lowerHand.cards.map( card => `${ card.suit }${ card.rank }` ).join( ', ' );
    console.log( 'Higher hand:', `(${ higherHandCards })` );
    console.log( 'Lower hand:', `(${ lowerHandCards })` );

    expect( CompareHands.comparer( higherHand, lowerHand ) ).toEqual( higherHand );
  }
}, 100000);
