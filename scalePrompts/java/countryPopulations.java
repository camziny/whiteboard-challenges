import java.util.Scanner;

public class PopulationDensityComparator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the name of the first country: ");
        String country1 = scanner.nextLine();

        System.out.print("Enter the population of " + country1 + ": ");
        long population1 = scanner.nextLong();

        System.out.print("Enter the area (in square kilometers) of " + country1 + ": ");
        double area1 = scanner.nextDouble();

        scanner.nextLine(); // Consume the newline character

        System.out.print("Enter the name of the second country: ");
        String country2 = scanner.nextLine();

        System.out.print("Enter the population of " + country2 + ": ");
        long population2 = scanner.nextLong();

        System.out.print("Enter the area (in square kilometers) of " + country2 + ": ");
        double area2 = scanner.nextDouble();

        double density1 = calculateDensity(population1, area1);
        double density2 = calculateDensity(population2, area2);

        System.out.println("Population density of " + country1 + ": " + density1 + " people per square kilometer");
        System.out.println("Population density of " + country2 + ": " + density2 + " people per square kilometer");

        if (density1 > density2) {
            System.out.println(country1 + " has a higher population density than " + country2);
        } else if (density1 < density2) {
            System.out.println(country2 + " has a higher population density than " + country1);
        } else {
            System.out.println(country1 + " and " + country2 + " have the same population density");
        }
    }

    private static double calculateDensity(long population, double area) {
        return population / area;
    }
}
