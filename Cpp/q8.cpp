#include <iostream> 
using namespace std;
int main(){
    // determine output
	for (int i = 0; i <= 15; i+=2){
        std::cout << i << " ";
        if(i&1){
            continue;
        }
        i++;
    }
} // 0 3 5 7 9 11 13