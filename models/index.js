const sequelize = require("sequelize");
const db = require("../config/database");
// import schema
const categorysModel = require("./category");
const postsModel = require("./post");
const tagsModel = require("./tag");
const usersModel = require("./user");
const tag = require("./tag");

// create model
const Categorys = categorysModel(db, sequelize);
const Posts = postsModel(db, sequelize);
const Tags = tagsModel(db, sequelize);
const Users = usersModel(db, sequelize);
const PostTag = db.define("post_tag");

// create relation
// one to -> many
Categorys.hasMany(Posts, { as: "articles" });
Posts.belongsTo(Categorys);

//many to one
Users.hasMany(Posts);
Posts.belongsTo(Users);

// many to many
Posts.belongsToMany(Tags, { through: PostTag });
Tags.belongsToMany(Posts, { through: PostTag });
// genrate table in DB
db.sync({ force: false }).then(() => {
  console.log(`db CREATED !!!!!!!!!!!!!!!`);
}); // if force is true then every time we do run the schema delete and recreate

module.exports = {
  Categorys,
  Posts,
  Tags,
  Users,
};
