module.exports= (db, type)=>{

    return db.define('categorys' ,{

        id:{
            type:type.INTEGER ,
            autoIncrement: true  ,
            primaryKey:true
        } ,
        title : {
            type:type.STRING ,
            allowNull : false
        }

})}