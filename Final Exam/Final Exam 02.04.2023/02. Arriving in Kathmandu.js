function arrivingInKathmandu(params) {
    let line = params.shift();
    const case1 = "!";
    const case2 = "@";
    const case3 = "#";
    const case4 = "$";
    const case5 = "?";
    while (line !== "Last note") {
        let regEx = /^(?<mountain>[A-Za-z0-9!@#$?]+)=(?<length>\d+)<<(?<geohashcode>(.*?)+)$/gm;
        let exec = regEx.exec(line);
        if (exec) {
            let mountain = exec.groups["mountain"];
            let length = exec.groups["length"];
            let geohashcode = exec.groups["geohashcode"];
            if (Number(length) === geohashcode.length) {
                while (mountain.includes("!") ||
                    mountain.includes("@") ||
                    mountain.includes("#") ||
                    mountain.includes("$") ||
                    mountain.includes("?")) {
                    if (mountain.includes(case1)) {
                        mountain = mountain.replace(case1, "");
                    }
                    if (mountain.includes(case2)) {
                        mountain = mountain.replace(case2, "");
                    }
                    if (mountain.includes(case3)) {
                        mountain = mountain.replace(case3, "");
                    }
                    if (mountain.includes(case4)) {
                        mountain = mountain.replace(case4, "");
                    }
                    if (mountain.includes(case5)) {
                        mountain = mountain.replace(case5, "");
                    }
                }
                console.log(`Coordinates found! ${mountain} -> ${geohashcode}`);
            } else {
                console.log(`Nothing found!`);
            }
        } else {
            console.log(`Nothing found!`);
        }
        line = params.shift();
    }
}
arrivingInKathmandu([
    "!@Ma?na?sl!u@=7<<tv58ycb4845",
    "E!ve?rest=.6<<tuvz26",
    "!K@2.,##$=4<<tvnd",
    "!Shiha@pan@gma##9<<tgfgegu67",
    "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
    "Last note"])
