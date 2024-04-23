$(function(){
  $('#botonAgregarTarea').click(function() {
    var nombreTarea = $('#agregarTarea').val();
    if (nombreTarea !== '') {
      var nuevaTarea = $('<li>' + nombreTarea + ' <button class="tareaIncompleta">No Completado</button> <button class="tareacompletada">Completado</button></li>');
      $('#lista-tareas').append(nuevaTarea);
      $('#agregarTarea').val('');
    }
  });


  $('#lista-tareas').on('click', '.tareacompletada', function() {
    $(this).parent().addClass('completada').removeClass('faltante');
  });


  $('#lista-tareas').on('click', '.tareaIncompleta', function() {
    $(this).parent().addClass('faltante').removeClass('completada');
  });
});
