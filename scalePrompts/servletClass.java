import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class HelloWorld extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // Set the response content type
        response.setContentType("text/html");

        // Get the output writer
        PrintWriter out = response.getWriter();

        // Write the response
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Hello, World!</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Hello, World!</h1>");
        out.println("</body>");
        out.println("</html>");
    }
}
