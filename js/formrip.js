function enviarFormulario() {
  var nombre_form = $("#input_nombre").val();
  var mail_form = $("#input_mail").val();
  var mensaje_form = $("#input_mensaje").val();
  var cel_form = $("#input_cel").val();
  //var vcard_form = $("#input_vcard").val();

  var opcion_1 = $("#input_asunto").val();

  // modificar aqui
  var valkey = "b43156f4-012d-484a-86d7-3059fadb64b2";
  var email_cliente = "pagano_ale@hotmail.com";

  var data = new FormData();
  data.append("key", valkey);
  data.append("message", mensaje_form);
  data.append("name_", nombre_form);
  data.append("subject_", "Nuevo formulario de la web - " + nombre_form);
  data.append("fr_email", email_cliente);
  data.append("email", mail_form);
  data.append("cel_number_", cel_form);
  data.append("v_card", "3.0");

  // CUSTOM FIELDS //
  data.append(
    "custom_fields",
    JSON.stringify({
      "Asunto del mensaje": opcion_1
    })
  );

  $.ajax({
    url: "https://form.rip?ajax=1",
    method: "POST",
    contentType: false,
    processData: false,
    data: data
  });

  $("#input_nombre").val("");
  //$("#input_empresa").val("");
  $("#input_mail").val("");
  $("#input_cel").val("");
  //$("#input_vcard").val("");
  //$("#input_subject").val("");
  $("#input_mensaje").val("");
  $("#alert").addClass("mt-5");
  $("#alert").addClass("show");
}