var ie=Object.defineProperty;var ae=(a,e,t)=>e in a?ie(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var E=(a,e,t)=>(ae(a,typeof e!="symbol"?e+"":e,t),t);import{d as N,r as d,q as le,o as k,c as D,a as l,I as O,u as ce,D as R,_ as L,J as ue,G as de,W as pe,C as _e,Q as P,H as Z,$ as ve,L as me,a0 as fe,a1 as he,V as A,A as be,a2 as ge}from"./@vue-CaA77chp.js";import{e as ye,E as xe,A as we,B as Ce}from"./@codemirror-I-DanHR-.js";import{b as Y}from"./codemirror-yz77EbLa.js";import{d as ee}from"./@uiw-CLhxolpj.js";import{m as Ee}from"./mitt-DJ65BbbF.js";import{v as te}from"./uuid-D8aEg3BZ.js";import{E as Se}from"./element-plus-D4yYKw6d.js";import"./@lezer-BKVAMdCn.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@babel-CCbyfPlC.js";import"./lodash-es-BcjJjR9F.js";import"./@element-plus-BXVs1juE.js";import"./@vueuse-CjgnB8XA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const i=Ee(),K="TRANSCODE_CLICKED",F="TRANSCODE_DONE",I="RUST_CODE_UPDATE",U="CPP_CODE_UPDATE",H="EVALUATION_CLICKED",X="AUTO_TRANSCODE_DONE",re="CPP_EXEC_DONE",oe="RUST_EXEC_DONE",j="RUST_EXEC_ERROR";class ke{constructor(e){E(this,"url");E(this,"requestInit");E(this,"onmessage");E(this,"ondone");E(this,"onerror");E(this,"ontimeout");E(this,"controller");E(this,"timer",0);E(this,"data_segment","");this.url=e.url,this.requestInit=e.requestInit,this.onmessage=e.onmessage,this.ondone=e.ondone,this.onerror=e.onerror,this.controller=new AbortController,this.createFetchRequest()}createFetchRequest(){this.timeout(),fetch(this.url,{method:"POST",signal:this.controller.signal,...this.requestInit}).then(e=>(clearTimeout(this.timer),e.status===200?e.body:Promise.reject(e))).then(async e=>{var o;const t=e.getReader();let u=0;for(;;){const{value:n,done:s}=await t.read();if(s){(o=this.ondone)==null||o.call(this);break}else{const r=((this.data_segment||"")+new TextDecoder().decode(n)).split(`

`).filter(Boolean);this.data_segment=this.onmessage(r,u++)}}}).catch(e=>{var t;(t=this.onerror)==null||t.call(this,e)})}abort(){this.controller&&this.controller.abort()}timeout(e=6e4){this.timer=window.setTimeout(()=>{var t;this.abort(),(t=this.ontimeout)==null||t.call(this)},e)}}var se={VITE_APP_NAME:"rustedu",VITE_API_URL:"https://api.rustedu.com",BASE_URL:"/",MODE:"rustedu",DEV:!1,PROD:!0,SSR:!1};const Oe=se;let q=Oe.VITE_API_URL;console.log(se);const De=async a=>await(await fetch(q+"/api/transcode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();function Te(a,e,t){new ke({url:q+"/api/transcode/stream",requestInit:{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(a)},onmessage:(u,o)=>{for(const n of u)if(n!=="[DONE]")try{const s=JSON.parse(n);e(s)}catch{return n}return""},ondone:()=>{t()},ontimeout:()=>{console.log("timeout!")}})}const Ae=async a=>await(await fetch(q+"/api/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json(),Re=async a=>await(await fetch(q+"/api/transcode/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json(),V=[{name:"hello",kind:"sample",code:`/**
 * @brief 字符串输出
 * @class 逻辑功能型
 */
#include <stdio.h>

int main()
{
    printf("Hello, World!");
    return 0;
}
`},{name:"add",kind:"sample",code:`/**
 * @brief 命令行参数获取，加法算法
 * @class 逻辑功能型
 */
#include <iostream>

int main(int argc, char *argv[]) {
    if (argc != 3) {
        std::cerr << "Usage: " << argv[0] << " <number1> <number2>" << std::endl;
        return 1;
    }
    int number1 = std::stoi(argv[1]);
    int number2 = std::stoi(argv[2]);
    int sum = number1 + number2;
    std::cout << "The sum of " << number1 << " and " << number2 << " is: " << sum << std::endl;
    return 0;
}`},{name:"trait",kind:"sample",code:`/**
 * @brief C++的抽象与继承
 * @class 语言特性型
 */
#include <iostream>

class AbstractK
{
public:
    double r;
    double p;
    AbstractK(const double &r, const double &p) : r(r), p(p){};
    virtual const bool isInside() const = 0;
    virtual const bool overlap() const = 0;
};

class K2D : public AbstractK
{
public:
    K2D(const double &r, const double &p) : AbstractK(r, p){};
};

class K3D : public AbstractK
{
public:
    K3D(const double &r, const double &p) : AbstractK(r, p){};
};

class SquareK: public K2D
{
public:
    SquareK(const double &r, const double &p) : K2D(r, p){};
    const bool isInside() const override
    {
        std::cout << "SquareK::isInside()" << "\\n";
        return false;
    }
    const bool overlap() const override
    {
        std::cout << "SquareK::overlap()" << "\\n";
        return false;
    }
};

class CubeK: public K3D
{
public:
    CubeK(const double &r, const double &p) : K3D(r, p){};
    const bool isInside() const override
    {
        std::cout << "CubeK::isInside()" << "\\n";
        return false;
    }
    const bool overlap() const override
    {
        std::cout << "CubeK::overlap()" << "\\n";
        return false;
    }
};

int main(void) {
    SquareK *squark = new SquareK(1.0,2.0);
    CubeK *cubek = new CubeK(1.0,2.0);
    squark->isInside();
    squark->overlap();
    cubek->isInside();
    cubek->overlap();
}`},{name:"weak_ptr",kind:"sample",code:`/**
 * @brief 弱指针，资源所有权
 * @class 语言特性
 */
#include <iostream>
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
}`},{name:"macro",kind:"sample",code:`/**
 * @brief 宏
 * @class 语言特性型
 */
