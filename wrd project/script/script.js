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
        },
        activity:{
            required:true
        },
        persons:{
            required:true
        }

    }
})

/* Calculate final cost */

function finalCost(){
    var activity_type=document.getElementById("activity-type").value;
    var personsNumb=document.getElementById("person_number").value;
    var total= (parseInt(activity_type)*parseInt(personsNumb));
    document.getElementById("result").innerHTML=total;
}



/*Mobile menu */

$(document).ready(function(){
    $('.open-button').click(function(){
        $(this).toggleClass('open');
    });
    $('.open-button').click(function(e){
        e.preventDefault();
        $('.nav-menu').toggleClass('open');
    });
});

$(document).ready(function(){
    $('.nav-menu a').click(function(){
        $('.nav-menu').toggleClass('open');
        $('.open-button').removeClass('open');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*Local storage*/

function getIndex(){
    var index=localStorage.getItem('index');
    if(index==undefined){
        return 0;
    }
    return index;
}

function Save(){
    if(!$("#form").valid()){
        alert('Please check your input!');
        return;
    }
    var index=getIndex();
    
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var telephone=document.getElementById('telephone').value;

    localStorage.setItem('name'+index,name);
    localStorage.setItem('email'+index,email);
    localStorage.setItem('telephone'+index,telephone);

   
    index++;
    localStorage.setItem('index',index);
    alert('Successfull input.');

    $("#form").reset();
    
}

