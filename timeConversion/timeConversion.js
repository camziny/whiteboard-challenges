function timeConversion(s) {
    s = s.split(":")
    let hours = parseInt(s[0])
    let format = s[2].slice(2)
    let seconds = s[2].slice(0, 2)
    if ((format === "PM") && (hours !== 12)) {
        hours += 12
    }
    if ((hours === 12) && (format === "AM")) {
        hours = "00"
    } else if (hours < 10) {
        hours = "0" + hours.toString()
    } else {
        hours = hours.toString()
    }
    return ([hours, s[1], seconds].join(":"))
}
