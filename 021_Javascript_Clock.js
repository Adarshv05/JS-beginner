let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
timzz = () => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById("time").innerHTML = time + " ~ " + date;
}
setInterval(timzz, 1000);