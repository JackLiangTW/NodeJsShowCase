"use strick";

module.exports=function(sequelize,DataTypes){
    var Account=sequelize.define('Account',{
        name:DataTypes.STRING,
        user:DataTypes.STRING,
        password:DataTypes.STRING,
        online:DataTypes.BOOLEAN
    });
    return Account;
};