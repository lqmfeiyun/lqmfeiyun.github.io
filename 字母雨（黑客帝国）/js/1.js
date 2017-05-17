 window.onload = function () {
    var canv = document.getElementById('canvas');
    var cw = document.documentElement.clientWidth;
    var ch = document.documentElement.clientHeight;
    canv.width = cw;
    canv.height = ch;
    var bc = 120;
    var bcIndex = 5;
    var shadowBlur = 2;
    var sbIndex = 0.4;
    var fh = 110;
    var ctx = canv.getContext('2d');
    var fontSize = 12;
    var columns = Math.ceil(cw / fontSize);//计算适合的列数
    var arr = [];
    var texts = "@#$%&?<>{}[]()~!ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ0123456789".split("");//字符源
    for (var i = 0; i < columns; i++) {
        arr[i] = 1;
    }

    function run() {
        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fillRect(0, 0, canv.width, canv.height);
        ctx.fillStyle = "#12ee46";
        ctx.font = fontSize + "px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (var i = 0; i < arr.length; i++) {
            var text = texts[Math.floor(Math.random() * texts.length)];
            ctx.fillText(text, i * fontSize, arr[i] * fontSize);
            if (arr[i] * fontSize > ch || Math.random() > 0.95) {
                arr[i] = 0;
            }
            arr[i]++;
        }

        drawText();

        window.onresize = function () {
            cw = document.documentElement.clientWidth;
            ch = document.documentElement.clientHeight;
            canv.width = cw;
            canv.height = ch;
            columns = Math.ceil(cw / fontSize);
            arr=[];
            for (var i = 0; i < columns; i++) {
                arr[i] = 1;
            }

        }
    }
    function drawText() {
        ctx.save();
        var title = "HACKER";
        var title2 = "EMPIRE";
        ctx.fillStyle = "rgba(0,24,0,1)";
        ctx.font = fh + "px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fontWeight = 900;
        ctx.shadowOffsetY = 0;

        //字体阴影宽度变化
        shadowBlur += sbIndex;
        ctx.shadowBlur = shadowBlur;
        if (shadowBlur >= 14) {
            sbIndex *= -1
        } else if (shadowBlur <= 0) {
            sbIndex *= -1;
        }
        //字体阴影颜色变化
        bc += bcIndex;
        ctx.shadowColor = 'rgba(0,' + bc + ',0,1)';
        if (bc >= 255) {
            bcIndex *= -1;
        } else if (bc <= 115) {
            bcIndex *= -1;
        }

        ctx.fillText(title, cw / 2, ch / 2-55);
        ctx.font = 80 + "px Arial";
        ctx.fillText(title2, cw / 2, ch / 2+45);
        ctx.restore();
    }
    setInterval(run, 90);


        }