let data = require("../saral_data.json");
// console.log(data)
const fs =require("fs");
exports.findAll = (req,res) => {
    res.send(data);
};

exports.create = (req,res) => {
    const new_data = req.body;
    data.push(new_data);
    res.send(`user with the name ${new_data.id} added to the database .`);
};

exports.get = (req,res) => {
    const { id } = req.params;
    const foundUser = data.find((course) => course.id === id);
    if (foundUser)res.send(foundUser);
    else {res.status(404).send(`the course with id ${req.params.id}is not found in database .`)
    } 
};

exports.delete = (req,res) => {
    const { id } = req.params;
    data = data.filter((courses) => courses.id !== id);
    if (data){
        fs.writeFileSync("saral_data.json",JSON.stringify(data,null,4));
        res.send(`Course with id ${id} deleted from the database.`);   
    }
    else{
        res.status(404).send(`The course with given id ${req.params.id} is not found in database.`)
    }
};

exports.update = (req,res)=>{
    const id  = req.params.id;
    const courses = data.find((courses) => courses.id === id);
    if(courses){
        courses.name = req.body.name;
        courses.logo = req.body.logo;
        courses.notes = req.body.notes;
        courses.days_to_complete = req.body.days_to_complete;
        courses.short_description = req.body.short_description;
        courses.type = req.body.type;
        courses.course_type = req.body.course_type;
        courses.lang_available = req.body.lang_available;
        fs.writeFileSync("saral_data.json",JSON.stringify(data,null,4));
        res.send (`user with the id ${id} has been updated`)
    }else{
        res.status(404).send(`The course with given id ${req.params.id} is not found in database.`)

    }
}

    
    


   

