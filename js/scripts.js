function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    return daysOfWeek[currentDay];
}

// Display the current day of the week in the div
document.getElementById('day-of-week').innerText = "Today is " + getCurrentDayOfWeek();


function getCurrentUTCTime() {
    const currentDate = new Date();
    const hours = currentDate.getUTCHours().toString().padStart(2, '0');
    const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds} UTC`;
}

// Display the current time in UTC
document.getElementById('utc-time').innerText = "Current UTC Time: " + getCurrentUTCTime();

// Optional: Update the time every second
setInterval(() => {
    document.getElementById('utc-time').innerText = "Current UTC Time: " + getCurrentUTCTime();
}, 1000);


const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  output.textContent = `
Natural size: ${naturalWidth} x ${naturalHeight} pixels
Displayed size: ${width} x ${height} pixels
`;
});