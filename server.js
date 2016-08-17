const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: null });

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    size: req.file.size
  });
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);
