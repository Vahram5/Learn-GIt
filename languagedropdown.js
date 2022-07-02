/*    let cookie = document.cookie
    let first_lang, second_lang, changeing_class
    switch (cookie) {
    case "key=rus":
        console.log("rus")
        first_lang = document.getElementById("first").innerHTML
        second_lang = document.getElementsByClassName("rus")[0].parentNode.innerHTML
        changeing_class = document.getElementsByClassName("rus")[0].parentNode.id
        document.getElementById("first").innerHTML = second_lang
        document.getElementById(changeing_class).innerHTML = first_lang
        break;
    case "key=usa":
            console.log("usa")
            first_lang = document.getElementById("first").innerHTML
            second_lang = document.getElementsByClassName("usa")[0].parentNode.innerHTML
            changeing_class = document.getElementsByClassName("usa")[0].parentNode.id
            document.getElementById("first").innerHTML = second_lang
            document.getElementById(changeing_class).innerHTML = first_lang
            break;
     case "key=am":
            console.log("am")
            first_lang = document.getElementById("first").innerHTML
            second_lang = document.getElementsByClassName("am")[0].parentNode.innerHTML
            changeing_class = document.getElementsByClassName("am")[0].parentNode.id
            document.getElementById("first").innerHTML = second_lang
            document.getElementById(changeing_class).innerHTML = first_lang
            break;       
        }
        document.getElementById("first").addEventListener("click", function(){
            document.cookie = "key="+document.getElementById("first").firstElementChild.id;
            console.log("key="+document.getElementById("first").firstElementChild.id)
            location.reload();
        })
        document.getElementById("second").addEventListener("click", function(){
            document.cookie = "key="+document.getElementById("second").firstElementChild.id;
            console.log("key="+document.getElementById("second").firstElementChild.id)
            location.reload();
        })
        document.getElementById("third").addEventListener("click", function(){
            document.cookie = "key="+document.getElementById("third").firstElementChild.id;
            console.log("key="+document.getElementById("third").firstElementChild.id)
            location.reload();
        })*/

        let first_lang, second_lang, changeing_class
        let arr = ["am", "rus", "usa"];
        for(let i=0; i<arr.length; i++){
            if(document.cookie=="key="+arr[i]){
                first_lang = document.getElementById("first").innerHTML
                second_lang = document.getElementsByClassName(arr[i])[0].parentNode.innerHTML
                changeing_class = document.getElementsByClassName(arr[i])[0].parentNode.id
                document.getElementById("first").innerHTML = second_lang
                document.getElementById(changeing_class).innerHTML = first_lang
            }
        }
        let span_arr= document.getElementsByClassName("span")
        for(let i =0; i<span_arr.length;i++){
            span_arr[i].addEventListener("click", function(){
            document.cookie = "key="+this.firstElementChild.id;
            console.log("key="+this.firstElementChild.id)
            location.reload();
            })
        }
            
            
    