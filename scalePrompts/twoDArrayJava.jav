import java.util.Random;

public class GenerateRandom2DArray {

    public static int[][] generateArray(int n) {
        int[][] array = new int[n][n];
        Random random = new Random();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                array[i][j] = random.nextInt(n) + 1;
            }
        }

        for (int i = 1; i <= n; i++) {
            int count = 0;
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if (array[j][k] == i) {
                        count++;
                    }
                }
            }
            if (count != n) {
                throw new IllegalArgumentException("Each integer from 1 to n must appear n times");
            }
        }

        return array;
    }
}
