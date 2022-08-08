#include <iostream> 
using namespace std;
int main(){
	int n1, n2;
    std::cout << "Enter first number : \n";
    std::cin >> n1;
    std::cout << "Enter second number : \n";
    std::cin >> n2;
    if (n1 > n2) {
        std::cout << n1 << " is greater than " << n2 << endl;
    } 
    else if(n1 < n2) {
        std::cout << n2 << " is greater than " << n1 << endl;
    }
    else {
        std::cout << n1 << " is equal to " << n2 << endl;
    }
}