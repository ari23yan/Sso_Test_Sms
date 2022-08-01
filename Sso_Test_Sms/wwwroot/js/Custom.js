
    function sammieBlueDark(self) {
        document.getElementById("sammie-img").src ="image/sammie_blueDark.png";
    }

    function sammieWhite(self) {
        document.getElementById("sammie-img").src ="image/saamie.png";
    }

    function symfaBlueDark(self) {
        document.getElementById("symfa-img").src ="image/symfa_BlueDark.png";
    }

    function symfaWhite(self) {
        document.getElementById("symfa-img").src ="image/symfa.png";
    }

//tooltip---------------------------------------------
    tippy('#tooltip', {
        content: "خـــــروج",
        placement: 'left',
        animation: 'fade',
        theme: 'translucent',
        
        });
      
// persian number ----------------------

    function toPersianNumber(en) {


        return ("" + en).replace(/[0-9]/g, function(t) {
            return "٠١٢٣٤٥٦٧٨٩".substr(+t, 1);
        });
    }

    function toPersianNum($number)
        {
            $number = str_replace("1","۱",$number);
            $number = str_replace("2","۲",$number);
            $number = str_replace("3","۳",$number);
            $number = str_replace("4","۴",$number);
            $number = str_replace("5","۵",$number);
            $number = str_replace("6","۶",$number);
            $number = str_replace("7","۷",$number);
            $number = str_replace("8","۸",$number);
            $number = str_replace("9","۹",$number);
            $number = str_replace("0","۰",$number);
            return $number;
        }

//JumpToNextField------------
    function JumpToNextField(field, autoMove) {
        if (field.value.length >= field.maxLength) {
            document.getElementById(autoMove).focus();
        }
    
    }

