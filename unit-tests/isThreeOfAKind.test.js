import { expect, test } from 'vitest';
import Hand from '../classes/Hand.js';
import CompareHands from '../classes/CompareHands.js';

//const suits = '♥♦♣♠';


test( 'Test that threeOfAKind returns truthy is three of a kind (7)', () => {
    let hand = new Hand( '♥7', '♦7', '♣8', '♠K', '♠7' );

  expect( CompareHands.isThreeOfAKind( hand ) ).toBeTruthy();
} );


test( 'Test that threeOfAKind returns truthy is three of a kind (J)', () => {
  let hand = new Hand( '♥J', '♦2', '♣J', '♠3', '♠J' );
  expect( CompareHands.isThreeOfAKind( hand ) ).toBeTruthy();
} );


test( 'Test that threeOfAKind returns falsy is three of a kind', () => {
  let hand = new Hand( '♣2', '♣6', '♥4', '♣8', '♣7' );
  expect( CompareHands.isThreeOfAKind( hand ) ).toBeFalsy();
} );


test( 'check that threeOfAKind returns a higher score for a stronger hand (if two hands but with three of a kind)', () => {
  let hand1 = new Hand( '♣2', '♣6', '♣4', '♥2', '♦2' );
  let hand2 = new Hand( '♦T', '♦9', '♥9', '♥Q', '♣9' );
  let hand1Score = CompareHands.isThreeOfAKind( hand1 );
  let hand2Score = CompareHands.isThreeOfAKind( hand2 );
  expect( hand2Score ).toBeGreaterThan( hand1Score );
 
} );


