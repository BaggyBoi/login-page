$(".btn").click(function () { 
    check()
});
$(".form-control").change(function () { 
   check()
});
function check(e) {
    let nameLen = $("#floatingInput").val().length    
    let passLen = $("#floatingPassword").val().length    
    if(nameLen >= 3 && nameLen <=20){
        $("#floatingInput").addClass("is-valid")
        $("#floatingInput").removeClass("is-invalid")
    }
    else{
        $("#floatingInput").removeClass("is-valid")
        $("#floatingInput").addClass("is-invalid")
    }
    if(passLen >= 8){
        $("#floatingPassword").addClass("is-valid")
        $("#floatingPassword").removeClass("is-invalid")
    }
    else{
        $("#floatingPassword").removeClass("is-valid")
        $("#floatingPassword").addClass("is-invalid")
    }
}