// validateForOnlyNumbersPress-----------------
    function validateForOnlyNumbersPress(evt) {
        var theEvent = evt || window.event;
    
        // Handle paste
        if (theEvent.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            // Handle key press
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
    
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }


//dropdown button-----------------------------------------------------------------------------------
    $('.btn-drop').click(function(){
    $('.ul-drop').toggleClass('active');
    });

    $('.dropShow').click(function(){
    $('.ul-drop').toggleClass('active');
    });


// search button---------------------------------------
    var button = $('.button11'),
            spinner = '<span class="spinner"></span>';

    button.click(function() {
        if (!button.hasClass('loading')) {
            button.toggleClass('loading').html(spinner);
        }
        else {
            button.toggleClass('loading').html("در حال بررسی");
        }
    })



    //--------------------------------------------------------------------------------------------------------













    //-------------------------validation for  Mobile---------------------------------------
let validMobile = /^(\+98|0)?9\d{9}$/;

function checkMobile(num) {
    const ok = num.value.match(validMobile)
    let MobileDiv = document.getElementById('MobileDiv');
    let borderInput = document.getElementById('telNumber')
    if (num.value === null || num.value === '' || num.value == undefined) {
        MobileDiv.innerHTML = 'لطفا شماره موبایل خود را وارد کنید ';
        borderInput.style.border = "2px solid #FF0063";
        MobileDiv.style.color = "#FF0063";
        return;
    }
    if (!ok || num.value.length < 11) {

        MobileDiv.innerHTML = 'شماره موبایل وارد شده صحیح نمی باشد';
        borderInput.style.border = "2px solid #FF0063";
        MobileDiv.style.color = "#FF0063";
        return;

    }

    MobileDiv.innerHTML = '';
    borderInput.style.border = "2px solid #5FD068";

}
//-------------------------check Mobile First page---------------------------------------

function checkMobileFirstpage(num) {
    const ok = num.value.match(validMobile)
    let MobileDiv = document.getElementById('MobileSecondDiv');
    let borderInput = document.getElementById('secondtelNumber')
    if (num.value === null || num.value === '' || num.value == undefined) {
        MobileDiv.innerHTML = 'لطفا شماره موبایل خود را وارد کنید ';
        borderInput.style.border = "2px solid #FF0063";
        MobileDiv.style.color = "#FF0063";
        return;
    }
    if (num.value.length > 1) {
        document.getElementById('submitMobile').disabled = false;
    }
    if (num.value.length <11 )
        document.getElementById('submitMobile').disabled = true;
   
    if (!ok || num.value.length < 11) {

        MobileDiv.innerHTML = 'شماره موبایل وارد شده صحیح نمی باشد';
        borderInput.style.border = "2px solid #FF0063";
        MobileDiv.style.color = "#FF0063";
        return;
    }

    MobileDiv.innerHTML = '';
    borderInput.style.border = "2px solid #5FD068";

}

//-------------------------Chek User Mobile Exist---------------------------------------

function ChekUserMobileExist() {
    let mobile = document.getElementById('secondtelNumber');
    let nCodeDiv = document.getElementById('MobileSecondDiv');
    let borderInput = document.getElementById('secondtelNumber');
    

    if (mobile.value === null || mobile.value === '' || mobile.value == undefined)
    {   
        nCodeDiv.innerHTML = 'لطفا شماره موبایل خود را وارد کنید';
        borderInput.style.border = "2px solid #FF0063";
        nCodeDiv.style.color = "#FF0063";
        return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "mobile": mobile.value,
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('https://localhost:7036/api/Account/CheckUserPhoneExist', requestOptions)
    
        .then(response => response.text())
        .then(result => {
            let res = JSON.parse(result);

            if (!res.success)
            {

                var x = document.getElementById("registerForm");

                if (x.classList.contains('d-none')) {
                    x.classList.remove('d-none');
                } else {
                    x.classList.add('d-none');
                }

                var y = document.getElementById("mobileForm");
                if (y.classList.contains('d-none')) {
                    y.classList.remove('d-none');
                } else {
                    y.classList.add('d-none');
                }
            }
            else
            {

                var x = document.getElementById("mobileActiveCodeForm");

                if (x.classList.contains('d-none')) {
                    x.classList.remove('d-none');
                } else {
                    x.classList.add('d-none');
                }

                var y = document.getElementById("mobileForm");
                if (y.classList.contains('d-none')) {
                    y.classList.remove('d-none');
                } else {
                    y.classList.add('d-none');
                }

            }
        
        }).catch(error => {
            console.log('error', error)
        });

}

//-------------------------Validation For National Code---------------------------------------

let validnCode = /[1-9]*|$/;

function CheckNcode(num) {
    const ok = num.value.match(validnCode)
    let nCodeDiv = document.getElementById('nCodeDiv');
    let borderInput = document.getElementById('ncode');
    if (num.value === null || num.value === '' || num.value == undefined) {
        nCodeDiv.innerHTML = 'لطفا کدملی خود را وارد کنید';
        borderInput.style.border = "2px solid #FF0063";
        nCodeDiv.style.color = "#FF0063";

        return;
    }
    if (num.value.length < 10) {
        nCodeDiv.innerHTML = 'کد ملی وارد شده صحیح نمی باشد';
        borderInput.style.border = "2px solid #FF0063";
        nCodeDiv.style.color = "#FF0063";
        return;

    }

    nCodeDiv.innerHTML = '';
    borderInput.style.border = "2px solid #5FD068";

}

//-------------------------validation for user name---------------------------------------


let validUserName = /[1-9]*|$/;

function checkUserName(num) {
    const ok = num.value.match(validUserName)
    let userNameDiv = document.getElementById('userNameDiv');
    let borderInput = document.getElementById('uname')
    if (num.value === null || num.value === '' || num.value == undefined) {
        userNameDiv.innerHTML = 'لطفا نام کاربری را وارد کنید';
        borderInput.style.border = "2px solid #FF0063";
        userNameDiv.style.color = "#FF0063";

        return;
    }
    userNameDiv.innerHTML = '';
    borderInput.style.border = "2px solid #5FD068";

}
//-------------------------validatation for UserName---------------------------------------


function validateUserName(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }

    var regex = /[a-z|A-Z|آ-ی]|\s/;

    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
function validateForOnlyNumbersPress(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }

    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}




//-----------------------------------------------------------------------------------------------      


// fetch api 
function sendtobackend() {
    debugger;
    let UserName = document.getElementById('uname').value;
    let ncode = document.getElementById('ncode').value;
    let mobile = document.getElementById('telNumber').value;
    let data = { UserName: UserName, NationalCode: ncode, Mobile: telNumber };
    fetch('https://localhost:7036/api/Account/Register/Register', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

//-------------------------Fetch Request Api For Register User---------------------------------------


function RegisterUser() {
    debugger
    let UserName = document.getElementById('uname').value;
    let ncode = document.getElementById('ncode').value;
    let mobile = document.getElementById('telNumber').value;
    let data = { UserName: UserName, NationalCode: ncode, Mobile: telNumber };

    fetch('https://localhost:7036/api/Account/Register/Register', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}


//-------------------------Mobiel Active Code Validation---------------------------------------

function JumpToNextField(field, autoMove,event) {
    if (field.value.length >= field.maxLength) {
        document.getElementById(autoMove).focus();
    }
      let dataOrder =field.dataset.order;
        var key = event.keyCode || event.charCode;
        if( key == 8 ){
            if(dataOrder != 1 ){
                document.getElementById('id'+(dataOrder-1)).focus();
            }
           
            //backspace pressed
        }
    }
