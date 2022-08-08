#include <iostream> 
using namespace std;
int main(){
    // triangle pattern with "*" character
	int s, i = 0;
    std::cout << "Enter the length of the base of the trangle : ";
    std::cin >> s;

    while (i < s){
        int j = 0;
        i++;
        while (j < i){
            std::cout << "* ";
            j++;
        }
        std::cout << endl;
    }
}