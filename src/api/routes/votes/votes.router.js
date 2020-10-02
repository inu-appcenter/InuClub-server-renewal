const router = require('express').Router();

function rootRouter() {
  /**
   * @description 투표 리스트 조회
   * @route GET /votes/
   */
  router.get('/', (req, res) => {
    res.send('votes test');
  });

  /**
   * @description 투표 조회(댓글 까지)
   * @route GET /votes/:voteId
   */
  router.get('/:voteId', (req, res) => {});

  /**
   * @description 투표 생성
   * @route POST /votes/
   */
  router.post('/', (req, res) => {});

  /**
   * @description 투표 수정
   * @route PUT /votes/:voteId
   */
  router.put('/:voteId', (req, res) => {});
  return router;
}

module.exports = rootRouter;
