#include <iostream>
using namespace std;

int main()
{
    int money,noteVal;
    int count100 = 0, count200 = 0, count500 = 0, count2000 = 0;

    std::cout << "\n+-------------------------------ATM------------------------------>\n|" << endl;
    std::cout << "| How much money do you want to withdraw ? [in Rs.] : " && std::cin >> money ;
    
    if (money % 100 != 0){
        std::cout << "| Only 2000, 500, 200 & 100 rupees notes are available!" << endl;
        return main();
    }

    while (money > 0){
        noteVal = money >= 2000 ? 2000 : money >= 500 ? 500 : money >= 200 ? 200 : money >= 100 ? 100 : 0;
        switch(noteVal){
            case 2000 : count2000++;break;
            case 500 : count500++;break;
            case 200 : count200++;break;
            case 100 : count100++;break;
        }
        money-=noteVal;
    }
    std::cout << "|\n+---------------------WITHDRAWAL SUCCESSFULL--------------------->" << endl;
    std::cout << "| 2000 NOTES\t>\t" << count2000 << endl;
    std::cout << "| 500 NOTES\t>\t" << count500 << endl;
    std::cout << "| 200 NOTES\t>\t" << count200 << endl;
    std::cout << "| 100 NOTES\t>\t" << count100 << endl;
    std::cout << "+---------------------------------------------------------------->" << endl;
}