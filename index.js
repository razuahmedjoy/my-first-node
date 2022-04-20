const express = require('express');


// for enabling cross origin access sharing resource

var cors = require('cors')


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// it should be used otherwise post request body remain undefined
app.use(express.json());


app.get('/', (req, res) => {
    res.send("changed the content huhu here is new item");
})


const users = [
    { id: 1, name: 'John', email: 'email@gmail.com', phone: '123' },
    { id: 2, name: 'doe', email: 'email@gmail.com', phone: '123' },
    { id: 3, name: 'peter', email: 'email@gmail.com', phone: '123' },
    { id: 4, name: 'kie', email: 'email@gmail.com', phone: '123' },
    { id: 5, name: 'neot', email: 'email@gmail.com', phone: '123' },
    { id: 6, name: 'dener', email: 'email@gmail.com', phone: '123' },
    { id: 7, name: 'dener kien', email: 'email@gmail.com', phone: '123' },
]


app.get('/users', (req, res) => {

    console.log("query:",req.query);

    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched)
    }else{

        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})

// POST ReQUEST
app.post('/user', (req, res) => {
    console.log("...............request............",req.body)
    const user = req.body;
    user.id = users.length + 1;

    users.push(user);
    res.send(user);
    
})



app.get('/fruits',(req, res)=>{
    res.send(['mango','apple','orange','banana'])
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});