import { expect, test } from 'vitest';
import Hand from '../classes/Hand.js';
import CompareHands from '../classes/CompareHands.js';

// const suits = '♥♦♣♠';

test( 'Check that hands with duplicate cards return an error', () => {
  let hand1 = new Hand( '♠6', '♠8', '♠K', '♠Q', '♣6' );
  let hand2 = new Hand( '♠6', '♦8', '♥7', '♦9', '♣2' );

  let result = CompareHands.comparer( hand1, hand2 );

  expect( result ).toEqual( {
    success: false,
    message: 'Error: There is the same card in both hands.'
  } );
} );

