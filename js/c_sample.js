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
}`
}