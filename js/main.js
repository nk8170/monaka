/* jshint curly:true, debug:true */
/* globals $, firebase, location */
var customerName = "";

$(document).ready(function() {
    console.log("成功");
});

$(document).ready(function() {
    $(".addButton").click(function() {
        
        customerName = $(".customerName").val();
        
        var customerData = {
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            customerName: customerName
        }
        
        firebase
            .database()
            .ref("customerData")
            .push(customerData);
    });
});

/*
$(document).ready(function() {
    firebase.database().ref("mykey").set("myvalue");
    console.log("成功");
});


var customerData = {
    createdAt: firebase.database.ServerValue.TIMESTAMP,
    customerName: customerName
}


$(document).ready(function() {
    console.log(
        customerName
        );
});

customerName
condition
salesmanName
vehicleType
color
coating
constructionStatus
deliveryDate

var customerName = $(".customerName");
var condition = $(".condition");
var salesmanName = $(".salesmanName");
var vehicleType = $(".vehicleType");
var color = $(".color");
var coating = $(".corting");
var constructionStatus = $(".constructionStatus");
var deliveryDate = $(".deliveryDate");


var customerData = {
    createdAt: firebase.database.ServerValue.TIMESTAMP
    
}

firebase
    .database()
    .ref("")
    .push(customerData)
    
*/