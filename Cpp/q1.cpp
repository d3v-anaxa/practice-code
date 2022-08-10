#include <iostream> 
using namespace std;
int main(){	
    // determine output
    int a=10, b=1;
    if(++a)
        cout << b;
    else 
        cout << ++b;
} // 1