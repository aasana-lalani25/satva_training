#include <iostream>
using namespace std; 

// method overriding example - runtime polymorphism
class Animal
{
public: // Access Modifier
    void eat()
    {
        cout << "Eating...";
    }
};
class Dog : public Animal
{
public: // Access Modifier
    void eat()
    {
        cout << "Eating bread...";
    }
};
int main(void) // Main Function
{
    Dog d = Dog();
    d.eat();
    return 0;
}