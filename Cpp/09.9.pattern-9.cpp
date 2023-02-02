#include <iostream> 
using namespace std;
int main(){
    // triangle pattern with incremental digits in each line && bas e digit increments and sits as the first digit of every line
	int s, i = 0;
    std::cout << "Enter the length of the base of the trangle : ";
    std::cin >> s;

    while (i < s){
        i++;
        int j = 0;
        int z = i;

        while (j < i){
            std::cout << z << " ";
            z++ && j++;
        }
        std::cout << endl;
    }
}