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
    "left_r":[
        "width: 50%;",
        "height: 200%;",
        "position: absolute;",
        "top: -3%;",
        "left: -3%;",
        "z-index: 2;",
        "transform-origin: 0% 0%;",
        "transform: translate(0%, 0%) rotate(-51deg);",
        "transition-duration: 1s;",
        "overflow: hidden;"
    ],
    "right_r":[
        "width: 50%;",
        "height: 200%;",
        "position: absolute;",
        "top: -33.3%;",
        "left: 48.4%;",
        "z-index: 2;",
        "transform-origin: 0% 0%;",
        "transform: translate(0%, 0%) rotate(-51deg);",
        "transition-duration: 1s;",
        "overflow: hidden;"
    ],
    "left_r_is-turned":[
        "top: 0%;",
        "left: 0%;",
        "transform: translate(0%, 0%) rotate(0deg);" 
    ],
    "right_r_is-turned":[
        "top: 0%;",
        "left: 50%;",
        "transform: rotate(0deg);"
    ],
    "left_p":[
        "background-color: lightblue;",
        "width: 90%;",
        "height: 40%;",
        "position: absolute;",
        "top:40.2%;",
        "left: 119.1%;",
        "transform: rotate(-38deg);",
        "transition-duration: 1s;",
        "box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.16);"
    ],
    "right_p":[
        "background-color: wheat;",
        "width: 90%;",
        "height: 40%;",
        "z-index: 3;",
        "position: absolute;",
        "top: 18.7%;",
        "left: -111.9%;",
        "transform: rotate(51deg);",   
        "transition-duration: 1s;",
        "box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.16);"
    ],
    "left_p_is-turned":[
        "background-color: lightblue;",
        "top: 5%;",
        "left: 10%;",
        "transform: rotate(0deg);"
    ],
    "right_p_is-turned":[
        "transform-origin: -12.2% 99.1%;",
        "top: 5%;",
        "left: 0%;",
        "transform: rotate(0deg);"
    ],
    "left_shadow":[
        "width: 3%;",
        "height: 100%;",
        "position: absolute;",
        "top: 0;",
        "left: 97%;",
        "background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .16)), to(rgba(0,0,0,0)));"
    ],
    "right_shadow":[
        "width: 3%;",
        "height: 100%;",
        "position: absolute;",
        "top: 0;",
        "left: 0;",
        "background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .16)), to(rgba(0,0,0,0)));"    
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
            if(i%2 === 0){
                shadowdiv.setAttribute("class", "left_shadow");
            }
            // 奇数ページなら最後両開き
            else if(i%2 === 1){
                shadowdiv.setAttribute("class", "right_shadow");
            }
            innerdiv.setAttribute("id", p_name);
            innerdiv.replaceChildren(shadowdiv);
            div.replaceChildren(innerdiv);
            console.log("add");
            fragment.appendChild(div);
        }
    }
    book.append(fragment);

    // 事前に書かれた文字を各ページに挿入していく
    for(let i = page_num;i>=1;i--){
        console.log(i);
        var p_name = "p" + i;
        var page = document.getElementById(p_name);
        page.appendChild(book.childNodes[i*2-1]);
    }

    // 未実装
    // 偶数ページなら最後右のページがない
    if(page_num%2 === 0){
        console.log(page_num%2);
        console.log("偶数ページ");
    }
    // 奇数ページなら最後両開き
    else if(page_num%2 === 1){
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
    //未完成
    // p2以降左ページのスタイル
    for(let i=2;i<=page_num;i++){
        page_r = "r" + i;
        page_p = "p" + i;

        // 偶数ページ
        if(i%2 === 0){
            for(let i in styles["left_r"]){
                styleSheet.addRule("#"+ page_r, styles["left_r"][i]);
            }
            for(let i in styles["left_p"]){
                styleSheet.addRule("#"+ page_p, styles["left_p"][i]);
            }
            for(let i in styles["left_r_is-turned"]){
                styleSheet.addRule("#"+ page_r + ".is-turned", styles["left_r_is-turned"][i]);
            }
            for(let i in styles["left_p_is-turned"]){
                styleSheet.addRule("#"+ page_p + ".is-turned", styles["left_p_is-turned"][i]);
            }
            for(let i in styles["left_shadow"]){
                styleSheet.addRule(".left_shadow", styles["left_shadow"][i]);
            }
        }

        // 奇数ページ
        else if(i%2 === 1){
            for(let i in styles["right_r"]){
                styleSheet.addRule("#"+ page_r, styles["right_r"][i]);
            }
            for(let i in styles["right_p"]){
                styleSheet.addRule("#"+ page_p, styles["right_p"][i]);
            }
            for(let i in styles["right_r_is-turned"]){
                styleSheet.addRule("#"+ page_r + ".is-turned", styles["right_r_is-turned"][i]);
            }
            for(let i in styles["right_p_is-turned"]){
                styleSheet.addRule("#"+ page_p + ".is-turned", styles["right_p_is-turned"][i]);
            }
            for(let i in styles["right_shadow"]){
                styleSheet.addRule(".right_shadow", styles["right_shadow"][i]);
            }
        }
    }
    // if(document.getElementById("hoge")){
    //     console.log("hoge");
    // }else if(document.getElementById("p3")){
    //     console.log("p3");
    // }
}


function toggle(){
    console.log("clicked");
    var childcontent = this.firstElementChild;
    var nextcontent = this.nextElementSibling;
    var nextchildcontent = nextcontent.firstElementChild;
    this.classList.toggle("is-turned");
    childcontent.classList.toggle("is-turned");
    nextcontent.classList.toggle("is-turned");
    nextchildcontent.classList.toggle("is-turned");
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
        document.getElementById("r2").addEventListener("click", toggle);
    }else{
        console.log("turn_pages.jsをロードに失敗しました。")
    }
}

main();
