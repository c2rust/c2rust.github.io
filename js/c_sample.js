export default {
    hello: `#include <stdio.h>
        
int main()
{
    printf("Hello, World!");
    return 0;
}
`,
    add: `#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int x = 0;

    x = add(2, 3);
    printf("%d", x);

    return x;
}`,
    trait: `class AbstractK
{
public:
    double r;
    double p;
    AbstractK(const double &r, const double &p) : r(r), p(p){};
    virtual const bool isInside() const = 0;
    virtual const bool overlap() const = 0;
}

class K2D : public AbstractK
{
public:
    K2D(const double &r, const double &p) : AbstractK(r, p){};
    virtual const bool overlap() const override;
}

class K3D : public AbstractK
{
public:
    K3D(const double &r, const double &p) : AbstractK(r, p){};
    virtual const bool overlap() const override;
    class SquareK
    {
    public:
        SquareK(const double &r, const double &p) : K2D(c, r){};
        virtual const bool isInside() const override;
    }
    class CubeK
    {
    public:
        CubeK(const double &r, const double &p) : K3D(c, r){};
        virtual const bool isInside() const override;
    }
}`,
    weak_ptr: `#include <iostream>
#include <memory>
struct MyStruct
{
    int value;
    MyStruct(int v) : value(v)
    {
        std::cout << "Constructor\\n";
    }
    ~MyStruct()
    {
        std::cout << "Destructor\\n";
    }
};
int main()
{
    std::shared_ptr<MyStruct> ptr = std::make_shared<MyStruct>(10);
    std::weak_ptr<MyStruct> weak_ptr = ptr; // 创建弱指针
    if (auto shared_ptr = weak_ptr.lock())
    {                           // 尝试获取共享指针
        shared_ptr->value = 20; // 修改数据
        std::cout << "Value: " << shared_ptr->value << "\\n";
    }
    return 0;
}`,
    macro: `#define CPPMAX(x,y) ((x)+(y) < 5?y:x)`,
    args: `#include <iostream>
#include <cstdarg>
void print_values(int n, ...)
{
    va_list vl;
    va_start(vl, n);
    for (int i = 0; i < n; i++)
    {
        int value = va_arg(vl, int);
        std::cout << "Value: " << value << "\\n";
    }
    va_end(vl);
}
int main()
{
    print_values(3, 10, 20, 30);
    return 0;
}
`,
    heap: `#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr = (int *)malloc(sizeof(int));
    *ptr = 10;
    free(ptr);
    free(ptr);
    printf("%d", *ptr);
    return 0;
}`,
    thread: `#include <pthread.h>
#include <stdlib.h>
// 全局共享变量
int data = 0;
void *increment(void *v)
{
    for (int i = 0; i < 1000000; i++)
    {
        data++;
    }
    return NULL;
}
int main()
{
    pthread_t t1, t2;
    // 创建两个并发执行的线程
    pthread_create(&t1, NULL, increment, NULL);
    pthread_create(&t2, NULL, increment, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
}`
}