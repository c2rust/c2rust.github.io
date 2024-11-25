var Ne=Object.defineProperty;var Fe=(n,e,r)=>e in n?Ne(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var w=(n,e,r)=>(Fe(n,typeof e!="symbol"?e+"":e,r),r);import{d as R,I as me,a3 as Pe,o as g,r as _,k as Ae,p as he,c as b,a as c,U as k,u as X,D as Y,ab as ue,K as A,F as H,a4 as G,B as de,X as ee,w as ve,$ as pe,ac as Ue,C as ge,J as De,ad as ye,ae as Ee,H as C,t as Oe,af as Me}from"./@vue-CdBvXwqf.js";import{d as z,c as Xe}from"./pinia-Dcg0omIu.js";import{c as Ke,a as qe}from"./vue-router-CIncK4eA.js";import{E as te,e as be,A as ze,B as je}from"./@codemirror-I-DanHR-.js";import{b as ne}from"./codemirror-yz77EbLa.js";import{d as re}from"./@uiw-CLhxolpj.js";import{m as Ve}from"./mitt-DJ65BbbF.js";import{v as W}from"./uuid-D8aEg3BZ.js";import{E as $e,a as Te}from"./element-plus-DnmIz9z2.js";import{i as Be}from"./@element-plus-BFeCq9CB.js";import"./@lezer-BKVAMdCn.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@babel-CCbyfPlC.js";import"./@ctrl-r5W6hzzQ.js";import"./@vueuse-BQC9KQzs.js";import"./@popperjs-D9SI2xQl.js";import"./lodash-es-DNzLEVan.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const He=R({__name:"App",setup(n){return(e,r)=>{const i=Pe("router-view");return g(),me(i)}}}),d=Ve(),Z="TRANSCODE_CLICKED",J="TRANSCODE_DONE",M="RUST_CODE_UPDATE",K="CPP_CODE_UPDATE",Se="EVALUATION_CLICKED",ke="CPP_EXEC_DONE",we="RUST_EXEC_DONE",L="SOME_OPERATION_TRIGGERED";class Ge{constructor(e){w(this,"url");w(this,"requestInit");w(this,"onmessage");w(this,"ondone");w(this,"onerror");w(this,"ontimeout");w(this,"controller");w(this,"timer",0);w(this,"data_segment","");this.url=e.url,this.requestInit=e.requestInit,this.onmessage=e.onmessage,this.ondone=e.ondone,this.onerror=e.onerror,this.controller=new AbortController,this.createFetchRequest()}createFetchRequest(){this.timeout(),fetch(this.url,{method:"POST",signal:this.controller.signal,...this.requestInit}).then(e=>(clearTimeout(this.timer),e.status===200?e.body:Promise.reject(e))).then(async e=>{var t;const r=e.getReader();let i=0;for(;;){const{value:a,done:l}=await r.read();if(l){(t=this.ondone)==null||t.call(this);break}else{const o=((this.data_segment||"")+new TextDecoder().decode(a)).split(`

`).filter(Boolean);this.data_segment=this.onmessage(o,i++)}}}).catch(e=>{var r;(r=this.onerror)==null||r.call(this,e)})}abort(){this.controller&&this.controller.abort()}timeout(e=6e4){this.timer=window.setTimeout(()=>{var r;this.abort(),(r=this.ontimeout)==null||r.call(this)},e)}}var xe={VITE_APP_NAME:"c2rust",VITE_API_URL:"https://api.c2rust.cn",BASE_URL:"/",MODE:"c2rust",DEV:!1,PROD:!0,SSR:!1};const We=xe;let I=We.VITE_API_URL;console.log(xe);const Ze=async n=>await(await fetch(I+"/api/transcode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();function Je(n,e,r,i){new Ge({url:I+"/api/transcode/stream",requestInit:{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(e)},onmessage:(t,a)=>{for(const l of t)if(l!=="[DONE]")try{const h=JSON.parse(l);r(h)}catch{return l}return""},ondone:()=>{i()},ontimeout:()=>{console.log("timeout!")}})}function Ye(n,e,r){Je("/api/transcode/stream",n,e,r)}const et=async n=>await(await fetch(I+"/api/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json(),fe=async n=>await(await fetch(I+"/api/transcode/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json(),tt=async n=>await(await fetch(I+"/api/transcode/auto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json(),nt=async()=>{const e=await(await fetch(I+"/api/getNotPassedData",{method:"GET"})).json();return e.status===0?e.data:(console.error("获取未通过的代码失败"),[])},q=[{name:"初级",kind:"directory",children:[{name:"001trait.cpp",kind:"sample",code:`
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
}

/**
编译命令：
g++ 001trait.cpp
运行结果：
SquareK::isInside()
SquareK::overlap()
CubeK::isInside()
CubeK::overlap()
*/
`},{name:"002weak_ptr.cpp",kind:"sample",code:`
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
}

/**
编译命令：
g++ 002weak_ptr.cpp
运行结果：
Constructor
Value: 20
Destructor
*/
`},{name:"003macro.cpp",kind:"sample",code:`
#include <iostream>

#define CPPMAX(x,y) ((x)+(y) < 5?y:x)

int main(void) {
    std::cout << CPPMAX(1, 2) << "\\n";
    std::cout << CPPMAX(2, 3) << "\\n";
    std::cout << CPPMAX(3, 4) << "\\n";
}

/**
编译命令：
g++ 003macro.cpp
运行结果：
2
2
3
*/`},{name:"004args.cpp",kind:"sample",code:`
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

/**
编译命令：
g++ 004args.cpp
运行结果：
Value: 10
Value: 20
Value: 30
*/ 
`},{name:"005heap.c",kind:"sample",code:`
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
}

