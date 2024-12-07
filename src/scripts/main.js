import monsters from '../data/monsters.json'

// const lead = 19
// const totem = 15
// const pralineRunes = 220
// const kahliRunes = 190
// const covenantRunes = 197
// const isSwift = false
// const AtkBarBoost = 15

// const pralineBase = monsters.Praline.spd
// const kahliBase = monsters.Kahli.spd
// const covenantBase = monsters.Covenant.spd

// // const firstMon = Math.ceil(pralineBase * (1 + (totem / 100 + lead / 100))) + pralineRunes
// const swiftBonus = Math.ceil(pralineBase * 0.25)
// const firstMon = Math.ceil(pralineBase * (100 + totem + lead + 25) / 100) + (pralineRunes - swiftBonus)
// const secondMon = Math.ceil(kahliBase * (1 + (totem / 100 + lead / 100))) + kahliRunes
// const thirdMon = Math.ceil(covenantBase * (1 + (totem / 100 + lead / 100))) + covenantRunes
// const ticksFirstMonster = []
// const ticksSecondMonster = []
// const ticksThirdMonster = []
// const ticksEnemy = []

// ticksFirstMonster[0] = 0
// ticksSecondMonster[0] = 0
// ticksThirdMonster[0] = 0
// ticksEnemy[0] = 0

// for (let i = 1; i < 10; i++){
//     ticksFirstMonster[i] = parseFloat((ticksFirstMonster[i - 1] + (0.07 * firstMon)).toFixed(3))
//     ticksSecondMonster[i] = parseFloat((ticksSecondMonster[i - 1] + (0.07 * secondMon)).toFixed(3))
//     ticksThirdMonster[i] = parseFloat((ticksThirdMonster[i - 1] + (0.07 * thirdMon)).toFixed(3))
//     ticksEnemy[i] = parseFloat((ticksEnemy[i - 1] + (0.07 * firstMon)).toFixed(3))
    
//     if (ticksFirstMonster[i - 1] >= 100
//             && ticksFirstMonster[i - 1] >= (ticksSecondMonster[i - 1] || 0)
//             && ticksFirstMonster[i - 1] >= (ticksThirdMonster[i - 1] || 0)
//             && ticksFirstMonster[i - 1] >= (ticksEnemy[i - 1] || 0)) {
//         ticksFirstMonster[i] = parseFloat((0.07 * firstMon).toFixed(3))
//         ticksFirstMonster[i] = parseFloat((ticksFirstMonster[i] + AtkBarBoost).toFixed(3))
//         ticksSecondMonster[i] += AtkBarBoost
//         ticksThirdMonster[i] += AtkBarBoost
//         continue
//     }
    
//     if (ticksSecondMonster[i - 1] >= 100
//             && ticksSecondMonster[i - 1] > (ticksFirstMonster[i - 1] || 0)
//             && ticksSecondMonster[i - 1] >= (ticksThirdMonster[i - 1] || 0)
//             && ticksSecondMonster[i - 1] >= (ticksEnemy[i - 1] || 0)) {
//         ticksSecondMonster[i] = parseFloat((0.07 * secondMon).toFixed(3))
//         continue
//     }
    
//     if (ticksThirdMonster[i - 1] >= 100 
//             && ticksThirdMonster[i - 1] > (ticksFirstMonster[i - 1] || 0)
//             && ticksThirdMonster[i - 1] > (ticksSecondMonster[i - 1] || 0)
//             && ticksThirdMonster[i - 1] >= (ticksEnemy[i - 1] || 0)) {
//         ticksThirdMonster[i] = parseFloat((0.07 * thirdMon).toFixed(3))
//         continue
//     }

//     if (ticksEnemy[i - 1] >= 100
//             && ticksEnemy[i - 1] > (ticksFirstMonster[i - 1] || 0) 
//             && ticksEnemy[i - 1] > (ticksSecondMonster[i - 1] || 0)
//             && ticksEnemy[i - 1] > (ticksThirdMonster[i - 1] || 0)) {
//         ticksEnemy[i] = parseFloat((0.07 * firstMon).toFixed(3))
//         continue
//     }
    
// }

// console.log(...ticksFirstMonster)
// console.log(...ticksSecondMonster)
// console.log(...ticksThirdMonster)
// console.log(...ticksEnemy)

