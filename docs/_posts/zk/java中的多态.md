---
title: java中的多态
date: 2023-12-19 15:02:44
permalink: /pages/dafdf2/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-04-15 14:37  
Status: #idea  
Tags: [[java]]

---

# java中的多态
- 定义：方法或对象具有多种形态。
1. 方法的多态：
	- 方法的重载：根据不同参数自动调用不同的方法
	- 方法的重写：子类对继承的方法做出适应的改变
2. 对象的多态：
	- 一个对象的编译类型和运行类型可以不一致：`Animal animal = new Dog();` 其编译类型为Animal，运行类型为Dog。这里体现了父类的引用可以指向一个子类对象在堆中开辟的空间
	- 编译类型在定义时就确定了，不能改变。但运行类型是可以变化的：`animal = new Cat();` 其animal的运行类型变成了Cat，编译类型仍然是Animal。
	- 编译类型看定义时等号的左边，运行类型看等号的右边。个人感觉编译类型是为了确保语法通过的情况下实现一对多的多态。
	- 使用时以运行类型为主
	- 向上转型：父类（可以跨级）的引用指向了子类的对象
	- 可以调用父类的所有成员，即使是重写之后的，但不能调用特有成员。因为在编译阶段，能调用哪些成员，是由编译类型决定的，但仍然遵守访问权限。最终的运行效果看子类的具体实现。可以理解：使用实例时，必须是编译类型有的功能（方法），但实际效果仍取决于子类（运行类型），即调用方法时按照从子类（运行类型）开始查找方法，然后调用，规则与前面的就近调用原则一致，但注意***属性的值看编译类型***。这个原则很好理解，可以想象在函数（方法）调用时，形参是父类的引用，而实参则是子类对象，刚好就构成了向上转型，但此时，在函数内部，所有使用了形参的地方都是假定其类型为父类使用的，但具体的执行效果又是与子类相关。
	- 多态的向下转型：
		- 类似于强制类型转换，只能强转父类的引用，不能强转父类的对象
		- 要求父类的引入必须指向的是当前目标类型的对象
		- 当向下转型后，就可以调用子类类型的所有成员
	- 属性没有重写之说，***属性的值看编译类型***
- ![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230415181835.png)

	```java
package com.learning.poly_;  
  
public class polyDetail {  
    public static void main(String[] args) {  
        Base base = new Sub();  
        System.out.println(base.num);  
        base.printNum();  
  
        System.out.println("=============");  
        Sub sub = new Sub();  
        System.out.println(sub.num);  
        System.out.println(sub.getNum());  
        sub.pritnNum();  
    }  
}  
  
class Base {  
    int num = 11;  
    public void printNum() {  
        System.out.println(this.num);  
    }  
  
    public int getNum() {  
        return num;  
    }  
}  
  
class Sub extends Base {  
    int num = 22;  
    public void pritnNum() {  
        System.out.println(this.num);  
    }  
}
```
3. instanceof的用法：
- 用于判断对象的**运行类型**是否为XX类型或XX类型的**子类型**。

### 动态绑定机制
动态绑定（Dynamic Binding）是面向对象编程中的一个重要概念，用于实现多态性。它是一种在运行时根据对象的实际类型来确定调用的方法的机制。

在静态绑定（Static Binding）中，方法调用是根据编译时期变量的声明类型确定的。也就是说，编译器在编译时期根据变量的类型决定要调用哪个方法。这种绑定方式也称为早期绑定。

