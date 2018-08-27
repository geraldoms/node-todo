var config = require("./config");

module.exports = {
  getDbConnectionString: function() {
    var url =
      "mongodb://" +
      config.username +
      ":" +
      config.password +
      "@ds133262.mlab.com:33262/" +
      config.db;
    
    return url;
  }
};
