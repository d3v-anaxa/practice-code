#include <iostream> 
using namespace std;
int main(){

    // Printing n number of natural numbers
 	int n,i = 0;
    std::cout << "Digit Print :: Enter number of digits to print : ";
    std::cin >> n;
    while(i < n){
        i++;

        if (i != n){
            std::cout << i << "\t";
        } else {
            std::cout << i << endl;   
        }
    }

    // Printing the sum of n number of natural numbers
    int sum = 0, addend = 1,x;
    std::cout << "Sum Output :: Enter the number of Natural numbers to add : ";
    std::cin >> x;
    while (addend <= x){
        sum += addend;
        addend++;
    } std::cout << "The sum of " << x << " Natural numbers is : " << sum << endl;
 
    // Determining Prime number or not
    int start = 1, a;
    std::cout << "Prime Number Checking :: Enter the number : ";
    std::cin >> a;
    while ( start < a-1){
        start++;
        if (a % start == 0){
            std::cout << a << " is not a Prime Number.\n";
            break;
        }
        if (start == a - 1){
            std::cout << a << " is a Prime Number.\n";
            break;
        }
    }
}