/**
编译命令：
g++ 005heap.c
运行结果：
free(): double free detected in tcache 2
Aborted
*/
`},{name:"006thread.cpp",kind:"sample",code:`
#include <pthread.h>
#include <stdlib.h>
#include <stdio.h>
// 全局共享变量
int data = 0;
void *increment(void *v)
{
    for (int i = 0; i < 1000000; i++)
    {
        data++;
    }
    printf("%d\\n", *(int *)v);
    return NULL;
}

int main()
{
    pthread_t t1, t2;
    int a1 = 1, a2 = 2;
    // 创建两个并发执行的线程
    pthread_create(&t1, NULL, increment, &a1);
    pthread_create(&t2, NULL, increment, &a2);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
}

/**
编译命令：
g++ 006thread.cpp -lpthread
运行结果：
2
1
*/
`}]},{name:"中级",kind:"directory",children:[{name:"007mutex.c",kind:"sample",code:`
#include <pthread.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <semaphore.h>
    
void *thread1_function(void *arg);
void *thread2_function(void *arg);
pthread_mutex_t mutex;
    
int main(void)
{
    pthread_t pthread1, pthread2;
    int ret;
    
    pthread_mutex_init(&mutex, NULL);
    
    ret = pthread_create(&pthread1, NULL, thread1_function, NULL);
    if(ret != 0)
    {
        perror("pthread_create");
        exit(1);
    }
    
    ret = pthread_create(&pthread2, NULL, thread2_function, NULL);
    if(ret != 0)
    {
        perror("pthread_create");
        exit(1);
    }
    
    pthread_join(pthread1, NULL);
    pthread_join(pthread2, NULL);
    printf("The thread is over, process is over too.\\n");
    
    return 0;
}
    
void *thread1_function(void *arg)
{
    int i;
    
    while(1)
    {
        pthread_mutex_lock(&mutex);
        for(i = 0; i < 10; i++)
        {
            printf("Hello world\\n");
            sleep(1);
        }
        pthread_mutex_unlock(&mutex);
        sleep(1);
    }
    return NULL;
}
    
void *thread2_function(void *arg)
{
    int i;
    sleep(1);
    
    while(1)
    {
        pthread_mutex_lock(&mutex);
        for(i = 0; i < 10; i++)
        {
            printf("Good moring\\n");
            sleep(1);
        }
        pthread_mutex_unlock(&mutex);
        sleep(1);
    }
    return NULL;
}

/**
编译命令：
g++ 006thread.cpp -lpthread
运行结果：
Hello world
Hello world
Hello world
Hello world
Hello world
Hello world
Hello world
Hello world
Hello world
Hello world
Good moring
Good moring
Good moring
Good moring
Good moring
Good moring
Good moring
Good moring
Good moring
Good moring
Hello world
Hello world
...
*/
`},{name:"008tree.c",kind:"sample",code:`
#include <stdio.h>
#include <stdlib.h>

#define Error( Str )        FatalError( Str )
#define FatalError( Str )   fprintf( stderr, "%s\\n", Str ), exit( 1 )

typedef int ElementType;

struct TreeNode;
typedef struct TreeNode *Position;
typedef struct TreeNode *SearchTree;

SearchTree MakeEmpty( SearchTree T );
Position Find( ElementType X, SearchTree T );
Position FindMin( SearchTree T );
Position FindMax( SearchTree T );
SearchTree Insert( ElementType X, SearchTree T );
SearchTree Delete( ElementType X, SearchTree T );
ElementType Retrieve( Position P );

struct TreeNode
{
        ElementType Element;
        SearchTree  Left;
        SearchTree  Right;
};

SearchTree
MakeEmpty( SearchTree T )
{
        if( T != NULL )
        {
        MakeEmpty( T->Left );
        MakeEmpty( T->Right );
        free( T );
        }
        return NULL;
}

Position
Find( ElementType X, SearchTree T )
{
        if( T == NULL )
        return NULL;
        if( X < T->Element )
        return Find( X, T->Left );
        else
        if( X > T->Element )
        return Find( X, T->Right );
        else
        return T;
}

Position
FindMin( SearchTree T )
{
        if( T == NULL )
        return NULL;
        else
        if( T->Left == NULL )
        return T;
        else
        return FindMin( T->Left );
}

Position
FindMax( SearchTree T )
{
        if( T != NULL )
        while( T->Right != NULL )
                T = T->Right;

        return T;
}

SearchTree
Insert( ElementType X, SearchTree T )
{
    if( T == NULL )
    {
        T = malloc( sizeof( struct TreeNode ) );
        if( T == NULL )
                FatalError( "Out of space!!!" );
        else
        {
                T->Element = X;
                T->Left = T->Right = NULL;
        }
    }
    else
        if( X < T->Element )
            T->Left = Insert( X, T->Left );
        else
            if( X > T->Element )
                T->Right = Insert( X, T->Right );
        

    return T;
}


SearchTree
Delete( ElementType X, SearchTree T )
{
        Position TmpCell;

        if( T == NULL )
        Error( "Element not found" );
        else
        if( X < T->Element )  
        T->Left = Delete( X, T->Left );
        else
        if( X > T->Element )  
        T->Right = Delete( X, T->Right );
        else 
        if( T->Left && T->Right )  
        {
        
        TmpCell = FindMin( T->Right );
        T->Element = TmpCell->Element;
        T->Right = Delete( T->Element, T->Right );
        }
        else  
        {
        TmpCell = T;
        if( T->Left == NULL ) 
                T = T->Right;
        else if( T->Right == NULL )
                T = T->Left;
        free( TmpCell );
        }

        return T;
}

ElementType
Retrieve( Position P )
{
        return P->Element;
}

