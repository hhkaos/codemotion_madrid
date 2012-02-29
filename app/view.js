App.View = (function(lng, App, undefined) {

    var view_talk = function(id) {
        //~ lng.Data.Sql.select('todo', {id:id}, function(result){
            //~ if (result.length > 0) {
                //~ var data = result[0];
                //~ lng.Data.Cache.set('current_todo', data);
//~ 
                //~ lng.dom('#txtEditName').val(data.name);
                //~ lng.dom('#txtEditDescription').val(data.description);
                //~ lng.dom('#txtEditName').val(data.name);
//~ 
             //~ }
        //~ });
        
        lng.Data.Sql.select('talks', {id:id}, function(result){
            if (result.length > 0) {
            }
        });
        lng.dom("#dt_author").html("Ricardo caballero");
        lng.Router.section('description-talk');
    };

    return{
        view_talk: view_talk,
    }
})(LUNGO, App);
