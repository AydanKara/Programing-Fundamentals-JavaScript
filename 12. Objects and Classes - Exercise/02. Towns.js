function towns(params) {
    let townInfo = {};

    for (const info of params) {
        const [town, lat, lng] = info.split(' | ');
        townInfo.town = town;
        townInfo.latitude = Number(lat).toFixed(2);
        townInfo.longitude = Number(lng).toFixed(2);

        console.log(townInfo);
    }
}
towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])