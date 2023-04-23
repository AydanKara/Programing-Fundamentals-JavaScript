function meetings(input) {
    let meeting = {};
    for (let line of input) {
        let [weekday, name] = line.split(' ');

        if (meeting.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meeting[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])