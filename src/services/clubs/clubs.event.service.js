const {Event, Club} = require('../../db/entities');

const EventService = {

    getClubEvent: async({})=>{

    },
    getClubEvents: async({})=>{

    },
    createClubEvent: async({body,adminId})=>{
        const clubId = await Club.findOne({
            raw:true,
            where : {AdminId:adminId},
            attributes: ['id'],
        });
        if(!clubId) return false; // 동아리 소개가 안된 동아리임.
        await Event.create({...body,AdminId:adminId,ClubId:clubId.id});
    },
    updateClubEvent: async({body,eventId,adminId})=>{
        const result = await Event.update({...body},{where:{id:eventId,AdminId:adminId}});
        if (result[0]) return true;
        else return false;
    },
    destroyClubEvent: async({})=>{

    },
}

module.exports = EventService;