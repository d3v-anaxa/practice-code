#include <iostream>
#include <queue>
#include <string>
using namespace std;
int main(){
    queue<string> q;

    q.push("Mr. ");
    q.push("Ayanaksha ");
    q.push("Upadhyaya ");
    std::cout << "Front Element : " << q.front() << endl;
    q.pop();
    std::cout << "Front Element : " << q.front() << endl;
    std::cout << "Size of queue : " << q.size() << endl;
    std::cout << boolalpha << "Is empty ?? " << q.empty() << endl; 

}
