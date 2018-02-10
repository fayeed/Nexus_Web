var institudeName;
var institudeEmail;
var institudeContact;
var institudeType;
var institudeCountry;
var institudeState;
var adminEmail;
var adminContact;
var institudeId;
var adminId;
var hId;
var mId;
var lId;
var plan;
var noUsers = 0;

//for form-signIn
function validate()
{				
//document.getElementById("write").innerHTML = window.location.search; 

		$.getScript('https://www.gstatic.com/firebasejs/3.6.6/firebase.js', function() {
		var config = {
            apiKey: "AIzaSyC9dYqL-aF-bX5sSiGo0SEUF4bSurTlDhc",
            authDomain: "nexus-f4ba4.firebaseapp.com",
            databaseURL: "https://nexus-f4ba4.firebaseio.com",
            storageBucket: "nexus-f4ba4.appspot.com",
            messagingSenderId: "422388981328"
		  };
		  firebase.initializeApp(config);
		  console.log("not found");
		  var id = document.form1.user.value;
		  var role = document.form1.pass.value;
			firebase.database().ref('Admin/Institude/Ids/' + id).on('value', function(snapshot) {
				//console.log(JSON.stringify(snapshot.value()));
				if(snapshot.val() !== null){
					console.log("found");
					if(snapshot.val().adminId == role){
						sessionStorage.setItem("InstituteId", document.form1.user.value);
						sessionStorage.setItem("RoleId", document.form1.pass.value);
						window.location.href ="logged.html";
					}
					else{
						console.log("wrong");
					}
				}else{
					console.log("not found");
				}
			});
		});
		console.log("not found");
 }
 
function w3_open() {
			document.getElementById("mySidenav1").style.display = "block";
			document.getElementById("mySidenav1").style.marginLeft = "20%";

			
		}
 
function w3_close() {
	document.getElementById("mySidenav1").style.display = "none";
	document.getElementById("myOverlay1").style.display = "none";
}

function open_sign() {
			document.getElementById("mySidenav_sign").style.display = "block";
			document.getElementById("mySidenav_sign").style.marginLeft = "20%";

			
		}
 
function close_sign() {
	document.getElementById("mySidenav_sign").style.display = "none";
	document.getElementById("myOverlay_sign").style.display = "none";
}


function w3_ope() {
			document.getElementById("mySidenav").style.display = "block";	
			document.getElementById("myOverlay").style.display = "block";
		}
 
function w3_clos() {
	document.getElementById("mySidenav").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
	
} 

//registeration

function showdetails(){

	}

 //for tabs
 function openLink(evt, cityName) {
			var i, x, tablinks;
			x = document.getElementsByClassName("city");
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("tablink");
			for (i = 0; i < x.length; i++) {
				tablinks[i].className = tablinks[i].className.replace(" w3-white", "");
			}
			document.getElementById(cityName).style.display = "block";
			evt.currentTarget.className += " w3-white";
		}
		
