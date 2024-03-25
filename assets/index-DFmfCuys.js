var re=Object.defineProperty;var oe=(a,e,t)=>e in a?re(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var x=(a,e,t)=>(oe(a,typeof e!="symbol"?e+"":e,t),t);import{d as N,r as u,q as ie,o as S,c as O,a as l,I as k,u as se,D as T,_ as P,J as ae,G as le,W as ce,C as ue,Q as M,H as J,$ as de,L as pe,a0 as _e,a1 as ve,V as A,A as me,a2 as fe}from"./@vue-CaA77chp.js";import{e as he,E as ge,A as be,B as ye}from"./@codemirror-I-DanHR-.js";import{b as G}from"./codemirror-yz77EbLa.js";import{d as Q}from"./@uiw-CLhxolpj.js";import{m as we}from"./mitt-DJ65BbbF.js";import{v as Z}from"./uuid-D8aEg3BZ.js";import{E as xe}from"./element-plus-D4yYKw6d.js";import"./@lezer-BKVAMdCn.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@babel-CCbyfPlC.js";import"./lodash-es-BcjJjR9F.js";import"./@element-plus-BXVs1juE.js";import"./@vueuse-CjgnB8XA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const i=we(),j="TRANSCODE_CLICKED",z="TRANSCODE_DONE",$="RUST_CODE_UPDATE",L="CPP_CODE_UPDATE",B="EVALUATION_CLICKED",q="AUTO_TRANSCODE_DONE",ee="CPP_EXEC_DONE",te="RUST_EXEC_DONE",R="RUST_EXEC_ERROR";class Ee{constructor(e){x(this,"url");x(this,"requestInit");x(this,"onmessage");x(this,"ondone");x(this,"onerror");x(this,"ontimeout");x(this,"controller");x(this,"timer",0);x(this,"data_segment","");this.url=e.url,this.requestInit=e.requestInit,this.onmessage=e.onmessage,this.ondone=e.ondone,this.onerror=e.onerror,this.controller=new AbortController,this.createFetchRequest()}createFetchRequest(){this.timeout(),fetch(this.url,{method:"POST",signal:this.controller.signal,...this.requestInit}).then(e=>(clearTimeout(this.timer),e.status===200?e.body:Promise.reject(e))).then(async e=>{var o;const t=e.getReader();let c=0;for(;;){const{value:r,done:s}=await t.read();if(s){(o=this.ondone)==null||o.call(this);break}else{const n=((this.data_segment||"")+new TextDecoder().decode(r)).split(`

`).filter(Boolean);this.data_segment=this.onmessage(n,c++)}}}).catch(e=>{var t;(t=this.onerror)==null||t.call(this,e)})}abort(){this.controller&&this.controller.abort()}timeout(e=6e4){this.timer=window.setTimeout(()=>{var t;this.abort(),(t=this.ontimeout)==null||t.call(this)},e)}}var ne={VITE_APP_NAME:"rustedu",VITE_API_URL:"https://api.rustedu.com",BASE_URL:"/",MODE:"rustedu",DEV:!1,PROD:!0,SSR:!1};const Ce=ne;let X=Ce.VITE_API_URL;console.log(ne);const Se=async a=>await(await fetch(X+"/api/transcode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();function ke(a,e,t){new Ee({url:X+"/api/transcode/stream",requestInit:{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(a)},onmessage:(c,o)=>{for(const r of c)if(r!=="[DONE]")try{const s=JSON.parse(r);e(s)}catch{return r}return""},ondone:()=>{t()},ontimeout:()=>{console.log("timeout!")}})}const Oe=async a=>await(await fetch(X+"/api/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json(),I=[{name:"hello",kind:"sample",code:`#include <stdio.h>

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
}`}],De={class:"editor-wrapper"},Ae={class:"title"},Te={class:"run"},Ne={class:"output"},Re=N({__name:"Editor",props:{title:{default:"Editor"},lang:{}},setup(a){const e=a,t=u([]),c=u(!1),o=u(!1),r=u(""),s=u(""),b=u(""),n=u("");let m;const h=u(),d=u();function y(){t.value=[],c.value=!1}ie(()=>{n.value=Z();let g=[],v="// Here shows rust code generated from C!";e.lang==="cpp"?(g=[G,be(),Q],v=I[0].code,b.value=I[0].name):e.lang==="rust"&&(g=[G,ye(),Q]);const _=he.create({doc:v,extensions:g});if(h.value&&(d.value=new ge({state:_,parent:h.value})),e.lang==="cpp"){m=u(!0);const f=u("");i.on(L,p=>{n.value=Z(),y(),d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:p.code}}),b.value=p.name}),i.on(R,p=>{f.value=p}),i.on(j,async p=>{var W;let E=p.prompt;f.value&&(E=`${E}，以下是错误信息：
${f.value}`,f.value=""),y();const V={prompt:E,tool:p.tool,code:d.value.state.doc.toString(),id:n.value};if(console.log("transcode request data:",V),p.tool==="c2rust"){try{const w=await Se(V);console.log("transcode response data:",w),w.status==0?(c.value=!1,i.emit($,w.code)):(console.error(w.error),c.value=!0,t.value=(((W=w.error)==null?void 0:W.toString())||"").split(`
`))}catch(w){console.error(w.message),c.value=!0,t.value=(w.message||"").split(`
`)}i.emit(z,null),p.is_auto&&i.emit(q,null);return}let C="",H=!1,K=!1;ke(V,w=>{K||(C+=w.content),C.indexOf("```rust")>=0&&(C=C.split("```rust")[1],H=!0),H&&!K&&(C.indexOf("```")>=0&&(C=C.split("```")[0].trim(),K=!0),i.emit($,C))},()=>{console.log("转译完成！"),i.emit(z,null),p.is_auto&&i.emit(q,null)})})}else e.lang==="rust"&&(m=u(!1),i.on($,f=>{d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:f}})}),i.on(j,async f=>{y(),d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:""}})}),i.on(L,f=>{i.emit(R,""),d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:v}}),y()}))});async function D(){y(),e.lang==="cpp"?(console.log("Run cpp clicked."),console.log("With compile params: "+r.value),console.log("With exec params: "+s.value),t.value=["Compile with command: g++ ./source.cpp -o target "+r.value,"Exec with command: ./target "+s.value]):e.lang==="rust"&&(console.log("Run rust clicked."),console.log("With exec params: "+s.value),t.value=["Exec with command: cargo run -q -- "+s.value]);const g={language:e.lang,code:d.value.state.doc.toString(),compile_params:r.value,exec_params:s.value};console.log("exec request data:",g),r.value="",s.value="";let v="";try{const _=await Oe(g);console.log("exec response data:",_),_.status==0?c.value=!1:c.value=!0,v=_.output,t.value=t.value.concat((_.output||"").split(`
`))}catch(_){console.error(_.message),c.value=!0,v=_.message||"",t.value=t.value.concat((_.message||"").split(`
`))}return c.value?i.emit(R,v):i.emit(R,""),o.value=!1,v}return e.lang==="cpp"?i.on(B,async function(g){console.warn("开始自动测评......"),console.warn("开始转译......"),i.emit(j,{is_auto:!0,prompt:"",...g}),console.warn("cpp开始执行......");const v=await D();console.warn("cpp执行完成......"),i.emit(ee,v)}):e.lang==="rust"&&i.on(q,async()=>{console.warn("转译完成......"),console.warn("rust开始执行......");const g=await D();console.warn("rust执行完成......"),i.emit(te,g)}),(g,v)=>(S(),O("div",De,[l("div",Ae,k(e.title)+": "+k(b.value),1),l("div",{class:"editor-main",ref_key:"editorRef",ref:h},null,512),l("div",Te,[se(m)?T((S(),O("input",{key:0,"onUpdate:modelValue":v[0]||(v[0]=_=>r.value=_),type:"text",placeholder:"编译参数"},null,512)),[[P,r.value]]):ae("",!0),T(l("input",{"onUpdate:modelValue":v[1]||(v[1]=_=>s.value=_),type:"text",placeholder:"运行参数"},null,512),[[P,s.value]]),l("button",{onClick:D},k(o.value?"运行中...":"运行"),1)]),l("div",Ne,[(S(!0),O(le,null,ce(t.value,_=>(S(),O("p",{class:ue(c.value?"error":"")},k(_),3))),256))])]))}}),U=(a,e)=>{const t=a.__vccOpts||a;for(const[c,o]of e)t[c]=o;return t},Y=U(Re,[["__scopeId","data-v-53992aac"]]),F=a=>(_e("data-v-0208c0ad"),a=a(),ve(),a),je={class:"operations"},Pe={class:"oper-item"},Le=F(()=>l("option",{value:"chatglm"},"智谱AI",-1)),Ie=F(()=>l("option",{value:"baichuan"},"百川AI",-1)),Ue=F(()=>l("option",{value:"c2rust"},"C2Rust",-1)),Ve=[Le,Ie,Ue],Ke={class:"oper-item"},$e=N({__name:"Operations",setup(a){const e=u("chatglm"),t=u("转译"),c=u("测评可信度"),o=u(""),r=u(0),s=u(0),b=u(!0),n=M({cpp:!0,rust:!0}),m=u(""),h=u(!0),d=M({cpp:"",rust:""});function y(){r.value>5?r.value=5:r.value<0&&(r.value=0),s.value=r.value}function D(){return n.cpp&&n.rust}function g(){if(!D())return;c.value="测评可信度";const f=(d.cpp||"").replace(/\r\n/g,`
`).trim(),p=(d.rust||"").replace(/\r\n/g,`
`).trim();d.cpp="",d.rust="",f===p?(h.value=!0,m.value="运行输出完全匹配",n.cpp=!0,n.rust=!0):(h.value=!1,s.value-=1,s.value>0?(m.value="运行输出不匹配(剩余重试次数："+s.value+")",console.warn("测评未不通过"),i.emit(B,{auto_repeat:s.value,tool:e.value,prompt:"给出的代码错误，请根据错误信息修正代码"}),n.cpp=!1,n.rust=!1):(m.value="运行输出不匹配",n.cpp=!0,n.rust=!0))}function v(){D()&&(s.value=r.value,m.value="",n.cpp=!1,n.rust=!1,c.value="正在测评...",i.emit(B,{auto_repeat:r.value,tool:e.value}))}i.on(ee,f=>{n.cpp=!0,d.cpp=f,g()}),i.on(te,f=>{n.rust=!0,d.rust=f,g()});function _(){b.value&&(b.value=!1,m.value="",t.value="转译中...",console.log("Transcode clicked!"),console.log(`Tool selected: ${e.value}`),console.log(`With user prompt: ${o.value}`),i.emit(j,{tool:e.value,prompt:o.value}),o.value="")}return i.on(z,()=>{b.value=!0,t.value="转译"}),(f,p)=>(S(),O("div",je,[l("div",Pe,[J(" 转译工具: "),T(l("select",{"onUpdate:modelValue":p[0]||(p[0]=E=>e.value=E)},Ve,512),[[de,e.value]])]),l("button",{class:"oper-item",onClick:_},k(t.value),1),T(l("input",{"onUpdate:modelValue":p[1]||(p[1]=E=>o.value=E),type:"text",placeholder:"不满意?提点建议后再次转译(我会自动在末尾附上错误信息哦)......"},null,512),[[P,o.value]]),l("div",Ke,[J(" 测评重复次数: "),T(l("input",{class:"auto-repeat-input",onchange:y,type:"number","onUpdate:modelValue":p[2]||(p[2]=E=>r.value=E)},null,512),[[P,r.value]]),l("button",{onClick:v},k(c.value),1),l("span",{style:pe({color:h.value?"#41b883":"#ff5555"})},k(m.value),5)])]))}}),qe=U($e,[["__scopeId","data-v-0208c0ad"]]),Me={class:"side-wrapper"},ze={class:"dir-name"},Be={class:"tree-wrapper"},Xe=N({__name:"Side",setup(a){const e=M({children:I}),t=u("示例"),c={children:"children",label:"name"};function o(){t.value="示例",e.children=I}async function r(){console.log("打开文件夹");try{const n=await window.showDirectoryPicker();e.children=(await s(n)).children,t.value=n.name}catch(n){console.error(n),n.name==="AbortError"&&console.log("用户取消了选择")}}async function s(n){if(n.kind==="file")return n;n.children=[];const m=n.entries();for await(const h of m)n.children.push(await s(h[1]));return n}async function b(n){if(console.log(n),n.kind==="directory")return;if(n.kind==="sample"){i.emit(L,n);return}const m=await n.getFile(),h=new FileReader;h.onload=function(d){var y;i.emit(L,{name:m.name,code:(y=d.target)==null?void 0:y.result})},h.readAsText(m,"utf-8")}return(n,m)=>{const h=xe;return S(),O("div",Me,[l("div",ze,"文件夹: "+k(t.value),1),l("div",Be,[A(h,{data:e.children,props:c,accordion:"","highlight-current":!0,"auto-expand-parent":!0,onNodeClick:b},null,8,["data"])]),l("div",{class:"btns"},[l("button",{onClick:r},"打开文件夹"),l("button",{onClick:o},"加载示例")])])}}}),Fe=U(Xe,[["__scopeId","data-v-2dc46843"]]),He={class:"top-wrapper"},We={class:"side"},Je={class:"editors"},Ge=N({__name:"HomeView",setup(a){return(e,t)=>(S(),O("main",null,[l("div",He,[l("div",We,[A(Fe)]),l("div",Je,[A(Y,{title:"C source code",lang:"cpp"}),A(Y,{title:"Generated Rust source code",lang:"rust"})])]),A(qe)]))}}),Qe=U(Ge,[["__scopeId","data-v-cbdd20ea"]]),Ze=N({__name:"App",setup(a){return(e,t)=>(S(),me(Qe))}}),Ye=fe(Ze);Ye.mount("#app");
