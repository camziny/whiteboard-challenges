// Course class
public class Course {

    private int courseID;
    private String courseName;
    private int credits;
    private String instructorName;

    // Constructor
    public Course() {
        courseID = nextID++;
    }

    // Get methods
    public int getCourseID() {
        return courseID;
    }

    public String getCourseName() {
        return courseName;
    }

    public int getCredits() {
        return credits;
    }

    public String getInstructorName() {
        return instructorName;
    }

    // toString() method
    @Override
    public String toString() {
        return "Course{" +
                "courseID=" + courseID +
                ", courseName='" + courseName + '\'' +
                ", credits=" + credits +
                ", instructorName='" + instructorName + '\'' +
                '}';
    }

    // equals() method
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return courseID == course.courseID &&
                credits == course.credits &&
                Objects.equals(courseName, course.courseName) &&
                Objects.equals(instructorName, course.instructorName);
    }
}

// Student class
public class Student {

    private static int nextID = 1000;

    private int studentID;
    private String name;
    private char gender;
    private Course[] courseList;

    // Constructor
    public Student() {
        studentID = nextID++;
        courseList = new Course[0];
    }

    // Get methods
    public int getStudentID() {
        return studentID;
    }

    public String getName() {
        return name;
    }

    public char getGender() {
        return gender;
    }

    public Course[] getCourseList() {
        return courseList;
    }

    // toString() method
    @Override
    public String toString() {
        return "Student{" +
                "studentID=" + studentID +
                ", name='" + name + '\'' +
                ", gender=" + gender +
                ", courseList=" + Arrays.toString(courseList) +
                '}';
    }

    // equals() method
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return studentID == student.studentID &&
                Objects.equals(name, student.name) &&
                gender == student.gender &&
                Arrays.equals(courseList, student.courseList);
    }
}
