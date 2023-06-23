#include <stdio.h>

#define ROWS 10
#define COLS 10

int main(void) {
 int M[ROWS][COLS] = {0};
 int temp;


 for (int i = 0; i < ROWS; i++) {
 for (int j = 0; j < COLS; j++) {
 printf("Enter element M[%d][%d]: ", i, j);
 scanf("%d", &M[i][j]);
 }
 }


 for (int i = 0; i < COLS; i++) {
 temp = M[1][i]; 
 M[1][i] = M[4][i]; 
 M[4][i] = temp; 
 }

 for (int i = 0; i < ROWS; i++) {
 for (int j = 0; j < COLS; j++) {
 printf("%d ", M[i][j]);
 }
 printf("\n");
 }

 return 0;
}
