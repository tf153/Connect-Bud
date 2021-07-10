// $.noConflict();
// jQuery(document).ready(function($){
//     jQuery("p").
//     $("div").
// });
// $(selector).action();

// $(function(){
//     // $("*")
//     // $("p.para")
//     // $("p#p1")
//     // $("p:first")
//     // $("ul:first li:first")
//     // $("[href]")
//     // $("li:even")
//     // $("li:odd")
//     // $("p:odd")
//     // $("img[alt]='PIC'")
//     // $(this)
// })

/*
    Action:
        1. Mouse
            a. click()
            b. dblclick()
            c. mouseenter()
            d. mouseleave()
            e. mousedown()
            f. mouseup()
        2. Keyboard
            a. keypess
            b. keyup
            c. keydown
        3. Form event
            a. submit()
            b. change()
            // c. focus()
            // d. blur()
            // (on())
        4.Document/window
            a. load
            b. resize
            c. scroll
            d. unload
*/
// document actions

//DOM
/*
    1. text()
    2. html()
    3. val()
*/
$(function(){
    $("#btn").click(function(){
        var txt=$("#p3").text();
        console.log(txt);
        var ht=$("#p3").html();
        console.log(ht);
        var input=$("#inpt").val();
        console.log(input);
    })
    $("#btn2").click(function(){
        var txt=$("#p2").text();
        //creating elements in DOM
        var txt1="<p> utsav</p>"; //html
        var txt2=$("<p></p>").text("utsav"); //jquery
        var txt3=document.createElement("p"); //javascript
        txt3.innerHTML="utsav";
        $("#div").append(txt1,txt2,txt3);
    })
    $("#btn3").click(function(){
        // $("p").remove(".para,#p3");
        // $("p").addClass("col");
        //removeClass
        //toggleClass
        $("p").toggleClass("col");
    })
})


//Chaining
// $(function(){
//     $("#btn").click(function(){
//         $("#p3").css("color","red").slideUp(2000).slideDown(2000);
//     })
// })

//callback after performing some action
// function fun(){
//     alert("outside jQuery");
// }
// function fun2(){
//     console.log("console");
// }

// $(function(){
//     $("#btn").click(function(){
//         $("#p3").hide(5000,function(){
//             fun();
//             fun2();
//         });
//     })
// })

//Animations
// $(function(){
//     $("#btn").click(function(){
//         $("#p2").animate({
//             opacity:'0.5',
//             width:'500px'
//         },10000);
//         $("#p3").animate({
//             opacity:'0.1',
//             width:'500px'
//         },10000)
//     })

//     $("#btn2").click(function(){
//         $("#p2").stop();
//         $("#p3").stop();
//     })
// })

//Effect:
/*
    a.visibility:
        1. hide()
        2. show()
        3. toggle()
    b. fading
        1. fadeIn()
        2. fadeOut()
        3. fadeToggle()
    c. sliding
        1. slideUp()
        2. slideDown()
        3. slideToggle()
*/
/*
$(function(){
    // $(document).scroll(function(){
    //     $("#img").slideUp();
    // })
    $("#btn").click(function(){
        $("#img").slideUp();
    })
    $("#btn2").click(function(){
        $("#img").slideToggle();
    })
})*/

// $(function(){
//     $("#btn").click(function(){
//         // $("p#p1").hide();
//         $("p#p1").fadeOut(5000);
//     })
//     $("#btn2").click(function(){
//         // $("p#p1").show();
//         $("p#p1").fadeIn(5000);
//     })
//     $("#btn3").click(function(){
//         // $("p#p1").toggle();
//         $("p#p1").fadeToggle(3000);
//     })

// })
/*
$(function(){
    $(window).resize(function(){
        $("p#p1").css("background-color","yellow");
    })
    $(document).scroll(function(){
        $("p#p1").css("background-color","yellow");
    })
})
*/
//form actions
// $(function(){
//     $("#f1").focus(function(){
//         $("#btf1").css("background-color","red");
//     })
//     $("#f1").blur(function(){
//         $("#btf1").css("background-color","yellow");
//     })
//     $("#f2").focus(function(){
//         $("#btf2").css("background-color","red");
//     })
//     $("#f2").blur(function(){
//         $("#btf2").css("background-color","yellow");
//     })
//     $("#inp").keypress(function(){
//         $("#btf1").css("background-color","yellow");
//     })
// })

//keyboard actions
/*
$(function(){
    // $("#inp").keypress(function(){
    //     $("p#p1").css("background-color","yellow");
    // })
    $("#inp").keydown(function(){
        $("p#p1").css("background-color","blue");
    })
    $("#inp").keyup(function(){
        $("p#p1").css("background-color","red");
    })
})*/

//Action Mouse
/*
$(function(){
    $("#btn").click(function(){
        $("p#p1").css("background-color","yellow");
    })
    $("#btn").dblclick(function(){
        $("p#p1").css("background-color","red");
        $(this).css("background-color","red");
    })
    $("p#p1").mouseenter(function(){
        $(this).css("background-color","blue");
    })
    $("p#p1").mouseleave(function(){
        $(this).css("background-color","violet");
    })
    $("#btn").mousedown(function(){
        $(this).css("background-color","grey");
    })
    $("#btn").mouseup(function(){
        $(this).css("background-color","blue");
    })
})
*/