int main( )
{
    SearchTree T;
    Position P;
    int i;
    int j = 0;

    T = MakeEmpty( NULL );
    for( i = 0; i < 50; i++, j = ( j + 7 ) % 50 )
        T = Insert( j, T );
    for( i = 0; i < 50; i++ )
        if( ( P = Find( i, T ) ) == NULL || Retrieve( P ) != i )
            printf( "Error at %d\\n", i );

    for( i = 0; i < 50; i += 2 )
        T = Delete( i, T );

    for( i = 1; i < 50; i += 2 )
        if( ( P = Find( i, T ) ) == NULL || Retrieve( P ) != i )
            printf( "Error at %d\\n", i );
    for( i = 0; i < 50; i += 2 )
        if( ( P = Find( i, T ) ) != NULL )
            printf( "Error at %d\\n", i );

    printf( "Min is %d, Max is %d\\n", Retrieve( FindMin( T ) ),
                Retrieve( FindMax( T ) ) );

    return 0;
}

/**
编译命令：
gcc 008tree.c
运行结果：
Min is 1, Max is 49
*/`},{name:"009queue.c",kind:"sample",code:`
#include <stdio.h>
#include <stdlib.h>

typedef int ElementType;

#define Error( Str )        FatalError( Str )
#define FatalError( Str )   fprintf( stderr, "%s\\n", Str ), exit( 1 )

struct QueueRecord;
typedef struct QueueRecord *Queue;

int IsEmpty( Queue Q );
int IsFull( Queue Q );
Queue CreateQueue( int MaxElements );
void DisposeQueue( Queue Q );
void MakeEmpty( Queue Q );
void Enqueue( ElementType X, Queue Q );
ElementType Front( Queue Q );
void Dequeue( Queue Q );
ElementType FrontAndDequeue( Queue Q );


#define MinQueueSize ( 5 )

struct QueueRecord
{
    int Capacity;
    int Front;
    int Rear;
    int Size;
    ElementType *Array;
};

int
IsEmpty( Queue Q )
{
    return Q->Size == 0;
}

int
IsFull( Queue Q )
{
    return Q->Size == Q->Capacity;
}

Queue
CreateQueue( int MaxElements )
{
    Queue Q;

if( MaxElements < MinQueueSize )
    Error( "Queue size is too small" );

    Q = malloc( sizeof( struct QueueRecord ) );
    if( Q == NULL )
        FatalError( "Out of space!!!" );

    Q->Array = malloc( sizeof( ElementType ) * MaxElements );

    if( Q->Array == NULL )
        FatalError( "Out of space!!!" );

    Q->Capacity = MaxElements;
    MakeEmpty( Q );

    return Q;
}

void
MakeEmpty( Queue Q )
{
    Q->Size = 0;
    Q->Front = 1;
    Q->Rear = 0;
}

void
DisposeQueue( Queue Q )
{
    if( Q != NULL )
    {
        free( Q->Array );
        free( Q );
    }
}

static int
Succ( int Value, Queue Q )
{
    if( ++Value == Q->Capacity )
        Value = 0;
    return Value;
}

void
Enqueue( ElementType X, Queue Q )
{
    if( IsFull( Q ) )
        Error( "Full queue" );
    else
    {
        Q->Size++;
        Q->Rear = Succ( Q->Rear, Q );
        Q->Array[ Q->Rear ] = X;
    }
}


ElementType
Front( Queue Q )
{
    if( !IsEmpty( Q ) )
        return Q->Array[ Q->Front ];
    Error( "Empty queue" );
    return 0; 
}

void
Dequeue( Queue Q )
{
    if( IsEmpty( Q ) )
        Error( "Empty queue" );
    else
    {
        Q->Size--;
        Q->Front = Succ( Q->Front, Q );
    }
}

ElementType
FrontAndDequeue( Queue Q )
{
    ElementType X = 0;

    if( IsEmpty( Q ) )
        Error( "Empty queue" );
    else
    {
        Q->Size--;
        X = Q->Array[ Q->Front ];
        Q->Front = Succ( Q->Front, Q );
    }
    return X;
}

int main( )
{
    Queue Q;
    int i;

    Q = CreateQueue( 12 );

    for( i = 0; i < 10; i++ )
        Enqueue( i, Q );

    while( !IsEmpty( Q ) )
    {
        printf( "%d\\n", Front( Q ) );
        Dequeue( Q );
    }
    for( i = 0; i < 10; i++ )
        Enqueue( i, Q );

    while( !IsEmpty( Q ) )
    {
        printf( "%d\\n", Front( Q ) );
        Dequeue( Q );
    }

    DisposeQueue( Q );
    return 0;
}

/**
编译命令：
g++ 009queue.c -fpermissive -w
运行结果：
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
*/`},{name:"010message_queue.c",kind:"sample",code:`
#include <stdio.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <sys/types.h>
#include <unistd.h>
#include <string.h>
#include <sys/wait.h>
#include <sys/msg.h>
 
#define MY_TYPE  9527
 
int main(void)
{
	int msgid;
	pid_t pid;
 
	struct msgbuf
	{
		long mtype;
		char mtext[100];
		int number;
	};
 
	struct msgbuf buff;
 
	msgid = msgget(IPC_PRIVATE, 0666 | IPC_EXCL); /* 不晓得为什么必须加上0666才可以*/
 
	if (msgid == -1) {
	    perror("msgget");
	    return -1;
	}
 
	pid = fork();
 
	if(pid > 0)
	{
	    sleep(1);
 
		buff.mtype = MY_TYPE;
		printf("Please enter a string you want to send:\\n");
		fgets(buff.mtext, sizeof(buff.mtext), stdin);
		// gets(buff.mtext);
		printf("Please enter a nubmer you want to send:\\n");
		scanf("%d", &buff.number);
 
		msgsnd(msgid, &buff, sizeof(buff) - sizeof(buff.mtype), 0);
 
		waitpid(pid, NULL, 0);
	}
	else if(pid == 0)
	{
		printf("Child process is waiting for msg:\\n");
		msgrcv(msgid, &buff, sizeof(buff) - sizeof(buff.mtype), MY_TYPE, 0);
		printf("Child process read from msg: %s, %d\\n", buff.mtext, buff.number);
	}
	else
		perror("fork");
 
	return 0;
}

