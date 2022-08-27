//--------------- style ---------------

styles = {
    "tp_book": [
        "position: relative;",
        "width: 90%;",
        "height: auto;",
        "aspect-ratio: 4 / 3;", 
        "background-color:#aaaaaa;",
        "overflow: hidden;"
    ],
    "p1":[
        "background-color: lightpink;",
        "width: 45%;",
        "height: 80%;",
        "position: absolute;",
        "top: 10%;",
        "left: 50%;",
        "box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.16);"
    ],
    "left_page_r":[

    ],
    "right_page_r":[

    ],
    "left_page_p":[

    ],
    "right_page_p":[

    ],

}



//--------------- functions ---------------

function check_config(){
    if(typeof page_num === "undefined"){
        console.log("page_numを設定してください");
        return false;
    }else{
        return true;
    }
}

function create_pages(book){
    console.log(book)
    
    var fragment = document.createDocumentFragment();
    for(let i = 1;i<page_num+1;i++){
        var div = document.createElement("div");
        if(i===1){
            var p_name = "p"+ i;
            div.setAttribute("id", p_name);
            console.log("add");
            fragment.append(div);
        }else{
            var shadowdiv = document.createElement("div"); 
            var innerdiv = document.createElement("div");
            var p_name = "p" + i;
            var r_name = "r" + i;
            div.setAttribute("id", r_name);
            innerdiv.setAttribute("id", p_name);
            innerdiv.replaceChildren(shadowdiv);
            div.replaceChildren(innerdiv);
            console.log("add");
            fragment.appendChild(div);
        }
    }
    book.append(fragment);

    // 未実装
    // 偶数ページなら最後右のページがない
    if(page_num%2 === 0){
        console.log(page_num%2);
        console.log("偶数ページ");
    }
    // 奇数ページなら最後両開き
    else if(page_num%2 === 0){
        console.log(page_num%2);
        console.log("ki数ページ");
    }
}

// スタイルシートの定義
function add_style(){
    console.log(styles["tp_book"][0]);
    var styleElm, styleSheet
    if(document.createStyleSheet){
        styleSheet = document.createStyleSheet();
    }else{
        var head = document.getElementsByTagName("head")[0];
        styleElm = document.createElement("style");
        head.appendChild(styleElm);
        styleSheet = document.styleSheets[document.styleSheets.length-1]
    }
    // tp_bookのスタイル
    for(let i in styles["tp_book"]){
        console.log(i)
        styleSheet.addRule("#tp_book", styles["tp_book"][i]);
    }
    // p1のスタイル
    for(let i in styles["p1"]){
        console.log(i)
        styleSheet.addRule("#p1", styles["p1"][i]);
    }

    //p2以降は、存在の判定、r、z-indexに留意して実装
    //未実装
}




//--------------- main ---------------
// htmlのスクリプト上でconfigを設定する
// const page_num = 3;

function main(){
    if(check_config()){
        const tp_book = document.getElementById("tp_book");
        create_pages(tp_book);
        add_style();
        console.log("turn_pages.jsをロードしました。");
    }else{
        console.log("turn_pages.jsをロードに失敗しました。")
    }
}

main();
