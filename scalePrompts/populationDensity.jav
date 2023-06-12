import java.util.Scanner;

public class PopulationDensity {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the name of the first country: ");
        String country1 = scanner.nextLine();

        System.out.println("Enter the population of the first country: ");
        int population1 = scanner.nextInt();

        System.out.println("Enter the area of the first country in square kilometers: ");
        int area1 = scanner.nextInt();

        System.out.println("Enter the name of the second country: ");
        String country2 = scanner.nextLine();

        System.out.println("Enter the population of the second country: ");
        int population2 = scanner.nextInt();

        System.out.println("Enter the area of the second country in square kilometers: ");
        int area2 = scanner.nextInt();

        // Calculate the population density of each country.
        double populationDensity1 = population1 / area1;
        double populationDensity2 = population2 / area2;

        // Compare the population densities of the two countries.
        if (populationDensity1 > populationDensity2) {
            System.out.println(country1 + " has a higher population density than " + country2);
        } else if (populationDensity1 < populationDensity2) {
            System.out.println(country2 + " has a higher population density than " + country1);
        } else {
            System.out.println("The population densities of " + country1 + " and " + country2 + " are equal.");
        }
    }
}
