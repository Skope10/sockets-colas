
// Comando para establecer la conexion
var socket = io();
var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
};
var escritorio = searchParams.get('escritorio');

var small = $('small');
$('h1').text('Escritorio ' + escritorio);

socket.on('connect', function () {
    console.log('Conected to Server');
});

socket.on('disconnect', function () {
    console.log('Disconected to Server');
});

$('button').on('click', function () {
    socket.emit(
        'atenderTicket',
        { escritorio: escritorio },
        function (resp) {
            if (resp === 'No hay mas tickets'){
                small.text(resp);
                alert(resp);
                return;
            }
            small.text(resp.numero);
        });
});
