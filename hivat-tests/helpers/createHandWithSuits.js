import Card from "../../classes/Card";

export default function createHandWithSuits ( { ranks, combinationType } ) {
  let suits = [];

  // Assign suits based on the combination type
  switch (combinationType) {
    case 'SF':  // Straight Flush - all suits are the same
    case 'F':   // Flush - all suits are the same
      suits = Array(5).fill('♠'); // For example, all suits will be ♠ (or any same suit)
      break;
    case 'S':   // Straight - different suits
      suits = ['♠', '♥', '♦', '♣', '♠']; // Different suits
      break;
    case '4K':  // Four of a Kind - suits can be different
    case 'FH':  // Full House - suits can be different
    case '3K':  // Three of a Kind - suits can be different
    case '2P':  // Two Pair - suits can be different
    case '1P':  // One Pair - suits can be different
    case 'HC':  // High Card - suits can be different
      suits = ['♠', '♥', '♦', '♣', '♠']; // Different suits
      break;
    default:
      suits = ['♠', '♥', '♦', '♣', '♠']; // Default to different suits
  }

  // Create the cards
  const cards = ranks.split(' ').map((rank, index) => {
    return new Card(suits[index], rank); // Create cards with the required suits
  });

  // console.log('Cards created:', cards);
  return { cards };
}