function openTab(evt, citName) {
	var i, y, tablinks;
	y = document.getElementsByClassName("cit");
	for (i = 0; i < y.length; i++) {
		y[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < y.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("w3-hover-light-grey", "");
	}
	document.getElementById(citName).style.display= "block";
	evt.currentTarget.className += "w3-hover-light-grey";
}

//for signup process
function open_detail_tab(){

						var inst_name= document.getElementById("intitude_name").value;
						var inst_email= document.getElementById("intitude_email").value;
						var inst_num = document.getElementById("intitude_contact").value;
						var type = document.getElementById("org").value;
						var country = document.getElementById("country").value;
						var state = document.getElementById("state").value;
						var admin_email = document.getElementById("admin_mail").value;
						var admin_num = document.getElementById("admin_contact").value;
						if(inst_name != "" && inst_email != "" && inst_num != "" && type != "" && country != "" && state != ""
                            && admin_email != "" && admin_num != ""){
                            document.getElementById("detail_tab").style.display = 'block';
						}

						var inst_name_1= document.getElementById("inst_name");
						var inst_email_1= document.getElementById("inst_email");
						var inst_num_1 = document.getElementById("inst_contact");
						var type_1 = document.getElementById("inst_type");
						var country_1 = document.getElementById("inst_country");
						var state_1 = document.getElementById("inst_state");
						var admin_email_1 = document.getElementById("admin_email");
						var admin_num_1 = document.getElementById("admin_num");

						inst_name_1.innerHTML = " " + inst_name; 
						inst_email_1.innerHTML = " " + inst_email;
						inst_num_1.innerHTML = " " + inst_num;
						type_1.innerHTML = " " + type;
						country_1.innerHTML = " " + country;
						state_1.innerHTML = " " + state;
						admin_email_1.innerHTML = " " + admin_email;
						admin_num_1.innerHTML = " " + admin_num;
						
						institudeName = inst_name;
						institudeEmail = inst_email;
						institudeContact = inst_num;
						institudeCountry = country;
						institudeState = state;
						institudeType = type;
						adminEmail = admin_email;
						adminContact = admin_num;

			}
			
function edit(){
	var edit=document.getElementByClassName("fa");
	edit.style.display="block";
	}
function open_IDs_tab(){
		document.getElementById("Ids_tab").style.display = 'block';
	
}
function open_price_tab(){
		document.getElementById("pric_tab").style.display = 'block';
	
}

function generateRan(){
    var tab=document.getElementById("Ids_tab");
	var inst_id= document.getElementById("inst_id");
	var admin_id= document.getElementById("inst_admin_id");
	var king_id= document.getElementById("inst_h_id");
	var vet_id= document.getElementById("inst_m_id");
	var base_id= document.getElementById("inst_l_id");
	var i = Math.floor((Math.random() * 10000000001) + 1);
	var a = Math.floor((Math.random() * 10000000001) + 1);
	var h = Math.floor((Math.random() * 10000000001) + 1);
	var m = Math.floor((Math.random() * 10000000001) + 1);
	var l = Math.floor((Math.random() * 10000000001) + 1);
	inst_id.value = i; 
	admin_id.value = a;
	king_id.value = h;
	vet_id.value = m;
	base_id.value = l;
	
	institudeId = i;
	adminId = a;
	hId = h;
	mId = m;
	lId = l;
	}

var trail_active = false;
var medium_active = false;
var large_active = false;
	
function trail(){
	if(trail_active == false){
		document.getElementById("trail").className = "w3-ul w3-white w3-center w3-hover-opacity-off w3-card-2 w3-shadow";
		document.getElementById("medium").className = "w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off w3-card-2 w3-hover-shadow";
		document.getElementById("large").className = "w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off w3-card-2 w3-hover-shadow";
		trail_active = true;
		medium_active = false;
		large_active = false;
	}
}

function medium(){
	if(medium_active == false){
		document.getElementById("trail").className = "w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off w3-card-2 w3-hover-shadow";
		document.getElementById("medium").className = "w3-ul w3-white w3-center w3-hover-opacity-off w3-card-2 w3-shadow";
		document.getElementById("large").className = "w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off w3-card-2 w3-hover-shadow";
		trail_active = false;
		medium_active = true;
		large_active = false;
	}
}

function large(){
	if(large_active == false){
		document.getElementById("trail").className = "w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off w3-card-2 w3-hover-shadow";
		document.getElementById("medium").className = "w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off w3-card-2 w3-hover-shadow";
		document.getElementById("large").className = "w3-ul w3-white w3-center w3-hover-opacity-off w3-card-2 w3-shadow";
		trail_active = false;
		medium_active = false;
		large_active = true;
	}
}

function upload(){
	
	$.getScript('https://www.gstatic.com/firebasejs/3.6.6/firebase.js', function() {
		var config = {
            apiKey: "AIzaSyC9dYqL-aF-bX5sSiGo0SEUF4bSurTlDhc",
            authDomain: "nexus-f4ba4.firebaseapp.com",
            databaseURL: "https://nexus-f4ba4.firebaseio.com",
            storageBucket: "nexus-f4ba4.appspot.com",
            messagingSenderId: "422388981328"
		  };
		  firebase.initializeApp(config);
		  
		if(trail_active == true){
			plan = "L";
		}
		else if(medium_active == true){
			plan = "M";
		}
		else if(large_active == true){
			plan = "H";
		}
		  firebase.database().ref("Admin/Institude/Detail/" + institudeId).set({
			instituteName: institudeName,
			institudeEmail: institudeEmail,
			institudeContact : institudeContact.toString(),
			institudeType : institudeType,
			institudeCountry : institudeCountry,
			institudeState : institudeState,
			adminEmail : adminEmail,
			adminContact : adminContact.toString(),
			institudeId : institudeId.toString(),
			adminId : adminId.toString(),
			hId : hId.toString(),
			mId : mId.toString(),
			lId : lId.toString(),
			plan : plan,
			noUsers : noUsers
		  });
		  firebase.database().ref("Admin/Institude/Ids/" + institudeId).set({
			institudeId : institudeId.toString(),
			adminId : adminId.toString(),
			hId : hId.toString(),
			mId : mId.toString(),
			lId : lId.toString(),
			plan : plan,
			noUsers : noUsers
			//window.location.href = "success.html?user=" + institudeId.toString() + "&pass=" + adminId.toString();
		  });
		  
		  console.log("sss");
		  console.log("sss");
		  
        // now I can use Firebase

	});
}


				


 