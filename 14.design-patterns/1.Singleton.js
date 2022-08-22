// function Database(){
//     console.log('Connection Object is created')
// }

// var dbCon1 = new Database()
// console.log(dbCon1)

// var dbCon2 = new Database()
// console.log(dbCon2)

// var dbCon3 = new Database()
// console.log(dbCon3)

var Database = (function(){
    
    var connection = null

    var createConnection = function(){
        var obj = Object.create(null)
        console.log('Connection Object is created')
        return obj
    }

    var getConnection = function(){
        if(!connection){
            connection = createConnection()
        }
        return connection
    }

    return {
        getConnection: getConnection
    }

})()

var dbCon1 =  Database.getConnection()
console.log(dbCon1)

var dbCon2 =  Database.getConnection()
console.log(dbCon2)

var dbCon3 =  Database.getConnection()
console.log(dbCon3)