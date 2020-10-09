/**
 * @param {num} 카테고리 분류 숫자
 * @returns 스포츠 | 종교 | 문화 | 봉사 | 취미/전시 | 교양/학습 | 기타
 */
function getCategory({ num }) {
  switch (num) {
    case 1:
      return '스포츠';
    case 2:
      return '종교';
    case 3:
      return '문화';
    case 4:
      return '봉사';
    case 5:
      return '취미/전시';
    case 6:
      return '교양/학습';
    default:
      return '기타';
  }
}

module.exports = getCategory;
