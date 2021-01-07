const EventService =require('../../services/clubs/clubs.event.service');

const EventsController = {
  getEvents: async(req, res, next) => {
    try{
      
    } catch(e){
      next(e);
    }
  },
  getEvent: async(req, res, next) => {
    const {eventId} = req.params;
    try{
      const event = await EventService.getClubEvent({eventId});
      res.status(200).json({ success: true, event });
    }catch(e) {
      next(e);
    }
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
      
      if(result) res.status(200).json({success:true});
      else res.status(403).json({success:false,message:"동아리소개가 없는 동아리이거나 동아리 이벤트를 수정할 수 없습니다."});
    }catch (e){
      next(e);
    }
  },
  removeEvent: async (req, res, next) => {
    const {id} = req.admin;
    const {eventId} = req.params;
    try{
      const result = await EventService.destroyClubEvent({eventId,adminId:id});
      if(result) res.status(200).json({success:true});
      else res.status(403).json({success:false,message:"동아리소개가 없는 동아리거나 동아리 이벤트를 삭제할 수 없습니다."});
    }catch (e){
      next(e);
    }
  },
};

module.exports = EventsController;
