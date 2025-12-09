#include <iostream>
using namespace std;

// Mutilevel Inheritance Example

// Base class
class Animal
{
public:
    void display()
    {
        cout << "this is animal base class" << endl;
    }
};

// Derived class 1
class dog : public Animal
{
public:
    void bark()
    {
        cout << "dogs barks - derived class 1" << endl;
    }
};

// Derived class
class cat : public dog
{
public:
    void meow()
    {
        cout << "cats meow- derived class 2" << endl;
    }
};

int main()
{
    cat c;
    c.display(); // Inherited from Animal class
    c.bark();    // Inherited from dog class
    c.meow();    // From cat class
    return 0;
}