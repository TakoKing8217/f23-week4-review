const namesArr = [];

module.exports = {
  addName: (req, res) => {
    namesArr.push(req.body.name);
    res.status(200).send(namesArr);
  },
  updateName: (req, res) => {},
  deleteName: (req, res) => {},
};
