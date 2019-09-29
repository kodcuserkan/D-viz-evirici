class Currency {
    constructor (firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    exchange () {

        return new Promise((resolve,reject) => {
            fetch(this.url+this.firstCurrency)
            .then(Response => Response.json())
            .then( data => {
                const parite = data["rates"][this.secondCurrency];
                const numerizedAmount = Number(this.amount);
                const karsilik = parite*numerizedAmount;
                resolve(karsilik);
                
            })
            .catch(err => reject(err));
        }) ;

       
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency (newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }

    changeAmount (newAmount){
        this.amount = newAmount;
    }
}