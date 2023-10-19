const express = require('express');
const app = express();
const dataService = require('./database-service');

const PORT = 3000;

// GET All states
app.get('/state', (req, res) => {           
    dataService.getStates()
    .then((results) => {
        res.status(200).json(results);
    }, () => {
        res.status(404).json({error: "Something went wrong."});
    });
    
});

// GET 1 State by Name
app.get('/state/:stateName', (req, res) => {
  const stateName = req.params.stateName;
  
  dataService.getStateByName(stateName)
  .then((results) => {
      res.status(200).json(results);
  }, () => {
      res.status(404).json({error: "Something went wrong."});
  });
});

// GET all counties for 1 state
app.get('/state/:stateName/county', (req, res) => {
  const stateName = req.params.stateName;
  
  dataService.getCounties(stateName)
  .then((results) => {
      res.status(200).json(results);
  }, () => {
      res.status(404).json({error: "Something went wrong."});
  });
});

// GET 1 county by stateName
app.get('/state/:stateName/county/:countyName', (req, res) => {
    const stateName = req.params.stateName;
    const countyName = req.params.countyName;
  
  dataService.getCounty(stateName, countyName)
  .then((results) => {
      res.status(200).json(results);
  }, () => {
      res.status(404).json({error: "Something went wrong."});
  });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
