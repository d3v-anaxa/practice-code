#include <iostream> 
#include <bits/stdc++.h>

using namespace std;

// Input function declaration

double long input(){
    double long a;
    std::cout << "| Input the integer : " && std::cin >> a;
    return a;
}

int main(){
    std::cout << "+----------------------SIMPLE-CALCULATOR------------------------------------------+" << endl;
    double long num1, num2;
    int op;
    std::cout << "| Select a valid operation";
    std::cout << "\n| 1. Addition[+]\n| 2. Subtraction[-]\n| 3. Multiplication[*]\n| 4. Division[/]\n| 5. Square Root\n| " && std::cin >> op;

    switch (op)
    {
    case 1: num1 = input();num2 = input(); std::cout << "| " << num1 << " + " << num2 << " = " << num1+num2 << endl;break;
    case 2: num1 = input();num2 = input(); std::cout << "| " << num1 << " - " << num2 << " = " << num1-num2 << endl;break;
    case 3: num1 = input();num2 = input(); std::cout << "| " << num1 << " * " << num2 << " = " << num1*num2 << endl;break;
    case 4: num1 = input();num2 = input(); std::cout << "| " << num1 << " / " << num2 << " = " << num1/num2 << endl;break;
    case 5: num1 = input();                std::cout << "| " <<         "√ " << num1 << " = " << pow(num1,(0.5)) << endl;break;
    default : std::cout << "| Select a valid operation!\n"; return main();
    }
    std::cout << "+--------------------------------------------------------------------------+" << endl;
}