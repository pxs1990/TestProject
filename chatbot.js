

function send_msg(msg){
	var prevMsg= $("#container").html();// only get content.
	if(prevMsg.length>3){//not empty.
		prevMsg=prevMsg + "<br>";
	}
	
	$("#container").html(prevMsg+"<span class='delaymsg'>"+"<span class='bot'>Chatbot: </span>"+msg);
	$(".delaymsg").hide();
	$(".delaymsg").delay(500).fadeIn();//fade in after 500 ms
	$(".delaymsg").removeClass("delaymsg");
}

function get_username(){
	send_msg( "Hello,What is your name?");
}

var uname="";
function ai(msg){
	if(uname.length<3){
		uname=msg;
		send_msg( "Nice to meet you "+uname+", How are you doing?");
	}
	if(msg.toUpperCase().indexOf("how are you".toUpperCase())>=0){
		send_msg("Thanks, I am good!")
	}
	if(msg.indexOf("time")>=0){
		var date = new Date();
		var h = date.getHours();
		var m = date.getMinutes();
		send_msg("Current time is: "+h+":"+m+" EST");
	}
}

$(function(){
	get_username();
	$("#textbox").keypress(function(key){
		if (key.which==13 ){
			if ($("#checkb").prop("checked")){
				$("#send").click();
				key.preventDefault();//prevents default new line on enter.
			}
		}
	});
	
	$("#send").click(function(){
		var u = "<span class='username'> You: </span>";//to style
		var newMsg= $("#textbox").val();
		$("#textbox").val("");
		
		var prevMsg= $("#container").html();// only get content.
		if(prevMsg.length>3){
			prevMsg=prevMsg+"<br>";//console.log(prevMsg.length)=3, empty
		}
		$("#container").html(prevMsg+u+newMsg);
		
		$("#container").scrollTop($("#container").prop("scrollHeight"));
		ai(newMsg);//calling artificial intelligence;
	});

});
