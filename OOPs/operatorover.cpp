#include <iostream>
using namespace std;

// opertator overloading example

class Number
{
public:
    int value;

    Number(int v = 0) // constructor
    {
        value = v;
    }

    Number operator+(Number obj) // Overloading + operator
    {
        Number temp;
        temp.value = value + obj.value;
        return temp;
    }
};

int main()
{
    Number n1(5);
    Number n2(10);

    Number result = n1 + n2; // using overloaded +

    cout << "Sum = " << result.value << endl;

    return 0;
}