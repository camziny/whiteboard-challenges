#include <iostream>
#include <fstream>
#include <string>

using namespace std;

// Structure for student record
struct Student {
    int rollNo;
    string name;
    string fatherName;
};

// Function to add a student record
void addStudentRecord() {
    Student student;
    cout << "Enter roll number: ";
    cin >> student.rollNo;
    cin.ignore(); // Ignore newline character
    cout << "Enter name: ";
    getline(cin, student.name);
    cout << "Enter father's name: ";
    getline(cin, student.fatherName);

    ofstream outFile("students.txt", ios::app); // Open file in append mode
    if (outFile.is_open()) {
        outFile << student.rollNo << "," << student.name << "," << student.fatherName << endl;
        cout << "Student record added successfully!" << endl;
    } else {
        cout << "Error opening file." << endl;
    }
    outFile.close();
}

// Function to display all student records
void displayStudentRecords() {
    ifstream inFile("students.txt");
    if (inFile.is_open()) {
        string line;
        while (getline(inFile, line)) {
            // Split the line by comma
            size_t pos = line.find(",");
            int rollNo = stoi(line.substr(0, pos));
            line.erase(0, pos + 1);

            pos = line.find(",");
            string name = line.substr(0, pos);
            line.erase(0, pos + 1);

            string fatherName = line;

            // Display the student record
            cout << "Roll No: " << rollNo << endl;
            cout << "Name: " << name << endl;
            cout << "Father's Name: " << fatherName << endl;
            cout << endl;
        }
    } else {
        cout << "Error opening file." << endl;
    }
    inFile.close();
}

// Main function
int main() {
    int choice;

    do {
        cout << "1. Add Student Record" << endl;
        cout << "2. Display Student Records" << endl;
        cout << "3. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                addStudentRecord();
                break;
            case 2:
                displayStudentRecords();
                break;
            case 3:
                cout << "Exiting program." << endl;
                break;
            default:
                cout << "Invalid choice. Please try again." << endl;
        }

        cout << endl;
    } while (choice != 3);

    return 0;
}