// const boosterTick = Math.ceil(100 / (firstMon * 0.07))
// const covenantTick = boosterTick + 2
// const covenantMinimumAtb = (firstMon * 0.07 * covenantTick)
// const covenantMinimumSpeed =  ((covenantMinimumAtb - AtkBarBoost) / covenantTick) / 0.07
// console.log(`Kahli minimum combat speed    : ${Math.ceil(covenantMinimumSpeed)}`)
// console.log(`Kahli minimum speed from runes: ${(Math.ceil(kahliBase * (1 + (totem / 100 + lead / 100))) - Math.ceil(covenantMinimumSpeed)) * -1}`)
// // console.log(`Covenant minimum combat speed    : ${Math.ceil(covenantMinimumSpeed)}`)
// console.log(`Covenant minimum speed from runes: ${(Math.ceil(covenantBase * (1 + (totem / 100 + lead / 100))) - Math.ceil(covenantMinimumSpeed)) * -1}`)

// function getMinimumSpeedFromRunes(skyTotem, spdLead, firstMonster, secondMonster, thirdMonster) {
//     const firstMonsterCombatSpeed = getTotalCombatSpeed(firstMonster, skyTotem, spdLead) 
//     const firstMonsterTick = Math.ceil(100 / (firstMonsterCombatSpeed * 0.07))
//     const thirdMonsterTick = firstMonsterTick + 2
//     const thirdMonsterMinimumAtb = firstMonsterCombatSpeed * 0.07 * thirdMonsterTick
//     const thirdMonsterMinimumSpeed = ((thirdMonsterMinimumAtb - monsters[firstMonster.name].atbBoost) / thirdMonsterTick) / 0.07
//     return [
//         (Math.ceil(monsters[secondMonster.name].spd * (1 + (skyTotem / 100 + spdLead / 100))) - Math.ceil(thirdMonsterMinimumSpeed)) * -1,
//         (Math.ceil(monsters[thirdMonster.name].spd * (1 + (skyTotem / 100 + spdLead / 100))) - Math.ceil(thirdMonsterMinimumSpeed)) * -1
//     ]
// }

function getMinimumSpeedFromRunes(skyTotem, spdLead, firstMonster, secondMonster, thirdMonster) {
    const firstMonsterCombatSpeed = getTotalCombatSpeed(firstMonster, skyTotem, spdLead) 
    const firstMonsterTick = Math.ceil(100 / (firstMonsterCombatSpeed * 0.07))
    const secondMonsterMinimumAtb = firstMonsterCombatSpeed * 0.07 * (firstMonsterTick + 1) 
    const thirdMonsterMinimumAtb = firstMonsterCombatSpeed * 0.07 * (firstMonsterTick + 2)
    let secondMonsterMinimumSpeed, thirdMonsterMinimumSpeed = 0
    let secondMonsterMinimumRuneSpeed, thirdMonsterMinimumRuneSpeed = 0 
    
    if (monsters[firstMonster.name].speedBuff) {
        secondMonsterMinimumSpeed = (secondMonsterMinimumAtb - monsters[firstMonster.name].atbBoost) / (0.07 * firstMonsterTick + 1.3 * 0.07 * 1)
        thirdMonsterMinimumSpeed = (thirdMonsterMinimumAtb - monsters[firstMonster.name].atbBoost) / (0.07 * firstMonsterTick + 1.3 * 0.07 * 2)
        secondMonsterMinimumRuneSpeed = (Math.ceil(monsters[secondMonster.name].spd * (100 + skyTotem + spdLead) / 100) - Math.ceil(secondMonsterMinimumSpeed)) * -1
    } else {
        secondMonsterMinimumSpeed = (secondMonsterMinimumAtb - monsters[firstMonster.name].atbBoost) / (0.07 * (firstMonsterTick + 1))
        thirdMonsterMinimumSpeed = (thirdMonsterMinimumAtb - monsters[firstMonster.name].atbBoost) / (0.07 * (firstMonsterTick + 2))
        secondMonsterMinimumRuneSpeed = (Math.ceil(monsters[secondMonster.name].spd * (100 + skyTotem + spdLead) / 100) - Math.ceil(thirdMonsterMinimumSpeed)) * -1
    }

    thirdMonsterMinimumRuneSpeed = (Math.ceil(monsters[thirdMonster.name].spd * (100 + skyTotem + spdLead) / 100) - Math.ceil(thirdMonsterMinimumSpeed)) * -1
    return [secondMonsterMinimumRuneSpeed, thirdMonsterMinimumRuneSpeed]
}

function getTotalCombatSpeed(monster, skyTotem, spdLead) {
    const base = monsters[monster.name].spd
    const swiftBonus = Math.ceil(base * 0.25)
    const totalCombatSpeed = Math.ceil(base * (100 + skyTotem + spdLead + 25) / 100) + (monster.runes - swiftBonus)
    return totalCombatSpeed
}

export {
    getMinimumSpeedFromRunes
}
