/* Validation */

$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var check = false;
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
);

$("#form").validate({
    rules: {
        name: {
            regex: /^[A-Z]{1}[a-z]{1,} +[A-Z]{1}[a-z]{1,}$/
        },
        email: {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        },
        telephone: {
            regex: /^\+[0-9]{3}\-[0-9]{2}\-[0-9]{3}\-[0-9]{3}$/
        }
    }
})

function isValid(){
    if (!$("#form").valid()) {  
        alert('Please check your input');
        return;
    }
    else{
    alert("Thank you for your reservation");
    window.scrollTo(0,0);
    }
}



/* Calculate final cost */

function finalCost(){
    var activity_type=document.getElementById("activity-type").value;
    var personsNumb=document.getElementById("person_number").value;
    var total= (parseInt(activity_type)*parseInt(personsNumb))
    document.getElementById("result").innerHTML=total;
}




