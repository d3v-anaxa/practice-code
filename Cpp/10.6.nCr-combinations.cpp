#include <iostream> 
using namespace std;

double long factorial(double long a){
    double long factorial = a;
    while(a>1){
        a--;
        factorial *= a;
    }
    return factorial;
}

double long nCr(double long n, double long r){
    double long factorialOfN = factorial(n);
    double long factorialOfR = factorial(r);
    double long factorialOfNDiffR = factorial(n-r);

    std::cout << "Value of ^" << n << "C_" << r << " is : ";
    return (factorialOfN / (factorialOfR * factorialOfNDiffR));
}

int main(){
    std::cout << nCr(40,20) << endl;
}