/*
注意：
原代码中 42 行使用了 \`gets(buff.mtext)\` 函数，该函数在C11，C++14 中已被弃用（甚至已经删除），使用 g++ 和 gcc 无法编译，修改为：
\`fgets(buff.mtext, sizeof(buff.mtext), stdin)\`;

编译命令：
g++ 010message_queue.c
运行结果：
Child process is waiting for msg:
Please enter a string you want to send:
asdf
Please enter a nubmer you want to send:
1
Child process read from msg: asdf
, 1

*/
`},{name:"011uds_client.c",kind:"sample",code:`
#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <unistd.h>

#define SOCKET_NAME "/tmp/DemoSocket"
#define BUFFER_SIZE 128

int
main(int argc, char *argv[])
{
    struct sockaddr_un addr;
    int i;
    int ret;
    int data_socket;
    char buffer[BUFFER_SIZE];

    /* Create data socket. */

    data_socket = socket(AF_UNIX, SOCK_STREAM, 0);

    if (data_socket == -1) {
        perror("socket");
        exit(EXIT_FAILURE);
    }

    /*
        * For portability clear the whole structure, since some
        * implementations have additional (nonstandard) fields in
        * the structure.
        * */

    memset(&addr, 0, sizeof(struct sockaddr_un));

    /* Connect socket to socket address */

    addr.sun_family = AF_UNIX;
    strncpy(addr.sun_path, SOCKET_NAME, sizeof(addr.sun_path) - 1);

    ret = connect (data_socket, (const struct sockaddr *) &addr,
            sizeof(struct sockaddr_un));

    if (ret == -1) {
        fprintf(stderr, "The server is down.\\n");
        exit(EXIT_FAILURE);
    }

    /* Send arguments. */
    do{
        printf("Enter number to send to server :\\n");
        scanf("%d", &i);
        ret = write(data_socket, &i, sizeof(int));
        if (ret == -1) {
            perror("write");
            break;
        }
        printf("No of bytes sent = %d, data sent = %d\\n", ret, i); 
    } while(i);

    /* Request result. */
    
    memset(buffer, 0, BUFFER_SIZE);
    strncpy (buffer, "RES", strlen("RES"));
    buffer[strlen(buffer)] = '\\0';
    printf("buffer = %s\\n", buffer);

    ret = write(data_socket, buffer, strlen(buffer));
    if (ret == -1) {
        perror("write");
        exit(EXIT_FAILURE);
    }

    /* Receive result. */
    memset(buffer, 0, BUFFER_SIZE);
    
    ret = read(data_socket, buffer, BUFFER_SIZE);
    if (ret == -1) {
        perror("read");
        exit(EXIT_FAILURE);
    }

    /* Ensure buffer is 0-terminated. */

    buffer[BUFFER_SIZE - 1] = 0;

    printf("Result = %s\\n", buffer);

    /* Close socket. */

    close(data_socket);

    exit(EXIT_SUCCESS);
}

/*
编译命令：
g++ 011uds_server.c
运行结果：
Enter number to send to server :
1
No of bytes sent = 4, data sent = 1
Enter number to send to server :
2
No of bytes sent = 4, data sent = 2
Enter number to send to server :
...
*/`},{name:"011uds_server.c",kind:"sample",code:`
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <unistd.h>

#define SOCKET_NAME "/tmp/DemoSocket"
#define BUFFER_SIZE 128

int
main(int argc, char *argv[])
{
    struct sockaddr_un name;
    
#if 0  
    struct sockaddr_un {
        sa_family_t sun_family;               /* AF_UNIX */
        char        sun_path[108];            /* pathname */
    };
#endif

    int ret;
    int connection_socket;
    int data_socket;
    int result;
    int data;
    char buffer[BUFFER_SIZE];

    /*In case the program exited inadvertently on the last run,
        *remove the socket.
        **/

    unlink(SOCKET_NAME);

    /* Create Master socket. */

    /*SOCK_DGRAM for Datagram based communication*/
    connection_socket = socket(AF_UNIX, SOCK_STREAM, 0);

    if (connection_socket == -1) {
        perror("socket");
        exit(EXIT_FAILURE);
    }
    
    printf("Master socket created\\n");

    /*initialize*/
    memset(&name, 0, sizeof(struct sockaddr_un));

    /*Specify the socket Cridentials*/
    name.sun_family = AF_UNIX;
    strncpy(name.sun_path, SOCKET_NAME, sizeof(name.sun_path) - 1);

    /* Bind socket to socket name.*/
    /* Purpose of bind() system call is that application() dictate the underlying 
        * operating system the criteria of recieving the data. Here, bind() system call
        * is telling the OS that if sender process sends the data destined to socket "/tmp/DemoSocket", 
        * then such data needs to be delivered to this server process (the server process)*/
    ret = bind(connection_socket, (const struct sockaddr *) &name,
            sizeof(struct sockaddr_un));

    if (ret == -1) {
        perror("bind");
        exit(EXIT_FAILURE);
    }

    printf("bind() call succeed\\n");
    /*
        * Prepare for accepting connections. The backlog size is set
        * to 20. So while one request is being processed other requests
        * can be waiting.
        * */

    ret = listen(connection_socket, 20);
    if (ret == -1) {
        perror("listen");
        exit(EXIT_FAILURE);
    }

    /* This is the main loop for handling connections. */
    /*All Server process usually runs 24 x 7. Good Servers should always up
        * and running and shold never go down. Have you ever seen Facebook Or Google
        * page failed to load ??*/
    for (;;) {

        /* Wait for incoming connection. */
        printf("Waiting on accept() sys call\\n");

        data_socket = accept(connection_socket, NULL, NULL);

        if (data_socket == -1) {
            perror("accept");
            exit(EXIT_FAILURE);
        }
        
        printf("Connection accepted from client\\n");

        result = 0;
        for(;;) {

            /*Prepare the buffer to recv the data*/
            memset(buffer, 0, BUFFER_SIZE);

            /* Wait for next data packet. */
            /*Server is blocked here. Waiting for the data to arrive from client
                * 'read' is a blocking system call*/
            printf("Waiting for data from the client\\n");
            ret = read(data_socket, buffer, BUFFER_SIZE);

            if (ret == -1) {
                perror("read");
                exit(EXIT_FAILURE);
            }

            /* Add received summand. */
            memcpy(&data, buffer, sizeof(int));
            if(data == 0) break;
            result += data;
        }

        /* Send result. */
        memset(buffer, 0, BUFFER_SIZE);
        sprintf(buffer, "Result = %d", result);

        printf("sending final result back to client\\n");
        ret = write(data_socket, buffer, BUFFER_SIZE);
        if (ret == -1) {
            perror("write");
            exit(EXIT_FAILURE);
        }

        /* Close socket. */
        close(data_socket);
    }

    /*close the master socket*/
    close(connection_socket);
    printf("connection closed..\\n");

    /* Server should release resources before getting terminated.
        * Unlink the socket. */

    unlink(SOCKET_NAME);
    exit(EXIT_SUCCESS);
}

