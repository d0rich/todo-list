export let Sort = {
    byAttr(key){
        return (a, b) => {
            if (a[key] > b[key]) return 1;
            if (a[key] === b[key]) return 0;
            if (a[key] < b[key]) return -1;
        }
    },
    byAttrDesc(key){
        return (a, b) => {
            if (a[key] > b[key]) return -1;
            if (a[key] === b[key]) return 0;
            if (a[key] < b[key]) return 1;
        }
    }
}
