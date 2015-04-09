$(document).ready(function() {

  $("#Submit").on('click', function(){

    first_name=$('#firstname').val();
    last_name=$('#lastname').val();
    email=$('#email').val();
    phone=$('#phone').val();
    
      postParams = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone
      };

    $.ajax({
      url: "/create",
      method: 'POST',
      data: postParams
    });
  });

  $('#Search').on('click', function(){

    input=$('#input').val();
    var params = {input: input}
    $.ajax({
      url: "/search",
      method: 'GET',
      data: params}).done(function(result){
        $('#result_first_name').replaceWith( '<h4 id="result_first_name">' + result[0].first_name + "</h4>");  
        $('#result_last_name').replaceWith( '<h4 id="result_last_name">' + result[0].last_name + "</h4>"); 
        $('#result_email').replaceWith( '<h4 id="result_email">' + result[0].email + "</h4>"); 
        $('#result_phone').replaceWith( '<h4 id="result_phone">' + result[0].phone + "</h4>"); 
    });
  });

});



