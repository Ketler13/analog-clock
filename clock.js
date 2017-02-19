window.onload = init;

function init() {
    function setTime() {
        var time = new Date(),
            seconds = time.getSeconds(),
            minutes = time.getMinutes(),
            hours = time.getHours(),
            secondArrow = document.getElementsByClassName('arrow')[0],
            minuteArrow = document.getElementsByClassName('arrow')[1],
            hourArrow = document.getElementsByClassName('arrow')[2];
        
        if (hours > 12) hours -= 12;
        
        var hands = [
            {
                hand: 'second',
                angle: (seconds * 6)
            },
            {
                hand: 'minute',
                angle: (minutes * 6)
            },
            {
                hand: 'hour',
                angle: (hours * 30) + (minutes / 2)
            }
        ];
        
        for (var i = 0, len = hands.length; i < len; i++) {
            var elements = document.querySelectorAll('.' + hands[i].hand);
            for (var k = 0, len2 = elements.length; k < len2; k++) {
                elements[k].style.transform = 'rotateZ(' + hands[i].angle + 'deg)';
            }
        }
    }
    
    setTime();
    setInterval(setTime, 1000);
    
    function showTime() {
        var pTime = document.getElementsByClassName('time')[0];
        var timeNow = new Date().toLocaleTimeString();
        pTime.innerHTML = timeNow;
    }
    
    showTime();
    setInterval(showTime, 1000);
    
    function sayTime() {
        var timeNow = new Date(),
            minutes = timeNow.getMinutes(),
            tempMinutes = String(minutes),
            hours = timeNow.getHours(),
            timeParagraph = document.querySelector('.saytime');
        
        if (hours > 12) hours -= 12;
        
        var hourObj = {
            0: "Двенадцать",
            1: "Час",
            2: "Два",
            3: "Три",
            4: "Четыре",
            5: "Пять",
            6: "Шесть",
            7: "Семь",
            8: "Восемь",
            9: "Девять",
            10: "Десять",
            11: "Одиннадцать"
        };
        
        var minuteObj = {
            1: "Одна",
            2: "Две",
            3: "Три",
            4: "Четыре",
            5: "Пять",
            6: "Шесть",
            7: "Семь",
            8: "Восемь",
            9: "Девять",
            10: "Десять",
            11: "Одиннадцать",
            12: "Двенадцать",
            13: "Тринадцать",
            14: "Четырнадцать",
            15: "Пятнадцать",
            16: "Шестнадцать",
            17: "Семнадцать",
            18: "Восемнадцать",
            19: "Девятнадцать",
            20: "Двадцать",
            30: "Тридцать",
            40: "Сорок",
            50: "Пятьдесят"
        };
        
        if (minutes >= 40 && minutes <= 59) {
            timeParagraph.innerHTML = "Без " + changeNameMinutes(minutes) + " " + hourObj[addOneHour(hours)].toLowerCase();
            return;
        } else if (minutes === 30) {
            timeParagraph.innerHTML = "Половина " + halfTo(hours);
            return;
        } else if (minutes === 0) {
            timeParagraph.innerHTML = "Ровно " + hourObj[hours].toLowerCase();
            return;
        } else {
            if (minuteObj.hasOwnProperty(minutes)) {
                timeParagraph.innerHTML = minuteObj[minutes] + changeMinutes(tempMinutes) + halfTo(hours);
            } else {
                timeParagraph.innerHTML = minuteObj[tempMinutes[0] + "0"] + " " + minuteObj[tempMinutes[1]].toLowerCase() + changeMinutes(tempMinutes) + halfTo(hours);
            }
        }
        
        function changeNameMinutes(minutes) {
            switch(minutes) {
                case 59: 
                    return minutes = "одной";
                case 58:
                    return minutes = "двух";
                case 57:
                    return minutes = "трёх";
                case 56: 
                    return minutes = "четырёх";
                case 52:
                    return minutes = "восьми";
                default: 
                    return minutes = minuteObj[60 - minutes].replace("ь", "и").toLowerCase();
            }
        }
            
        function addOneHour(hour) {
            if (hour === 11) {
                return 0;
            }
            return hour += 1;
        }
        
        function halfTo(hours) {
            switch (hours) {
                case 0:
                return "первого";
                case 1:
                return "второго";
                case 2:
                return "третьего";
                case 3:
                return "четвёртого";
                case 4:
                return "пятого";
                case 5: 
                return "шестого";
                case 6:
                return "седьмого";
                case 7:
                return "восьмого";
                case 8:
                return "девятого";
                case 9:
                return "десятого";
                case 10:
                return "одиннадцатого";
                case 11:
                return "двенадцатого";
            }
        }
        
        function changeMinutes(tempMinutes) {
            if (tempMinutes.length === 1) {
                if (tempMinutes === "1") {
                    return " минута ";
                } else if (tempMinutes === "2" || tempMinutes === "3" || tempMinutes === "4") {
                    return " минуты ";
                } else {
                    return " минут ";
                }
            } else {
                return changeMinutes(tempMinutes[1]);
            }
        }
    }
    
    sayTime();
    setInterval(sayTime, 1000);
 
}