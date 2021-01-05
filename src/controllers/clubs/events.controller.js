const EventService =require('../../services/clubs/clubs.event.service');

const EventsController = {
  getEvents: (req, res, next) => {
    res.send('get events');
  },
  getEvent: (req, res, next) => {
    res.send('get event');
  },
  addEvent: async (req, res, next) => {
    const {id} = req.admin;
    const body = req.body;
    try{
      const result = await EventService.createClubEvent({body,adminId:id});
      if(result) res.status(201).json({success:true});
      else res.status(403).json({success:false,message:"동아리소개가 아직 안된 동아리 이거나 동아리 이벤트를 등록할 수 없습니다."});
    }catch (e){
      next(e);
    }
  },
  modifyEvent: (req, res, next) => {
    res.send('modify event');
  },
  removeEvent: (req, res, next) => {
    res.send('remove event');
  },
};

module.exports = EventsController;