/*
编译命令：
g++ 011uds_server.c
运行结果：
Master socket created
bind() call succeed
Waiting on accept() sys call
Connection accepted from client
Waiting for data from the client
Waiting for data from the client
...
*/
`},{name:"012shm_client.c",kind:"sample",code:`
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/mman.h>
#include <fcntl.h>

int main(int argc, const char *argv[]) {
    int fd = open("temp", O_RDWR | O_CREAT, 0664);

    void *ptr = mmap(NULL, 4096, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
    if (ptr == MAP_FAILED) {
        perror("mmap");
        exit(1);
    }

    while (1) {
        char *p = (char *)ptr;
        p += 1024;
        strcpy(p, "haha, I'm fine");
        printf("message written to the shared memory~\\n");
        sleep(2);
    }

    int ret = munmap(ptr, 4096);
    if (ret == -1) {
        perror("munmap");
        exit(1);
    }

    return 0;
}

/*
编译命令：
g++ 012shm_client.c
运行结果：
message written to the shared memory~
message written to the shared memory~
...
*/
`},{name:"012shm_server.c",kind:"sample",code:`
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/mman.h>
#include <fcntl.h>

int main(int argc, const char *argv[]) {
    int fd = open("temp", O_RDWR | O_CREAT, 0664);
    ftruncate(fd, 4096);
    int len = lseek(fd, 0, SEEK_END);

    void *ptr = mmap(NULL, len, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
    if (ptr == MAP_FAILED) {
        perror("mmap");
        exit(1);
    }

    while (1) {
        sleep(1);
        printf("%s\\n", (char*)ptr+1024);
    }

    // 释放
    int ret = munmap(ptr, len);
    if (ret == -1) {
        perror("munmap");
        exit(1);
    }

    return 0;
}

/*
编译命令：
g++ 011uds_server.c
运行结果：





haha, I'm fine
haha, I'm fine
...
*/
    
    `}]},{name:"高级",kind:"directory",children:[{name:"013rtt_list.c",kind:"sample",code:`
/**
 * @file 01list.c
 * @brief C语言没有链表类的数据类型，需要手动实现，这几乎是每个工程必须的组件，存在非常广泛，
 *        但用 Rust 实现链表其实是一个高难度操作，Rust 新手往往无法独立完成。
 * 
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
}

/**
编译命令：
g++ 013rtt_ist.c
运行结果：
is empty
not empty
1
2
1
0
*/
`},{name:"014rtt_container_of.c",kind:"sample",code:`
/**
 * @file 02container_of.c
 * @brief 如果在C代码中使用了面向对象编程的思想，就一定会有 \`container_of\` 宏，
 *        这个宏也是 linux 源码中的一段经典代码，
 *        这个宏用来根据已知的成员地址和结构体类型，计算出结构体的地址，原理上很简单，使用也非常广泛，
 *        但因为涉及指针、类型强制转换这些不安全操作，在rust中难以实现。
 * 
 *        如果用rust重写某个功能，根据 rust 的内置类型和语法，不会碰到这个问题，
 *        但如果转译已有的c代码，则必须用 rust 的方式实现这个宏。
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

}

/**
编译命令：
g++ 014rtt_container_of.c
运行结果：
tty1, 1, 2, 3
*/
`},{name:"015rtt_union.c",kind:"sample",code:`
/**
 * @file 03union.c
 * @brief 联合体是复杂C代码中经常用到的类型，在Rust中可以使用\`#[repr(C)] union\`来表示，
 *        其实这样会引入unsafe代码，但就转译而言需要这样做
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
}

/**
编译命令：
g++ 015rtt_union.c
运行结果：
0x12345678
*/
`},{name:"016rtt_bit_fields.c",kind:"sample",code:`
/**
 * @file 04bit_fields.c
 * @brief 在用C语言做系统编程，对于硬件寄存器的描述，或用C语言做协议栈，对紧凑协议内容的描述，
 *        往往几个位就对应实际有意义的量，一个bit不够描述，一个byte又太多余，就出现了位域（bit fields)特性，
 *        Rust 中至今没有位域的概念，外部crate来实现也无法完全实现C语言的效果。
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
}

/**
编译命令：
g++ 016bit_fields.c
运行结果：
1.0.1.2
*/
`},{name:"017rtt_func_ptr.c",kind:"sample",code:`
/**
 * @file 05func_ptr.c
 * @brief C代码中往往通过在结构体中定义函数指针的形式来实现面向对象编程的效果，Rust的trait可以更优雅的实现相同效果
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
    dev->device_id = 1;
    printf("init\\n");
    return 0;
}

int  open   (rt_device_t dev, int oflag) {
    dev->open_flg = oflag;
    dev->ref_count++;
    printf("open, 0x%x, ref count: %d\\n", dev->open_flg, dev->ref_count);
    return 0;
}

int  close  (rt_device_t dev) {
    dev->open_flg = 0;
    dev->ref_count--;
    printf("close, ref count: %d\\n", dev->ref_count);
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
}

/**
编译命令：
g++ 02container_of.c
运行结果：
init
open, 0x102, ref count: 1
close, ref count: 0
read
write
control
*/`}]}],Ce=z("cpp_output",{state:()=>({type:"stdout",content:""}),actions:{setState(n){this.type=n.type,this.content=n.content},clear(){this.type="stdout",this.content=""},getState(){return{type:this.type,content:this.content}}}}),Le=z("rust_output",{state:()=>({type:"stdout",content:""}),actions:{setState(n){this.type=n.type,this.content=n.content},clear(){this.type="stdout",this.content=""},getState(){return{type:this.type,content:this.content}}}}),Re=z("editor_store",{state:()=>({cpp_editor:null,rust_editor:null}),actions:{setCpp(n){this.cpp_editor=n},setRust(n){this.rust_editor=n},getCppCode(){return this.cpp_editor==null?"":this.cpp_editor.state.doc.toString()},getRustCode(){return this.rust_editor==null?"":this.rust_editor.state.doc.toString()}}}),Ie=z("eval_result",{state:()=>({passed:!1}),actions:{setState(n){this.passed=n},getState(){return this.passed}}}),rt={class:"editor-wrapper"},ot={class:"title"},it={class:"run"},st={class:"output"},at=R({__name:"Editor",props:{title:{default:"Editor"},lang:{}},setup(n){const e=n,r=_(!1),i=_(""),t=_(""),a=_(""),l=_(""),h=_([]);let o;const T=_(),p=_(),S=Ce(),v=Le(),j=Ie();function N(){h.value=[],e.lang==="cpp"?S.clear():e.lang==="rust"&&v.clear()}const U=Re(),F=Ae(()=>e.lang==="cpp"?S.content.split(`
`):e.lang==="rust"?v.content.split(`
`):[]);he(()=>{l.value=W();let s=[],f="";if(e.lang==="cpp"){let u=te.updateListener.of(y=>{y.docChanged&&(l.value=W())});s=[ne,ze(),re,u],f=q[0].code||"",a.value=q[0].name}else e.lang==="rust"&&(s=[ne,je(),re]);const m=be.create({doc:f,extensions:s});T.value&&(p.value=new te({state:m,parent:T.value}),e.lang==="cpp"?U.setCpp(p.value):U.setRust(p.value)),e.lang==="cpp"?(o=_(!0),d.on(K,u=>{i.value=u.compile_params||"",t.value=u.exec_params||"",N(),l.value=W(),p.value.dispatch({changes:{from:0,to:p.value.state.doc.length,insert:u.code}}),a.value=u.name}),d.on(Z,async u=>{var ae;const y=v.getState(),Qe=S.getState();let V="";y.type==="stderr"&&y.content&&(V=`给出的代码错误，改进给出的代码：${y.content}`),j.getState()||(V=`给出的rust代码运行结果不一致，输出内容应为：${Qe.content}`);const O={prompt:V,tool:u.tool,compile_params:i.value,exec_params:t.value,auto_repeat:u.auto_repeat||1,code:p.value.state.doc.toString(),id:l.value};if(console.log("transcode request data:",O),["c2rust","chatgpt4","auto","llm"].includes(u.tool)){try{let E=null;u.tool==="auto"?E=await tt(O):E=await Ze(O),console.log("transcode response data:",E),E.status==0?d.emit(M,E.content):(console.error(E.error),v.setState({type:"stderr",content:((ae=E.error)==null?void 0:ae.toString())||""}))}catch(E){console.error(E.message),v.setState({type:"stderr",content:"获取数据失败。"})}d.emit(J,null);return}let x="",$="",se=!1,B=!1;Ye(O,E=>{$+=E.content,B||(x+=E.content),x.indexOf("```rust")>=0&&(x=x.split("```rust")[1],se=!0),se&&!B&&(x.indexOf("```")>=0&&(x=x.split("```")[0].trim(),B=!0),d.emit(M,x))},()=>{console.log("转译完成！"),console.log($);const E=/```rust\n([\s\S]*?)```/g,ce=[];let le="";for(;le=E.exec($);)ce.push(le[1]);d.emit(M,ce[0].trim()),d.emit(J,null)})})):e.lang==="rust"&&(o=_(!1),d.on(M,u=>{p.value.dispatch({changes:{from:0,to:p.value.state.doc.length,insert:u}})}),d.on(Z,async u=>{N(),p.value.dispatch({changes:{from:0,to:p.value.state.doc.length,insert:""}})}),d.on(K,u=>{v.setState({type:"stdout",content:""}),p.value.dispatch({changes:{from:0,to:p.value.state.doc.length,insert:f}}),N(),i.value=u.compile_params||"",t.value=u.exec_params||""}))});async function D(){r.value||(d.emit(L,null),r.value=!0,await P(),r.value=!1)}async function P(){const s=(p.value.state.doc.toString()||"").trim();if(!s)return"";e.lang==="cpp"?(S.setState({type:"stdout",content:""}),console.log("Run cpp clicked."),console.log("With compile params: "+i.value),console.log("With exec params: "+t.value),h.value=["Compile with command: gcc ./source.cpp -o target "+i.value,"Exec with command: ./target "+t.value]):e.lang==="rust"&&(v.setState({type:"stdout",content:""}),console.log("Run rust clicked."),console.log("With exec params: "+t.value),h.value=["Exec with command: cargo run -q -- "+t.value]);const f={language:e.lang,code:s,compile_params:i.value,exec_params:t.value};console.log("exec request data:",f);let m="";const u={type:"stdout",content:""};try{const y=await et(f);console.log("exec response data:",y),y.status==0?u.type="stdout":u.type="stderr",u.content=y.output,m=y.output}catch(y){console.error(y.message),u.type="stderr",u.content="网络请求错误: "+y.toString(),m=y.message||""}return e.lang==="cpp"?S.setState(u):v.setState(u),m}return e.lang==="cpp"?d.on(Se,async function(s){console.warn("开始自动测评......"),console.warn("开始转译......"),d.emit(Z,{is_auto:!0,prompt:"",...s}),console.log(s),console.warn("cpp开始执行......");const f=await P();console.warn("cpp执行完成......"),d.emit(ke,{exec_output:f,exec_code:p.value.state.doc.toString()})}):e.lang==="rust"&&d.on(J,async()=>{console.warn("转译完成......"),console.warn("rust开始执行......");const s=await P();console.warn("rust执行完成......"),d.emit(we,{exec_output:s,exec_code:p.value.state.doc.toString()})}),(s,f)=>(g(),b("div",rt,[c("div",ot,k(e.title)+": "+k(a.value),1),c("div",{class:"editor-main",ref_key:"editorRef",ref:T},null,512),c("div",it,[X(o)?Y((g(),b("input",{key:0,"onUpdate:modelValue":f[0]||(f[0]=m=>i.value=m),type:"text",placeholder:"编译参数"},null,512)),[[ue,i.value]]):A("",!0),Y(c("input",{"onUpdate:modelValue":f[1]||(f[1]=m=>t.value=m),type:"text",placeholder:"运行参数"},null,512),[[ue,t.value]]),c("button",{onClick:D},k(r.value?"运行中...":"运行"),1)]),c("div",st,[(g(!0),b(H,null,G(h.value,m=>(g(),b("p",null,k(m),1))),256)),s.$props.lang==="cpp"?(g(!0),b(H,{key:0},G(F.value,m=>(g(),b("p",{class:de(X(S).type==="stderr"?"error":"")},k(m),3))),256)):A("",!0),s.$props.lang==="rust"?(g(!0),b(H,{key:1},G(F.value,m=>(g(),b("p",{class:de(X(v).type==="stderr"?"error":"")},k(m),3))),256)):A("",!0)])]))}}),Q=(n,e)=>{const r=n.__vccOpts||n;for(const[i,t]of e)r[i]=t;return r},_e=Q(at,[["__scopeId","data-v-f1db2c20"]]),oe=n=>(ye("data-v-4d5aea3a"),n=n(),Ee(),n),ct={class:"operations"},lt={class:"left-oper"},ut={class:"oper-item"},dt=oe(()=>c("option",{value:"auto"},"自动",-1)),pt=oe(()=>c("option",{value:"c2rust"},"编译转换",-1)),ft=oe(()=>c("option",{value:"llm"},"大模型转换",-1)),_t={class:"oper-item"},mt={class:"right-oper"},ht={style:{cursor:"pointer",color:"#41b883",marginRight:"10px"}},vt={key:1,style:{color:"#ff5555",marginRight:"10px"}},gt=R({__name:"Operations",setup(n){const e=_("auto"),r=_("转译"),i=_(1),t=ee({cpp:!0,rust:!0}),a=_(""),l=_(!0),h=_(""),o=_(!0),T=ee({cpp:"",rust:""}),p=Ce(),S=Le(),v=Re(),j=Ie();function N(){const s={cpp:v.getCppCode(),rust:v.getRustCode()};console.log("更新数据库"),console.log(s),fe(s).then(f=>{console.log("数据库更新结果：",f)}).catch(f=>{console.error("数据库更新失败：",f)})}function U(){if(v.getCppCode().trim()===""||v.getRustCode().trim()==="")return;d.emit(L,null);const s=(p.getState().content||"").replace(/\r\n/g,`
`).trim(),f=(S.getState().content||"").replace(/\r\n/g,`
`).trim();console.log({c_output:s,rust_output:f}),s===f?(o.value=!0,h.value="运行输出完全匹配"):(o.value=!1,h.value="运行输出不匹配")}d.on(L,()=>{h.value="",o.value=!0,a.value="",l.value=!0,r.value="转译"});function F(){return t.cpp&&t.rust}function D(){if(!F())return;r.value="重试";const s=(p.getState().content||"").replace(/\r\n/g,`
`).trim(),f=(S.getState().content||"").replace(/\r\n/g,`
`).trim();console.log({c_output:s,rust_output:f}),s===f?(l.value=!0,a.value="运行输出完全匹配",t.cpp=!0,t.rust=!0,fe(T).then(m=>{console.log("数据库更新结果：",m)}).catch(m=>{console.error("数据库更新失败：",m)})):(l.value=!1,p.getState().type===S.getState().type&&(a.value="运行输出不匹配"),t.cpp=!0,t.rust=!0)}ve(()=>l.value,s=>{j.setState(s)});function P(){F()&&(d.emit(L,null),v.getCppCode().trim()!==""&&(t.cpp=!1,t.rust=!1,a.value="",t.cpp=!1,t.rust=!1,r.value="正在转译...",d.emit(Se,{auto_repeat:i.value,tool:e.value})))}return d.on(ke,s=>{t.cpp=!0,T.cpp=s.exec_code,D()}),d.on(we,s=>{t.rust=!0,T.rust=s.exec_code,D()}),(s,f)=>{const m=$e;return g(),b("div",ct,[c("div",lt,[c("div",ut,[pe(" 转译工具: "),Y(c("select",{"onUpdate:modelValue":f[0]||(f[0]=u=>e.value=u)},[dt,pe("、 "),pt,ft],512),[[Ue,e.value]])]),c("button",{class:"oper-item",onClick:P},k(r.value),1),c("div",_t,[c("span",{style:ge({color:l.value?"#41b883":"#ff5555"})},k(a.value),5)])]),c("div",mt,[o.value?(g(),me(m,{key:0,width:"220",trigger:"hover","confirm-button-text":"提交","cancel-button-text":"取消",icon:X(Be),"icon-color":"#626AEF",title:"本网站将使用你的提交代码来提高转译质量。",onConfirm:N},{reference:De(()=>[c("span",ht,k(h.value),1)]),_:1},8,["icon"])):A("",!0),o.value?A("",!0):(g(),b("span",vt,k(h.value),1)),c("button",{onClick:U},"比对输出")])])}}}),yt=Q(gt,[["__scopeId","data-v-4d5aea3a"]]),Et={class:"side-wrapper"},bt={class:"dir-name"},Tt={class:"tree-wrapper"},St=R({__name:"Side",setup(n){const e=ee({children:q}),r=_("示例"),i={children:"children",label:"name"};function t(){d.emit(L,null),r.value="示例",e.children=q}async function a(){console.log("打开文件夹"),d.emit(L,null);try{const o=await window.showDirectoryPicker();e.children=(await l(o)).children,r.value=o.name}catch(o){console.error(o),o.name==="AbortError"&&console.log("用户取消了选择")}}async function l(o){if(o.kind==="file")return o;o.children=[];const T=o.entries();for await(const p of T)o.children.push(await l(p[1]));return o}async function h(o){if(console.log(o),o.kind==="directory")return;if(d.emit(L,null),o.kind==="sample"){d.emit(K,o);return}const T=await o.getFile(),p=new FileReader;p.onload=function(S){var v;d.emit(K,{name:T.name,code:(v=S.target)==null?void 0:v.result})},p.readAsText(T,"utf-8")}return(o,T)=>{const p=Te;return g(),b("div",Et,[c("div",bt,"文件夹: "+k(r.value),1),c("div",Tt,[C(p,{data:e.children,props:i,"highlight-current":!0,"auto-expand-parent":!0,"node-key":"name","default-expanded-keys":["初级","中级","高级"],onNodeClick:h},null,8,["data"])]),c("div",{class:"btns"},[c("button",{onClick:a},"打开文件夹"),c("button",{onClick:t},"加载示例")])])}}}),kt=Q(St,[["__scopeId","data-v-f60b8c72"]]),wt={class:"top-wrapper"},xt={class:"side"},Ct={class:"editors"},Lt=R({__name:"HomeView",setup(n){return(e,r)=>(g(),b("main",null,[c("div",wt,[c("div",xt,[C(kt)]),c("div",Ct,[C(_e,{title:"C source code",lang:"cpp"}),C(_e,{title:"Generated Rust source code",lang:"rust"})])]),C(yt)]))}}),Rt=Q(Lt,[["__scopeId","data-v-cbdd20ea"]]),It=n=>(ye("data-v-8dc46d9d"),n=n(),Ee(),n),Qt=It(()=>c("div",{class:"title"},null,-1)),Nt=R({__name:"PureEditor",props:{content:{default:""},width:{default:"100vw"},height:{default:"100vh"},extensions:{}},setup(n){const e=n,r=_(),i=_();return he(()=>{const t=be.create({doc:e.content,extensions:e.extensions});r.value&&(i.value=new te({state:t,parent:r.value}))}),ve(()=>e.content,t=>{i.value&&i.value.dispatch({changes:{from:0,to:i.value.state.doc.length,insert:t}})}),(t,a)=>(g(),b("div",{class:"editor-wrapper",style:ge({width:e.width,height:e.height})},[Qt,c("div",{class:"editor-main",ref_key:"editorRef",ref:r},null,512)],4))}}),Ft=Q(Nt,[["__scopeId","data-v-8dc46d9d"]]),Pt={class:"not-pass-view"},At={class:"tree-wrapper"},Ut=R({__name:"NotPassView",setup(n){const e={children:"children",label:"name"},r=[ne,re],i=_(""),t=_([]);function a(l){i.value=l.cpp}return Oe(async()=>{const h=(await nt()).map(o=>({...o,name:o.id.substring(1,8)+": "+new Date(o.created).toLocaleString()}));t.value=h}),(l,h)=>{const o=Te;return g(),b("div",Pt,[c("div",At,[C(o,{data:t.value,props:e,"highlight-current":!0,"auto-expand-parent":!0,"node-key":"id",onNodeClick:a},null,8,["data"])]),C(Ft,{width:"82%",height:"100%",content:i.value,extensions:r},null,8,["content"])])}}}),Dt=Q(Ut,[["__scopeId","data-v-c5bc36b3"]]),Ot=Ke({history:qe("/"),routes:[{path:"/",name:"home",component:Rt},{path:"/code/not-pass",name:"not-pass",component:Dt}]}),Mt=Xe(),ie=Me(He);ie.use(Mt);ie.use(Ot);ie.mount("#app");
