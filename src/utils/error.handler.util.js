function errorHandler({ app }) {
  // 추가 라이브러리 생각 중
  app.use((err, req, res, next) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false });
    }
  });
}

module.exports = errorHandler;
