#include <iostream> 
#include <bits/stdc++.h>

using namespace std;
int main(){
	int input, exponent = 0, output = 0;
    std::cout << "Enter the decimal number : ";
    std::cin >> input;

    while (input != 0 ){
        if(input%10>1){
            std::cout << "INVALID INPUT"<< endl;
            break;
        };
        int power = pow(2, exponent);
        output += ((input%10)*power);
        exponent++;
        input/=10;
        if (input == 0){
            std::cout << "The binary output :  " << output << endl;
        }
    }
}