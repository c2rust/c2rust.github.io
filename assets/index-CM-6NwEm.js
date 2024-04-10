var ge=Object.defineProperty;var Ee=(r,e,n)=>e in r?ge(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var T=(r,e,n)=>(Ee(r,typeof e!="symbol"?e+"":e,n),n);import{d as F,r as f,p as ye,o as b,c as S,a as u,U as k,u as D,D as V,aa as Y,K as Q,F as ee,a4 as te,B as ne,X as B,$ as re,ab as be,C as Te,I as le,J as Se,ac as ke,ad as xe,H as I,ae as Ce}from"./@vue-H-2acBfG.js";import{d as H,c as Le}from"./pinia-CcNMwh_y.js";import{e as Re,E as we,A as Ie,B as Qe}from"./@codemirror-I-DanHR-.js";import{b as ie}from"./codemirror-yz77EbLa.js";import{d as oe}from"./@uiw-CLhxolpj.js";import{m as Fe}from"./mitt-DJ65BbbF.js";import{v as se}from"./uuid-D8aEg3BZ.js";import{E as Ne,a as Ae}from"./element-plus-BlCDFIK_.js";import{i as Ue}from"./@element-plus-CZIFquM4.js";import"./@lezer-BKVAMdCn.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@babel-CCbyfPlC.js";import"./@ctrl-r5W6hzzQ.js";import"./@vueuse-Dp1LMaJG.js";import"./@popperjs-D9SI2xQl.js";import"./lodash-es-DNzLEVan.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&m(p)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const c=Fe(),z="TRANSCODE_CLICKED",j="TRANSCODE_DONE",P="RUST_CODE_UPDATE",O="CPP_CODE_UPDATE",ue="EVALUATION_CLICKED",de="CPP_EXEC_DONE",pe="RUST_EXEC_DONE",L="SOME_OPERATION_TRIGGERED";class Pe{constructor(e){T(this,"url");T(this,"requestInit");T(this,"onmessage");T(this,"ondone");T(this,"onerror");T(this,"ontimeout");T(this,"controller");T(this,"timer",0);T(this,"data_segment","");this.url=e.url,this.requestInit=e.requestInit,this.onmessage=e.onmessage,this.ondone=e.ondone,this.onerror=e.onerror,this.controller=new AbortController,this.createFetchRequest()}createFetchRequest(){this.timeout(),fetch(this.url,{method:"POST",signal:this.controller.signal,...this.requestInit}).then(e=>(clearTimeout(this.timer),e.status===200?e.body:Promise.reject(e))).then(async e=>{var t;const n=e.getReader();let m=0;for(;;){const{value:i,done:p}=await n.read();if(p){(t=this.ondone)==null||t.call(this);break}else{const o=((this.data_segment||"")+new TextDecoder().decode(i)).split(`

`).filter(Boolean);this.data_segment=this.onmessage(o,m++)}}}).catch(e=>{var n;(n=this.onerror)==null||n.call(this,e)})}abort(){this.controller&&this.controller.abort()}timeout(e=6e4){this.timer=window.setTimeout(()=>{var n;this.abort(),(n=this.ontimeout)==null||n.call(this)},e)}}var fe={VITE_APP_NAME:"rustedu",VITE_API_URL:"https://api.rustedu.com",BASE_URL:"/",MODE:"rustedu",DEV:!1,PROD:!0,SSR:!1};const De=fe;let N=De.VITE_API_URL;console.log(fe);const Oe=async r=>await(await fetch(N+"/api/transcode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json();function Me(r,e,n,m){new Pe({url:N+"/api/transcode/stream",requestInit:{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(e)},onmessage:(t,i)=>{for(const p of t)if(p!=="[DONE]")try{const v=JSON.parse(p);n(v)}catch{return p}return""},ondone:()=>{m()},ontimeout:()=>{console.log("timeout!")}})}function Xe(r,e,n){Me("/api/transcode/stream",r,e,n)}const Ke=async r=>await(await fetch(N+"/api/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json(),ae=async r=>await(await fetch(N+"/api/transcode/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json(),qe=async r=>await(await fetch(N+"/api/transcode/auto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json(),M=[{name:"初级",kind:"directory",children:[{name:"001trait.cpp",kind:"sample",code:`
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
*/`}]}],me=H("cpp_output",{state:()=>({type:"stdout",content:""}),actions:{setState(r){this.type=r.type,this.content=r.content},getState(){return{type:this.type,content:this.content,lang:"cpp"}}}}),_e=H("rust_output",{state:()=>({type:"stdout",content:""}),actions:{setState(r){this.type=r.type,this.content=r.content},getState(){return{type:this.type,content:this.content,lang:"rust"}}}}),he=H("editor_store",{state:()=>({cpp_editor:null,rust_editor:null}),actions:{setCpp(r){this.cpp_editor=r},setRust(r){this.rust_editor=r},getCppCode(){return this.cpp_editor==null?"":this.cpp_editor.state.doc.toString()},getRustCode(){return this.rust_editor==null?"":this.rust_editor.state.doc.toString()}}}),ze={class:"editor-wrapper"},je={class:"title"},Ve={class:"run"},Be={class:"output"},He=F({__name:"Editor",props:{title:{default:"Editor"},lang:{}},setup(r){const e=r,n=f([]),m=f(!1),t=f(""),i=f(""),p=f(""),v=f("");let o;const E=f(),d=f(),x=me(),y=_e();function R(){n.value=[]}const A=he();ye(()=>{v.value=se();let h=[],a="";e.lang==="cpp"?(h=[ie,Ie(),oe],a=M[0].code||"",p.value=M[0].name):e.lang==="rust"&&(h=[ie,Qe(),oe]);const l=Re.create({doc:a,extensions:h});E.value&&(d.value=new we({state:l,parent:E.value}),e.lang==="cpp"?A.setCpp(d.value):A.setRust(d.value)),e.lang==="cpp"?(o=f(!0),c.on(O,s=>{t.value=s.compile_params||"",i.value=s.exec_params||"",R(),v.value=se(),d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:s.code}}),p.value=s.name}),c.on(z,async s=>{var W;const _={prompt:"",tool:s.tool,compile_params:t.value,exec_params:i.value,auto_repeat:s.auto_repeat||1,code:d.value.state.doc.toString(),id:v.value};if(console.log("transcode request data:",_),["c2rust","chatgpt4","auto"].includes(s.tool)){try{let g=null;s.tool==="auto"?g=await qe(_):g=await Oe(_),console.log("transcode response data:",g),g.status==0?c.emit(P,g.content):(console.error(g.error),n.value=(((W=g.error)==null?void 0:W.toString())||"").split(`
`))}catch(g){console.error(g.message),n.value=(g.message||"").split(`
`)}c.emit(j,null);return}let C="",K="",$=!1,q=!1;Xe(_,g=>{K+=g.content,q||(C+=g.content),C.indexOf("```rust")>=0&&(C=C.split("```rust")[1],$=!0),$&&!q&&(C.indexOf("```")>=0&&(C=C.split("```")[0].trim(),q=!0),c.emit(P,C))},()=>{console.log("转译完成！"),console.log(K);const g=/```rust\n([\s\S]*?)```/g,Z=[];let J="";for(;J=g.exec(K);)Z.push(J[1]);c.emit(P,Z[0].trim()),c.emit(j,null)})})):e.lang==="rust"&&(o=f(!1),c.on(P,s=>{d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:s}})}),c.on(z,async s=>{R(),d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:""}})}),c.on(O,s=>{y.setState({type:"stdout",content:"",lang:e.lang}),d.value.dispatch({changes:{from:0,to:d.value.state.doc.length,insert:a}}),R(),t.value=s.compile_params||"",i.value=s.exec_params||""}))});async function U(){m.value||(c.emit(L,null),m.value=!0,await w(),m.value=!1)}async function w(){R();const h=(d.value.state.doc.toString()||"").trim();if(!h)return"";e.lang==="cpp"?(x.setState({type:"stdout",content:"",lang:e.lang}),console.log("Run cpp clicked."),console.log("With compile params: "+t.value),console.log("With exec params: "+i.value),n.value=["Compile with command: gcc ./source.cpp -o target "+t.value,"Exec with command: ./target "+i.value]):e.lang==="rust"&&(y.setState({type:"stdout",content:"",lang:e.lang}),console.log("Run rust clicked."),console.log("With exec params: "+i.value),n.value=["Exec with command: cargo run -q -- "+i.value],console.log("Run rust clicked."),console.log("With exec params: "+i.value),n.value=["Exec with command: cargo run -q -- "+i.value]);const a={language:e.lang,code:h,compile_params:t.value,exec_params:i.value};console.log("exec request data:",a);let l="";const s={type:"stdout",content:"",lang:e.lang};try{const _=await Ke(a);console.log("exec response data:",_),_.status==0?s.type="stdout":s.type="stderr",s.content=_.output,l=_.output,n.value=n.value.concat((_.output||"").split(`
`))}catch(_){console.error(_.message),s.type="stderr",s.content="网络请求错误: "+_.toString(),l=_.message||"",n.value=n.value.concat((_.message||"").split(`
`))}return e.lang==="cpp"?x.setState(s):y.setState(s),l}return e.lang==="cpp"?c.on(ue,async function(h){console.warn("开始自动测评......"),console.warn("开始转译......"),c.emit(z,{is_auto:!0,prompt:"",...h}),console.log(h),console.warn("cpp开始执行......");const a=await w();console.warn("cpp执行完成......"),c.emit(de,{exec_output:a,exec_code:d.value.state.doc.toString()})}):e.lang==="rust"&&c.on(j,async()=>{console.warn("转译完成......"),console.warn("rust开始执行......");const h=await w();console.warn("rust执行完成......"),c.emit(pe,{exec_output:h,exec_code:d.value.state.doc.toString()})}),(h,a)=>(b(),S("div",ze,[u("div",je,k(e.title)+": "+k(p.value),1),u("div",{class:"editor-main",ref_key:"editorRef",ref:E},null,512),u("div",Ve,[D(o)?V((b(),S("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),type:"text",placeholder:"编译参数"},null,512)),[[Y,t.value]]):Q("",!0),V(u("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>i.value=l),type:"text",placeholder:"运行参数"},null,512),[[Y,i.value]]),u("button",{onClick:U},k(m.value?"运行中...":"运行"),1)]),u("div",Be,[h.$props.lang==="cpp"?(b(!0),S(ee,{key:0},te(n.value,l=>(b(),S("p",{class:ne(D(x).type==="stderr"?"error":"")},k(l),3))),256)):Q("",!0),h.$props.lang==="rust"?(b(!0),S(ee,{key:1},te(n.value,l=>(b(),S("p",{class:ne(D(y).type==="stderr"?"error":"")},k(l),3))),256)):Q("",!0)])]))}}),X=(r,e)=>{const n=r.__vccOpts||r;for(const[m,t]of e)n[m]=t;return n},ce=X(He,[["__scopeId","data-v-1f5f3a00"]]),G=r=>(ke("data-v-35b1cacb"),r=r(),xe(),r),Ge={class:"operations"},$e={class:"left-oper"},We={class:"oper-item"},Ze=G(()=>u("option",{value:"auto"},"自动",-1)),Je=G(()=>u("option",{value:"c2rust"},"编译转换",-1)),Ye=G(()=>u("option",{value:"chatgpt4"},"大模型转换",-1)),et={class:"oper-item"},tt={class:"right-oper"},nt={style:{cursor:"pointer",color:"#41b883",marginRight:"10px"}},rt={key:1,style:{color:"#ff5555",marginRight:"10px"}},it=F({__name:"Operations",setup(r){const e=f("auto"),n=f("转译"),m=f(1),t=B({cpp:!0,rust:!0}),i=f(""),p=f(!0),v=f(""),o=f(!0),E=B({cpp:"",rust:""}),d=me(),x=_e(),y=he();function R(){const a={cpp:y.getCppCode(),rust:y.getRustCode()};console.log("更新数据库"),console.log(a),ae(a).then(l=>{console.log("数据库更新结果：",l)}).catch(l=>{console.error("数据库更新失败：",l)})}function A(){if(y.getCppCode().trim()===""||y.getRustCode().trim()==="")return;c.emit(L,null);const a=(d.getState().content||"").replace(/\r\n/g,`
`).trim(),l=(x.getState().content||"").replace(/\r\n/g,`
`).trim();console.log({c_output:a,rust_output:l}),a===l?(o.value=!0,v.value="运行输出完全匹配"):(o.value=!1,v.value="运行输出不匹配")}c.on(L,()=>{v.value="",o.value=!0,i.value="",p.value=!0});function U(){return t.cpp&&t.rust}function w(){if(!U())return;n.value="转译";const a=(d.getState().content||"").replace(/\r\n/g,`
`).trim(),l=(x.getState().content||"").replace(/\r\n/g,`
`).trim();console.log({c_output:a,rust_output:l}),a===l?(p.value=!0,i.value="运行输出完全匹配",t.cpp=!0,t.rust=!0,ae(E).then(s=>{console.log("数据库更新结果：",s)}).catch(s=>{console.error("数据库更新失败：",s)})):(p.value=!1,i.value="运行输出不匹配",t.cpp=!0,t.rust=!0)}function h(){U()&&(c.emit(L,null),y.getCppCode().trim()!==""&&(t.cpp=!1,t.rust=!1,i.value="",t.cpp=!1,t.rust=!1,n.value="正在转译...",c.emit(ue,{auto_repeat:m.value,tool:e.value})))}return c.on(de,a=>{t.cpp=!0,E.cpp=a.exec_code,w()}),c.on(pe,a=>{t.rust=!0,E.rust=a.exec_code,w()}),(a,l)=>{const s=Ne;return b(),S("div",Ge,[u("div",$e,[u("div",We,[re(" 转译工具: "),V(u("select",{"onUpdate:modelValue":l[0]||(l[0]=_=>e.value=_)},[Ze,re("、 "),Je,Ye],512),[[be,e.value]])]),u("button",{class:"oper-item",onClick:h},k(n.value),1),u("div",et,[u("span",{style:Te({color:p.value?"#41b883":"#ff5555"})},k(i.value),5)])]),u("div",tt,[o.value?(b(),le(s,{key:0,width:"220",trigger:"hover","confirm-button-text":"提交","cancel-button-text":"取消",icon:D(Ue),"icon-color":"#626AEF",title:"本网站将使用你的提交代码来提高转译质量。",onConfirm:R},{reference:Se(()=>[u("span",nt,k(v.value),1)]),_:1},8,["icon"])):Q("",!0),o.value?Q("",!0):(b(),S("span",rt,k(v.value),1)),u("button",{onClick:A},"比对输出")])])}}}),ot=X(it,[["__scopeId","data-v-35b1cacb"]]),st={class:"side-wrapper"},at={class:"dir-name"},ct={class:"tree-wrapper"},lt=F({__name:"Side",setup(r){const e=B({children:M}),n=f("示例"),m={children:"children",label:"name"};function t(){c.emit(L,null),n.value="示例",e.children=M}async function i(){console.log("打开文件夹"),c.emit(L,null);try{const o=await window.showDirectoryPicker();e.children=(await p(o)).children,n.value=o.name}catch(o){console.error(o),o.name==="AbortError"&&console.log("用户取消了选择")}}async function p(o){if(o.kind==="file")return o;o.children=[];const E=o.entries();for await(const d of E)o.children.push(await p(d[1]));return o}async function v(o){if(console.log(o),o.kind==="directory")return;if(c.emit(L,null),o.kind==="sample"){c.emit(O,o);return}const E=await o.getFile(),d=new FileReader;d.onload=function(x){var y;c.emit(O,{name:E.name,code:(y=x.target)==null?void 0:y.result})},d.readAsText(E,"utf-8")}return(o,E)=>{const d=Ae;return b(),S("div",st,[u("div",at,"文件夹: "+k(n.value),1),u("div",ct,[I(d,{data:e.children,props:m,"highlight-current":!0,"auto-expand-parent":!0,"node-key":"name","default-expanded-keys":["初级","中级","高级"],onNodeClick:v},null,8,["data"])]),u("div",{class:"btns"},[u("button",{onClick:i},"打开文件夹"),u("button",{onClick:t},"加载示例")])])}}}),ut=X(lt,[["__scopeId","data-v-f60b8c72"]]),dt={class:"top-wrapper"},pt={class:"side"},ft={class:"editors"},mt=F({__name:"HomeView",setup(r){return(e,n)=>(b(),S("main",null,[u("div",dt,[u("div",pt,[I(ut)]),u("div",ft,[I(ce,{title:"C source code",lang:"cpp"}),I(ce,{title:"Generated Rust source code",lang:"rust"})])]),I(ot)]))}}),_t=X(mt,[["__scopeId","data-v-cbdd20ea"]]),ht=F({__name:"App",setup(r){return(e,n)=>(b(),le(_t))}}),vt=Le(),ve=Ce(ht);ve.use(vt);ve.mount("#app");
