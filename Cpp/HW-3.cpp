// fahrenheit to celsius table
#include <iostream> 
using namespace std;
int main(){
	int f = 0, c;
    std::cout << "Fahrenheit-to-Celsius-table\n\n";
    while (f < 120){
        c = (f-32) * 5/9 ;
        f++;
        std::cout << f << "°F => " << c << "°C" << endl;
    }
}