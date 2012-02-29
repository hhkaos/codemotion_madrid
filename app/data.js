App.Data = (function(lng, App, undefined) {
    
    var db_config={
        name:"codemotion_db",
        version:"1.0",
        schema:[
            {
                name: "talks", drop:true, fields:{
                    id: "INTEGER PRIMARY KEY",
                    title: "TEXT",
                    tags: "TEXT",
                    author: "TEXT",
                    avatar: "TEXT",
                    twitter: "TEXT",
                    linkedin: "TEXT",
                    time: "DATETIME",
                    track: "INTEGER",
                    description:"TEXT"
                }
            }
        ]
    }
    
    lng.Data.Sql.init(db_config)
    
    var getTalk = function(id){
        lng.Data.SQL.get('talks',{
            
        })
    }

    return {

    }

})(LUNGO, App);
