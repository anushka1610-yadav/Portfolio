function sendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_el8tboc" , "template_rtsdn3v" , params).then(function (res){
        alert("Success!" + res.status);
    })
}