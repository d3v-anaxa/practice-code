#include <iostream> 
using namespace std;
int main(){
    /* 
    structure of the process >>
    ~ gets the number;
    ~ converts into binary representaion of 32 bits;
    ~ cin >> 2's complement of the bin representaion 
    [Here, the MSB of the sored binary represents the +ve or -ve sign of the actual number]
    ~ cout << 2's complement of the stored bin representaion
     */
    int NveNum = -5;
    cout << NveNum << endl;    
}
