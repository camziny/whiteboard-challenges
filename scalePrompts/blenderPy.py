import bpy

# Get the number of elements in the periodic table
num_elements = len(bpy.data.elements)

# Create a new scene
scene = bpy.data.scenes.new("RutherfordModel")

# Set the background color to black
scene.render.background_color = (0, 0, 0)

# Create a new camera
camera = bpy.data.objects.new("Camera", None)
scene.objects.link(camera)

# Set the camera's position to be above the center of the periodic table
camera.location = (0, 0, 10)

# Create a new empty object to act as the center of the periodic table
center = bpy.data.objects.new("Center", None)
scene.objects.link(center)

# Set the center object's location to be at the origin
center.location = (0, 0, 0)

# Create a new material for the atoms
atom_material = bpy.data.materials.new("AtomMaterial")

# Set the atom material's color to be based on the element's atomic number
for i in range(num_elements):
    element = bpy.data.elements[i]
    atom_material.diffuse_color = (element.color[0], element.color[1], element.color[2])

# Create a new object for each element in the periodic table
for i in range(num_elements):
    element = bpy.data.elements[i]
    atom = bpy.data.objects.new(element.symbol, None)
    scene.objects.link(atom)

    # Set the atom object's location to be at the center of its respective element's square in the periodic table
    atom.location = (i % 18 * 2, i // 18 * 2, 0)

    # Set the atom object's material to be the atom material
    atom.active_material = atom_material

    # Create a new empty object to act as the center of the atom
    atom_center = bpy.data.objects.new("AtomCenter", None)
    scene.objects.link(atom_center)

    # Set the atom_center object's location to be at the center of the atom object
    atom_center.location = atom.location

    # Create a new particle system for the electrons
    electron_system = atom.particle_systems.new("ElectronSystem")

    # Set the electron system's type to be "Grid"
    electron_system.type = "GRID"

    # Set the electron system's grid size to be based on the element's atomic number
    electron_system.grid_size = (element.atomic_number, 1, 1)

    # Set the electron system's particles to be animated to move along the path of the atom's electron shell
    electron_system.frame_start = 1
    electron_system.frame_end = 1000
    electron_system.frame_step = 1

    # Set the electron system's particles to be colored based on their energy level
    for j in range(element.atomic_number):
        electron_system.particles[j].color = (1, 1, 1) * (j / element.atomic_number)

# Set the scene's active object to be the camera object
scene.objects.active = camera

# Render the scene
bpy.ops.render.render(write_still=True)
