
// // //Object 1
let Calc = function () {
    this.isturnOn = false;
    this.get = function () {
        if (this.isturnOn === false) {
            alert('Калькулятор выключен')
            return;
        }
        this.a = +prompt ('Введите число а');
        this.b = +prompt ('Введите число b');
        this.oper = prompt ('Введите операцию: +, -, *, /');

        this.operation();
    }
    this.turnOn = function () {
        this.isturnOn = true;
    }
    this.turnOff = function () {
        this.isturnOn = false;
    }
    this.operation = function () {
        
        switch (this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
     
            case '-':
                this.result = this.a - this.b; 
            break;
        
            case '*':
                this.result = this.a * this.b; 
            break;
        
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;      
        }
        this.show();
    }
    this.show = function () {
        alert (this.a + ' ' + this.oper + ' ' + this.b + '=' + this.result);
    }
}

 let calc = new Calc ();
 calc.turnOn();
 calc.get();


 //Object 2

 let Calc = function () {
    this.get = function () {
        
        
        this.V = +prompt ('Введите объем емкости');
        this.Tk = +prompt ('Введите конечную температуру воды');
        this.Tn = +prompt ('Введите начальную температуру воды');
        this.P = +prompt ('Введите мощность');


        this.calculation();
       
    }
    this.calculation = function () {
        this.result = 4200 * this.V * (this.Tk-this.Tn) / this.P;
    }
   
    this.show = function () {
        alert ('4200*' + this.V + '*(' + this.Tk + '-' + this.Tn + ')/' + this.P + '=' + this.result + ' ' + 'sec');
    }
}

 let calc = new Calc ();
 calc.get();
 calc.show();


//Object 3

let Calc = function () {
        this.isturnOn = false;
        this.get = function () {
            if (this.isturnOn === false) {
                alert('Лампочка выключена')
                return;
            }
            this.P1 = +prompt ('Введите мощность');
            this.S = +prompt ('Введите стоимость электроэнергии');
            
            this.calculation();
           
        }
        this.turnOn = function () {
            this.isturnOn = true;
        }
        this.turnOff = function () {
            this.isturnOn = false;
        }
        this.calculation = function () {
        this.result = this.P1 * this.S;
         }
               
        this.show = function () {
         alert (this.P1 + '*' + this.S + '=' + this.result);
        }
       
    }
    
     let calc = new Calc ();
     calc.turnOn();
     calc.get();
     calc.show();

