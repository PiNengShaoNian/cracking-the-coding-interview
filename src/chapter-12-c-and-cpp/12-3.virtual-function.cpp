#include <iostream>

class Shape {
   public:
    virtual void circumference() {
        std::cout << "circumference of Shape" << std::endl;
    }
};

class Triangle : public Shape {
   public:
    virtual void circumference() override {
        std::cout << "circumference of Triangle" << std::endl;
    }
};

int main() {
    Shape *s = new Shape();
    s->circumference();
    s = new Triangle();
    s->circumference();
}