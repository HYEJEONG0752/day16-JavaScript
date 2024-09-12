// 1. JavaScript에서 클래스를 정의하는 키워드는 무엇인가요?
    // class

// 2. contructor는 클래스에서 어떤 역할을 하나요?
    // 클래스를 기반으로 객체(인스턴스)가 생성될 때 호출되는 함수(특별한 메서드)
    // 객체의 초기 속성을 설정하는 역할(인스턴스 변수를 초기화)
    // → 클래스로 생성된 객체의 속성 초기화

// 3. 아래 코드에서 alice객체의 greet 메서드를 호출하면 출력될 결과는?
class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
}
  
const alice = new Person('Alice');
  
alice.greet();   // Hello, my name is Alice.

// 4. JavaScript에서 함수가 인수로 전달되는 방식을 무엇이라고 하나요?
  // callback ; 함수가 다른 함수의 인수로 전달되어 호출되는 형태를 의미

// 5. 아래 콜백 함수의 예시에서 greet함수에서 callback함수를 호출
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  greet('Alice', sayGoodbye);  // Hello, Alice
                               // Goodbye!

// 6. 다음 코드에서 result 변수의 값은 무엇인가요?
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num => num * 2);

console.log(result);  // [2, 4, 6, 8, 10]

// 7. 클로저는 함수와 그 함수가 선언된 무엇의 조합인가요?
  // 어휘적 환경(렉시컬 환경;lexical environment)
  // 클로저는 함수가 선언될 때의 스코프를 기억하여 그 스코프에 있는 변수에 접근할수 있는 기능 제공

// 8. 아래 코드를 실행하면 어떤 결과가 나오는지 설명하세요.
function outer() {     
    let count = 0;
    
    return function inner() {
      count++;
      
      console.log(count);
    };
}
  
const counter = outer();    
  
counter();  // 1
counter();  // 2
// `outer`함수가 호출 되면 `count`변수 초기화되고 `inner`함수 반환됨
// `inner`함수는 `count`변수를 클로저로 가지고 있어, 호출될 때마다 `count`값을 증가시키고 값을 출력함
// → 클로저를 통해서, inner함수에서 outer함수의 변수를 참조하기 떄문에, outer함수가 실행이 되고, 실행이 끝나고 클로저때문에 outer 변수의 값은 남아있다.

// 9. 고차 함수(Higer Order Function)란 무엇을 인수로 받거나 반환하는 함수인가요?
    // 함수 : 다른 함수를 매개변수로 사용하거나, 함수를 결과로 반환

// 10. JavaScript에서 비동기 작업을 처리하기 위해 주로 사용하는 방법은 무엇인가요?
    // 답: callback, Promise, async/await 
    // Promise, async/await ; callback함수보다 깔끔하고 가독성 좋은 방법을 제공
    // Promise: 비동기작업의 완료 또는 실패를 나타내는 객체(상태:pending,fulfilled,rejected)
    // async/await: Promise를 기반으로 한 문법, 비동기 코드를 더 간결하고 동기적인 방식으ㅗ 작성할 수 있게 해줌(async키워드를 사용해서 함수를 정의,awit키워드를 사용해서 Promise가 이행될 때까지 기다림)

// 11. 객체에서 메서드를 공유하여 메모리 효율성을 높이는 데 사용하는 JavaScript 개념은 무엇인가요?
    // 프로토타입 (prototype)

// 12. 프로토타입 체인을 통해 JavaScript 객체가 다른 객체의 속성이나 메서드를 무엇하나요?
    // 상속 (Inheritance)

// 13. 다음 코드에서 speak 메서드를 재정의(오버라이딩)하여 Dog 클래스가 Rex barks를 출력하도록 수정
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Rex');
  dog.speak();  // Rex barks.

// 14. 다음 코드를 고차 함수를 사용해 중복을 줄여보세요.
function repeat(n, action) {
    for (let i = 0; i < n; i++){
        action();
    }
}
function repeatTwice(){
    repeat(2, () => {
        console.log("Repeated twice");
});
}
function repeatThrice(){
    repeat(3,() => {
        console.log("Repeated thrice");
});
}

repeatTwice();     // Repeated twice
                   // Repeated twice
repeatThrice();    // Repeated thrice
                   // Repeated thrice
                   // Repeated thrice

// 15. 클로저의 특성상 내부 함수에서 외부 함수의 변수를 참조할 수 있는데, 이때 외부 함수가 종료된 후에도 그변수가 사라지지 않는 이유는 무엇인가요?
    // 클로저가 생성될 때 함수가 선언된 어휘적 환경(Lexical Envioronment)을 기억하기 때문
    // 클로저가 변수를 기억해서
    // 외부 함수의 스코프를 기억하기 때문에

// 16. 아래 Car 생성자 함수에 drive 메서드를 추가해, 각 인스턴스가 Driving [브랜드]를 출력하도록 해보세요.
function Car(brand) {
    this.brand = brand;
    this.drive = function(){
        console.log(`Driving ${this.brand}`);
    };
}
  
const car1 = new Car('Tesla');
  
