import java.sql.*;

public class InsertData {

    public static void main(String[] args) throws SQLException {
        // Create a connection to the database
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "");

        // Create a statement object
        Statement stmt = conn.createStatement();

        // Create a SQL INSERT statement
        String sql = "INSERT INTO users (first_name, last_name, date_created, is_admin, num_points) VALUES (?, ?, ?, ?, ?)";

        // Set the values for the prepared statement
        int id = 1;
        String first_name = "John";
        String last_name = "Doe";
        Date date_created = new Date();
        boolean is_admin = false;
        int num_points = 0;

        PreparedStatement preparedStmt = conn.prepareStatement(sql);
        preparedStmt.setInt(1, id);
        preparedStmt.setString(2, first_name);
        preparedStmt.setString(3, last_name);
        preparedStmt.setDate(4, date_created);
        preparedStmt.setBoolean(5, is_admin);
        preparedStmt.setInt(6, num_points);

        // Execute the prepared statement
        preparedStmt.executeUpdate();

        // Close the connection
        conn.close();
    }
}
