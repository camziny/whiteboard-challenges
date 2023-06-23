public class BankProfit {

    public static int findMaximumProfit(int[] profits, int k) {
        int n = profits.length;

        // Create a table to store the maximum profit that can be made
        // by investing in the first i banks, with a maximum investment of j.
        int[][] T = new int[n + 1][k + 1];

        // Initialize the table.
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= k; j++) {
                if (i == 0 || j == 0) {
                    T[i][j] = 0;
                } else {
                    T[i][j] = Math.max(T[i - 1][j], T[i - 1][j - 1] + profits[i - 1]);
                }
            }
        }

        // Return the maximum profit.
        return T[n][k];
    }

    public static void main(String[] args) {
        int[] profits = {10, 20, 30, 40, 50};
        int k = 3;

        System.out.println("The maximum profit is: " + findMaximumProfit(profits, k));
    }
}