car1.drive();   // Driving Tesla

// 17. 아래 코드에서 add1 함수와 multiply2함수를 조합해 add1ThenMultipliy2함수 정의
const add1 = (n) => {
    return n + 1;
};

const multiply2 = (n) => {
    return n * 2;
};

const add1ThenMultiply2 = (n) => {
    return multiply2(add1(n));
};

console.log(add1ThenMultiply2(5));  // 12

// 18. 생성자 함수에서 부모 객체의 생성자를 호출하여, 자식 객체가 부모 객체의 속성과 메서드를 물려받게 하는 방법을 설명하세요.
    // 프로토타입 체인 설정
    // → Child.prototype = Object.create(Parent.prototype)
    // → Child.prototype.constructor = Parent;

// 19. 클로저를 사용하여, 외부에서 직접 접근할 수 없는 변수를 내부에서 조작할 수 있는 카운터 함수를 작성하세요.
function createCounter() {
    let count = 0;
  
    return {
      increment: () => {
        count++;
  
        console.log("count: " + count);
      },
      decrement: () => {
        count--;
  
        console.log("count: " + count);
      },
      getCount: () => {
        console.log("count: " + count);
      },
    };
  }
  
  const counter2 = createCounter();
  
  counter2.increment(); // 1
  counter2.increment(); // 2
  counter2.increment(); // 3
  counter2.increment(); // 4
  counter2.increment(); // 5
  counter2.decrement(); // 4
  counter2.decrement(); // 3
  counter2.getCount();  // 3
  counter2.getCount();  // 3
  counter2.getCount();  // 3
  counter2.getCount();  // 3
  counter2.getCount();  // 3


// 20. Object.create()를 사용하여, Person 객체를 프로토타입으로 갖는 Student 객체를 생성하고, Student 객체에만 존재하는 tudy 메서드를 추가하세요.
const Person2 = {
    greet: function () {
        console.log("Hello");
    },
};
const Student = Object.create(Person2);
Student.study = () => {
    console.log("Studying");
};

console.log(Student.__proto__);

Student.greet();    // Hello
Student.study();    // Studying

// 21. 클로저를 활용해 bankAccount 객체의 deposit, withdraw, getBalance메서드 구현, 각 메서드는 외부에서 접근할 수 없는 balance변수르 조작해야 함
function bankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: (amount) => {
            balance += amount;
        },
        withdraw: (amount) => {
            if (amount <= balance) {
                balance -= amount;
            } else {
            console.error("error");
        }
    },
        getBalance: () => {
            return balance;
        },
    };
}
  
const account = bankAccount(1000);

account.deposit(500); // 잔액: 1500

console.log(account.getBalance());  // 1500

account.withdraw(200); // 잔액: 1300
  
console.log(account.getBalance()); // 1300

// 22. setTimeout함수의 비동기 특성을 고려해, 콜백 함수에서 정확한 순서로 출력되도록 코드 수정(Start → Middle → End)
console.log("Start");

setTimeout(() => {
  console.log("End");
}, 1000);

console.log("Middle");

// 23. Person 클래스에서 정적 메서드를 사용해, isAdult라는 메서드를 추가.나이가 18세 이상이면 true반환
class Person3 {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age >= 18) {
            return true;
        }
        return false;
    }
}
const adult = Person3.isAdult(20);
const child = Person3.isAdult(15);

console.log(adult); // true
console.log(child); // false

// 24. 콜백 지옥 문제를 해결하기 위해 Promise를 사용하여 비동기 작업을 처리하는 코드
function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data is fetched");
        },1000);
    });
}

fetchData2().then((data) => {
    console.log(data);
});

// 25. 클래스 상속-Employee클래스 만들고 Person 클래스의 greet메서드 호출->Job title: [직업명]을 출력
class Person4 {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, I am ${this.name}.`);
    }
}
  
class Employee extends Person4 {
    constructor(name, jobTitle) {
      super(name);
      this.jobTitle = jobTitle;
    }
  
    greet() {
        console.log(`Hello, I am ${this.name} and job title is ${this.jobTitle}`);
    }
}
  
const employee = new Employee('Alice', 'Engineer');
  
employee.greet();   // Hello, I am Alice and Job title:Engineer

// 26. 클로저를 사용하여 increment함수가 호출될 때마다 step만큼 증가하는 카운터 구현
const createCounter2 = (step) => {
    let count = 0;

    return {
        increment() {
            count += step;
            console.log(count);
        },
    };
};

const counter3 = createCounter2(4);
counter3.increment();   // 4
counter3.increment();   // 8
counter3.increment();   // 12
counter3.increment();   // 16
counter3.increment();   // 20
counter3.increment();   // 24

// 27. 고차 함수 reduce를 사용하여 배열 [1, 2, 3, 4, 5]의 요소를 모두 더하는 코드 작성
const numbers2 = [1, 2, 3, 4, 5];

// reduce를 사용한 합계 계산
const sum = numbers2.reduce((acc, curr) =>{
    return acc + curr;
}, 0);

console.log("sum: " + sum); // sum: 15

