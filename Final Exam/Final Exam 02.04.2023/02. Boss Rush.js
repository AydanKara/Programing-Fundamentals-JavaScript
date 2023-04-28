function bossRush(params) {
    let n = Number(params.shift());
    for (let i = 0; i < n; i++) {
        let regEx = /([\|](?<name>[A-Z]{4,})[\|])(:)(#)(?<title>[A-Za-z]+\s[A-Za-z]+)(#)/gm;
        let exec = regEx.exec(params[i]);
        if (exec) {
            let boss = exec.groups["name"];
            let title = exec.groups["title"];
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}
bossRush([
    '3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
])
// "{boss name}, The {title}
// >> Strength: {length of the name}
// >> Armor: {length of the title}"

