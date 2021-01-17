#include <iostream>

void reverse(char* str) {
    if (!str) return;
    char* end = str;
    while (*end) ++end;

    --end;

    while (str < end) {
        char temp = *str;
        *str = *end;
        *end = temp;
        ++str;
        --end;
    }
}

int main() {
    char str1[] = "abcd\0";
    reverse(str1);

    std::cout << str1 << std::endl;
    return 0;
}