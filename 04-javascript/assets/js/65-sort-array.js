const sSortAsc = (arr) => { 
    return arr.sort((a,b)=> a.localeCompare(b));   /*  karakterele gore kaale al */
}




const sSortDesc = (arr) => { 
    return arr.sort((a,b)=> b.localeCompare(a));
}




const nSortAsc = (arr) => { 
    return arr.sort( (a,b) => a-b);
}




const nSortDesc = (arr) => { 
    return arr.sort( (a,b) => b-a);
}

export {sSortAsc, sSortDesc, nSortAsc, nSortDesc}    /* bu 4 foksiyonu disari actik */