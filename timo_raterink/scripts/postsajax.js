document.getElementById('htmlcss').addEventListener("click", function(){changeCategory('htmlcss');}, false);
document.getElementById("php").addEventListener("click", function(){changeCategory('php');}, false);
document.getElementById("javascript").addEventListener("click", function(){changeCategory('javascript');}, false);
document.getElementById("java").addEventListener("click", function(){changeCategory('java');}, false);
document.getElementById("misc").addEventListener("click", function(){changeCategory('misc');}, false);






function changeCategory(category) {
        var xmlhttp = new XMLHttpRequest(); // initialize xmlhttprequest object
        xmlhttp.onreadystatechange = function() { // once request return the value 1 because it started, do the following
            if (this.readyState == 4 && this.status == 200) {   // if everything is working correctly and the request is finished
                var temp = document.getElementsByClassName("projects__articles");
                temp[0].innerHTML = this.responseText;
                console.log("it works!");
            }
        };
        xmlhttp.open("GET", templateUrl + "/changecategory.php?cat=" + category, true);  //specifies type of request
        xmlhttp.send(); // sends
    }
