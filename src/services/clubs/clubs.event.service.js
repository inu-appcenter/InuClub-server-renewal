const {Event, Club} = require('../../db/entities');

const EventService = {

    getClubEvent: async({eventId})=>{
        const event = await Event.findOne({where: {id: eventId}});
        if (!event) return null;
        return {
            title: event.title,
            content: event.content,
            location: event.location,
            date: event.date,
            startTime: event.startTime,
            endTime: event.endTime,
        }
    },
    getClubEvents: async({})=>{

    },
    createClubEvent: async({body,adminId})=>{
        const clubId = await Club.findOne({
            raw:true,
            where : {AdminId:adminId},
            attributes: ['id'],
        });
        
        if(!clubId) return null; // 동아리 소개가 안된 동아리임.
        else{
        await Event.create({...body,AdminId:adminId,ClubId:clubId.id});
        return true;
        }
    },
    updateClubEvent: async({body,eventId,adminId})=>{
        const result = await Event.update({...body},{where:{id:eventId,AdminId:adminId}});
        if (result[0]) return true;
        else return false;
    },
    destroyClubEvent: async({eventId,adminId})=>{

        const result = await Event.destroy({where:{id:eventId,AdminId:adminId}});
        if(result) return true;
        return false;
    },
}

module.exports = EventService;