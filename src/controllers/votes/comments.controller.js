const CommentsController = {
  addComment: (req, res, next) => {
    res.send('add comment');
  },
  modifyComment: (req, res, next) => {
    res.send('modify comment');
  },
  removeComment: (req, res, next) => {
    res.send('remove comment');
  },
};

module.exports = CommentsController;
