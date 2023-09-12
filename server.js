const express = require("express")

const app = express();

const PORT = process.env.PORT || 3000;

//Temp students temp until CRUD is added to server
const mockStudents = [
    {
        name: 'Christopher Dehaan',
        description: 'Learning HTML is the best ever'
    },
    {
        name: 'Daniel Longacre',
        description: 'Learning React is the best ever'
    },
    {
        name: 'Abby',
        description: 'Learning Mongo is the best ever'
    },

]

//FILES FOR CHROME 
app.use(express.static('./client'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/api/students', (req, res) => {
    res.json(mockStudents)
})


app.post('/api/student', (req, res) => {
    if (req.body) {
        mockStudents.push(req.body)
        res.json({
            message: "Student was added successfully.."
        })


    } else {
        res.statusCode = 500
        res.send("Student is required..")
    }
})

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})