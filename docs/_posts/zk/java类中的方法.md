---
title: java类中的方法
date: 2023-12-19 15:02:44
permalink: /pages/e8f60d/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
	
create date: 2023-04-01 18:38  
Status: #notes 
Tags: [[java]] 

---

# java类中的方法
[java中方法的static方法](java中方法的static方法.md)
- example:
```java
public class properties {
  public static void main(String[] args) {
    Cat cat1 = new Cat();
    cat1.name = "kitty";
    cat1.tail = new Tail();
    cat1.tail.lenth = 3.23;
    System.out.println(cat1.tail.lenth);
    cat1.meow();
  }
}
class Cat {
  String name;
  Tail tail;

  public void meow() {
    System.out.println("meow");
    
  }
}

class Tail {
  double lenth;
}
```


## 方法调用细节
- 同一个类中的方法调用：直接调用即可。不同之间需要通过对象名进行调用。方法的调用涉及到了栈的空间创建，多个方法就会创建多个空间。
```java
public class properties {
  public static void main(String[] args) {
    Cat cat1 = new Cat();
    cat1.name = "kitty";
    cat1.tail = new Tail();
    cat1.tail.lenth = 3.23;
    System.out.println(cat1.tail.lenth);
    cat1.meowTwice();
  }
}
class Cat {
  String name;
  Tail tail;

  public void meow() {
    System.out.println("meow");
    
  }
  public void meowTwice() {
    meow();
    meow();
    tail.printLenthOfTail();
  }
}

class Tail {
  double lenth;
  public void printLenthOfTail() {
    System.out.println("The lenth of the tail is" + lenth); 
  }
}
```
- 方法的传参：
	- 值传递
	- 引用传递
```java
public class method {
  public static void main(String[] args) {
    B b = new B();
    int[] arr = {1,2,3};
    b.test100(arr);
    Person ps = new Person();
    ps.age = 21;
    b.test200(ps);
    System.out.println(arr[1]);
    System.out.println(ps.age);
  }
}
class B {
  public void test100(int[] arr) {
    arr[1] = 1;
  }
  public void test200(Person ps) {
    ps.age = 22;
  }
}
class Person {
  int age;

}
```
- 引用传递时，有：
```java
public class method {
  public static void main(String[] args) {
    B b = new B();
    int[] arr = {1,2,3};
    b.test100(arr);
    Person ps = new Person();
    ps.age = 21;
    b.test200(ps);
    System.out.println(arr[1]);
    System.out.println(ps.age);
  }
}
class B {
  public void test100(int[] arr) {
    int[] arr2 = {22,33,44};
    arr[1] = 1;
    arr = arr2;
    System.out.println("the arr in methond is "+ arr[0] + arr[1] + arr[2]);
  }
  public void test200(Person ps) {
    ps.age = 22;
  }
}
class Person {
  int age;

}
```
可以发现，如果是对数组中的某一个元素进行修改，则最后的结果会导致实参中对应元素的改变，但如果是直接将形参指向另一个数组时，原本的实参并不会改变，这更类似于c语言中的指针而不是引用。所以`object.property`的变量会访问所指向地址中的值，也即是堆中的空间，而`object`只会对栈中对象指向的地址进行操作。
- 编写一个方法复制一个对象，要使复制的对象与原对象独立，需要在方法体中通过`new`创建一个新的对象，然后分别赋值和各自的属性。

## 方法的递归调用
- [x] 递归实现阶乘 📅 2023-04-02 ✅ 2023-04-10
```java
public class factorial {
  public static void main(String[] args) {
    T test = new T();
    int r = test.getFactorial(Integer.parseInt(args[0]));
    System.out.println(r);
  }
}
class T {
  public int getFactorial(int num) {
    //end condition
    if (num == 1) {
      return 1;
    }else{
      return getFactorial(num - 1) * num;    
  }
  }
}
```

- [x] 递归求出斐波那契数 📅 2023-04-02 ✅ 2023-04-10
```java
public class fibonacci {
  public static void main(String[] args) {
    T test = new T();
    int r = Integer.parseInt(args[0]);
    System.out.println(test.getFibonacci(r));
  }
}
class T {
  public int getFibonacci(int num){
    //end condition
    if (num <= 2) {
      return 1;
    } else {
      return getFibonacci(num -1) + getFibonacci(num -2);
    }

  } 
}
```
- [x] 猴子吃桃 ✅ 2023-04-10
**很好的例子**
```java
public class monkey {
  public static void main(String[] args) {
    T test = new T();
    System.out.println(test.getFirstNum(1));
  }
}
class T {
  public int getFirstNum(int num){
    if (num == 10) {
      return 1;
    } else {
      return (getFirstNum(num + 1) + 1) * 2; 
    }
  }
}
```
- [x] 老鼠出迷宫 ✅ 2023-04-10
```java
public class maze {
  public static void main(String[] args) {
    AMaze maze1 = new AMaze(1,3,6,5);
    System.out.println("the initial maze is like: ");
    maze1.printAMaze();
    System.out.println("the later maze is like: ");
    maze1.findWay();
    maze1.printAMaze();
  }
}
class AMaze {
  int[][] map = new int[8][7];
  int[] start = {1,1};
  int[] end = {6,5};
    public AMaze(int start1, int start2, int end1, int end2) {
    this.start[0] = start1;
    this.start[1] = start2;
    this.end[0] = end1;
    this.end[1] = end2;
    for(int i = 0; i < 7; i++ ) {
      this.map[0][i] = 1;
      this.map[7][i] = 1;
    }
    for(int i = 1; i < 7; i++) {
      this.map[i][0] = 1;
      this.map[i][6] = 1;
    }
    this.map[3][1] = 1;
    this.map[3][2] = 1;

  }
  public void printAMaze(){
    for(int i = 0; i < 8; i++){
      for(int j = 0; j < 7; j++){
        System.out.print(this.map[i][j] + " ");
      }
      System.out.println();
    }
  }
  public void findWay() {
    findWay(start[0],start[1],end[0],end[1]);
  }
  public boolean findWay(int start1, int start2, int end1, int end2){
    // 0 : Free of obstacles;
    // 1 : there is a obstacle;
    // 2 : accessable to end point; 
    // 3 : unaccessable to end point; 
    //
    if (map[end1][end2] == 2) {
      return true;
    } else {
      if (map[start1][start2] == 0) {
        map[start1][start2] = 2;
        if(findWay(start1 + 1, start2, end1, end2)) {
          return true;
        }
        if(findWay(start1, start2 + 1, end1, end2)) {
          return true;
        }
        if(findWay(start1 - 1, start2, end1, end2)) {
          return true;
        }
        if(findWay(start1, start2 - 1, end1, end2)) {
          return true;
        }
        map[start1][start2] = 3;
        return false;
      } else {
        return false;
      }
    }
  }
}
```

