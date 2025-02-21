// 1) რიცხვის დარევერსება

class Reverse_Num {
    constructor(number) {
        this.number = number;
    }
    
    Reversal() {
        this.number = String(this.number).split("").map(Number).reverse().join("")
        return this.number
    }
}

let number_1 = new Reverse_Num(745)

console.log(number_1.Reversal())

// 2) სტრინგის დარევერსება

class Reverse_Str {
    constructor(string) {
        this.string = string
    }

    Reversal() {
        this.string = this.string.split("").reverse().join("")
        return this.string
    }
}

let string_1 = new Reverse_Str("enotsdaerT")

console.log(string_1.Reversal())