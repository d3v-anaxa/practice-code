#include <iostream> 
#include <bits/stdc++.h>
using namespace std;
int main(){
	int input, exponent = 0, output = 0;
    std::cout << "Enter the decimal number : ";
    std::cin >> input;

    while (input > 0 ){
        int power = pow(10, exponent);
        output += ((input%2)*power);
        input/=2;
        exponent++;
        if(input == 0){
            std::cout << "The binary output :  " << output << endl;
        }
    }
}