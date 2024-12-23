function checkForSpam(message){
    const messageLowerCase= message.toLowerCase();
    if(messageLowerCase.indexOf("spam") ==-1 && messageLowerCase.indexOf("sale")==-1){
        return false;
    } else{
        return true;
    }
}