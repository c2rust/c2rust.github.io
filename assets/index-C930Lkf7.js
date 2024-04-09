var ae=Object.defineProperty;var ce=(o,e,t)=>e in o?ae(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var y=(o,e,t)=>(ce(o,typeof e!="symbol"?e+"":e,t),t);import{d as Q,r as u,q as le,o as k,c as x,a as d,I as L,u as ue,D as V,_ as J,J as de,G as pe,W as fe,C as me,Q as F,H as _e,$ as ve,L as he,a0 as ge,a1 as Ee,V as C,A as Te,a2 as be}from"./@vue-CaA77chp.js";import{e as ye,E as Se,A as ke,B as xe}from"./@codemirror-I-DanHR-.js";import{b as Y}from"./codemirror-yz77EbLa.js";import{d as ee}from"./@uiw-CLhxolpj.js";import{m as Le}from"./mitt-DJ65BbbF.js";import{v as te}from"./uuid-D8aEg3BZ.js";import{E as Re}from"./element-plus-D4yYKw6d.js";import"./@lezer-BKVAMdCn.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@babel-CCbyfPlC.js";import"./lodash-es-BcjJjR9F.js";import"./@element-plus-BXVs1juE.js";import"./@vueuse-CjgnB8XA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))p(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&p(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const i=Le(),z="TRANSCODE_CLICKED",B="TRANSCODE_DONE",U="RUST_CODE_UPDATE",P="CPP_CODE_UPDATE",H="EVALUATION_CLICKED",j="AUTO_TRANSCODE_DONE",ne="CPP_EXEC_DONE",ie="RUST_EXEC_DONE",w="RUST_EXEC_ERROR",oe="UPDATE_SERVER_TOOL";class we{constructor(e){y(this,"url");y(this,"requestInit");y(this,"onmessage");y(this,"ondone");y(this,"onerror");y(this,"ontimeout");y(this,"controller");y(this,"timer",0);y(this,"data_segment","");this.url=e.url,this.requestInit=e.requestInit,this.onmessage=e.onmessage,this.ondone=e.ondone,this.onerror=e.onerror,this.controller=new AbortController,this.createFetchRequest()}createFetchRequest(){this.timeout(),fetch(this.url,{method:"POST",signal:this.controller.signal,...this.requestInit}).then(e=>(clearTimeout(this.timer),e.status===200?e.body:Promise.reject(e))).then(async e=>{var n;const t=e.getReader();let p=0;for(;;){const{value:a,done:s}=await t.read();if(s){(n=this.ondone)==null||n.call(this);break}else{const r=((this.data_segment||"")+new TextDecoder().decode(a)).split(`

`).filter(Boolean);this.data_segment=this.onmessage(r,p++)}}}).catch(e=>{var t;(t=this.onerror)==null||t.call(this,e)})}abort(){this.controller&&this.controller.abort()}timeout(e=6e4){this.timer=window.setTimeout(()=>{var t;this.abort(),(t=this.ontimeout)==null||t.call(this)},e)}}var se={VITE_APP_NAME:"rustedu",VITE_API_URL:"https://api.rustedu.com",BASE_URL:"/",MODE:"rustedu",DEV:!1,PROD:!0,SSR:!1};const Ce=se;let I=Ce.VITE_API_URL;console.log(se);const Qe=async o=>await(await fetch(I+"/api/transcode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();function Ie(o,e,t,p){new we({url:I+"/api/transcode/stream",requestInit:{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(e)},onmessage:(n,a)=>{for(const s of n)if(s!=="[DONE]")try{const T=JSON.parse(s);t(T)}catch{return s}return""},ondone:()=>{p()},ontimeout:()=>{console.log("timeout!")}})}function Ae(o,e,t){Ie("/api/transcode/stream",o,e,t)}const Ne=async o=>await(await fetch(I+"/api/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json(),Ue=async o=>await(await fetch(I+"/api/transcode/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json(),Fe=async o=>await(await fetch(I+"/api/transcode/auto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json(),D=[{name:"初级",kind:"directory",children:[{name:"001trait.cpp",kind:"sample",code:`
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
*/`}]}],Pe={class:"editor-wrapper"},De={class:"title"},Oe={class:"run"},Me={class:"output"},Xe=Q({__name:"Editor",props:{title:{default:"Editor"},lang:{}},setup(o){const e=o,t=u([]),p=u(!1),n=u(!1),a=u(""),s=u(""),T=u(""),r=u("");let h;const g=u(),l=u();function b(){t.value=[],p.value=!1}le(()=>{r.value=te();let m=[],c="// Here shows rust code generated from C!";e.lang==="cpp"?(m=[Y,ke(),ee],c=D[0].code||"",T.value=D[0].name):e.lang==="rust"&&(m=[Y,xe(),ee]);const f=ye.create({doc:c,extensions:m});if(g.value&&(l.value=new Se({state:f,parent:g.value})),e.lang==="cpp"){h=u(!0);const _=u("");i.on(P,E=>{a.value=E.compile_params||"",s.value=E.exec_params||"",b(),r.value=te(),l.value.dispatch({changes:{from:0,to:l.value.state.doc.length,insert:E.code}}),T.value=E.name}),i.on(w,E=>{_.value=E}),i.on(z,async E=>{var G;let X=E.prompt;_.value&&(X=`${X}，以下是错误信息：
${_.value}`,_.value="");const N={prompt:X,tool:E.tool,compile_params:a.value,exec_params:s.value,auto_repeat:E.auto_repeat||1,code:l.value.state.doc.toString(),id:r.value};if(console.log("transcode request data:",N),["c2rust","chatgpt4","auto"].includes(E.tool)){try{let v=null;E.tool==="auto"?v=await Fe(N):v=await Qe(N),console.log("transcode response data:",v),v.status==0?(p.value=!1,i.emit(U,v.content),i.emit(oe,v.tool)):(console.error(v.error),p.value=!0,t.value=(((G=v.error)==null?void 0:G.toString())||"").split(`
`))}catch(v){console.error(v.message),p.value=!0,t.value=(v.message||"").split(`
`)}i.emit(B,null),E.is_auto&&i.emit(j,null);return}let S="",K="",$=!1,q=!1;Ae(N,v=>{K+=v.content,q||(S+=v.content),S.indexOf("```rust")>=0&&(S=S.split("```rust")[1],$=!0),$&&!q&&(S.indexOf("```")>=0&&(S=S.split("```")[0].trim(),q=!0),i.emit(U,S))},()=>{console.log("转译完成！"),console.log(K);const v=/```rust\n([\s\S]*?)```/g,W=[];let Z="";for(;Z=v.exec(K);)W.push(Z[1]);i.emit(U,W[0].trim()),i.emit(B,null),E.is_auto&&i.emit(j,null)})})}else e.lang==="rust"&&(h=u(!1),i.on(U,_=>{l.value.dispatch({changes:{from:0,to:l.value.state.doc.length,insert:_}})}),i.on(z,async _=>{b(),l.value.dispatch({changes:{from:0,to:l.value.state.doc.length,insert:""}})}),i.on(P,_=>{i.emit(w,""),l.value.dispatch({changes:{from:0,to:l.value.state.doc.length,insert:c}}),b(),a.value=_.compile_params||"",s.value=_.exec_params||""}))});async function A(){n.value||(n.value=!0,await R(),n.value=!1)}async function R(){b(),e.lang==="cpp"?(console.log("Run cpp clicked."),console.log("With compile params: "+a.value),console.log("With exec params: "+s.value),t.value=["Compile with command: g++ ./source.cpp -o target "+a.value,"Exec with command: ./target "+s.value]):e.lang==="rust"&&(console.log("Run rust clicked."),console.log("With exec params: "+s.value),t.value=["Exec with command: cargo run -q -- "+s.value]);const m={language:e.lang,code:l.value.state.doc.toString(),compile_params:a.value,exec_params:s.value};console.log("exec request data:",m);let c="";try{const f=await Ne(m);console.log("exec response data:",f),f.status==0?p.value=!1:p.value=!0,c=f.output,t.value=t.value.concat((f.output||"").split(`
`))}catch(f){console.error(f.message),p.value=!0,c=f.message||"",t.value=t.value.concat((f.message||"").split(`
`))}return e.lang==="rust"&&(p.value?i.emit(w,c):i.emit(w,"")),c}return e.lang==="cpp"?i.on(H,async function(m){if(console.warn("开始自动测评......"),console.warn("开始转译......"),i.emit(z,{is_auto:!0,prompt:"",...m}),console.log(m),m.auto_repeat===m.repeat_remain){console.warn("cpp开始执行......");const c=await R();console.warn("cpp执行完成......"),i.emit(ne,{exec_output:c,exec_code:l.value.state.doc.toString()})}}):e.lang==="rust"&&i.on(j,async()=>{console.warn("转译完成......"),console.warn("rust开始执行......");const m=await R();console.warn("rust执行完成......"),i.emit(ie,{exec_output:m,exec_code:l.value.state.doc.toString()})}),(m,c)=>(k(),x("div",Pe,[d("div",De,L(e.title)+": "+L(T.value),1),d("div",{class:"editor-main",ref_key:"editorRef",ref:g},null,512),d("div",Oe,[ue(h)?V((k(),x("input",{key:0,"onUpdate:modelValue":c[0]||(c[0]=f=>a.value=f),type:"text",placeholder:"编译参数"},null,512)),[[J,a.value]]):de("",!0),V(d("input",{"onUpdate:modelValue":c[1]||(c[1]=f=>s.value=f),type:"text",placeholder:"运行参数"},null,512),[[J,s.value]]),d("button",{onClick:A},L(n.value?"运行中...":"运行"),1)]),d("div",Me,[(k(!0),x(pe,null,fe(t.value,f=>(k(),x("p",{class:me(p.value?"error":"")},L(f),3))),256))])]))}}),O=(o,e)=>{const t=o.__vccOpts||o;for(const[p,n]of e)t[p]=n;return t},re=O(Xe,[["__scopeId","data-v-f8a9d482"]]),M=o=>(ge("data-v-878549d1"),o=o(),Ee(),o),Ke={class:"operations"},qe={class:"oper-item"},ze=M(()=>d("option",{value:"auto"},"自动",-1)),je=M(()=>d("option",{value:"c2rust"},"C2Rust",-1)),Ve=M(()=>d("option",{value:"chatglm"},"智谱AI",-1)),Be=M(()=>d("option",{value:"baichuan"},"百川AI",-1)),He=[ze,je,Ve,Be],$e={class:"oper-item"},Ge=Q({__name:"Operations",setup(o){const e=u("auto"),t=u(""),p=u("转译"),n=u("转译");u("");const a=u(1),s=u(1),T=u(!0),r=F({cpp:!0,rust:!0}),h=u(""),g=u(!0),l=F({cpp:"",rust:""}),b=F({cpp:"",rust:""});i.on(oe,c=>{t.value=c});function A(){return r.cpp&&r.rust}function R(){if(!A())return;n.value="转译";const c=(l.cpp||"").replace(/\r\n/g,`
`).trim(),f=(l.rust||"").replace(/\r\n/g,`
`).trim();console.log({c_output:c,rust_output:f}),s.value-=1,c===f?(g.value=!0,h.value="运行输出完全匹配",r.cpp=!0,r.rust=!0,l.cpp="",l.rust="",t.value="",i.emit(w,""),Ue(b).then(_=>{console.log("数据库更新结果：",_)}).catch(_=>{console.error("数据库更新失败：",_)})):(g.value=!1,s.value>0?(h.value="运行输出不匹配(剩余重试次数："+s.value+")",console.warn("测评未不通过"),i.emit(H,{auto_repeat:a.value,repeat_remain:s.value,tool:t.value||e.value,prompt:"给出的代码错误，请根据错误信息修正代码"}),r.cpp=!0,l.rust="",r.rust=!1):(h.value="运行输出不匹配",s.value=0,r.cpp=!0,r.rust=!0,l.cpp="",l.rust="",t.value="",i.emit(w,"")))}function m(){A()&&(s.value=a.value,h.value="",r.cpp=!1,r.rust=!1,n.value="正在转译...",i.emit(H,{auto_repeat:a.value,repeat_remain:s.value,tool:e.value}))}return i.on(ne,c=>{r.cpp=!0,l.cpp=c.exec_output,b.cpp=c.exec_code,R()}),i.on(ie,c=>{r.rust=!0,l.rust=c.exec_output,b.rust=c.exec_code,R()}),i.on(B,()=>{T.value=!0,p.value="转译"}),(c,f)=>(k(),x("div",Ke,[d("div",qe,[_e(" 转译工具: "),V(d("select",{"onUpdate:modelValue":f[0]||(f[0]=_=>e.value=_)},He,512),[[ve,e.value]])]),d("button",{class:"oper-item",onClick:m},L(n.value),1),d("div",$e,[d("span",{style:he({color:g.value?"#41b883":"#ff5555"})},L(h.value),5)])]))}}),We=O(Ge,[["__scopeId","data-v-878549d1"]]),Ze={class:"side-wrapper"},Je={class:"dir-name"},Ye={class:"tree-wrapper"},et=Q({__name:"Side",setup(o){const e=F({children:D}),t=u("示例"),p={children:"children",label:"name"};function n(){t.value="示例",e.children=D}async function a(){console.log("打开文件夹");try{const r=await window.showDirectoryPicker();e.children=(await s(r)).children,t.value=r.name}catch(r){console.error(r),r.name==="AbortError"&&console.log("用户取消了选择")}}async function s(r){if(r.kind==="file")return r;r.children=[];const h=r.entries();for await(const g of h)r.children.push(await s(g[1]));return r}async function T(r){if(console.log(r),r.kind==="directory")return;if(r.kind==="sample"){i.emit(P,r);return}const h=await r.getFile(),g=new FileReader;g.onload=function(l){var b;i.emit(P,{name:h.name,code:(b=l.target)==null?void 0:b.result})},g.readAsText(h,"utf-8")}return(r,h)=>{const g=Re;return k(),x("div",Ze,[d("div",Je,"文件夹: "+L(t.value),1),d("div",Ye,[C(g,{data:e.children,props:p,accordion:"","highlight-current":!0,"auto-expand-parent":!0,onNodeClick:T},null,8,["data"])]),d("div",{class:"btns"},[d("button",{onClick:a},"打开文件夹"),d("button",{onClick:n},"加载示例")])])}}}),tt=O(et,[["__scopeId","data-v-2dc46843"]]),rt={class:"top-wrapper"},nt={class:"side"},it={class:"editors"},ot=Q({__name:"HomeView",setup(o){return(e,t)=>(k(),x("main",null,[d("div",rt,[d("div",nt,[C(tt)]),d("div",it,[C(re,{title:"C source code",lang:"cpp"}),C(re,{title:"Generated Rust source code",lang:"rust"})])]),C(We)]))}}),st=O(ot,[["__scopeId","data-v-cbdd20ea"]]),at=Q({__name:"App",setup(o){return(e,t)=>(k(),Te(st))}}),ct=be(at);ct.mount("#app");
