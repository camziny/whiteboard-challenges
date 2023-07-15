import pyautocad as acad

# Create an AutoCAD instance
acad = acad.Autocad(create_if_not_exists=True)

# Create a block insertion point
ip = acad.Point(0, 0, 0)

# Create a block name
block_name = "My_Block"

# Create a block
block = acad.Block(block_name)

# Add objects to the block
block.AddPolyline([(0, 0), (10, 0), (10, 10), (0, 10)])

# Insert the block
block.InsertBlock(ip)