与之相反，动态绑定是在运行时期根据对象的实际类型来确定调用的方法。当调用一个被子类重写（覆盖）的方法时，编译器会记录下方法的签名和所在的类，但具体调用哪个方法要等到运行时期才能确定。这种绑定方式也称为晚期绑定或运行时绑定。
1. 当调用对象方法的时候，该方法会和该对象的内存地址/运行类型绑定
```java
//该例可以看出通过方法返回属性值与直接访问时的不同
public class DynamicBinding {
	public static void main(String[] args) {
		A a = new B();
		System.out.println(a.sum());
		System.out.println(a.sum1());
	}
}
class A {
	public int i = 10;
	public int sum() {
		return getI() + 10;
	}
	public int GetI() {
		return i;	
	}
	public int sum1() {
		return i + 10;
	}
}

class B {
	public int i = 20;
	//public int sum() {
	//	return getI() + 20;
	//}
	public int getI() {
		return i;	
	}
	//public int sum1() {
	//	return i + 10;
	//}
}

```
2. 当调用对象属性时，没有动态绑定机制，哪里声明，就在哪里使用ddd

- 多态数组：
在Java中，多态数组（Polymorphic Array）是指一个数组变量可以引用多种类型的对象，这些对象可以是数组元素的不同子类实例
```java
package com.learning.poly_.polyarray;  
  
public class PolyArray {  
    public static void main(String[] args) {  
        Person[] person = new Person[5];  
        person[0] = new Person("jack" ,20);  
        person[1] = new Student("jack" ,18,100);  
        person[2] = new Student("Smith" ,19,30);  
        person[3] = new Teacher("Mr.Jiang" ,20,100000);  
        person[4] = new Teacher("Mr.Xu" ,21,200000);  
  
        for (int i = 0; i < person.length; i++) {  
            System.out.println(person[i].say());  
            if(person[i] instanceof Student) {  
                ((Student) person[i]).study();  
            } else if (person[i] instanceof Teacher) {  
                ((Teacher) person[i]).teach();  
            }  
        }  
    }  
}

```

在Java中，所有的非静态方法都可以被视为虚函数，即它们默认情况下就是虚函数。这意味着在Java中，方法的调用是基于对象的实际类型进行的，而不是基于引用变量的类型。这就是动态绑定机制的原理，也是多态实现的本质。

- 多态参数
多态参数（Polymorphic Parameters）是指在函数或方法的参数中使用父类类型或接口类型，以接受不同子类类型的参数对象。

在面向对象编程中，多态性允许使用父类类型的参数来接受子类类型的对象。通过将子类对象赋值给父类类型的参数，可以实现参数的多态性，从而可以接受不同子类类型的参数对象。

使用多态参数的一个常见场景是在函数或方法中定义一个接受父类类型或接口类型参数的参数，以接受不同子类类型的对象。通过多态参数，可以统一处理这些不同类型的对象，而无需为每个子类类型编写独立的参数。

以下是一个使用多态参数的Java示例：

```java
Copy
class Shape {
    public void draw() {
        System.out.println("Drawing a shape.");
    }
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle.");
    }
}

class Rectangle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle.");
    }
}

public class Main {
    public static void drawShape(Shape shape) {
        shape.draw(); // 根据实际对象的类型调用相应的方法
    }

    public static void main(String[] args) {
        Shape circle = new Circle();
        Shape rectangle = new Rectangle();

        drawShape(circle); // 传递Circle对象
        drawShape(rectangle); // 传递Rectangle对象
    }
}
```
在上述示例中，定义了一个Shape类和它的两个子类Circle和Rectangle。然后，定义了一个drawShape()方法，它接受一个Shape类型的参数。通过在方法中使用多态参数，可以接受不同子类类型的对象。

在main()方法中，创建了一个Circle对象和一个Rectangle对象，并通过调用drawShape()方法来传递这些对象。在drawShape()方法中，根据实际对象的类型，动态地调用相应子类的方法。

通过多态参数，我们可以在方法中统一处理不同类型的对象，从而提高代码的复用性和可扩展性。

总结来说，多态参数允许在函数或方法的参数中使用父类类型或接口类型，以接受不同子类类型的参数对象。通过多态参数，可以统一处理这些不同类型的对象，而无需为每个子类类型编写独立的参数。这提供了灵活性和扩展性，并简化了代码的编写和维护。
# references