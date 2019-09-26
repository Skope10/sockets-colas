
// Comando para establecer la conexion
var socket = io();

var lbl = $('#lblNuevoTicket');

socket.on('connect', function () {
  console.log('Conected to Server');
});

socket.on('disconnect', function () {
  console.log('Disconected to Server');
});

socket.on('estadoActual', function (ticket) {
  lbl.text(ticket.actual);
});

$('button').on('click', function () {
  socket.emit(
    'siguienteTicket',
    null,
    function (siguienteTicket) {
      lbl.text(siguienteTicket);
    });
});
