import java.util.*;

public class FirstNonRepeatingCharacter {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            String s = sc.next();
            char[] ch = s.toCharArray();
            int[] freq = new int[256];
            for (int i = 0; i < n; i++) {
                freq[ch[i]]++;
            }
            boolean flag = false;
            for (int i = 0; i < n; i++) {
                if (freq[ch[i]] == 1) {
                    System.out.println(ch[i]);
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                System.out.println(-1);
            }
        }
    }
}
