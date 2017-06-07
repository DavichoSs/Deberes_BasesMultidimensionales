$.couch.urlPrefix = "http://localhost:5984";

$( document ).ready(function() {
    

        $("#ejecutar6").click( function(){

            console.log('Hola');

            $.couch.login({
                name: "",
                password: "",
                success: function(data) {
                    console.log(data);
                },
                error: function(status) {
                    console.log(status);
                }
            });

            $.couch.db("deber_vistas").view("vistas/vista6", { 
                success: function(data) {
                    console.log(data);
                    $('#resultado').val(JSON.stringify(data,null, 4));
                },
                error: function(status) {
                    console.log(status);
                },
                reduce: false
            });
               
           }


        );

});

