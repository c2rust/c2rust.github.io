var le=Object.defineProperty;var ce=(i,e,t)=>e in i?le(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var E=(i,e,t)=>(ce(i,typeof e!="symbol"?e+"":e,t),t);import{d as j,r as d,q as ue,o as O,c as T,a as l,I as k,u as de,D as N,_ as q,J as pe,G as _e,W as ve,C as me,Q as U,H as Y,$ as fe,L as he,a0 as be,a1 as ge,V as A,A as ye,a2 as xe}from"./@vue-CaA77chp.js";import{e as we,E as Ce,A as Ee,B as Se}from"./@codemirror-I-DanHR-.js";import{b as ee}from"./codemirror-yz77EbLa.js";import{d as te}from"./@uiw-CLhxolpj.js";import{m as Oe}from"./mitt-DJ65BbbF.js";import{v as ne}from"./uuid-D8aEg3BZ.js";import{E as ke}from"./element-plus-D4yYKw6d.js";import"./@lezer-BKVAMdCn.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@babel-CCbyfPlC.js";import"./lodash-es-BcjJjR9F.js";import"./@element-plus-BXVs1juE.js";import"./@vueuse-CjgnB8XA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const s=Oe(),V="TRANSCODE_CLICKED",J="TRANSCODE_DONE",L="RUST_CODE_UPDATE",$="CPP_CODE_UPDATE",H="EVALUATION_CLICKED",F="AUTO_TRANSCODE_DONE",re="CPP_EXEC_DONE",se="RUST_EXEC_DONE",K="RUST_EXEC_ERROR",ie="UPDATE_SERVER_TOOL";class Te{constructor(e){E(this,"url");E(this,"requestInit");E(this,"onmessage");E(this,"ondone");E(this,"onerror");E(this,"ontimeout");E(this,"controller");E(this,"timer",0);E(this,"data_segment","");this.url=e.url,this.requestInit=e.requestInit,this.onmessage=e.onmessage,this.ondone=e.ondone,this.onerror=e.onerror,this.controller=new AbortController,this.createFetchRequest()}createFetchRequest(){this.timeout(),fetch(this.url,{method:"POST",signal:this.controller.signal,...this.requestInit}).then(e=>(clearTimeout(this.timer),e.status===200?e.body:Promise.reject(e))).then(async e=>{var r;const t=e.getReader();let u=0;for(;;){const{value:n,done:o}=await t.read();if(o){(r=this.ondone)==null||r.call(this);break}else{const a=((this.data_segment||"")+new TextDecoder().decode(n)).split(`

`).filter(Boolean);this.data_segment=this.onmessage(a,u++)}}}).catch(e=>{var t;(t=this.onerror)==null||t.call(this,e)})}abort(){this.controller&&this.controller.abort()}timeout(e=6e4){this.timer=window.setTimeout(()=>{var t;this.abort(),(t=this.ontimeout)==null||t.call(this)},e)}}var ae={VITE_APP_NAME:"rustedu",VITE_API_URL:"https://api.rustedu.com",BASE_URL:"/",MODE:"rustedu",DEV:!1,PROD:!0,SSR:!1};const De=ae;let P=De.VITE_API_URL;console.log(ae);const Re=async i=>await(await fetch(P+"/api/transcode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json();function Ae(i,e,t){new Te({url:P+"/api/transcode/stream",requestInit:{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(i)},onmessage:(u,r)=>{for(const n of u)if(n!=="[DONE]")try{const o=JSON.parse(n);e(o)}catch{return n}return""},ondone:()=>{t()},ontimeout:()=>{console.log("timeout!")}})}const Ne=async i=>await(await fetch(P+"/api/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json(),je=async i=>await(await fetch(P+"/api/transcode/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json(),Pe=async i=>await(await fetch(P+"/api/transcode/auto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json(),M=[{name:"hello",kind:"sample",code:`/**
 * @brief 字符串输出
 * @class 逻辑功能型
 */
#include <stdio.h>

int main()
{
    printf("Hello, World!");
    return 0;
}
`},{name:"add",kind:"sample",exec_params:"10 20",code:`/**
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
}`}],Ie={class:"editor-wrapper"},Le={class:"title"},Ke={class:"run"},Ue={class:"output"},Ve=j({__name:"Editor",props:{title:{default:"Editor"},lang:{}},setup(i){const e=i,t=d([]),u=d(!1),r=d(!1),n=d(""),o=d(""),y=d(""),a=d("");let p;const f=d(),_=d();function h(){t.value=[],u.value=!1}ue(()=>{a.value=ne();let b=[],v="// Here shows rust code generated from C!";e.lang==="cpp"?(b=[ee,Ee(),te],v=M[0].code,y.value=M[0].name):e.lang==="rust"&&(b=[ee,Se(),te]);const m=we.create({doc:v,extensions:b});if(f.value&&(_.value=new Ce({state:m,parent:f.value})),e.lang==="cpp"){p=d(!0);const C=d("");s.on($,c=>{n.value=c.compile_params||"",o.value=c.exec_params||"",h(),a.value=ne(),_.value.dispatch({changes:{from:0,to:_.value.state.doc.length,insert:c.code}}),y.value=c.name}),s.on(K,c=>{C.value=c}),s.on(V,async c=>{var G;let w=c.prompt;C.value&&(w=`${w}，以下是错误信息：
${C.value}`,C.value="");const x={prompt:w,tool:c.tool,compile_params:n.value,exec_params:o.value,auto_repeat:c.auto_repeat||1,code:_.value.state.doc.toString(),id:a.value};if(console.log("transcode request data:",x),["c2rust","auto"].includes(c.tool)){try{let g=null;c.tool==="auto"?g=await Pe(x):g=await Re(x),console.log("transcode response data:",g),g.status==0?(u.value=!1,s.emit(L,g.content),s.emit(ie,g.tool)):(console.error(g.error),u.value=!0,t.value=(((G=g.error)==null?void 0:G.toString())||"").split(`
`))}catch(g){console.error(g.message),u.value=!0,t.value=(g.message||"").split(`
`)}s.emit(J,null),c.is_auto&&s.emit(F,null);return}let S="",B="",W=!1,X=!1;Ae(x,g=>{B+=g.content,X||(S+=g.content),S.indexOf("```rust")>=0&&(S=S.split("```rust")[1],W=!0),W&&!X&&(S.indexOf("```")>=0&&(S=S.split("```")[0].trim(),X=!0),s.emit(L,S))},()=>{console.log("转译完成！"),console.log(B);const g=/```rust\n([\s\S]*?)```/g,Q=[];let Z="";for(;Z=g.exec(B);)Q.push(Z[1]);s.emit(L,Q[0].trim()),s.emit(J,null),c.is_auto&&s.emit(F,null)})})}else e.lang==="rust"&&(p=d(!1),s.on(L,C=>{_.value.dispatch({changes:{from:0,to:_.value.state.doc.length,insert:C}})}),s.on(V,async C=>{h(),_.value.dispatch({changes:{from:0,to:_.value.state.doc.length,insert:""}})}),s.on($,C=>{s.emit(K,""),_.value.dispatch({changes:{from:0,to:_.value.state.doc.length,insert:v}}),h(),n.value=C.compile_params||"",o.value=C.exec_params||""}))});async function D(){r.value||(r.value=!0,await R(),r.value=!1)}async function R(){h(),e.lang==="cpp"?(console.log("Run cpp clicked."),console.log("With compile params: "+n.value),console.log("With exec params: "+o.value),t.value=["Compile with command: g++ ./source.cpp -o target "+n.value,"Exec with command: ./target "+o.value]):e.lang==="rust"&&(console.log("Run rust clicked."),console.log("With exec params: "+o.value),t.value=["Exec with command: cargo run -q -- "+o.value]);const b={language:e.lang,code:_.value.state.doc.toString(),compile_params:n.value,exec_params:o.value};console.log("exec request data:",b);let v="";try{const m=await Ne(b);console.log("exec response data:",m),m.status==0?u.value=!1:u.value=!0,v=m.output,t.value=t.value.concat((m.output||"").split(`
`))}catch(m){console.error(m.message),u.value=!0,v=m.message||"",t.value=t.value.concat((m.message||"").split(`
`))}return e.lang==="rust"&&(u.value?s.emit(K,v):s.emit(K,"")),v}return e.lang==="cpp"?s.on(H,async function(b){if(console.warn("开始自动测评......"),console.warn("开始转译......"),s.emit(V,{is_auto:!0,prompt:"",...b}),console.log(b),b.auto_repeat===b.repeat_remain){console.warn("cpp开始执行......");const v=await R();console.warn("cpp执行完成......"),s.emit(re,{exec_output:v,exec_code:_.value.state.doc.toString()})}}):e.lang==="rust"&&s.on(F,async()=>{console.warn("转译完成......"),console.warn("rust开始执行......");const b=await R();console.warn("rust执行完成......"),s.emit(se,{exec_output:b,exec_code:_.value.state.doc.toString()})}),(b,v)=>(O(),T("div",Ie,[l("div",Le,k(e.title)+": "+k(y.value),1),l("div",{class:"editor-main",ref_key:"editorRef",ref:f},null,512),l("div",Ke,[de(p)?N((O(),T("input",{key:0,"onUpdate:modelValue":v[0]||(v[0]=m=>n.value=m),type:"text",placeholder:"编译参数"},null,512)),[[q,n.value]]):pe("",!0),N(l("input",{"onUpdate:modelValue":v[1]||(v[1]=m=>o.value=m),type:"text",placeholder:"运行参数"},null,512),[[q,o.value]]),l("button",{onClick:D},k(r.value?"运行中...":"运行"),1)]),l("div",Ue,[(O(!0),T(_e,null,ve(t.value,m=>(O(),T("p",{class:me(u.value?"error":"")},k(m),3))),256))])]))}}),z=(i,e)=>{const t=i.__vccOpts||i;for(const[u,r]of e)t[u]=r;return t},oe=z(Ve,[["__scopeId","data-v-0468b904"]]),I=i=>(be("data-v-e0bae360"),i=i(),ge(),i),qe={class:"operations"},$e={class:"oper-item"},Me=I(()=>l("option",{value:"auto"},"自动",-1)),ze=I(()=>l("option",{value:"c2rust"},"C2Rust",-1)),Be=I(()=>l("option",{value:"chatglm"},"智谱AI",-1)),Xe=I(()=>l("option",{value:"baichuan"},"百川AI",-1)),Fe=[Me,ze,Be,Xe],Je={class:"oper-item"},He=I(()=>l("label",{for:"autoRepeatInput"},"    自动转译重试次数: ",-1)),We=j({__name:"Operations",setup(i){const e=d("auto"),t=d(""),u=d("转译"),r=d("自动转译"),n=d(""),o=d(1),y=d(1),a=d(!0),p=U({cpp:!0,rust:!0}),f=d(""),_=d(!0),h=U({cpp:"",rust:""}),D=U({cpp:"",rust:""});s.on(ie,c=>{t.value=c});function R(){o.value>5?o.value=5:o.value<1&&(o.value=1),y.value=o.value}function b(){return p.cpp&&p.rust}function v(){if(!b())return;r.value="自动转译";const c=(h.cpp||"").replace(/\r\n/g,`
`).trim(),w=(h.rust||"").replace(/\r\n/g,`
`).trim();console.log({c_output:c,rust_output:w}),y.value-=1,c===w?(_.value=!0,f.value="运行输出完全匹配",p.cpp=!0,p.rust=!0,h.cpp="",h.rust="",t.value="",je(D).then(x=>{console.log("数据库更新结果：",x)}).catch(x=>{console.error("数据库更新失败：",x)})):(_.value=!1,y.value>0?(f.value="运行输出不匹配(剩余重试次数："+y.value+")",console.warn("测评未不通过"),s.emit(H,{auto_repeat:o.value,repeat_remain:y.value,tool:t.value||e.value,prompt:"给出的代码错误，请根据错误信息修正代码"}),p.cpp=!0,h.rust="",p.rust=!1):(f.value="运行输出不匹配",y.value=0,p.cpp=!0,p.rust=!0,h.cpp="",h.rust="",t.value=""))}function m(){b()&&(y.value=o.value,f.value="",p.cpp=!1,p.rust=!1,r.value="正在转译...",s.emit(H,{auto_repeat:o.value,repeat_remain:y.value,tool:e.value}))}s.on(re,c=>{p.cpp=!0,h.cpp=c.exec_output,D.cpp=c.exec_code,v()}),s.on(se,c=>{p.rust=!0,h.rust=c.exec_output,D.rust=c.exec_code,v()});function C(){a.value&&(a.value=!1,f.value="",u.value="转译中...",console.log("Transcode clicked!"),console.log(`Tool selected: ${e.value}`),console.log(`With user prompt: ${n.value}`),s.emit(V,{tool:e.value,prompt:n.value,auto_repeat:o.value}),n.value="")}return s.on(J,()=>{a.value=!0,u.value="转译"}),(c,w)=>(O(),T("div",qe,[l("div",$e,[Y(" 转译工具: "),N(l("select",{"onUpdate:modelValue":w[0]||(w[0]=x=>e.value=x)},Fe,512),[[fe,e.value]])]),l("button",{class:"oper-item",onClick:C},k(u.value),1),N(l("input",{class:"prompt","onUpdate:modelValue":w[1]||(w[1]=x=>n.value=x),type:"text",placeholder:"不满意?提点建议后再次转译(我会自动在末尾附上错误信息哦)......"},null,512),[[q,n.value]]),l("div",Je,[He,N(l("input",{id:"autoRepeatInput",class:"auto-repeat-input",onchange:R,type:"number","onUpdate:modelValue":w[2]||(w[2]=x=>o.value=x)},null,512),[[q,o.value]]),Y("   "),l("button",{onClick:m},k(r.value),1),l("span",{style:he({color:_.value?"#41b883":"#ff5555"})},k(f.value),5)])]))}}),Ge=z(We,[["__scopeId","data-v-e0bae360"]]),Qe={class:"side-wrapper"},Ze={class:"dir-name"},Ye={class:"tree-wrapper"},et=j({__name:"Side",setup(i){const e=U({children:M}),t=d("示例"),u={children:"children",label:"name"};function r(){t.value="示例",e.children=M}async function n(){console.log("打开文件夹");try{const a=await window.showDirectoryPicker();e.children=(await o(a)).children,t.value=a.name}catch(a){console.error(a),a.name==="AbortError"&&console.log("用户取消了选择")}}async function o(a){if(a.kind==="file")return a;a.children=[];const p=a.entries();for await(const f of p)a.children.push(await o(f[1]));return a}async function y(a){if(console.log(a),a.kind==="directory")return;if(a.kind==="sample"){s.emit($,a);return}const p=await a.getFile(),f=new FileReader;f.onload=function(_){var h;s.emit($,{name:p.name,code:(h=_.target)==null?void 0:h.result})},f.readAsText(p,"utf-8")}return(a,p)=>{const f=ke;return O(),T("div",Qe,[l("div",Ze,"文件夹: "+k(t.value),1),l("div",Ye,[A(f,{data:e.children,props:u,accordion:"","highlight-current":!0,"auto-expand-parent":!0,onNodeClick:y},null,8,["data"])]),l("div",{class:"btns"},[l("button",{onClick:n},"打开文件夹"),l("button",{onClick:r},"加载示例")])])}}}),tt=z(et,[["__scopeId","data-v-2dc46843"]]),nt={class:"top-wrapper"},ot={class:"side"},rt={class:"editors"},st=j({__name:"HomeView",setup(i){return(e,t)=>(O(),T("main",null,[l("div",nt,[l("div",ot,[A(tt)]),l("div",rt,[A(oe,{title:"C source code",lang:"cpp"}),A(oe,{title:"Generated Rust source code",lang:"rust"})])]),A(Ge)]))}}),it=z(st,[["__scopeId","data-v-cbdd20ea"]]),at=j({__name:"App",setup(i){return(e,t)=>(O(),ye(it))}}),lt=xe(at);lt.mount("#app");
