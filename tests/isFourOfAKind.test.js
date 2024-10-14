import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test( 'check that isFourOfAKind returns truthy if four of a kind', () => {
  let hand = new Hand( '♥9', '♦9', '♠9', '♣9', '♦6' );
  expect( CompareHands.isFourOfAKind( hand ) ).toBeTruthy();
} );

test( 'check that isFourOfAKind returns falsey if it is not four of a kind', () => {
  let hand = new Hand( '♥9', '♦8', '♣7', '♥5', '♦6' );
  expect( CompareHands.isFourOfAKind( hand ) ).toBeFalsy();
} );

test( 'check that isFourOfAKind returns a higher score for a stronger hand (if three hands but with Four of a kind )', () => {
  let hand1 = new Hand( '♥A', '♦A', '♣A', '♠A', '♦T' );
  let hand2 = new Hand( '♥8', '♦8', '♠8', '♣8', '♦5' );
  let hand3 = new Hand( '♥9', '♦9', '♠9', '♣9', '♦6' );
  let hand1Score = CompareHands.isFourOfAKind( hand1 );
  let hand2Score = CompareHands.isFourOfAKind( hand2 );
  let hand3Score = CompareHands.isFourOfAKind( hand3 );

  expect( hand1Score ).toBeGreaterThan( hand2Score );
  expect( hand3Score ).toBeGreaterThan( hand2Score );
  expect( hand1Score ).toBeGreaterThan( hand3Score );
} );
