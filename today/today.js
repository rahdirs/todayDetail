var exports = module.exports = {};
exports.today = function () {
    let dayLabelShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayLabel = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthLabel = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let data = {};
    data.today = new Date();
    data.month = data.today.getMonth() + 1;
    data.year = data.today.getFullYear();
    data.days = new Date(data.year, (data.month), 0).getDate();
    data.startDay = new Date(data.year, (data.today.getMonth()), 1).getDay();
    data.endDay = new Date(data.year, (data.month), 0).getDay();
    data.day = data.today.getDay();
    data.dayShortName = dayLabelShort[data.day];
    data.dayFullName = dayLabel[data.day];
    data.monthName = monthLabel[data.today.getMonth()];
    return data;
};