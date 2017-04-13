function sendMessageOnCurrentChat(message) {
  var input = document.querySelector('.block-compose .input');
  input.innerHTML = message;
  input.dispatchEvent(new Event('input', {bubbles: true}));
  var button = document.querySelector('.block-compose button.icon-send');
  button.click();
}

function subscribeToMessagesOnCurrentChat(subscribeCallback) {
  var observer = new MutationObserver(function(mutations) {
   mutations.forEach(function(mutation) { 
     for (var i = 0; i < mutation.addedNodes.length; i++)
       var msgNode = mutation.addedNodes[i];
       var messageNode = msgNode.getElementsByClassName("message")[0];
       if (messageNode) {
         var textNode = messageNode.getElementsByClassName("selectable-text")[0];
         if (textNode) {
           subscribeCallback(textNode.textContent);
         }
       }
   })
  });
  observer.observe($(".message-list"), { childList: true });
}
