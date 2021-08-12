const qoutes = [
"남보다 더 일찍 더 부지런히 노력해야 성공을 맛 볼 수 있다.",
"시간은 멈추지 않는다.",
"최고를 추구하며 최대한 노력하라.",
"미래에 투자하는 사람은 현실에 충실한 사람이다.",
"No pains No gains.",
"꿈이 바로 앞에 있는데 당신은 왜 팔을 뻗지 않는가",
"졸지 말고 자라",
"불가능이란 노력하지 않는 자의 변명이다",
"건강을 잃으면 모든 것을 잃는다",
];

const qoute = document.querySelector(".qoute");

const todayQoute = qoutes[Math.floor(Math.random() * qoutes.length)];

qoute.innerText = todayQoute;