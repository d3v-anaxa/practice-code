#include <iostream>
using namespace std;

int main(){
	char ch[10];
	std::cout << "cin => standard input stream \n";
	std::cout << "Enter your name : ";
	std::cin >> ch;
	std::cout << "Hello " << ch << "\n";
}
