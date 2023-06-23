#include <iostream>

using namespace std;

class Ticket {
public:
  string event;
  string date;
  string time;
  string venue;
  int price;
};

int main() {
  Ticket movie = {"Movie", "2023-06-05", "19:00", "Theater", 100};
  Ticket concert = {"Concert", "2023-06-06", "20:00", "Arena", 50};
  Ticket match = {"Match", "2023-06-07", "17:00", "Stadium", 25};

  cout << "What event would you like to attend?" << endl;
  cout << "1. Movie" << endl;
  cout << "2. Concert" << endl;
  cout << "3. Match" << endl;

  int choice;
  cin >> choice;

  Ticket* event = nullptr;

  switch (choice) {
    case 1:
      event = &movie;
      break;
    case 2:
      event = &concert;
      break;
    case 3:
      event = &match;
      break;
    default:
      cout << "Invalid choice." << endl;
      return 0;
  }

  cout << "How many tickets would you like to purchase?" << endl;
  int quantity;
  cin >> quantity;

  int totalPrice = event->price * quantity;

  cout << "The total price is $" << totalPrice << endl;

  return 0;
}
