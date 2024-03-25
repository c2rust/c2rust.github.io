var se=Object.defineProperty;var ae=(a,e,t)=>e in a?se(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var x=(a,e,t)=>(ae(a,typeof e!="symbol"?e+"":e,t),t);import{d as N,r as u,q as le,o as S,c as O,a as l,I as k,u as ce,D as T,_ as I,J as ue,G as de,W as pe,C as _e,Q as B,H as Z,$ as ve,L as me,a0 as fe,a1 as he,V as A,A as ge,a2 as be}from"./@vue-CaA77chp.js";import{e as ye,E as we,A as xe,B as Ee}from"./@codemirror-I-DanHR-.js";import{b as Y}from"./codemirror-yz77EbLa.js";import{d as ee}from"./@uiw-CLhxolpj.js";import{m as Ce}from"./mitt-DJ65BbbF.js";import{v as te}from"./uuid-D8aEg3BZ.js";import{E as Se}from"./element-plus-D4yYKw6d.js";import"./@lezer-BKVAMdCn.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@babel-CCbyfPlC.js";import"./lodash-es-BcjJjR9F.js";import"./@element-plus-BXVs1juE.js";import"./@vueuse-CjgnB8XA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const i=Ce(),P="TRANSCODE_CLICKED",X="TRANSCODE_DONE",R="RUST_CODE_UPDATE",L="CPP_CODE_UPDATE",F="EVALUATION_CLICKED",z="AUTO_TRANSCODE_DONE",oe="CPP_EXEC_DONE",re="RUST_EXEC_DONE",j="RUST_EXEC_ERROR";class ke{constructor(e){x(this,"url");x(this,"requestInit");x(this,"onmessage");x(this,"ondone");x(this,"onerror");x(this,"ontimeout");x(this,"controller");x(this,"timer",0);x(this,"data_segment","");this.url=e.url,this.requestInit=e.requestInit,this.onmessage=e.onmessage,this.ondone=e.ondone,this.onerror=e.onerror,this.controller=new AbortController,this.createFetchRequest()}createFetchRequest(){this.timeout(),fetch(this.url,{method:"POST",signal:this.controller.signal,...this.requestInit}).then(e=>(clearTimeout(this.timer),e.status===200?e.body:Promise.reject(e))).then(async e=>{var r;const t=e.getReader();let c=0;for(;;){const{value:o,done:s}=await t.read();if(s){(r=this.ondone)==null||r.call(this);break}else{const n=((this.data_segment||"")+new TextDecoder().decode(o)).split(`

`).filter(Boolean);this.data_segment=this.onmessage(n,c++)}}}).catch(e=>{var t;(t=this.onerror)==null||t.call(this,e)})}abort(){this.controller&&this.controller.abort()}timeout(e=6e4){this.timer=window.setTimeout(()=>{var t;this.abort(),(t=this.ontimeout)==null||t.call(this)},e)}}var ie={VITE_APP_NAME:"rustedu",VITE_API_URL:"https://api.rustedu.com",BASE_URL:"/",MODE:"rustedu",DEV:!1,PROD:!0,SSR:!1};const Oe=ie;let H=Oe.VITE_API_URL;console.log(ie);const De=async a=>await(await fetch(H+"/api/transcode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();function Ae(a,e,t){new ke({url:H+"/api/transcode/stream",requestInit:{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(a)},onmessage:(c,r)=>{for(const o of c)if(o!=="[DONE]")try{const s=JSON.parse(o);e(s)}catch{return o}return""},ondone:()=>{t()},ontimeout:()=>{console.log("timeout!")}})}const Te=async a=>await(await fetch(H+"/api/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json(),U=[{name:"hello",kind:"sample",code:`#include <stdio.h>

int main()
{
    printf("Hello, World!");
    return 0;
}
`},{name:"add",kind:"sample",code:`#include <iostream>

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
}`},{name:"trait",kind:"sample",code:`class AbstractK
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
}`},{name:"weak_ptr",kind:"sample",code:`#include <iostream>
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
}`},{name:"macro",kind:"sample",code:`#define CPPMAX(x,y) ((x)+(y) < 5?y:x)

