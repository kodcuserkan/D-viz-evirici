class UI {
    constructor(newOutputFirst,newOutputSecond){
        this.inputFirst = newOutputFirst;
        this.inputSecond = newOutputSecond;
        this.outputResult = document.getElementById("outputResult");
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
    }

    resultFunction(result){
        
        this.outputResult.value = result;
    }

    firstElementFunction (){
        // console.log("aaaaa");
        
        this.outputFirst.textContent = this.inputFirst.options[this.inputFirst.selectedIndex].textContent;

    }

    secondElementFunction(){
        // console.log("bbbb");
        
        this.outputSecond.textContent = this.inputSecond.options[this.inputSecond.selectedIndex].textContent;

    }

}