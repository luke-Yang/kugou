window.onload = function() {
    function initrem() {
        var winw = document.getElementById("wrapContent").clientWidth<=640?document.getElementById("wrapContent").clientWidth:640;
        var rootFontSize = winw / 320 * 14
        document.getElementsByTagName("html")[0].style.fontSize = rootFontSize + "px"
    }
    initrem()
    window.onresize=function(){
    	initrem()
    }

}
