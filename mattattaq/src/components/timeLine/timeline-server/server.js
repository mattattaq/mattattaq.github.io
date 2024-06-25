const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const timelinePath = path.join(__dirname, '../../../../../timeline.json');
const panelPath = path.join(__dirname, '../../../../../data.json');

console.log('Timeline path:', timelinePath);
console.log('Panel path:', panelPath);

const readJsonFile = (filePath, res, callback) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Error reading ${filePath}:`, err);
      return res.status(500).json({ error: `Failed to read data from ${filePath}` });
    }
    try {
      const jsonData = JSON.parse(data);
      callback(jsonData);
    } catch (error) {
      console.error(`Error parsing data from ${filePath}:`, error);
      return res.status(500).json({ error: `Failed to parse data from ${filePath}` });
    }
  });
};

const writeJsonFile = (filePath, data, res) => {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(`Error writing data to ${filePath}:`, err);
      return res.status(500).json({ error: `Failed to write data to ${filePath}` });
    }
    res.status(201).json(data);
  });
};

app.get('/timeline', (req, res) => {
  readJsonFile(timelinePath, res, (data) => res.json(data));
});

app.get('/panel', (req, res) => {
  readJsonFile(panelPath, res, (data) => res.json(data));
});

const postData = (filePath, req, res, prepend = false) => {
  const newEntry = req.body;
  readJsonFile(filePath, res, (data) => {
    if (prepend) {
      data.unshift(newEntry);
    } else {
      data.push(newEntry);
    }
    writeJsonFile(filePath, data, res);
  });
};

app.post('/timeline', (req, res) => {
  postData(timelinePath, req, res);
});

app.post('/panel', (req, res) => {
  postData(panelPath, req, res, true);  // true to prepend new entry
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
