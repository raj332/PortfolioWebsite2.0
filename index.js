var temp;

$("#name").blur(function() {
    if (!(/^([a-zA-Z\s]{3,})$/.test($("#name").val()))) {
        if ($("#name").val() == "") {
            $("#name").css({
                'border': '2px solid rgba(122, 122, 122, 0.479)'
            })
            $("#name").attr("placeholder", "Your Name")
        } else {

            $("#name").val("");
            $("#name").css({
                'border': '2px  solid rgba(122, 122, 122, 0.479)'
            })
            $("#name").attr("placeholder", "Invailid Name !")
        }



    } else {

        $("#name").attr("placeholder", "")
        $("#name").css({
            'border': '2px solid rgba(122, 122, 122, 0.479)'
        })

    }
});
$("#email").blur(function() {
    if (!(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/).test($("#email").val())) {
        if ($("#email").val() == "") {
            $("#email").css({
                'border': '2px solid rgba(122, 122, 122, 0.479)'
            })
            $("#email").attr("placeholder", "Your Email Id")
        } else {
            $("#email").val("");
            $("#email").css({
                'border': '2px solid red'
            })
            $("#email").attr("placeholder", "Invailid Email-Id")

        }
    } else {

        $("#email").attr("placeholder", "")
        $("#email").css({
            'border': '2px solid rgba(122, 122, 122, 0.479)'
        })
    }
});


$("#message").blur(function() {
    if ($("#message").val() != "") {
        $("#message").css({
            'border': '2px solid rgba(122, 122, 122, 0.479)'
        })
        $("#message").attr("placeholder", "* Write Message Or Review");
    }
});
$("#sendbtn").click(function() {
    var flag = 1;
    if ($("#name").val() == "") {

        $("#name").attr("placeholder", "Please,Enter your Name!")
        $("#name").css({
            'border': '2px solid red'
        })
        flag = 0;
    }
    if ($("#email").val() == "") {
        $("#email").css({
            'border': '2px solid red'
        })
        $("#email").attr("placeholder", "Please,Enter your mailid!")
        flag = 0;
    }
    if ($("#message").val() == "") {
        $("#message").css({
            'border': '2px solid red'
        })
        $("#message").attr("placeholder", "Please ,Enter Message !!")
        flag = 0;

    }
    if (flag == 1) {
        alert("Thank You For Feedback.");
    }

});
$('#poster-right').mouseover(function() {
    $('#right-box1').css({
        'transform': 'rotate(0deg)',
        'margin-right': '0rem',
        'margin-top': '0rem',

    })
    $('#right-box2').css({
        'transform': 'rotate(0deg)',
        'margin-left': '0rem'

    })
})
$('#poster-right').mouseleave(function() {
    $('#right-box1').css({
        'transform': 'rotate(-12deg)',
        'margin-right': '8rem',
        'margin-top': '8rem'

    })
    $('#right-box2').css({
        'transform': 'rotate(7deg)',
        'margin-left': '8rem'
    })
})
AOS.init({
    offset: 200,
    duration: 1000
});