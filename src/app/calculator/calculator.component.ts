import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})


export class CalculatorComponent implements OnInit{
  
  title = "PMN - Simple Angular Project *Calculator"
  author ="Teclit"
    prevOperand:any = null;
    currentNumber = '0';
    firstOperand:any = null;
    operator:any = null;
    waitForSecondNumber = false;

    

  constructor() {}
  ngOnInit() {}


  
  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber){
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    }
 
    if(this.prevOperand === null){
      this.prevOperand = this.currentNumber
    }else{
      this.prevOperand += v;
    }
   
    
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private doCalculation(op: any , secondOp: number){
    switch (op){
      case '+':
        return this.firstOperand += secondOp; 
      case '-': 
       return this.firstOperand -= secondOp; 
      case '*': 
       return this.firstOperand *= secondOp; 
      case '/': 
        return this.firstOperand /= secondOp; 
      case '=':
        return secondOp;
    }
  }
  public getOperation(op: string){
    console.log(op);
    
    if(op === "="){
      this.prevOperand ;
    }else{
      this.prevOperand += op;
    }

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
 
  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  public clearAll(){
    console.log("Clear all");
    this.prevOperand =null;
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  public Correction(){
    console.log("Delete One by on");
    this.currentNumber = this.currentNumber.slice(0, -1);
  }

}
