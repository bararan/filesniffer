const express = require("express");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

let app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/views'));

app.post("/", upload.single("fileInput"), function(req, res) {
    const obj = {
        fileName: req.file.originalname,
        fileSize: req.file.size + " Bytes"
    };
    res.json(obj);
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
