
const hospitalRoutes = require('./hospital.routes')
const authRoutes = require('./auth.routes')
const healthTrackRecordRoutes = require("./healthTrackRecord.routes");
const appntRoutes = require('./appointment.route');

module.exports = (app)=>{
    authRoutes(app);
    appntRoutes(app);
    hospitalRoutes(app);
    healthTrackRecordRoutes(app);
}