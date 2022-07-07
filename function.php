<!DOCTYPE html>
<html lang = "en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content = "width=device-width, initial-scale=1.0">
     <title> Document </title>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<script>


     
     function Get_Candidates(Name, Value){
         

          var data_t = {
               "namer" : Name + ',' + Value
          }

          console.log(data_t)
          var jsonStr = JSON.stringify(data_t);
          var Ans;
          $.ajax({
              url:'map.php',
              method :'get',
              dataType: 'json',
              contentType: "application/json; charset=utf-8",
              data: {'dataquery' : jsonStr}, // если надо
              async:false,
              
              success: function(a_data){
                    //console.log(a_data);
                    Ans = a_data;

                   // console.log(Ans);console.log(a_data);
                    //console.log($.parseJSON(a_data));  

              },
              beforeSend: function () {
                    console.log(jsonStr);
              },
              error: function (jqXHR, exception) {
                    if (jqXHR.status === 0) {
                         alert('Not connect. Verify Network.');
                    } else if (jqXHR.status == 404) {
                         alert('Requested page not found (404).');
                    } else if (jqXHR.status == 500) {
                         alert('Internal Server Error (500).');
                    } else if (exception === 'parsererror') {
                         alert('Requested JSON parse failed.');
                    } else if (exception === 'timeout') {
                         alert('Time out error.');
                    } else if (exception === 'abort') {
                         alert('Ajax request aborted.');
                    } else {
                         alert('Uncaught Error. ' + jqXHR.responseText);
                    }
               }
          });
          return Ans;
     }
     

     console.log(Get_Candidates("Предмет", "Информатика"));
    

        
</script>
</body>
</html>