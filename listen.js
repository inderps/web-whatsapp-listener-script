function sendMessageOnCurrentlyOpenedChat(message) {
  var input = document.querySelector('.block-compose .input');
  input.innerHTML = message;
  input.dispatchEvent(new Event('input', {bubbles: true}));
  var button = document.querySelector('.block-compose button.icon-send');
  button.click();
}
