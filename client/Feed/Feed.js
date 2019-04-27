Template.Feed.events({
    "submit form": function(event, template) {
        event.preventDefault();
        var textoDoFormulario = event.target.texto.value;
        console.log(textoDoFormulario);
        Posts.insert({
            texto: textoDoFormulario
        });
        
        event.target.texto.value = "";
        
    }
});

Template.Feed.helpers({
    posts: function() {
        var postsDaCollection = Posts.find().fetch();
        return postsDaCollection;
    }
})