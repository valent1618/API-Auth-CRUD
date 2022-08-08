const Stuff = require('../models/stuff');
const fs = require('fs');

exports.createStuff = (req, res, next) => {
  const stuffObject = JSON.parse(req.body.thing);
  delete stuffObject._id;
  delete stuffObject._userId;
  const stuff = new Stuff({
    ...stuffObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`,
  });
  stuff
    .save()
    .then(() => res.status(201).json({ message: 'Stuff save !' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyStuff = (req, res, next) => {
  const stuffObject = req.file
    ? {
        ...JSON.parse(req.body.thing),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  delete stuffObject._userId;
  Stuff.findOne({ _id: req.params.id })
    .then((stuff) => {
      if (stuff.userId != req.auth.userId) {
        res.status(401).json({ message: 'Unauthorized' });
      } else {
        if (req.file) {
          const filename = stuff.imageUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
        Stuff.updateOne(
          { _id: req.params.id },
          { ...stuffObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: 'Stuff modify !' }))
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteStuff = (req, res, next) => {
  Stuff.findOne({ _id: req.params.id })
    .then((stuff) => {
      if (stuff.userId != req.auth.userId) {
        res.status(401).json({ message: 'Unauthorized' });
      } else {
        const filename = stuff.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Stuff.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Stuff deleted !' }))
            .catch((error) => res.status(400).json({ error }));
        });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getOneStuff = (req, res, next) => {
  Stuff.findOne({ _id: req.params.id })
    .then((stuff) => res.status(200).json(stuff))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllStuff = (req, res, next) => {
  Stuff.find()
    .then((stuffs) => res.status(200).json(stuffs))
    .catch((error) => res.status(400).json({ error }));
};
