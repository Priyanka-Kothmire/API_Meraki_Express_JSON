var fs = require('fs');
const sr = require('readline-sync');
var axios = require('axios');
var url = "https://api.merakilearn.org/courses";
axios.get(url)
.then(resp =>{
    let data = (resp.data)
    let my_json1 = JSON.stringify(data,null,4)
    fs.writeFileSync("saral_data.json",my_json1)
    serial_no_1 = 1
    for (i of data['availableCourses']){
        console.log(serial_no_1++,i ['name'],i ['id'])
    }
})
