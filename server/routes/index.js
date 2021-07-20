module.exports = app => {

    // Base URLS
    app.use('/api/uses', require('./base.routes.js'))
}