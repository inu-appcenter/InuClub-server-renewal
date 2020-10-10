const VotesService = require('../../services/votes/votes.service');

const VotesController = {
  getVotes: async (req, res, next) => {
    try {
      const votes = await VotesService.progressVotes({progress: true});
      res.status(200).json({ success: true, votes });
    } catch (e) {
      next(e);
    }
  },
  getClosedVotes: async (req, res, next) => {
    try {
      const votes = await VotesService.progressVotes({progress: false});
      res.status(200).json({ success: true, votes });
    } catch (e) {
      next(e);
    }
  },
  getVote: async (req, res, next) => {
    const {voteId} = req.params;
    try {
      
    } catch (e) {
      next(e)
    }
  },
  addVote: (req, res, next) => {
    res.send('add vote');
  },
  modifyVote: async (req, res, next) => {
    const {voteId} = req.params;
    try {
      
    } catch (e) {
      next(e)
    }
  },
  removeVote: async (req, res, next) => {
    const {voteId} = req.params;
    try {
      
    } catch (e) {
      next(e)
    }
  },
};

module.exports = VotesController;
