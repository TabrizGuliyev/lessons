var fullname = name+' '+surname;
var email = name.toLowerCase()+surname.toLowerCase()+name.toLowerCase()+surname.toLowerCase()+"@gmail.com";
var password = '12345aA';
freeUrl = "https://www.udemy.com/complete-java-course-from-scratch/?couponCode=FREE_10";
var review = "Very nice tutorials. Thanks!";

function click(elemAttr){
  console.log("click="+elemAttr);
   var elements = document.querySelectorAll('[data-purpose="'+elemAttr+'"]');
   elements.forEach(function(elem){
      elem.click();
    });
}
function setInput(value, elemAttr){
   var elements = document.querySelectorAll('[data-purpose="'+elemAttr+'"]');
   elements.forEach(function(elem){
       elem.value=value;
   });
}
function redirectToUrl(url){
   window.location.href=url;
}
function checkAll(section){
  var elements = document.querySelectorAll('[data-purpose="section-'+section+'"]');
  elements.forEach(function(elem){
     var innerElems = elem.querySelectorAll('[type="checkbox"]');
     for(var i=0;i<innerElems.length;i++){
          var innerElem = innerElems[i];
          console.log(innerElem); 
          innerElem.click();
                  
     };
  });
}  

console.log("signup begin");

function signUpWhole(){
  click('header-signup');
  setTimeout(function () {
      setInput(fullname,'fullname');
      setInput(email,'email');
      setInput(password,'password');
      setTimeout(function () {
        click('do-signup');
      }, 1000);
    }, 1000);
}
signUpWhole();
console.log("signup end");
