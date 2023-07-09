#include <iostream>
#include <random>

using namespace std;

const int FLOORS = 52;
const int RESIDENTS = 120;
const int TRIPS_PER_HOUR = 60;

struct Elevator {
  int currentFloor;
  bool isBusy;
};

int main() {
  // Create two elevators.
  Elevator elevator1, elevator2;

  // Create a random number generator.
  default_random_engine generator;
  uniform_int_distribution<int> distribution(1, FLOORS);

  // Simulate 60 trips per hour.
  for (int i = 0; i < TRIPS_PER_HOUR; i++) {
    // Choose a random resident.
    int resident = distribution(generator);

    // Choose a random destination floor.
    int destination = distribution(generator);

    // Check if either elevator is free.
    bool elevator1Free = elevator1.isBusy == false;
    bool elevator2Free = elevator2.isBusy == false;

    // If both elevators are busy, the resident has to wait.
    if (elevator1Free == false && elevator2Free == false) {
      continue;
    }

    // Choose the elevator that is free.
    Elevator* elevator = elevator1Free ? &elevator1 : &elevator2;

    // Update the elevator's state.
    elevator->isBusy = true;
    elevator->currentFloor = resident;

    // Calculate the wait time.
    int waitTime = destination - resident;

    // Print the wait time.
    cout << "Resident " << resident << " had to wait " << waitTime << " floors." << endl;
  }

  // Calculate the average wait time.
  int totalWaitTime = 0;
  for (int i = 0; i < TRIPS_PER_HOUR; i++) {
    int waitTime = distribution(generator);
    totalWaitTime += waitTime;
  }
  float averageWaitTime = float(totalWaitTime) / TRIPS_PER_HOUR;

  // Print the average wait time.
  cout << "The average wait time was " << averageWaitTime << " floors." << endl;

  return 0;
}
