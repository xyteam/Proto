require('./global/support/env.js');

if (process.env.LOCALSELPORT) {
  module.exports = require(process.env.ProjectFullPath + "/global/configs/chimp_local.js");
} else {
  switch (process.env.PLATFORM) {
    case "Win10":
      switch (process.env.BROWSER) {
        case "IE":
        case "IE11":
          process.env.BROWSER = 'IE11';
          module.exports = require(process.env.ProjectFullPath + "/global/configs/chimp_Win10_IE11.js");
        break;
        case "CH":
          module.exports = require(process.env.ProjectFullPath + "/global/configs/chimp_Win10_CH.js");
        break;
      }
      break;
    case "Linux":
      switch(process.env.BROWSER) {
        case "CH":
          module.exports = require(process.env.ProjectFullPath + "/global/configs/chimp_Linux_CH.js");
        break;
      }
    break;
    default:
      module.exports = require(process.env.ProjectFullPath + "/global/configs/chimp_Linux_CH.js");
    break;
  }
}
