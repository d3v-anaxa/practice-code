#include <iostream> 
using namespace std;

bool isPrime(unsigned long x){
    int a = x;
    while ( a > 2 ) {
        a--;
        if(x%a==0){return false;}else if(a == 1){return true;};
    }; 
}

int main(){
    unsigned long input;
    std::cout << "Enter a positive Integer : " && std::cin >> input;
	std::cout << boolalpha << input << " is prime : "<< isPrime(input) << endl;
}