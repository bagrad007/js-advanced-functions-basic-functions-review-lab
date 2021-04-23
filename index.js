function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(str = "*") {
    return function (adj = "special") {
        return `You are ${str}${adj}${str}!`
    }
}

let Calculator = {
    add: function (arg1, arg2) {
        return arg1 + arg2
    },
    subtract: function (arg1, arg2) {
        return arg1 - arg2
    },
    multiply: function (arg1, arg2) {
        return arg1 * arg2
    },
    divide: function (arg1, arg2) {
        return arg1 / arg2
    }
}

function actionApplyer(int, arr) {
    let a = int

    for (let i = 0; i < arr.length; i++) {
        a = arr[i](a)
    }

    return a

}