#include <stdio.h>

int main(void)
{
    printf("max number is %d", CPPMAX(3, 5));
}`},{name:"args",kind:"sample",code:`#include <iostream>
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
`},{name:"heap",kind:"sample",code:`#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr = (int *)malloc(sizeof(int));
    *ptr = 10;
    free(ptr);
    free(ptr);
    printf("%d", *ptr);
    return 0;
}`},{name:"thread",kind:"sample",code:`#include <pthread.h>
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
}`},{name:"word_count",kind:"sample",code:`#include <stdio.h>

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
}`},{name:"prime_number",kind:"sample",code:`#include <stdio.h>
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
}`},{name:"list",kind:"sample",code:`#include <stdio.h>

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
}`},{name:"container_of",kind:"sample",code:`#include <stdio.h>

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

}`},{name:"union",kind:"sample",code:`#include <stdio.h>

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
}`},{name:"bit_fields",kind:"sample",code:`#include <stdio.h>

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
}`},{name:"func_ptr",kind:"sample",code:`#include <stdio.h>

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
}`}],Ne={class:"editor-wrapper"},Re={class:"title"},je={class:"run"},Pe={class:"output"},Ie=N({__name:"Editor",props:{title:{default:"Editor"},lang:{}},setup(a){const e=a,t=u([]),c=u(!1),r=u(!1),o=u(""),s=u(""),y=u(""),n=u("");let m;const h=u(),d=u();function w(){t.value=[],c.value=!1}le(()=>{n.value=te();let g=[],v="// Here shows rust code generated from C!";e.lang==="cpp"?(g=[Y,xe(),ee],v=U[0].code,y.value=U[0].name):e.lang==="rust"&&(g=[Y,Ee(),ee]);const _=ye.create({doc:v,extensions:g});if(h.value&&(d.value=new we({state:_,parent:h.value})),e.lang==="cpp"){m=u(!0);const f=u("");i.on(L,p=>{n.value=te(),w(),d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:p.code}}),y.value=p.name}),i.on(j,p=>{f.value=p}),i.on(P,async p=>{var J;let E=p.prompt;f.value&&(E=`${E}，以下是错误信息：
${f.value}`,f.value=""),w();const $={prompt:E,tool:p.tool,code:d.value.state.doc.toString(),id:n.value};if(console.log("transcode request data:",$),p.tool==="c2rust"){try{const b=await De($);console.log("transcode response data:",b),b.status==0?(c.value=!1,i.emit(R,b.code)):(console.error(b.error),c.value=!0,t.value=(((J=b.error)==null?void 0:J.toString())||"").split(`
`))}catch(b){console.error(b.message),c.value=!0,t.value=(b.message||"").split(`
`)}i.emit(X,null),p.is_auto&&i.emit(z,null);return}let C="",q="",W=!1,M=!1;Ae($,b=>{q+=b.content,M||(C+=b.content),C.indexOf("```rust")>=0&&(C=C.split("```rust")[1],W=!0),W&&!M&&(C.indexOf("```")>=0&&(C=C.split("```")[0].trim(),M=!0),i.emit(R,C))},()=>{console.log("转译完成！"),console.log(q);const b=/```rust\n([\s\S]*?)```/g,G=[];let Q="";for(;Q=b.exec(q);)G.push(Q[1]);i.emit(R,G[0]),i.emit(X,null),p.is_auto&&i.emit(z,null)})})}else e.lang==="rust"&&(m=u(!1),i.on(R,f=>{d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:f}})}),i.on(P,async f=>{w(),d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:""}})}),i.on(L,f=>{i.emit(j,""),d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:v}}),w()}))});async function D(){w(),e.lang==="cpp"?(console.log("Run cpp clicked."),console.log("With compile params: "+o.value),console.log("With exec params: "+s.value),t.value=["Compile with command: g++ ./source.cpp -o target "+o.value,"Exec with command: ./target "+s.value]):e.lang==="rust"&&(console.log("Run rust clicked."),console.log("With exec params: "+s.value),t.value=["Exec with command: cargo run -q -- "+s.value]);const g={language:e.lang,code:d.value.state.doc.toString(),compile_params:o.value,exec_params:s.value};console.log("exec request data:",g),o.value="",s.value="";let v="";try{const _=await Te(g);console.log("exec response data:",_),_.status==0?c.value=!1:c.value=!0,v=_.output,t.value=t.value.concat((_.output||"").split(`
`))}catch(_){console.error(_.message),c.value=!0,v=_.message||"",t.value=t.value.concat((_.message||"").split(`
`))}return c.value?i.emit(j,v):i.emit(j,""),r.value=!1,v}return e.lang==="cpp"?i.on(F,async function(g){console.warn("开始自动测评......"),console.warn("开始转译......"),i.emit(P,{is_auto:!0,prompt:"",...g}),console.warn("cpp开始执行......");const v=await D();console.warn("cpp执行完成......"),i.emit(oe,v)}):e.lang==="rust"&&i.on(z,async()=>{console.warn("转译完成......"),console.warn("rust开始执行......");const g=await D();console.warn("rust执行完成......"),i.emit(re,g)}),(g,v)=>(S(),O("div",Ne,[l("div",Re,k(e.title)+": "+k(y.value),1),l("div",{class:"editor-main",ref_key:"editorRef",ref:h},null,512),l("div",je,[ce(m)?T((S(),O("input",{key:0,"onUpdate:modelValue":v[0]||(v[0]=_=>o.value=_),type:"text",placeholder:"编译参数"},null,512)),[[I,o.value]]):ue("",!0),T(l("input",{"onUpdate:modelValue":v[1]||(v[1]=_=>s.value=_),type:"text",placeholder:"运行参数"},null,512),[[I,s.value]]),l("button",{onClick:D},k(r.value?"运行中...":"运行"),1)]),l("div",Pe,[(S(!0),O(de,null,pe(t.value,_=>(S(),O("p",{class:_e(c.value?"error":"")},k(_),3))),256))])]))}}),V=(a,e)=>{const t=a.__vccOpts||a;for(const[c,r]of e)t[c]=r;return t},ne=V(Ie,[["__scopeId","data-v-21a7a2d1"]]),K=a=>(fe("data-v-7bec93e1"),a=a(),he(),a),Le={class:"operations"},Ue={class:"oper-item"},Ve=K(()=>l("option",{value:"chatglm"},"智谱AI",-1)),Ke=K(()=>l("option",{value:"baichuan"},"百川AI",-1)),$e=K(()=>l("option",{value:"c2rust"},"C2Rust",-1)),qe=[Ve,Ke,$e],Me={class:"oper-item"},ze=K(()=>l("label",{for:"autoRepeatInput"},"    自动转译重试次数: ",-1)),Be=N({__name:"Operations",setup(a){const e=u("chatglm"),t=u("转译"),c=u("自动转译"),r=u(""),o=u(0),s=u(0),y=u(!0),n=B({cpp:!0,rust:!0}),m=u(""),h=u(!0),d=B({cpp:"",rust:""});function w(){o.value>5?o.value=5:o.value<0&&(o.value=0),s.value=o.value}function D(){return n.cpp&&n.rust}function g(){if(!D())return;c.value="自动转译";const f=(d.cpp||"").replace(/\r\n/g,`
`).trim(),p=(d.rust||"").replace(/\r\n/g,`
`).trim();d.cpp="",d.rust="",f===p?(h.value=!0,m.value="运行输出完全匹配",n.cpp=!0,n.rust=!0):(h.value=!1,s.value-=1,s.value>0?(m.value="运行输出不匹配(剩余重试次数："+s.value+")",console.warn("测评未不通过"),i.emit(F,{auto_repeat:s.value,tool:e.value,prompt:"给出的代码错误，请根据错误信息修正代码"}),n.cpp=!1,n.rust=!1):(m.value="运行输出不匹配",n.cpp=!0,n.rust=!0))}function v(){D()&&(s.value=o.value,m.value="",n.cpp=!1,n.rust=!1,c.value="正在转译...",i.emit(F,{auto_repeat:o.value,tool:e.value}))}i.on(oe,f=>{n.cpp=!0,d.cpp=f,g()}),i.on(re,f=>{n.rust=!0,d.rust=f,g()});function _(){y.value&&(y.value=!1,m.value="",t.value="转译中...",console.log("Transcode clicked!"),console.log(`Tool selected: ${e.value}`),console.log(`With user prompt: ${r.value}`),i.emit(P,{tool:e.value,prompt:r.value}),r.value="")}return i.on(X,()=>{y.value=!0,t.value="转译"}),(f,p)=>(S(),O("div",Le,[l("div",Ue,[Z(" 转译工具: "),T(l("select",{"onUpdate:modelValue":p[0]||(p[0]=E=>e.value=E)},qe,512),[[ve,e.value]])]),l("button",{class:"oper-item",onClick:_},k(t.value),1),T(l("input",{class:"prompt","onUpdate:modelValue":p[1]||(p[1]=E=>r.value=E),type:"text",placeholder:"不满意?提点建议后再次转译(我会自动在末尾附上错误信息哦)......"},null,512),[[I,r.value]]),l("div",Me,[ze,T(l("input",{id:"autoRepeatInput",class:"auto-repeat-input",onchange:w,type:"number","onUpdate:modelValue":p[2]||(p[2]=E=>o.value=E)},null,512),[[I,o.value]]),Z("   "),l("button",{onClick:v},k(c.value),1),l("span",{style:me({color:h.value?"#41b883":"#ff5555"})},k(m.value),5)])]))}}),Xe=V(Be,[["__scopeId","data-v-7bec93e1"]]),Fe={class:"side-wrapper"},He={class:"dir-name"},We={class:"tree-wrapper"},Je=N({__name:"Side",setup(a){const e=B({children:U}),t=u("示例"),c={children:"children",label:"name"};function r(){t.value="示例",e.children=U}async function o(){console.log("打开文件夹");try{const n=await window.showDirectoryPicker();e.children=(await s(n)).children,t.value=n.name}catch(n){console.error(n),n.name==="AbortError"&&console.log("用户取消了选择")}}async function s(n){if(n.kind==="file")return n;n.children=[];const m=n.entries();for await(const h of m)n.children.push(await s(h[1]));return n}async function y(n){if(console.log(n),n.kind==="directory")return;if(n.kind==="sample"){i.emit(L,n);return}const m=await n.getFile(),h=new FileReader;h.onload=function(d){var w;i.emit(L,{name:m.name,code:(w=d.target)==null?void 0:w.result})},h.readAsText(m,"utf-8")}return(n,m)=>{const h=Se;return S(),O("div",Fe,[l("div",He,"文件夹: "+k(t.value),1),l("div",We,[A(h,{data:e.children,props:c,accordion:"","highlight-current":!0,"auto-expand-parent":!0,onNodeClick:y},null,8,["data"])]),l("div",{class:"btns"},[l("button",{onClick:o},"打开文件夹"),l("button",{onClick:r},"加载示例")])])}}}),Ge=V(Je,[["__scopeId","data-v-2dc46843"]]),Qe={class:"top-wrapper"},Ze={class:"side"},Ye={class:"editors"},et=N({__name:"HomeView",setup(a){return(e,t)=>(S(),O("main",null,[l("div",Qe,[l("div",Ze,[A(Ge)]),l("div",Ye,[A(ne,{title:"C source code",lang:"cpp"}),A(ne,{title:"Generated Rust source code",lang:"rust"})])]),A(Xe)]))}}),tt=V(et,[["__scopeId","data-v-cbdd20ea"]]),nt=N({__name:"App",setup(a){return(e,t)=>(S(),ge(tt))}}),ot=be(nt);ot.mount("#app");
