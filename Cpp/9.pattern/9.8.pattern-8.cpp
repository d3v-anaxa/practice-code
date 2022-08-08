#include <iostream> 
using namespace std;
int main(){
    // triangle with equal sides and cansists incremental digits
	int s, i = 0, d = 0;
    std::cout << "Enter the length of the base of the trangle : ";
    std::cin >> s;

    while (i < s){
        int j = 0;
        i++;
        while (j < i){
            d++;
            j++;
            std::cout << d << " ";
        }
        std::cout << endl;
    }
}