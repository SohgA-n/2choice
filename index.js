questions = [
    ["世界銀行の定義する極度の貧困とは、１日当たりの収入が何ドル以下のことか？","1.25ドル","1.90ドル","1.90ドル"],
    ["国連の持続可能な開発目標のうち、貧困をなくすことは何番目か？","1","3","1"],
    ["貧困の削減に貢献するために、教育が果たす役割として最も適切なものはどれ？","人口増加の促進","収入向上による生活水準の改善","収入向上による生活水準の改善"],
    ["世界で最も貧困率が高い地域はどこか？","サバサハラアフリカ","ラテンアフリカ","サバサハラアフリカ"],
    ["貧困の測定において、貧困線とは何を意味するか？","最低賃金の設定基準","最低限の生活を送るために必要な収入","最低限の生活を送るために必要な収入"]
]

var quiz_num = 0;
var correct = 0;
var count = 15;

function q_change(question,num){
    document.getElementById("area").textContent = question;
    document.getElementById("ans1").textContent = questions[num - 1][1];
    document.getElementById("ans2").textContent = questions[num - 1][2];
}

function ans_check(){
    var ans_radio = [];
    var ans_num = 0;
    ans_radio = document.getElementsByName("anser");
    console.log(ans_radio);
    if(ans_radio[0].checked){
        ans_num = 1;
    } else {
        ans_num = 2;
    }
    console.log(ans_num);
    //console.log(questions[quiz_num - 1][ans_num])
    if(questions[quiz_num - 1][ans_num] == questions[quiz_num-1][3]){
        document.getElementById("OorX").textContent = "○";   
        correct++;
        document.getElementById("point").textContent = "point " + correct;   
    } else {
        document.getElementById("OorX").textContent = "✕";
    }
    count = 15;
    next_q();
    console.log(quiz_num+","+correct); 
}

function next_q(){
    quiz_num++;
    if(quiz_num <= questions.length){
        q_change(questions[quiz_num - 1][0], quiz_num);
        let timerId = setInterval(function () {
            if (count > 0) {
                // countが0より大きい場合はcountを1ずつ減らす
                count--;
                // タイマー表示要素にcountの数値を表示
                document.getElementById("timer").textContent = count;
            } else {
                // countが0以下になったら0を表示
                console.log("タイマーが停止しました");
                clearInterval(timerId);
                ans_check();
            }
        }
        , 1000);
    } else {
        var user_name = document.getElementById("user");

        alert(user_name.value + ":" + correct +"点");
        document.getElementById("area").textContent = "----";
        document.getElementById("btn1").textContent = "A";
        document.getElementById("btn2").textContent = "B";
        quiz_num = 0;
        correct = 0;
    }
}

function start(){
    document.getElementById("point").textContent = "point -";
    next_q();
}
