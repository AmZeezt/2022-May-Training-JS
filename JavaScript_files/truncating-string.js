const truncateString = (str, num) => num >= str.length ? str : `${str.slice(0, num)}...`;


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));