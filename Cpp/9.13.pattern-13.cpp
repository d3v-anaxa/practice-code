#include <iostream> 
using namespace std;
int main(){
    // triangle pattern with height = base && incremental ASCII character on line change
	int s, i = 0;
    std::cout << "Enter the length of the base of the trangle : ";
    std::cin >> s;
    char ASCII = 'A';

    while (i < s){
        int j = 0;
        i++;
        while (j < i){
            std::cout << ASCII << " ";
            j++;
        }
        ASCII++;
        std::cout << endl;
    }
}