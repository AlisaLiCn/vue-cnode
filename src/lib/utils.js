function formatTab(value, isTop, isGood, isClass) {
    let displayTab = "";
    let className = "tab";
    if (isTop) {
        displayTab = "置顶";
        className = "put-top";
    } else if (isGood) {
        displayTab = "精华";
        className = "put-top";
    } else {
        switch (value) {
            case "ask":
                displayTab = "问答";
                break;
            case "share":
                displayTab = "分享";
                break;
            case "job":
                displayTab = "招聘";
                break;
            default:
                displayTab = value;
                break;
        }
    }

    return isClass ? className : displayTab;
}


export default {
    formatTab
}

