import tkinter as tk
import random

# Define the size of the grid
width = 100
height = 100

# Create the grid
grid = [[0 for x in range(width)] for y in range(height)]

# Initialize the grid with some trees
for x in range(width):
    for y in range(height):
        if random.random() < 0.5:
            grid[x][y] = 1


# Define the rules of the cellular automaton
def update_grid(grid):
    # Create a new grid to store the updated values
    new_grid = [[0 for x in range(width)] for y in range(height)]

    # Iterate over each cell in the grid
    for x in range(width):
        for y in range(height):
            # Get the number of neighboring trees
            neighbors = 0
            for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    if dx != 0 or dy != 0:
                        if (
                            x + dx >= 0
                            and x + dx < width
                            and y + dy >= 0
                            and y + dy < height
                        ):
                            if grid[x + dx][y + dy] == 1:
                                neighbors += 1

            # If the cell is a tree and it has more than 2 neighbors, it becomes empty
            if grid[x][y] == 1 and neighbors > 2:
                new_grid[x][y] = 0

            # If the cell is empty and it has exactly 3 neighbors, it becomes a tree
            if grid[x][y] == 0 and neighbors == 3:
                new_grid[x][y] = 1

    # Copy the new grid to the old grid
    for x in range(width):
        for y in range(height):
            grid[x][y] = new_grid[x][y]


# Create a tkinter window
root = tk.Tk()

# Create a canvas to draw the grid on
canvas = tk.Canvas(root, width=width * 10, height=height * 10)
canvas.pack()

# Draw the grid
for x in range(width):
    for y in range(height):
        if grid[x][y] == 1:
            canvas.create_rectangle(
                x * 10, y * 10, (x + 1) * 10, (y + 1) * 10, fill="green"
            )


# Update the grid every 100 milliseconds
def update():
    update_grid(grid)
    canvas.delete("all")
    for x in range(width):
        for y in range(height):
            if grid[x][y] == 1:
                canvas.create_rectangle(
                    x * 10, y * 10, (x + 1) * 10, (y + 1) * 10, fill="green"
                )
    root.after(100, update)


# Start the update loop
update()

# Start the main loop
root.mainloop()
