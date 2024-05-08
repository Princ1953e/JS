Q = 2100;
R = 20;
G = 10;
T = Q * R;
Gst = (T / 100) * G;
Total = Gst + T;

console.log("Amount Is", Gst);
console.log("Amount Is", Total);

document.getElementById("Q").innerHTML = Q;
document.getElementById("R").innerHTML = R;
document.getElementById("A").innerHTML = Total;
document.getElementById("T").innerHTML = T;
document.getElementById("G").innerHTML = G;
document.getElementById("TG").innerHTML = Gst;

QQ = 54;
RR = 100;
GG = 28;
TT = QQ * RR;
GstT = (TT / 100) * GG;
TotalL = GstT + T;

console.log("Amount Is", Gst);
console.log("Amount Is", Total);

document.getElementById("Q-1").innerHTML = QQ;
document.getElementById("R-1").innerHTML = RR;
document.getElementById("A-1").innerHTML = Total;
document.getElementById("T-1").innerHTML = TT;
document.getElementById("G-1").innerHTML = GG;
document.getElementById("TG-1").innerHTML = GstT;

QQQ = 424;
RRR = 32;
GGG = 3;
TTT = QQQ * RRR;
GstTT = (TTT / 100) * GGG;
TotalLL = GstTT + TTT;

console.log("Amount Is", Gst);
console.log("Amount Is", Total);

document.getElementById("Q-2").innerHTML = QQQ;
document.getElementById("R-2").innerHTML = RRR;
document.getElementById("A-2").innerHTML = TotalLL;
document.getElementById("T-2").innerHTML = TTT;
document.getElementById("G-2").innerHTML = GGG;
document.getElementById("TG-2").innerHTML = GstTT;

QQQQ = 34;
RRRR = 10;
GGGG = 5;
TTTT = QQQQ * RRRR;
GstTTT = (TTTT / 100) * GGGG;
TotalLLL = GstTTT + TTTT;

console.log("Amount Is", Gst);
console.log("Amount Is", Total);

document.getElementById("Q-3").innerHTML = QQQQ;
document.getElementById("R-3").innerHTML = RRRR;
document.getElementById("A-3").innerHTML = TotalLLL;
document.getElementById("T-3").innerHTML = TTTT;
document.getElementById("G-3").innerHTML = GGGG;
document.getElementById("TG-3").innerHTML = GstTTT;

qty = Q + QQ + QQQ + QQQQ;
txable = T + TT + TTT + TTTT;
tgst = Gst + GstT + GstTT + GstTTT;
amount = Total + TotalL + TotalLL + TotalLLL;

document.getElementById("qty").innerHTML = qty;
document.getElementById("txable").innerHTML = txable;
document.getElementById("TGST").innerHTML = tgst;
document.getElementById("Amount").innerHTML = amount;
