const express = require('express');
const router = express.Router({ mergeParams: true });

function timeParser(req, res) {
  let result = {};
  //parse time
  if (!isNaN(req.params.time)) {
    var d = new Date(parseInt(req.params.time));
    console.log(d);
    res.json({ unix: d.getTime(), utc: d.toGMTString() });
  } else {
    var dx = new Date(req.params.time);
    console.log(dx);
    if (isNaN(dx.getTime()))
          res.json({ error: dx.toString() });
    else
      res.json({ unix: dx.getTime(), utc: dx.toGMTString() });
  }
  //return {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
}


router.route('/:time')
  .get(timeParser);

module.exports = router;