function talk(){  
    var know = {  
     "Hello" : "Hello :)",
     "Who are you" : "I'm Christian 💙",  
     "How are you" : "Good :)",  
     "What can i do for you" : "Please Be Happy",  
     "Your family" : "I have my family of 7 members",  
     "ok" : "Thank You for using this ",  
     "Bye" : "Okay! Will meet soon.."  
    };  
    var user = document.getElementById('userBox').value;  
     document.getElementById('chatLog').innerHTML = user + "<br>";  
    if (user in know) {  
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
    }else{  
     document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
    }  
   }