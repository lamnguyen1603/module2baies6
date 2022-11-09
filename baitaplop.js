//[Bài tập] Xây dựng lớp QuadraticEquation (Phương trình bậc hai)

class QuadraticEquation {
    a;
    b;
    c;
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getA(){
        return this.a;
    }
    getB(){
        return this.b;
    }
    getC(){
        return this.c;
    }
    getDiscriminant(){
        return this.b**2 - 4*this.a*this.c

    }
    getRoot1(){
        let x1 = -this.b + Math.pow(this.getDiscriminant(),0.5)/2*this.a ;
        return x1;
        }
    getRoot2(){
      let x2 = -this.b - Math.pow(this.getDiscriminant(),0.5)/2*this.a ;
      return x2;
    }

    Result(){
        if(this.getDiscriminant() > 0) {
            console.log('Phương trình có 2 nghiệm'+ this.getRoot1() + "và" + this.getRoot2())
        }else if(this.getDiscriminant() == 0) {
            console.log('Phương trình có nghiệm kép là' +this.getRoot1())
        }else {
            console.log("The equation has no roots")
        }
    }
    }
let quadraticEquation = new QuadraticEquation(7,8,8);
quadraticEquation.Result()
