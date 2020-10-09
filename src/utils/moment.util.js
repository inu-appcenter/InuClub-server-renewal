const moment = require('moment');
moment.locale('ko');

const mmt = {
  /**
   * @description 날짜 포멧 담당
   * @returns null | 포멧 날짜
   * @param {ISO} ISOString ex) 2020-10-20T00:00:01.000Z
   * @param {fm} 'MMM Do', 'dddd', 'YYYY-MM-DD', 'hh:mm:ss', 'YYYY-MM-DD hh:mm:ss'
   *
   * 'MMM Do': 10월 2일 |
   * 'dddd': 금요일 |
   * 'YYYY-MM-DD': 2020-10-02 |
   * 'hh:mm:ss': 17:25:01 |
   * 'hh시 mm분': 17시 25분 |
   * 'LT': 오후 5:25 |
   * 'YYYY-MM-DD hh:mm:ss': 2020-10-02 17:25:01 |
   *
   * @reference https://momentjs.com/docs/#/parsing/string-format/
   */
  formatDate: ({ ISO, fm }) => moment(ISO).format(fm),

  /**
   * @description 상대적인 날짜 정보 담당
   */
  relativeTime: ({ ISO }) => moment(ISO).startOf('D').fromNow(),
};

module.exports = mmt;
