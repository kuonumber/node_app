const express = require('express')
const app = express()
app.use(express.json())

let courses = [
    {id: 1, name: 'english'},
    {id: 2, name: 'chinese'},
];

app.post('/api/courses', (req,res) =>{
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);  
})


app.listen(3000, ()=>
    console.log('listen port 3000')
)