#define CPPMAX(x,y) ((x)+(y) < 5?y:x)

#include <stdio.h>

int main(void)
{
    printf("max number is %d", CPPMAX(3, 5));
}`},{name:"args",kind:"sample",code:`/**
 * @brief 变参函数
 * @class 语言特性型
 */
#include <iostream>
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
`},{name:"heap",kind:"sample",code:`/**
 * @brief 堆内存安全
 * @class 功能逻辑型
 */
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr = (int *)malloc(sizeof(int));
    *ptr = 10;
    free(ptr);
    free(ptr);
    printf("%d", *ptr);
    return 0;
}`},{name:"thread",kind:"sample",code:`/**
 * @brief 多线程安全
 * @class 逻辑功能型
 */
#include <pthread.h>
#include <stdlib.h>
#include <stdio.h>
// 全局共享变量
int data = 0;
void *increment(void *v)
{
    for (int i = 0; i < 10; i++)
    {
        data++;
        printf("%d\\n", data);
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
}`},{name:"word_count",kind:"sample",code:`/**
 * @brief 单词计数
 * @class 逻辑功能型
 */
#include <stdio.h>

int get_input_type(char c)
{
    if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')
        return 1;

    return 0;
}

int main(void)
{
    char * str;
    char s[] = "Don't ask what your country can do for you, but ask what you can do for your country.";
    str = s;
    char c;

    int state = 0;	// init state
    int input = 0;	// 0: space		1: alpha
    int counter = 0;

    printf("hello, count how many words in string:\\n");
    printf("<%s>\\n", str);

    while ((c = *str++) != '\\0')
    {
        input = get_input_type(c);			

        if (state == 0 && input == 1)
            state = 1;
        else if (state == 1 && input == 0)
        {
            counter++;
            state = 0;
        } 
    }
    
    printf("find %d words.\\n", counter);
    
    return 0;
}`},{name:"prime_number",kind:"sample",code:`/**
 * @brief 100以内最大素数
 * @class 逻辑功能型
 */
#include <stdio.h>
#include <math.h>

int main(void)
{
    int i, j;
    int max = 0;

    for (i = 1; i <= 100; i++)
    {
        int tmp;

        tmp = (int)sqrt(i);

        for (j = 2; j <= tmp; j++)
        {
            if (i % j == 0)
                break;
        }

        if (j == tmp + 1)
            max = i;
    }

    printf("max = %d\\n", max);

    return 0;
}`},{name:"list",kind:"sample",code:`/**
 * @brief 双向链表。C语言没有链表类的数据类型，需要手动实现，这几乎是每个工程必须的组件，存在非常广泛，
 *        但用 Rust 实现链表其实是一个高难度操作，Rust 新手往往无法独立完成。
 * @class 语言特性型
 */
#include <stdio.h>

/**
 * Double List structure
 */
struct rt_list_node
{
    struct rt_list_node *next;                          /**< point to next node. */
    struct rt_list_node *prev;                          /**< point to prev node. */
};
typedef struct rt_list_node rt_list_t;                  /**< Type for lists. */

/**
 * @brief initialize a list
 *
 * @param l list to be initialized
 */
void rt_list_init(rt_list_t *l)
{
    l->next = l->prev = l;
}

/**
 * @brief insert a node after a list
 *
 * @param l list to insert it
 * @param n new node to be inserted
 */
void rt_list_insert_after(rt_list_t *l, rt_list_t *n)
{
    l->next->prev = n;
    n->next = l->next;

    l->next = n;
    n->prev = l;
}

/**
 * @brief insert a node before a list
 *
 * @param n new node to be inserted
 * @param l list to insert it
 */
    void rt_list_insert_before(rt_list_t *l, rt_list_t *n)
{
    l->prev->next = n;
    n->prev = l->prev;

    l->prev = n;
    n->next = l;
}

/**
 * @brief remove node from list.
 * @param n the node to remove from the list.
 */
    void rt_list_remove(rt_list_t *n)
{
    n->next->prev = n->prev;
    n->prev->next = n->next;

    n->next = n->prev = n;
}

/**
 * @brief tests whether a list is empty
 * @param l the list to test.
 */
    int rt_list_isempty(const rt_list_t *l)
{
    return l->next == l;
}

/**
 * @brief get the list length
 * @param l the list to get.
 */
    unsigned int rt_list_len(const rt_list_t *l)
{
    unsigned int len = 0;
    const rt_list_t *p = l;
    while (p->next != l)
    {
        p = p->next;
        len ++;
    }

    return len;
}

int main(void) {
    rt_list_t list = {0}, after = {0}, before = {0};
    const char *isempty[] = {"not empty", "is empty"};

    rt_list_init(&list);
    printf("%s\\n", isempty[rt_list_isempty(&list)]);

    rt_list_insert_after(&list, &after);
    printf("%s\\n", isempty[rt_list_isempty(&list)]);
    printf("%d\\n", rt_list_len(&list));

    rt_list_insert_before(&list, &before);
    printf("%d\\n", rt_list_len(&list));

    rt_list_remove(&after);
    printf("%d\\n", rt_list_len(&list));

    rt_list_remove(&before);
    printf("%d\\n", rt_list_len(&list));

    return 0;
}`},{name:"container_of",kind:"sample",code:`/**
 * @brief 如果在C代码中使用了面向对象编程的思想，就一定会有 \`container_of\` 宏，
 *        这个宏也是 linux 源码中的一段经典代码，
 *        这个宏用来根据已知的成员地址和结构体类型，计算出结构体的地址，原理上很简单，使用也非常广泛，
 *        但因为涉及指针、类型强制转换这些不安全操作，在rust中难以实现。
 * 
 *        如果用rust重写某个功能，根据 rust 的内置类型和语法，不会碰到这个问题，
 *        但如果转译已有的c代码，则必须用 rust 的方式实现这个宏。
 * @class 语言特性型
 */
#include <stdio.h>

#define rt_container_of(ptr, type, member) \\
    ((type *)((char *)(ptr) - (unsigned long)(&((type *)0)->member)))

struct rt_node {
    int n;
} ;
/**
 * Base structure of Kernel object
 */
struct rt_object
{
    const char *name;                           /**< name of kernel object */
    int        type;                            /**< type of kernel object */
    int        flag;                            /**< flag of kernel object */

    struct rt_node  node;                       /**< list node of kernel object */
};

int main(void) {
    struct rt_object obj = {0}; 
    struct rt_node *ptr = &obj.node;

    obj.name = "tty1";
    obj.type = 1;
    obj.flag = 2;
    obj.node.n = 3;

    struct rt_object *container = rt_container_of(ptr, struct rt_object, node);
    printf("%s, %d, %d, %d\\n", container->name, container->type, container->flag, container->node.n);

    return 0;

}`},{name:"union",kind:"sample",code:`/**
 * @brief 联合体是复杂C代码中经常用到的类型，在Rust中可以使用\`#[repr(C)] union\`来表示，
 *        其实这样会引入unsafe代码，但就转译而言需要这样做
 * @class 语言特性型
 */
#include <stdio.h>

struct finsh_node
{
    int node_type;  /* node node_type */
    int data_type;  /* node data node_type */
    int idtype;     /* id node information */

    union {         /* value node */
        char    char_value;
        short   short_value;
        int     int_value;
        long    long_value;
        void*   ptr;
    } value;
};

int main(void) {
    struct finsh_node finsh = {0};
    int tmp = 0x12345678;
    finsh.value.long_value = (long)&tmp;
    printf("0x%x\\n", *(int *)finsh.value.ptr);

    return 0;
}`},{name:"bit_fields",kind:"sample",code:`/**
 * @brief 在用C语言做系统编程，对于硬件寄存器的描述，或用C语言做协议栈，对紧凑协议内容的描述，
 *        往往几个位就对应实际有意义的量，一个bit不够描述，一个byte又太多余，就出现了位域（bit fields)特性，
 *        Rust 中至今没有位域的概念，外部crate来实现也无法完全实现C语言的效果。
 * @class 语言特性型
 */
#include <stdio.h>

typedef union StandardVersion
{
    struct
    {
        int bugfix : 8; /*!< bugfix version [7:0] */
        int minor : 8;  /*!< minor version [15:8] */
        int major : 8;  /*!< major version [23:16] */
        int name : 8;   /*!< name [31:24] */
    };
    int version; /*!< combined version numbers. */
} standard_version_t;

int main(void) {
    standard_version_t ver = {0};
    ver.version = 0x01000102;
    printf("%d.%d.%d.%d\\n", ver.name, ver.major, ver.minor, ver.bugfix);

    return 0;
}`},{name:"func_ptr",kind:"sample",code:`/**
 * @brief C代码中往往通过在结构体中定义函数指针的形式来实现面向对象编程的效果，Rust的trait可以更优雅的实现相同效果
 * @class C++语言特性型
 */
#include <stdio.h>

typedef struct rt_device *rt_device_t;
/**
 * operations set for device object
 */
struct rt_device_ops
{
    /* common device interface */
    int  (*init)   (rt_device_t dev);
    int  (*open)   (rt_device_t dev, int oflag);
    int  (*close)  (rt_device_t dev);
    unsigned int (*read)   (rt_device_t dev, int pos, void *buffer, unsigned int size);
    unsigned int (*write)  (rt_device_t dev, int pos, const void *buffer, unsigned int size);
    int  (*control)(rt_device_t dev, int cmd, void *args);
};

struct rt_device {
    int flag;
    int open_flg;
    int ref_count;
    int device_id;
    // struct rt_device_ops ops;

    int  (*init)   (rt_device_t dev);
    int  (*open)   (rt_device_t dev, int oflag);
    int  (*close)  (rt_device_t dev);
    unsigned int (*read)   (rt_device_t dev, int pos, void *buffer, unsigned int size);
    unsigned int (*write)  (rt_device_t dev, int pos, const void *buffer, unsigned int size);
    int  (*control)(rt_device_t dev, int cmd, void *args);
};

int  init   (rt_device_t dev) {
    dev->flag = 0;
    printf("init\\n");
    return 0;
}

int  open   (rt_device_t dev, int oflag) {
    dev->open_flg = oflag;
    printf("open, 0x%x\\n", dev->open_flg);
    return 0;
}

int  close  (rt_device_t dev) {
    dev->open_flg = 0;
    printf("close\\n");
    return 0;
}

unsigned int read   (rt_device_t dev, int pos, void *buffer, unsigned int size) {
    printf("read\\n");
    return 0;
}

unsigned int write  (rt_device_t dev, int pos, const void *buffer, unsigned int size) {
    printf("write\\n");
    return 0;
}

int  control(rt_device_t dev, int cmd, void *args) {
    printf("control\\n");
    return 0;
}

int main(void) {
    struct rt_device dev = {0};
    dev.init = init;
    dev.open = open;
    dev.close = close;
    dev.read = read;
    dev.write = write;
    dev.control = control;

    dev.init(&dev);
    dev.open(&dev, 0x0102);
    dev.close(&dev);
    dev.read(&dev, 0, 0, 0);
    dev.write(&dev, 0, 0, 0);
    dev.control(&dev, 0, 0);

    return 0;
}`}],Ne={class:"editor-wrapper"},Ie={class:"title"},je={class:"run"},Pe={class:"output"},Ke=N({__name:"Editor",props:{title:{default:"Editor"},lang:{}},setup(a){const e=a,t=d([]),u=d(!1),o=d(!1),n=d(""),s=d(""),w=d(""),r=d("");let f;const h=d(),c=d();function x(){t.value=[],u.value=!1}le(()=>{r.value=te();let m=[],_="// Here shows rust code generated from C!";e.lang==="cpp"?(m=[Y,we(),ee],_=V[0].code,w.value=V[0].name):e.lang==="rust"&&(m=[Y,Ce(),ee]);const v=ye.create({doc:_,extensions:m});if(h.value&&(c.value=new xe({state:v,parent:h.value})),e.lang==="cpp"){f=d(!0);const C=d("");i.on(U,p=>{n.value="",s.value="",x(),r.value=te(),c.value.dispatch({changes:{from:0,to:c.value.state.doc.length,insert:p.code}}),w.value=p.name}),i.on(j,p=>{C.value=p}),i.on(K,async p=>{var W;let b=p.prompt;C.value&&(b=`${b}，以下是错误信息：
${C.value}`,C.value="");const g={prompt:b,tool:p.tool,code:c.value.state.doc.toString(),id:r.value};if(console.log("transcode request data:",g),p.tool==="c2rust"){try{const y=await De(g);console.log("transcode response data:",y),y.status==0?(u.value=!1,i.emit(I,y.code)):(console.error(y.error),u.value=!0,t.value=(((W=y.error)==null?void 0:W.toString())||"").split(`
`))}catch(y){console.error(y.message),u.value=!0,t.value=(y.message||"").split(`
`)}i.emit(F,null),p.is_auto&&i.emit(X,null);return}let S="",z="",J=!1,B=!1;Te(g,y=>{z+=y.content,B||(S+=y.content),S.indexOf("```rust")>=0&&(S=S.split("```rust")[1],J=!0),J&&!B&&(S.indexOf("```")>=0&&(S=S.split("```")[0].trim(),B=!0),i.emit(I,S))},()=>{console.log("转译完成！"),console.log(z);const y=/```rust\n([\s\S]*?)```/g,G=[];let Q="";for(;Q=y.exec(z);)G.push(Q[1]);i.emit(I,G[0]),i.emit(F,null),p.is_auto&&i.emit(X,null)})})}else e.lang==="rust"&&(f=d(!1),i.on(I,C=>{c.value.dispatch({changes:{from:0,to:c.value.state.doc.length,insert:C}})}),i.on(K,async C=>{x(),c.value.dispatch({changes:{from:0,to:c.value.state.doc.length,insert:""}})}),i.on(U,C=>{i.emit(j,""),c.value.dispatch({changes:{from:0,to:c.value.state.doc.length,insert:_}}),x(),n.value="",s.value=""}))});async function T(){x(),e.lang==="cpp"?(console.log("Run cpp clicked."),console.log("With compile params: "+n.value),console.log("With exec params: "+s.value),t.value=["Compile with command: g++ ./source.cpp -o target "+n.value,"Exec with command: ./target "+s.value]):e.lang==="rust"&&(console.log("Run rust clicked."),console.log("With exec params: "+s.value),t.value=["Exec with command: cargo run -q -- "+s.value]);const m={language:e.lang,code:c.value.state.doc.toString(),compile_params:n.value,exec_params:s.value};console.log("exec request data:",m);let _="";try{const v=await Ae(m);console.log("exec response data:",v),v.status==0?u.value=!1:u.value=!0,_=v.output,t.value=t.value.concat((v.output||"").split(`
`))}catch(v){console.error(v.message),u.value=!0,_=v.message||"",t.value=t.value.concat((v.message||"").split(`
`))}return e.lang==="rust"&&(u.value?i.emit(j,_):i.emit(j,"")),o.value=!1,_}return e.lang==="cpp"?i.on(H,async function(m){if(console.warn("开始自动测评......"),console.warn("开始转译......"),i.emit(K,{is_auto:!0,prompt:"",...m}),console.log(m),m.auto_repeat===m.repeat_remain){console.warn("cpp开始执行......");const _=await T();console.warn("cpp执行完成......"),i.emit(re,{exec_output:_,exec_code:c.value.state.doc.toString()})}}):e.lang==="rust"&&i.on(X,async()=>{console.warn("转译完成......"),console.warn("rust开始执行......");const m=await T();console.warn("rust执行完成......"),i.emit(oe,{exec_output:m,exec_code:c.value.state.doc.toString()})}),(m,_)=>(k(),D("div",Ne,[l("div",Ie,O(e.title)+": "+O(w.value),1),l("div",{class:"editor-main",ref_key:"editorRef",ref:h},null,512),l("div",je,[ce(f)?R((k(),D("input",{key:0,"onUpdate:modelValue":_[0]||(_[0]=v=>n.value=v),type:"text",placeholder:"编译参数"},null,512)),[[L,n.value]]):ue("",!0),R(l("input",{"onUpdate:modelValue":_[1]||(_[1]=v=>s.value=v),type:"text",placeholder:"运行参数"},null,512),[[L,s.value]]),l("button",{onClick:T},O(o.value?"运行中...":"运行"),1)]),l("div",Pe,[(k(!0),D(de,null,pe(t.value,v=>(k(),D("p",{class:_e(u.value?"error":"")},O(v),3))),256))])]))}}),$=(a,e)=>{const t=a.__vccOpts||a;for(const[u,o]of e)t[u]=o;return t},ne=$(Ke,[["__scopeId","data-v-207c4e3d"]]),M=a=>(fe("data-v-813f7fd9"),a=a(),he(),a),Le={class:"operations"},Ue={class:"oper-item"},Ve=M(()=>l("option",{value:"chatglm"},"智谱AI",-1)),qe=M(()=>l("option",{value:"baichuan"},"百川AI",-1)),$e=M(()=>l("option",{value:"c2rust"},"C2Rust",-1)),Me=[Ve,qe,$e],ze={class:"oper-item"},Be=M(()=>l("label",{for:"autoRepeatInput"},"    自动转译重试次数: ",-1)),Xe=N({__name:"Operations",setup(a){const e=d("chatglm"),t=d("转译"),u=d("自动转译"),o=d(""),n=d(1),s=d(1),w=d(!0),r=P({cpp:!0,rust:!0}),f=d(""),h=d(!0),c=P({cpp:"",rust:""}),x=P({cpp:"",rust:""});function T(){n.value>5?n.value=5:n.value<1&&(n.value=1),s.value=n.value}function m(){return r.cpp&&r.rust}function _(){if(!m())return;u.value="自动转译";const p=(c.cpp||"").replace(/\r\n/g,`
`).trim(),b=(c.rust||"").replace(/\r\n/g,`
`).trim();console.log({c_output:p,rust_output:b}),s.value-=1,p===b?(h.value=!0,f.value="运行输出完全匹配",r.cpp=!0,r.rust=!0,c.cpp="",c.rust="",Re(x).then(g=>{console.log("数据库更新结果：",g)}).catch(g=>{console.error("数据库更新失败：",g)})):(h.value=!1,s.value>0?(f.value="运行输出不匹配(剩余重试次数："+s.value+")",console.warn("测评未不通过"),i.emit(H,{auto_repeat:n.value,repeat_remain:s.value,tool:e.value,prompt:"给出的代码错误，请根据错误信息修正代码"}),r.cpp=!0,c.rust="",r.rust=!1):(f.value="运行输出不匹配",r.cpp=!0,r.rust=!0,c.cpp="",c.rust=""))}function v(){m()&&(s.value=n.value,f.value="",r.cpp=!1,r.rust=!1,u.value="正在转译...",i.emit(H,{auto_repeat:n.value,repeat_remain:s.value,tool:e.value}))}i.on(re,p=>{r.cpp=!0,c.cpp=p.exec_output,x.cpp=p.exec_code,_()}),i.on(oe,p=>{r.rust=!0,c.rust=p.exec_output,x.rust=p.exec_code,_()});function C(){w.value&&(w.value=!1,f.value="",t.value="转译中...",console.log("Transcode clicked!"),console.log(`Tool selected: ${e.value}`),console.log(`With user prompt: ${o.value}`),i.emit(K,{tool:e.value,prompt:o.value}),o.value="")}return i.on(F,()=>{w.value=!0,t.value="转译"}),(p,b)=>(k(),D("div",Le,[l("div",Ue,[Z(" 转译工具: "),R(l("select",{"onUpdate:modelValue":b[0]||(b[0]=g=>e.value=g)},Me,512),[[ve,e.value]])]),l("button",{class:"oper-item",onClick:C},O(t.value),1),R(l("input",{class:"prompt","onUpdate:modelValue":b[1]||(b[1]=g=>o.value=g),type:"text",placeholder:"不满意?提点建议后再次转译(我会自动在末尾附上错误信息哦)......"},null,512),[[L,o.value]]),l("div",ze,[Be,R(l("input",{id:"autoRepeatInput",class:"auto-repeat-input",onchange:T,type:"number","onUpdate:modelValue":b[2]||(b[2]=g=>n.value=g)},null,512),[[L,n.value]]),Z("   "),l("button",{onClick:v},O(u.value),1),l("span",{style:me({color:h.value?"#41b883":"#ff5555"})},O(f.value),5)])]))}}),Fe=$(Xe,[["__scopeId","data-v-813f7fd9"]]),He={class:"side-wrapper"},Je={class:"dir-name"},We={class:"tree-wrapper"},Ge=N({__name:"Side",setup(a){const e=P({children:V}),t=d("示例"),u={children:"children",label:"name"};function o(){t.value="示例",e.children=V}async function n(){console.log("打开文件夹");try{const r=await window.showDirectoryPicker();e.children=(await s(r)).children,t.value=r.name}catch(r){console.error(r),r.name==="AbortError"&&console.log("用户取消了选择")}}async function s(r){if(r.kind==="file")return r;r.children=[];const f=r.entries();for await(const h of f)r.children.push(await s(h[1]));return r}async function w(r){if(console.log(r),r.kind==="directory")return;if(r.kind==="sample"){i.emit(U,r);return}const f=await r.getFile(),h=new FileReader;h.onload=function(c){var x;i.emit(U,{name:f.name,code:(x=c.target)==null?void 0:x.result})},h.readAsText(f,"utf-8")}return(r,f)=>{const h=Se;return k(),D("div",He,[l("div",Je,"文件夹: "+O(t.value),1),l("div",We,[A(h,{data:e.children,props:u,accordion:"","highlight-current":!0,"auto-expand-parent":!0,onNodeClick:w},null,8,["data"])]),l("div",{class:"btns"},[l("button",{onClick:n},"打开文件夹"),l("button",{onClick:o},"加载示例")])])}}}),Qe=$(Ge,[["__scopeId","data-v-2dc46843"]]),Ze={class:"top-wrapper"},Ye={class:"side"},et={class:"editors"},tt=N({__name:"HomeView",setup(a){return(e,t)=>(k(),D("main",null,[l("div",Ze,[l("div",Ye,[A(Qe)]),l("div",et,[A(ne,{title:"C source code",lang:"cpp"}),A(ne,{title:"Generated Rust source code",lang:"rust"})])]),A(Fe)]))}}),nt=$(tt,[["__scopeId","data-v-cbdd20ea"]]),rt=N({__name:"App",setup(a){return(e,t)=>(k(),be(nt))}}),ot=ge(rt);ot.mount("#app");
