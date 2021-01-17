#include <fstream>
#include <iostream>
#include <string>

using namespace std;

void printLastKLines(char* fileName) {
    const int k = 10;
    ifstream ifs(fileName);
    string L[k];
    int size = 0;
    while (ifs.peek() != EOF) {
        getline(ifs, L[size % k]);
        ++size;
    }

    int count = min(size, k);
    int start = size > k ? size % k : 0;

    for (int i = 0; i < count; ++i) {
        cout << L[(start + i) % k] << endl;
    }
}

int main() {
    printLastKLines("12-1.test.txt");
    return 0;
}
