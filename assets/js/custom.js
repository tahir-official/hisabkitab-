$('.toggle-password').click(function(){
    $(this).children().toggleClass('mdi-eye-outline mdi-eye-off-outline');
    let input = $(this).prev();
    input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
});
/*login script start*/
$("#alert").hide();
$('#loginFrom').submit(function(e) {
    e.preventDefault();
    let formData = $('#loginFrom').serialize();
    $.ajax({
        method: "POST",
        url: baseUrl + "/model/profileModel.php?action=login",
        data: formData,
        dataType: 'JSON',
        beforeSend: function() {
          $(".btnLogin").html('<i class="fa fa-spinner"></i> Processing...');
          $(".btnLogin").prop('disabled', true);
          $("#alert").hide();
          
        }
    })

    .fail(function(response) {
        alert( "Try again later." );
    })

    .done(function(response) {
        if(response.status == 0){
          $("#alert").html(response.message);
          $("#alert").show();
        }else{
          location.href = response.url;
        }
        
    })
    .always(function() {
        $(".btnLogin").html('Login');
        $(".btnLogin").prop('disabled', false);
   });
    return false;
});
/*login script end*/

/*forget script start*/
$('#ForgetForm').submit(function(e) {

    e.preventDefault();
    let formData = $('#ForgetForm').serialize();

    $.ajax({
      method: "POST",
      url: baseUrl + "/model/profileModel.php?action=forgetPassword",
      data: formData,
      dataType: 'JSON',
      beforeSend: function() {
        $(".btnSubmit").html('<i class="fa fa-spinner"></i> Processing...');
        $(".btnSubmit").prop('disabled', true);
        $("#alert").hide();
        
      }
    })

    .fail(function(response) {
      alert( "Try again later." );
    })

    .done(function(response) {
      if(response.status == 0){
        $("#alert").html(response.message);
        $("#alert").show();
      }else{
        $("#alert").html(response.message);
        $("#alert").show();
        $('#ForgetForm')[0].reset();
      }
      
    })
    .always(function() {
      $(".btnSubmit").html('Submit');
      $(".btnSubmit").prop('disabled', false);
    });
 
  return false;
});
/*forget script end*/
/*update script start*/
function updateProfile(){
  let formData = $('#updateProfile').serialize();

  $.ajax({
    method: "POST",
    url: baseUrl + "/model/profileModel.php?action=updateStore",
    data: formData,
    dataType: 'JSON',
    beforeSend: function() {
      $(".btnSubmit").html('<i class="fa fa-spinner"></i> Processing...');
      $(".btnSubmit").prop('disabled', true);
      $("#alert").hide();
      
    }
  }) 

  .fail(function(response) {
    alert( "Try again later." );
  })

  .done(function(response) {
    $('.btnSubmit').prop('disabled',false);
    $('.btnSubmit').html('Update');
    $("#alert").html(response.message);
    $("#alert").show();
    $("#adminName").html(response.name);
    
  })
	.always(function() {
      $(".btnSubmit").html('Submit');
      $(".btnSubmit").prop('disabled', false);
  });
  return false; 
}
/*update script end*/

function resetPasswordFrom(){
  $('#updatePassword')[0].reset();
  return false; 
}

/*update password script start*/
function updatePassword(){
  let formData = $('#updatePassword').serialize();
  $.ajax({
    method: "POST",
    url: baseUrl + "/model/profileModel.php?action=changePassword",
    data: formData,
    dataType: 'JSON',
    beforeSend: function() {
      $("#updatePassBtn").html('<i class="fa fa-spinner"></i> Processing...');
      $("#updatePassBtn").prop('disabled', true);
      $("#alert").hide();
      
    }
  }) 

  .fail(function(response) {
    alert( "Try again later." );
  })

  .done(function(response) {
    $('#updatePassBtn').prop('disabled',false);
    $('#updatePassBtn').html('Change');
    $("#alert").html(response.message);
    $("#alert").show();
    if(response.status==1){
      $('#updatePassword')[0].reset();
    }
    
  })

  .always(function() {
    $("#updatePassBtn").html('Change');
    $("#updatePassBtn").prop('disabled', false);
  });
  return false; 
}
/*update password script end*/