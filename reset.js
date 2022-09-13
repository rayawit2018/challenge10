
const fs = require('fs/promises');
if (fs.existsSync('./Team.html')) {
  fs.unlinkSync('./Team.html');

}
