//declarations

 	function addListener(id, func){
    	document.addEventListener('DOMContentLoaded', function () {
      		document.getElementById(id).addEventListener('click', func);
    	});
    }

    function includeSignup(){
        console.log("click signup");
        chrome.tabs.getSelected(null, function(tab){
        	var name = document.getElementById("name").value;
			console.log("name="+name);

			var surname = document.getElementById("surname").value;
			console.log("surname="+surname);

			var customCode = '';
			customCode+='var name = "'+name+'";';
			customCode+='var surname = "'+surname+'";';

        	chrome.tabs.executeScript(tab.id, {
			    code: customCode
			}, function() {
			    chrome.tabs.executeScript(tab.id, {file: "scripts/signup.js"});
			});
            
        }); 
    } 

    function includeLogout(){
        console.log("click logout");
        chrome.tabs.getSelected(null, function(tab){
			var customCode = '';
			customCode+='var urlRedirect = "https://www.udemy.com/user/logout";';
        	chrome.tabs.executeScript(tab.id, {
			    code: customCode
			}, function() {
			    chrome.tabs.executeScript(tab.id, {file: "scripts/redirect.js"});
			});
        });
    }

	function includeRedirect(){
		console.log("click redirect");
		chrome.tabs.getSelected(null, function(tab){
			var couponCode = document.getElementById("couponCode").value;
			console.log("couponCode="+couponCode);

			var courseName = document.getElementById("courseName").value;
			console.log("courseName="+courseName);

			var customCode = '';
			customCode+='var urlRedirect = "https://www.udemy.com/'+courseName+'/?couponCode='+couponCode+'"';
			chrome.tabs.executeScript(tab.id, {
				code: customCode
			}, function() {
				chrome.tabs.executeScript(tab.id, {file: "scripts/redirect.js"});
			});

		});
	}

    function includeBuy() {
        console.log("click buy");
        chrome.tabs.getSelected(null, function(tab){
        	chrome.tabs.executeScript(
        		tab.id, 
        		{}, 
        		function() {
			    	chrome.tabs.executeScript(tab.id, {file: "scripts/buy.js"});
				}
			);
        }); 
    } 

    function includeContentPage(){
        console.log("click content");
        chrome.tabs.getSelected(null, function(tab){
			var couponCode = document.getElementById("couponCode").value;
			console.log("couponCode="+couponCode);

			var courseName = document.getElementById("courseName").value;
			console.log("courseName="+courseName);

			var customCode = '';
			customCode+='var urlRedirect = "https://www.udemy.com/'+courseName+'/learn/v4/content'+'"';
        	chrome.tabs.executeScript(tab.id, {
			    code: customCode
			}, function() {
			    chrome.tabs.executeScript(tab.id, {file: "scripts/redirect.js"});
			});
            
        }); 
    } 

    function includeFullprogress(){
        console.log("click fullprogress");
        chrome.tabs.getSelected(null, function(tab){
        	chrome.tabs.executeScript(tab.id, {
			}, function() {
			    chrome.tabs.executeScript(tab.id, {file: "scripts/fullprogress.js"});
			});
        }); 
    } 

  	function includeGotoreview(){
        console.log("click gotoreview");
        chrome.tabs.getSelected(null, function(tab){
			var courseName = document.getElementById("courseName").value;
			console.log("courseName="+courseName);

			var customCode = '';
			customCode+='var urlRedirect = "https://www.udemy.com/'+courseName+'/learn/v4/content/reviews/1"';
        	chrome.tabs.executeScript(tab.id, {
			    code: customCode
			}, function() {
			    chrome.tabs.executeScript(tab.id, {file: "scripts/redirect.js"});
			});
            
        }); 
    } 

	function include5stars(){
        console.log("click 5 stars");
        chrome.tabs.getSelected(null, function(tab){
        	chrome.tabs.executeScript(tab.id, {
			}, function() {
			    chrome.tabs.executeScript(tab.id, {file: "scripts/5stars.js"});
			});
            
        }); 
    } 

  	function includeReview(){
        console.log("click review");
        chrome.tabs.getSelected(null, function(tab){
			var reviewText = document.getElementById("reviewText").value;
			console.log("reviewText="+reviewText);

			var customCode = '';
			customCode+='var reviewText="'+reviewText+'"';
        	chrome.tabs.executeScript(tab.id, {
			    code: customCode
			}, function() {
			    chrome.tabs.executeScript(tab.id, {file: "scripts/review.js"});
			});
        }); 
    } 

    function includeCheckall(){
        console.log("click check all");
        chrome.tabs.getSelected(null, function(tab){
        	chrome.tabs.executeScript(tab.id, {
			    code: ''
			}, function() {
			    chrome.tabs.executeScript(tab.id, {file: "scripts/checkall.js"});
			});
        }); 
    } 

    function includeFinish(){
        console.log("click fnish");
        chrome.tabs.getSelected(null, function(tab){
        	chrome.tabs.executeScript(tab.id, {
			    code: ''
			}, function() {
			    chrome.tabs.executeScript(tab.id, {file: "scripts/next.js"});
			});
        }); 
    } 

    function signupWithoutReview(){

        var enteredDelay = parseInt(document.getElementById("delay").value);
        var delay = parseInt(enteredDelay);

        clickOnButton("signup", 0);

        clickOnButton("redirect", delay);
        delay+=enteredDelay;

        clickOnButton("buy", delay);
        delay+=enteredDelay;

        clickOnButton("content", delay);
        delay+=enteredDelay;

        clickOnButton("fullprogress", delay);
        delay+=enteredDelay;

        clickOnButton("gotoreview", delay);
        delay+=enteredDelay;

        clickOnButton("5stars", delay);
        delay+=enteredDelay;

        clickOnButton("checkall", delay);
        delay+=enteredDelay;

        clickOnButton("review", delay);
        delay+=enteredDelay;

        clickOnButton("finish", delay);
        delay+=enteredDelay;

        clickOnButton("logout", delay);
	}


	function clickOnButton(id, delay){
        setTimeout(function () {
					var lblProgress = document.getElementById("progress");
					lblProgress.innerText = id;
					var btn = document.getElementById(id);
					btn.click();
				}, delay);
	}

    addListener("signup",includeSignup);
    addListener("buy",includeBuy);
 	addListener("redirect",includeRedirect);
 	addListener("content",includeContentPage);
 	addListener("fullprogress",includeFullprogress);
	addListener("gotoreview",includeGotoreview);
	addListener("5stars",include5stars);
	addListener("review",includeReview);
	addListener("checkall",includeCheckall);
	addListener("finish",includeFinish);
	addListener("logout",includeLogout);
	addListener("signupWR",signupWithoutReview);





