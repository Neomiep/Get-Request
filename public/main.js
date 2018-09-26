$("#btn").click(function(){
    $.get("/dogs",function(data,status){
        var source = $('#get-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template({dogs:data});
        $("#template-here").append(newHTML)
    })
})
