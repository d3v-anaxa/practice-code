#include <iostream> 
using namespace std;

// Determining total number of set bits

int noOfSetBits(int a, int b){
    int count = 0;
    while (a!= 0 || b!=0){
        if(a&1){count++;}
        if(b&1){count++;}
        a>>=1;
        b>>=1;
    }
    return count;
}

int main(){
    int num1, num2;
    std::cout << "Input 1st num : " && std::cin >> num1;	
    std::cout << "Input 2nd num : " && std::cin >> num2;
    int ans = noOfSetBits(num1, num2);
    std::cout << "Number of set Bits in " << num1 << " and " << num2 << (ans <=1 ? " is : " : " are : ") << ans << endl;
}