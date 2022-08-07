#include <iostream>
using namespace std;

int main(){
    // cout
    std::cout << "Standard I/O meyhods\n";
	std::cout << "cout => Standard output stream \n";

    // clog
    std::clog << "clog => Buffered standard error stream \n";

    // cerr
    std::cerr << "cerr => Un-buffered standard error stream \n";
	
    // cin
  	char ch[10];
	std::cout << "cin => standard input stream \n";
	std::cout << "Enter your name : ";
	std::cin >> ch;
	std::cout << "Hello " << ch << "\n";
}
