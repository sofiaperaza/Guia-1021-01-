$( document ).ready(function() {
	$("#btnObtenerDatos").click(function(){
$.ajax({
  type: "POST",
  url: 'data/estudiantes.json',
  data: {},
  dataType: 'json',
  beforeSend: function(){
  	$("#divContenido").html("Obteniendo datos...");
  },
  success: function(data, textStatus, xhr){
  	$("#divContenido").empty();
  	$("#divContenido").append("<table class='table table-striped table-hover table-bordered'>");
  	$("#divContenido table").append("<tr>");
  	$("#divContenido table tr:last").append($("<th>").html("Codigo"));
  	$("#divContenido table tr:last").append($("<th>").html("Apellidos"));
  	$("#divContenido table tr:last").append($("<th>").html("Nombres"));
  	$("#divContenido table tr:last").append($("<th>").html("Nota"));
    $("#divContenido table tr:last").append($("<th>").html("Accion"));

  	$.each(data, function(i,v){
  		$("#divContenido table").append("<tr>");
  		$("#divContenido table tr:last").append($("<td>").html(v.Codigo));
  		$("#divContenido table tr:last").append($("<td>").html(v.Apellidos));
  		$("#divContenido table tr:last").append($("<td>").html(v.Nombres));
  		$("#divContenido table tr:last").append($("<td>").html(v.Nota));
      $("#divContenido table tr:last").append($("<td>").html(v.Accion));
  	});
},
error: function(xhr, textStatus, errorThrown){

  		$("#divContenido").html("<div class='alert alert-danger'>Oops :(" + errorThrown + '</div>');
  	
  	}
  });
});
});