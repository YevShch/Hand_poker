import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test( 'check that isHighestCard returns truthy if is highest card', () => {
  let hand = new Hand( '♣Q', '♥Q', '♣T', '♦T', '♣8' );
  expect( CompareHands.isHighestCard( hand ) ).toBeTruthy();
} );

test( 'isHighestCard should return correct score for the highest card', () => {
  let hand = new Hand( '♣2', '♠5', '♥J', '♦9', '♣7' );  // J -high card
  let score = CompareHands.isHighestCard( hand );
  let expectedScore = CompareHands.rankToPoint( 'J' ) * 10 ** 8
    + CompareHands.rankToPoint( '9' ) * 10 ** 6
    + CompareHands.rankToPoint( '7' ) * 10 ** 4
    + CompareHands.rankToPoint( '5' ) * 10 ** 2
    + CompareHands.rankToPoint( '2' );
  expect( score ).toBe( expectedScore );
} );


test( 'check that isHighestCard returns a higher score for a stronger hand (if two hands but with highest card)', () => {
  let hand1 = new Hand( '♣Q', '♥K', '♣T', '♦3', '♣8' );
  let hand2 = new Hand( '♦2', '♦9', '♣3', '♦J', '♣7' );
  let hand1Score = CompareHands.isHighestCard( hand1 );
  let hand2Score = CompareHands.isHighestCard( hand2 );
  expect( hand1Score ).toBeGreaterThan( hand2Score );
} );
