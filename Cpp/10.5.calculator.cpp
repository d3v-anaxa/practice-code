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
    std::cout << "| 1. Addition[+]" << std::endl;
    std::cout << "| 2. Subtraction[-]" << std::endl;
    std::cout << "| 3. Multiplication[*]" << std::endl;
    std::cout << "| 4. Division[/]" << std::endl;
    std::cout << "| 5. Square Root[^(1/2)]" << std::endl;
    std::cout << "| Enter your choice : " && std::cin >> op;

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
