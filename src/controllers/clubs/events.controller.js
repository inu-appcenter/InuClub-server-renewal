const EventService =require('../../services/clubs/clubs.event.service');

const EventsController = {
  getEvents: async(req, res, next) => {
    res.send('get events');
  },
  getEvent: async(req, res, next) => {
    res.send('get event');
  },
  addEvent: async (req, res, next) => {
    const {id} = req.admin;
    const body = req.body;
    try{
      const result = await EventService.createClubEvent({body,adminId:id});
      if(result) res.status(201).json({success:true});
      else res.status(403).json({success:false,message:"동아리소개가 없는 동아리이거나 동아리 이벤트를 등록할 수 없습니다."});
    }catch (e){
      next(e);
    }
  },
  modifyEvent: async (req, res, next) => {
    const {id} = req.admin;
    const body = req.body;
    const {eventId} = req.params;
    try{
      const result = await EventService.updateClubEvent({body,eventId,adminId:id});
      console.log(result);
      if(result) res.status(200).json({success:true});
      else res.status(403).json({success:false,message:"동아리소개가 없는 동아리이거나 동아리 이벤트를 수정할 수 없습니다."});
    }catch (e){
      next(e);
    }
  },
  removeEvent: async (req, res, next) => {
    res.send('remove event');
  },
};

module.exports = EventsController;
