const {
  getEvents,
  getEvent,
  addEvent,
  modifyEvent,
  removeEvent,
} = require('../../../controllers/clubs/events.controller');
const router = require('express').Router();

function eventRouter({ APIRouter }) {
  APIRouter.use('/events', router);
  /**
   * @description 행사 리스트 조회
   * @route GET /clubs/events/
   */
  router.get('/', getEvents);

  /**
   * @description 행사 조회
   * @route GET /clubs/events/:eventId
   */
  router.get('/:eventId', getEvent);

  /**
   * @description 행사 등록
   * @route POST /clubs/events
   * @request @body {date, time, local, title, content}
   */
  router.post('/', addEvent);

  /**
   * @description 행사 수정
   * @route PUT /clubs/events/:eventId
   * @request @body {date, time, local, title, content}
   */
  router.put('/:eventId', modifyEvent);

  /**
   * @description 행사 삭제
   * @route DELETE /clubs/events/:eventId
   */
  router.delete('/:eventId', removeEvent);
}

module.exports = eventRouter;
