const User = require("../models/user.model");

const userAdd = (req, res, next) => {
  const user = new User(req.body);

  user.save((err) => {
    if (err) return next(err);
    res.send("added");
  })
};

const userGet = (req, res, next) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) return next(err);
    res.send(user);
  })
};

const userGetAll = (req, res, next) => {
  User.find((err, users) => {
    if (err) return next(err);
    res.send(users);
  })
};

const userUpdate = (req, res, next) => {
  User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, user) => {
    if (err) return next(err);
    res.send("updated");
  });
};

const userDelete = (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id }, (err) => {
    if (err) return next(err);
    res.send("deleted");
  })
};

const userDeleteAll = (req, res, next) => {
  User.deleteMany((err) => {
    if (err) return next(err);
    res.send("deleted all");
  })
};

module.exports = { userAdd, userGet, userGetAll, userUpdate, userDelete, userDeleteAll };