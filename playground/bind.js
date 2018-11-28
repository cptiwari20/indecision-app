
class A{
  constructor(){
    this.name = 'vikas';
    this.getName = this.getName.bind(this);
  }

  getName(){
    return(`My name is ${this.name}`)
  } 
};
const a = new A();
console.log(a.getName());

class Me{
  name= 'Cp Tiwari';

  getMyName = () => {
    return(`My name is ${this.name}`)
  }
}
const i = new Me();
const nam = i.getMyName()
console.log(nam)