import Card from "../../classes/Card";

export default function createHandWithSuits ( { ranks, combinationType } ) {
  // Default suit assignments
  const defaultSuits = [ '♠', '♥', '♦', '♣', '♠' ];

  // Assign suits based on the combination type
  let suits;

  if ( [ 'SF', 'F' ].includes( combinationType ) ) {
    suits = Array( 5 ).fill( '♠' );  // Straight Flush or Flush - all suits are the same
  } else if ( [ 'S', '4K', 'FH', '3K', '2P', '1P', 'HC' ].includes( combinationType ) ) {
    suits = defaultSuits;  // All these combinations allow different suits
  } else {
    throw new Error( `Invalid combination type: ${ combinationType }` );  // Error handling for invalid combination type
  }

  // Create the cards based on the ranks and suits
  const cards = ranks.split( ' ' ).map( ( rank, index ) => new Card( suits[ index ], rank ) );

  return { cards };
}
