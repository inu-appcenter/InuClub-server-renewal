const EventsController = {
  getEvents: (req, res, next) => {
    res.send('get events');
  },
  getEvent: (req, res, next) => {
    res.send('get event');
  },
  addEvent: (req, res, next) => {
    res.send('add event');
  },
  modifyEvent: (req, res, next) => {
    res.send('modify event');
  },
  removeEvent: (req, res, next) => {
    res.send('remove event');
  },
};

module.exports = EventsController;
