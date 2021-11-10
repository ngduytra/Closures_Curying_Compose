let socket = new WebSocket("ws://localhost:8080");

socket.onopen = function(e) {
  alert("[open] Connection established");
//   socket.send("My name is John");
};

socket.onmessage = function(event) {
//   alert(`[message] Data received from server: ${event.data}`);
  document.getElementById("server").textContent=event.data
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
//   alert(`[error] ${error.message}`);
  console.log(error.message);
};

const submit =  function() {
    const a = document.getElementById('tra').value;
    socket.send(`${a}`);
}

document.getElementById('dddd').addEventListener('click', submit)