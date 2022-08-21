#include <iostream> 
using namespace std;

//n th Fibonacci term

int fib(int x){
    if (x==1){return 0;}
    int a = 0, b = 1,term;
    for (int i = 0; i < x; i++){
        term = a;
        a+=b;
        b = term;
    }
    return term;
}

int main(){
	int n;
    std::cout << "\n+---------- n^th Fibonacci term print ---------->\nEnter the value of n : ";
    std::cin >> n;
    if(n <= 0){std::cout << "🔴 Invalid Input!!\n"; return main();}
    std::cout << "Value of " << n << "th Fibonacci number is : " << fib(n) << endl;
    std::cout << "+--------------------------------------------------->" << endl;
}