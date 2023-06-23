public static int factorial(int n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

public static int factorial(int n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

public class JavaExample {

    public static void main(String[] args) {
        String str = "Hello";
        String reversed = reverseString(str);
        System.out.println(reversed);
    }

    public static String reverseString(String str)
    {
        if (str.isEmpty())
            return str;
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}
