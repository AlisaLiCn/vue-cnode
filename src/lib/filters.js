import Timeago from 'timeago.js'

function formatTab(value) {
    let displayTab = "";
    switch (value) {
        case "ask":
            displayTab = "问答";
            break;
        case "share":
            displayTab = "分享";
            break;
        case "good":
            displayTab = "精华";
            break;
        case "job":
            displayTab = "招聘";
            break;
        default:
            displayTab = value;
            break;
    }
    return displayTab;
}


// function formatTime(value) {
//     let displayTime;

//     let now = new Date();
//     let lastReply = new Date(value);
//     let timespan = now - lastReply;

//     let minute = 60 * 1000;
//     let hour = 60 * minute;
//     let day = 24 * hour;
//     let month = 30 * day;
//     let year = 12 * month;

//     displayTime =
//         timespan < hour
//             ? (timespan / minute).toFixed() + "分钟前"
//             : timespan < day
//                 ? (timespan / hour).toFixed() + "小时前"
//                 : timespan < month
//                     ? (timespan / day).toFixed() + "天前"
//                     : timespan < year
//                         ? (timespan / month).toFixed() + "个月前"
//                         : (timespan / year).toFixed() + "年前";

//     return displayTime;
// }

function formatTime(value) {
    let timeago = new Timeago();
    let formatStr = timeago.format(value, 'zh_CN')
    console.log(value, formatStr);
    return timeago.format(value, 'zh_CN');
}

export {
    formatTab,
    formatTime
}