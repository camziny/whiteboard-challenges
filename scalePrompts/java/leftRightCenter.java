import java.util.Random;

public class LeftRightCentre {

    public static void main(String[] args) {
        // Create a new random number generator
        Random random = new Random();

        // Create an array to store the chips for each player
        int[] chips = new int[3];

        // Loop until one player has all the chips
        while (true) {
            // Roll the dice
            int roll = random.nextInt(6) + 1;

            // Determine which player gets the chip
            int player = roll % 3;

            // Give the chip to the player
            chips[player]++;

            // Print the current chip count for each player
            for (int i = 0; i < chips.length; i++) {
                System.out.println("Player " + i + " has " + chips[i] + " chips.");
            }

            // Check if one player has all the chips
            if (chips[0] == 0 || chips[1] == 0 || chips[2] == 0) {
                break;
            }
        }

        // Print the winner
        int winner = 0;
        for (int i = 1; i < chips.length; i++) {
            if (chips[i] > chips[winner]) {
                winner = i;
            }
        }
        System.out.println("Player " + winner + " wins!");
    }
}

