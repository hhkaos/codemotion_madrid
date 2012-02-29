App.Events = (function(lng, undefined) {

    
    lng.dom('#schedule li').tap(function(event) {
        //var current_todo = lng.Data.Cache.get('current_todo');
        
        var todo_id = lng.dom(this).attr('data-talk-id');
        App.View.view_talk(todo_id);
        //App.Data.doneTodo(current_todo.id);
        //App.View.returnToMain('ToDo done', 'check');
    });
    
    lng.dom('#refresh').tap(function(event) {
        var url = 'app/data_event.js';
        
        //~ lng.Service.get(url, {}, function(response) {
            //~ //Do something with response
            //~ console.log("Resp="+response)
        //~ });
        //Hola
        var rows = [
            {
                "id": 1,
                "title": "Creando Web Apps con express.js, zombie.js y knockout.js",
                "tags": "ES, ADVANCED, JAVASCRIPT",
                "author": "Iván Loire",
                "avatar": "http://codemotion.es/img/t190.jpg",
                "twitter": "ivanloire",
                "linkedin": "http://www.linkedin.com/in/iloire",
                "time": "9.30-10.15",
                "track": "1",
                "description":"<p>El modelo de desarrollo de aplicaciones web ha cambiado en los últimos años.</p><p>Necesitamos aplicaciones web rápidas, escalables y fácilmente testeables (código de cliente y de servidor)</p><p>Express.js nos provee de un framework para producir aplicaciones web absurdamente rápidas (en cuanto a ejecución en el servidor. Usa node.js)</p><p>Knockout.js nos ofrece un mecanismo de vista-modelo para hacer que nuestras aplicaciones pidan al servidor sólamente los datos justos (siempre de manera asíncrona) y podamos enlazar esos datos a nuestra página de una manera muy potente y cómoda.</p><p>Zombie.js nos da un entorno de pruebas \"\"full-stack\"\", es decir, podemos testear nuestra aplicación desde la parte de cliente hasta el servidor, como si estuviésemos sentados realizando las pruebas en el navegador.</p><p>¿Juntamos los 3?</p>"
            },
            {
                "id": 2,
                "title": "From Dev to DevOps",
                "tags": "ES, BEGINNER, DEVOPS",
                "author": "Carlos Sánchez",
                "avatar": "http://codemotion.es/img/t7.jpg",
                "twitter": "",
                "linkedin": "",
                "time": "10.30-11.15",
                "track": "1",
                "description":""
            }
        ];
xxx=lng;
        lng.Data.Sql.insert('talks', rows);
    });
    

    

})(LUNGO, App);
