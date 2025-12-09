#include <iostream>
using namespace std;

class Printinfo
{
public:
    void print(int i)
    { // function overloading - same function name with different parameters
        cout << "Integer:" << i << endl;
    }

    void print(double f)
    {
        cout << "Float: value:" << f << endl;
    }

    void print(char const *c)
    {
        cout << "string:" << c << endl;
    }
};

int main()
{

    Printinfo p;

    p.print(5); // calls print function with int parameter

    p.print(400.345); // calls print function with double parameter

    p.print("hello world"); // calls print function with char* parameter
}
