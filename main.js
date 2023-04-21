function Alertm(){
    alert("Click on the Whatsapp button to enroll now!")


    let options = {
        whatsapp: "+2349067877701", // WhatsApp number
        call_to_action: "Enroll Now!", // Call to action
        //position: "left", // Position may be 'right' or 'left'
    };
    let proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    let s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    let x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
}