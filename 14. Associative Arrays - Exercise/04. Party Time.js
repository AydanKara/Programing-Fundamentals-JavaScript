function partyTime(params) {
    let vipList = [];
    let regularList = [];
    let currentGuest = params.shift();
    while (currentGuest !== 'PARTY') {
        const isVip = !isNaN(currentGuest[0]);
        if (isVip) {
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest);
        }
        currentGuest = params.shift();
    }
    let allGuest = vipList.concat(regularList);
    for (const guest of params) {
        allGuest.splice(allGuest.indexOf(guest), 1);
    }
    console.log(allGuest.length);
    allGuest.forEach(guest => console.log(guest));
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'])