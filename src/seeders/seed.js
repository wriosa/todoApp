const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');


const users = [
    {username:'Wolfgang', email:'wol@gmail.com', password:'1234'}
];
const todos = [
    {tittle:'tarea1',description:'descripcion para 1',userId:1}
];
//const categories =[];
//const todosCategories = [];

//create
//findOne,findAll, findByPk
//update
//destroy
db.sync({force: false})
.then(()=>{
    console.log("iniciando con el sembradio malicioso");
    users.forEach((user)=> Users.create(user)); //INSERT INTO users
    setTimeout(()=>{
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
})
.catch(error => console.log(error));