- [x] 汉诺塔 ✅ 2023-04-10
```java
public class HanoiTower {
  public static void main(String[] args) {
    Tower t = new Tower();
    t.move(3,'A','B','C');
  }
}
class Tower {
  public void move(int num, char current, char repeater, char target) {
    if(num == 1) {
      System.out.println(current + "->" + target);
    } else {
      move(num - 1, current, target, repeater);
      System.out.println(current + "->" + target);
      move(num - 1, repeater, current, target);
    }
       

  }
}
```
- [x] 八皇后 ✅ 2023-04-12
```java
public class EightQueen {
  public static void main(String[] args) {
    Chess c = new Chess();
    c.getASolution(0);
    c.showBoard();
  }
}
class Chess {
  int[][] board = new int[8][8];

  public boolean getASolution(int row) {
    if(row == 7) {
      for(int i = 0; i < 8; i++) {
      if(board[row][i] == 2) {
        return true;
      } 
    } 
    }
    

    for(int i = 0; i < 8; i++) {
      int flag = 0;
      for(int j = 0; j < row; j++) {
        for(int m = 0; m < 8; m++) {
          if((m == i) || (Math.abs(j-row) == Math.abs(m - i))) {
            if(board[j][m] == 2) {
              flag = 1;
             } 
          }
        }
      }
        if(flag == 0) {
            board[row][i] = 2;
            if(row == 7) {
            return true;
        }
              if(getASolution(row + 1)) {
              return true;
            }
            board[row][i] = 1;
            
        }
   }
    return false;
  }
  public void showBoard(){
    for(int i = 0; i < 8; i++) {
      for(int j = 0; j < 8; j++) {
        System.out.print(board[i][j] + " "); 
      }
      System.out.println();
    }
  }
}

```

**递归重要规则**
1. 执行一个方法时，就创建一个新的受保护的独立空间（栈空间）
2. 方法的局部变量是独立的，不会相互影响，比如变量
3. 如果方法中使用的是引用类型变量（比如数组，对象），就会*共享该引用类型的数据*。
4. 递归必须向退出递归的条件逼近，否则就是无限递归，出现StackOverflowError，死龟了：
5. 当一个方法执行完毕，或者遇到return，就会返回，遵守谁调用，就将结果返回给谁，同时当方法执行完毕或者返回时，该方法也就执行完毕。

**两个要点**：
- 最外层向最内层推进的公式或逻辑
- 最内层结束条件
- 有时候可以假设已经达成某个条件，以简化逻辑，例如在递归函数还未编写完成时，可以假设其已经具备了该功能并在编写时进行调用。
- 理清外层与内层的概念，由外层到内层或由内层到外层开始思考以确定递归中在哪些位置需要编写哪些代码。这种外层内层的关系可以从汉诺塔游戏中最大层和其它层的关系上进行类比。
## 方法的重载
- 即形参个数或类型以及顺序有不同时的方法可以有相同的方法名，在调用该方法名时会根据实参的个数与类型或顺序进行自动匹配
- 在可以有多个匹配的情况下（通常出现在参数可能发生精度的自动类型转换时），无需进行类型转换的优先级更高：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230402145811.png)

## 方法中的可变参数
- java允许将同一个类中多个同名同功能但参数个数不同的方法，封装成一个方法
- 基本语法：
	访问修饰符 返回类型 方法名（数据类型... 形参名）{}
```java
public class varparams {
  public static void main(String[] args) {
    Sum s = new Sum();
    System.out.println(s.sum(1,2,3));
  }
}
class Sum {
  public int sum(int... nums) {
    int res = 0;
    for(int i = 0;i < nums.length;i++){
      res += nums[i];
    }
    return res;
  }
}
```
- 可变参数方法的实参可以是数组
- 可变参数的本质就是数组
- 可变参数可以与普通类型的参数一起放在形参列表，但可变参数必须放在最后
- 一个形参列表只能出现一个可变参数
## main函数
[[java与C语言中的main函数传参]]
# references