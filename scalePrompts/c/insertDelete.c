#include <stdio.h>
#include <stdlib.h>

struct Node {
  int data;
  struct Node *prev;
  struct Node *next;
};

struct Node *head = NULL;

void insert_at_beginning(int data) {
  struct Node *new_node = malloc(sizeof(struct Node));
  new_node->data = data;
  new_node->prev = NULL;
  new_node->next = head;

  if (head != NULL) {
    head->prev = new_node;
  }

  head = new_node;
}

void insert_at_end(int data) {
  struct Node *new_node = malloc(sizeof(struct Node));
  new_node->data = data;
  new_node->prev = NULL;
  new_node->next = NULL;

  if (head == NULL) {
    head = new_node;
    return;
  }

  struct Node *current = head;
  while (current->next != NULL) {
    current = current->next;
  }

  current->next = new_node;
  new_node->prev = current;
}

void delete_at_beginning() {
  if (head == NULL) {
    return;
  }

  struct Node *temp = head;
  head = head->next;

  if (head != NULL) {
    head->prev = NULL;
  }

  free(temp);
}

void delete_at_end() {
  if (head == NULL) {
    return;
  }

  struct Node *current = head;
  while (current->next != NULL) {
    current = current->next;
  }

  struct Node *temp = current;
  current = current->prev;
  current->next = NULL;

  free(temp);
}

int main() {
  int choice, data;

  while (1) {
    printf("1. Insert at beginning\n");
    printf("2. Insert at end\n");
    printf("3. Delete at beginning\n");
    printf("4. Delete at end\n");
    printf("5. Exit\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);

    switch (choice) {
      case 1:
        printf("Enter data to insert: ");
        scanf("%d", &data);
        insert_at_beginning(data);
        break;
      case 2:
        printf("Enter data to insert: ");
        scanf("%d", &data);
        insert_at_end(data);
        break;
      case 3:
        delete_at_beginning();
        break;
      case 4:
        delete_at_end();
        break;
      case 5:
        return 0;
      default:
        printf("Invalid choice\n");
    }
  }

  return 0;
}
