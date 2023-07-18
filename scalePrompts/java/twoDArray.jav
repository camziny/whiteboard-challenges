import java.util.Random;

public class Generate2DArray {

    public static void main(String[] args) {
        int n = 5; // number of rows and columns

        // create a 2D array
        int[][] array = new int[n][n];

        // create a random number generator
        Random random = new Random();

        // populate the array with random numbers
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                // generate a random number from 1 to n
                int number = random.nextInt(n) + 1;

                // check if the number is already in the row or column
                for (int k = 0; k < i; k++) {
                    if (array[k][j] == number) {
                        continue;
                    }
                }

                for (int k = 0; k < j; k++) {
                    if (array[i][k] == number) {
                        continue;
                    }
                }

                // add the number to the array
                array[i][j] = number;
            }
        }

        // print the array
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }
    }
}
