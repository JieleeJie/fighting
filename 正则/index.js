function replacer(match, p1, p2, p3, offset, string) {
    // p1 is nondigits, p2 digits, and p3 non-alphanumerics
    console.log(match, offset);
    return [p1, p2, p3].join(' - ');
}
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, '$123`');
console.log(newString);  // abc - 12345 - #$*%
