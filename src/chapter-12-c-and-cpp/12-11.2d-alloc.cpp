#include <cstdlib>

using namespace std;

int** my2DAlloc(int rows, int columns) {
    int** rowptr;
    rowptr = (int**)malloc(sizeof(int*) * rows);

    for (int i = 0; i < rows; ++i) {
        rowptr[i] = (int*)malloc(sizeof(int) * columns);
    }

    return rowptr;
}

void my2DDealloc(int** rowptr, int rows) {
    for (int i = 0; i < rows; ++i) {
        free(rowptr[i]);
    }
    free(rowptr);
}

int main() {
    int a[] = {1, 2, 3};

    return 0;
}

int** my2DAlloc1(int rows, int columns) {
    int header = rows * sizeof(int*);
    int data = rows * columns * sizeof(int);
    int** rowptr = (int**)malloc(header + data);

    int* buf = (int*)(rowptr + header);
    for (int i = 0; i < rows; ++i) {
        rowptr[i] = buf + i * columns;
    }

    return rowptr;
}