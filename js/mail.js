function sendMail(params){
    var tempParams={
        from_name:document.getElementById("Name").value,
        from_email:document.getElementById("Sender").value,
        from_subject:document.getElementById("Subject").value,
        message:document.getElementById("Message").value,
    };
    emailjs.send('service_7nx1q58','template_077usof',tempParams)
    .then(function(res){
        alert("Your mail has been send. Thank you for connecting.",res.status);
        
    })
}