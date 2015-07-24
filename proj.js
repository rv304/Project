$(document).ready(function() {
           $("#scrbar").hide();

$("#disp").click(function(){
	    $("#scrbar").show("fast", function(){
$( this ).text( "In electromagnetism, displacement current is a quantity appearing in Maxwell's equations that is defined in terms of the rate of change of electric displacement field. Displacement current has the units of electric current density, and it has an associated magnetic field just as actual currents do. However it is not an electric current of moving charges, but a time-varying electric field. In materials, there is also a contribution from the slight motion of charges bound in atoms, dielectric polarization." );

});
    });	

$("#scrbar").click(function(){
	    $("#scrbar").hide();
    });

$("#ef").click(function(){
	 $("#scrbar").show("fast", function(){	   

$(this).text("In electromagnetism, displacement current is a quantity appearing in Maxwell's equations that is defined in terms of the rate of change of electric displacement field. Displacement current has the units of electric current density, and it has an associated magnetic field just as actual currents do. However it is not an electric current of moving charges, but a time-varying electric field. In materials, there is also a contribution from the slight motion of charges bound in atoms, dielectric polarization.");
    });


});
});






PlayersList = new Mongo.Collection('players');
console.log("Hello");
if(Meteor.isClient)
{
Template.leaderboard.helpers(
{
'player': function() {
return PlayersList.find();
},
'otherHelperFunction':function(){
return 'Some Other Function'
}
}
);



}
if(Meteor.isServer)
{

}