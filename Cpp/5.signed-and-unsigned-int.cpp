#include <iostream> 
using namespace std;
int main(){
	/* 
    By default int stores 32bit SIGNED integer;
    While UNSIGNED integer can only store 32bit positive number;
    [NOTE : if a -ve number is assigned to an UNSIGNED int then the compiler may throw an error and will print a wrong 32bit +ve integer value]
     */

    signed int sd_Pve_num = 1414144144;
    signed int sd_Nve_num = -1414144144;
    unsigned int usd_Pve_num = 3141441414;
    unsigned int usd_Nve_num = -441414;
    
    cout << "SIGNED int & UNSIGNED int \n";
    cout << "SIGNED +ve integer => " << sd_Pve_num << endl;
    cout << "SIGNED -ve integer => " << sd_Nve_num << endl;
    cout << "UNSIGNED +ve integer => " << usd_Pve_num << endl;
    cout << "UNSIGNED -ve integer => " << usd_Nve_num << endl;
}