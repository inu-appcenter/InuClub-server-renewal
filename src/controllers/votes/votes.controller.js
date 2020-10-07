const VotesService = require('../../services/votes/votes.service');

const VotesController = {
  getVotes: async (req, res, next) => {
    try {
      const votes = await VotesService.progressVotes();
      res.status(200).json({ success: true, votes });
    } catch (e) {
      next(e);
    }
  },
  getClosedVotes: (req, res, next) => {},
  getVote: (req, res, next) => {
    res.send('get vote');
  },
  addVote: (req, res, next) => {
    res.send('add vote');
  },
  modifyVote: (req, res, next) => {
    res.send('modify vote');
  },
  removeVote: (req, res, next) => {
    res.send('remove vote');
  },
};

module.exports = VotesController;
