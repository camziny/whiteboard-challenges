// C++ code
class Vertex {
  public:
    float x, y, z;
};

class Triangle {
  public:
    Vertex v1, v2, v3;
};

// F# code
open Binding;

Vertex* vertex = new Vertex();
vertex->x = 1.0f;
vertex->y = 2.0f;
vertex->z = 3.0f;

Triangle* triangle = new Triangle();
triangle->v1 = *vertex;
triangle->v2 = *vertex;
triangle->v3 = *vertex;

bind(Vertex);
bind(Triangle);

var fsVertex = new Vertex();
fsVertex.x = 1.0f;
fsVertex.y = 2.0f;
fsVertex.z = 3.0f;

var fsTriangle = new Triangle();
fsTriangle.v1 = fsVertex;
fsTriangle.v2 = fsVertex;
fsTriangle.v3 = fsVertex;

Assert.Equal(1.0f, fsVertex.x);
Assert.Equal(2.0f, fsVertex.y);
Assert.Equal(3.0f, fsVertex.z);
Assert.Equal(fsVertex, fsTriangle.v1);
Assert.Equal(fsVertex, fsTriangle.v2);
Assert.Equal(fsVertex, fsTriangle.v3);
