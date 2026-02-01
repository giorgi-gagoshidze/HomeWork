1.
let arr1 = ["Apple", "Banana", "Avocado"]

let result1 =
arr1.find(function(item){
  return item[0] === "A"
})

2.
let users2 = [{age:25},{age:40},{age:30}]

let result2 =
users2.find(function(user){
  return user.age > 30
})

3.
let words3 = ["hi","hello","welcome"]

let result3 =
words3.find(function(word){
  return word.length > 5
})

4.
let products4 = [{price:30},{price:15},{price:25}]

let result4 =
products4.find(function(product){
  return product.price < 20
})

5.
let students5 = [{grade:"B"},{grade:"A"},{grade:"C"}]

let result5 =
students5.find(function(student){
  return student.grade === "A"
})

6.
let nums6 = [5,3,-2,7]

let result6 =
nums6.findIndex(function(num){
  return num < 0
})

7.
let words7 = ["play","running","jump"]

let result7 =
words7.findIndex(function(word){
  return word.endsWith("ing")
})

8.
let users8 = [{isActive:false},{isActive:true}]

let result8 =
users8.findIndex(function(user){
  return user.isActive === true
})

9.
let nums9 = [3,7,20,9]

let result9 =
nums9.findIndex(function(num){
  return num % 10 === 0
})

10.
let fruits10 = ["apple","pear","banana"]

let result10 =
fruits10.findIndex(function(fruit){
  return fruit.length === 5
})

11.
let nums11 = [50,120,80,200]

let result11 =
nums11.reverse().find(function(num){
  return num > 100
})

12.
let words12 = ["hi","tree","sky"]

let result12 =
words12.reverse().find(function(word){
  return word.indexOf("e") !== -1
})

13.
let users13 = [{age:30},{age:20},{age:22}]

let result13 =
users13.reverse().find(function(user){
  return user.age < 25
})

14.
let nums14 = [2,4,7,10]

let result14 =
nums14.reverse().find(function(num){
  return num % 2 !== 0
})

15.
let words15 = ["sky","apple","orange"]

let result15 =
words15.reverse().find(function(word){
  return word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u"
})

16.
let nums16 = [10,60,40,80]

let result16 =
nums16.findLastIndex(function(num){
  return num > 50
})

17.
let words17 = ["Sun","Moon","Star"]

let result17 =
words17.findLastIndex(function(word){
  return word[0] === "S"
})

18.
let users18 = [{isActive:true},{isActive:false},{isActive:true}]

let result18 =
users18.findLastIndex(function(user){
  return user.isActive === true
})

19.
let nums19 = [2,6,9,10]

let result19 =
nums19.findLastIndex(function(num){
  return num % 3 === 0
})

20.
let words20 = ["tree","home","book"]

let result20 =
words20.findLastIndex(function(word){
  return word.length === 4
})

21.
let nums21 = [10,25,30]

let result21 =
nums21.indexOf(25)

22.
let fruits22 = ["banana","apple","pear"]

let result22 =
fruits22.indexOf("apple")

23.
let letters23 = ["b","a","c"]

let result23 =
letters23.indexOf("a")

24.
let animals24 = ["dog","cat","bird"]

let result24 =
animals24.indexOf("cat")

25.
let nums25 = [10,20,30]

let result25 =
nums25.indexOf(100)

26.
let nums26 = [10,20,10,30]

let result26 =
nums26.lastIndexOf(10)

27.
let fruits27 = ["apple","banana","apple"]

let result27 =
fruits27.lastIndexOf("apple")

28.
let letters28 = ["a","b","a","c"]

let result28 =
letters28.lastIndexOf("a")

29.
let animals29 = ["dog","cat","dog"]

let result29 =
animals29.lastIndexOf("dog")

30.
let nums30 = [1,0,-1,0]

let result30 =
nums30.lastIndexOf(0)

31.
let nums31 = [1,2,3]

let removed31 =
nums31.pop()

32.
let fruits32 = ["apple","banana","pear"]

let removed32 =
fruits32.pop()

33.
let arr33 = [1,2,3]

while(arr33.length > 0){
  arr33.pop()
}

34.
let users34 = [{id:1},{id:2}]

let removed34 =
users34.pop()

35.
let arr35 = [5,6,7]

let last35 =
arr35.pop()

36.
let arr36 = [1,2,3,4]

arr36.splice(0,2)

37.
let arr37 = ["apple","banana","pear"]

arr37.splice(2,0,"orange","grape")

38.
let arr38 = ["a","b","c","d"]

arr38.splice(3,1,"mango")

39.
let arr39 = [1,2,3,4,5]

arr39.splice(-3)

40.
let arr40 = [1,2,4,5]

arr40.splice(2,0,3)
