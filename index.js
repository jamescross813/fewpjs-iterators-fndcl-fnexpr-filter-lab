// Code your solution here
function findMatching(drivers, name){
    let driver = drivers.filter(n => n.toLowerCase() === name.toLowerCase());
    return driver;
}

function fuzzyMatch(drivers, name){
    let driver = drivers.filter(n => n[0] === name[0]);
    return driver;
}

function matchName(drivers, hash){
    
    let driver = drivers.filter(n => n.name === hash);
            
    return driver;
}