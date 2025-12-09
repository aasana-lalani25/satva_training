#include <iostream>
using namespace std;

// interface example

// Base class
class shape
{
public:
    virtual int area() = 0; // pure virtual function

    void setWidth(int w)
    {
        width = w;
    }

    void setHeight(int h)
    {
        height = h;
    }

protected:
    int width;
    int height;
};

// Derived classes
class Rectangle : public shape
{
public:
    int area()
    {
        return (width * height);
    }
};

class triangle : public shape
{
public:
    int area()
    {
        return (width * height) / 2;
    }
};

int main()
{
    Rectangle rect;
    triangle tri;

    rect.setWidth(5);
    rect.setHeight(10);

    cout << "Area of Rectangle: " << rect.area() << endl;

    tri.setWidth(5);
    tri.setHeight(10);

    cout << "Area of Triangle: " << tri.area() << endl;
}