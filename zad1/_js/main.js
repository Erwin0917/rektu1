(function(){
    var btn = document.querySelector("#btn"),
        input = document.querySelector("#input"),
        outputContainer= document.querySelector(".output--container");
        

// Funkcja pomocnicza do tworzenia boxu na wyniki
function createMainElem(){
        output = document.createElement("div"),
        resultWrap = document.createElement("div"),
        dateWrap = document.createElement("div"),
        resultTitle = document.createElement("h3");


        resultTitle.textContent = "PLN AMOUNT";

        output.classList.add("output--box");
        resultWrap.classList.add("output__bg");
        dateWrap.classList.add("output--date");

               
        output.appendChild(resultWrap);
        output.appendChild(dateWrap);
        resultWrap.appendChild(resultTitle);

        return output;
}




function Converter( ){    
        
        

}


// metoda do podania czasu kiedy zostało wykonane przeliczenie waluty
Converter.prototype.convertTime = function(){
    var date = new Date(),
        year = date.getFullYear(),
        month = (date.getMonth() + 1 ) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
        day = date.getDate(),
        hour =  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        time = year + "." + month + "." + day + " " + hour;

    return time;


}


// metoda obliczajacą która może dostawać różne wartości w zależnosci jaką walutę przeliczamy
Converter.prototype.calculator = function(val){
    var inputVal = input.value,
        newVal = ( inputVal * val).toFixed(4);

    console.log(newVal);
    return newVal;
}



// metoda przeliczająca Euro na PLN 
Converter.prototype.EURtoPLN = function(){
    var random = ((Math.random() * 100) +1).toFixed(4),
        converterVal = (4,2) * (1+(random  * 50)/1000);

        if( input.value > "0"){
            outputContainer.appendChild(createMainElem());

            var result = document.createElement("p"),
                data = document.createElement("p");

            result.textContent = Converter.prototype.calculator(converterVal);
            data.textContent =Converter.prototype.convertTime();

            resultWrap.appendChild(result);
            dateWrap.appendChild(data);


        }else alert("Nie podałeś wartości do przeliczenia");
        

        


        input.value = "";
        return ;
}






var converter1 = new Converter(input);




btn.addEventListener("click", function(){
    converter1.EURtoPLN();
    
}, false);


})();