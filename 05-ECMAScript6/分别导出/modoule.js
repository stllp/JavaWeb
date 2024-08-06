export const PI=3.14 //分别导出
export let pi=3.14
export let sum=function(a,b){
    return a+b
}
export class Person{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

// export default PI //默认导出

// export{PI,pi,sum,Person} //全部导出
