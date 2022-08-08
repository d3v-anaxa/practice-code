#include <iostream> 
using namespace std;
int main(){
    // Printing the sum of n number of Even numbers
    int sum = 0, addend = 2,n;
    std::cout << "Sum Output :: Enter the number of Even numbers to add : ";
    std::cin >> n;
    while (addend <= n*2){
        sum += addend;
        addend+=2;
    } std::cout << "The sum of " << n << " Even numbers is : " << sum << endl;
}