const router = require('express').Router();

const students = [
    {
        name: "Bridget Opare",
        DOB: "19/12/2000",
        program: "BSC CS",
        level: "400",
        image:"/images/a.png"
    },
    {
        name: "Cindy Smith ",
        DOB: "14/03/2005",
        program: "BSC CS",
        level: "200",
        image:"/images/b.jpeg"
    },
    {
        name: " Dela Akosua",
        DOB: "7/20/2002",
        program: "BSC IT",
        level: "300",
        image :"/images/c.jpeg"
    },
    {
        name: "Bella Amoah",
        DOB: "12/12/2001",
        program: "BSC MIS",
        level: "200",
        image:"/images/d.png"
    },
    {
        name: "Ama Serwaa",
        DOB: "12/11/1999",
        program: "BSC CS",
        level: "100",
        image:"/images/e.png"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;