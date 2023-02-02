#include <iostream> 
using namespace std;
int main(){
	// Printing n Natural numbers using for loop

    int n;
    std::cout << "Printing n natural numbers : Enter the value of n : ";
    std::cin >> n;

    for (int i = 1; i <= n; i++){
        std::cout << i << "\t";
    }
    std::cout << endl;

	// Printing the sum of n Natural numbers using for loop

    int N, sum = 0;
    std::cout << "Sum of N natural numbers : Enter the value of N : ";
    std::cin >> N;

    for (int i = 1; i <= N; i++){
        sum += i;
    }
    std::cout << sum << endl;
    
    // printing fibonacchi series;

    int x, a=0, b=1, temp;
    std::cout << "Fibonacchi series : Enter the number of fibonacchi digits to print [Must be >2] : ";
    std::cin >> x;

    for (int i = 1; i <= x; i++){
        temp = a;
        a += b;
        b = temp;
        std::cout << temp << "\t";
    }
    std::cout << endl;

    // Determining a number is Prime or not

    std::cout << "Determining Prime or not? : Enter the Number : ";
    int p;
    std::cin >> p;

    for (int i = 2; i < p; i++){
        if (p%i==0){
            std::cout << p << " is not a Prime Number" << endl;
            break;
        } else {
            if(i == n-1){
                std::cout << p << " is a Prime number\n";
            }
        }
    }


}