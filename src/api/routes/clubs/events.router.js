const router = require('express').Router();

function eventRouter() {
  /**
   * @description 행사 리스트 조회
   * @route GET /clubs/events/
   */
  router.get('/', (req, res) => {
    res.send('club events');
  });

  /**
   * @description 행사 조회
   * @route GET /clubs/events/:eventId
   */
  router.get('/:eventId', (req, res) => {});

  /**
   * @description 행사 등록
   * @route POST /clubs/events
   * @request @body {date, time, local, title, content}
   */
  router.post('/', (req, res) => {});

  /**
   * @description 행사 수정
   * @route PUT /clubs/events/:eventId
   * @request @body {date, time, local, title, content}
   */
  router.put('/:eventId', (req, res) => {});

  /**
   * @description 행사 삭제
   * @route DELETE /clubs/events/:eventId
   */
  router.delete('/:eventId', (req, res) => {});

  return router;
}

module.exports = eventRouter;
