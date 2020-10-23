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
      const vote = await VotesService.getVote({voteId});
      res.status(200).json({ success: true, vote });
    } catch (e) {
      next(e)
    }
  },

  addVote: async (req, res, next) => {
    const body = req.body;
    const {id} = req.user;
    try {
      await VotesService.createVote({body, userId: id});
      res.status(201).json({ success: true });
    } catch (e) {
      next(e);
    }
  },

  modifyVote: async (req, res, next) => {
    const {voteId} = req.params;
    const body = req.body;
    const {id} = req.user;
    try {
      const isUpdated = await VotesService.updateVote({body, voteId, userId: id});
      if (isUpdated) res.status(200).json({ success: true });
      else res.status(403).json({ success: true, message: '작성자가 아니거나 혹은 현재 투표를 수정할 수 없습니다.' });
    } catch (e) {
      next(e)
    }
  },
  removeVote: async (req, res, next) => {
    const {voteId} = req.params;
    const {id} = req.user;
    try {
      const isDestroyed = await VotesService.destroyVote({voteId, userId: id});
      if (isDestroyed) res.status(200).json({success: true});
      else res.status(403).json({success: false, message: '작성자가 아니거나 혹은 현재 투표를 삭제할 수 없습니다.'})
    } catch (e) {
      next(e)
    }
  },
};

module.exports = VotesController;
