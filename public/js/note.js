
// const auth = firebase.auth();
// const google = new firebase.auth.GoogleAuthProvider();
// var user = null;

// // $("#btLogin").click(function (e) {  }); 
// auth.onAuthStateChanged( data => {
// 	user = data;
// 	if(user ==null) viewChg('');
// 	else viewChg("R");


// console.log (data)
// });

// // auth.onAuthStateChanged(onAuth);
// // const onAuth = (data) => {
// // 	user = data;
// // 	if(user == null){
// // 	}
// // 	else {
// // 	}
// // }

// // 인증기능 만들기
// document.querySelector("#btLogin").addEventListener("click", e => {
// 	auth.signInWithPopup(google);
// 	// auth.signInWithRedirect(google);
// });
// document.querySelector("#btLogout").addEventListener("click", e => {
// 	auth.signOut();
// });

// // console.log(auth);


// // 화면전환 함수
// function viewChg(state) {
// 	switch(state) {
// 		case "R" :
// 			document.querySelector(".email > div").innerHTML = user.email;
// 			document.querySelector(".email").style.display = "block";
// 			document.querySelector("#btLogin").style.display = "none";
// 				break;
// 			defult;
// 			document.querySelector(".email > div").innerHTML = "";
// 			document.querySelector(".email").style.display = "none";
// 			document.querySelector("#btLogin").style.display = "inline-block";
// 				break;

// 	}
//   }
///\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const auth = firebase.auth();
// const google = new firebase.auth.GoogleAuthProvider();
// const db = firebase
// var user = null;	// 로그인한 사용자의 정보를 저장하는 변수

// const _btLogin =  document.querySelector("#btLogin")
// const _btLogout =  document.querySelector("#btLogout")
// const _btSave =  document.querySelector("#btSave")
// const _content =  document.querySelector("#noteTxt")
// const _list =  document.querySelector("#List")


// // 인증기능 만들기
// // $("#btLogin").click(function(e){});
// auth.onAuthStateChanged(data => {
// 	user = data;
// 	console.log(user);
// 	if(user == null) viewChg('');
// 	else {
// 		viewChg('R');
// 		dbinit();
// 	};
// _btLogin.querySelector("#btLogin").addEventListener("click", e => {
// 	auth.signInWithPopup(google);
// 	//auth.signInWithRedirect(google);
// });
// _btSave.querySelector("#btLogout").addEventListener("click", e => {
// 	auth.signOut();
// });
// // 노트 추가
// _btSave.addEventListener("click", (e) => {
// 	var content = _content.nodeValue.trim();
// 	if(content == "") {
// 		alert("내용을 입력하세요.");
// 		_conternt.focus();
// 		return false;
// 	}
// db.ref("root/notes/"+user.ul).push({
// 	content: content,
// 	time: new Date().getTime(),
// 	icon: content.substring(0, 1);

// }).key;

// });


// // Database init
// function dbinit() {
// 	db.ref("root/notes/"+user.uid).on("child_added",onAdd);
// 	db.ref("root/notes/"+user.uid).on("child_removed",onRev);
// 	db.ref("root/notes/"+user.uid).on("child_changed",onChg);
//   }

// // Database onAdd 콜백
// function onAdd(data){
// 	var html ='';
// 	html += '<ul class="list border border-white rounded p-3 mt-3 bg-primary text-light position-relative">';
//   html += '<li class="d-flex">';
//   html += '<h1 class="bg-light text-primary rounded-circle text-center mr-3" style="width: 56px; height: 56px;">'+data.val().icon+'</h1>';
//   html += '<div>'+data.val().conternt+'</div>'
//   html += '</li>'
//   html += '<li>'+dspDate(new Date(data, val().time))+'</li>'
//   html += '<li class="position-absolute" style="bottom: 5px; right: 10px; cursor: pointer;">'
//   html += '<i class="fas fa-trash-alt"></i>'
// 	html += '</li>'
// 	html += '</ul>'
// 	_lists.innerHTML = html + _lists.innerHTML
// }

// // Database onRev 콜백
// function onRev(data){
	
// }


// // Database onChg 콜백
// 	function onChg(data){
	
// 	}

// // 화면전환 함수
// function viewChg(state){
// 	switch(state) {
// 		case "R" :
// 			imagesLoaded(document.querySelector(".email img"), () => {
// 				document.querySelector(".email img").setAttribute("src", user.photoURL);
// 				document.querySelector(".email-txt").innerHTML = user.email;
// 				document.querySelector(".email").style.display = "flex";
// 				document.querySelector("#btLogin").style.display = "none";
// 			});
// 				document.querySelector(".email img").setAttribute("src", user.photoURL);	
// 		break;
// 		default :
// 				document.querySelector(".email-txt").innerHTML = "";
// 				document.querySelector(".email").style.display = "none";
// 				document.querySelector("#btLogin").style.display = "inline-block";
// 			break;
// 	}
// }

///////////////////////////////
// const auth = firebase.auth();
// const google = new firebase.auth.GoogleAuthProvider();
// const db = firebase.database();

// var user = null;	// 로그인한 사용자의 정보를 저장하는 변수

// const _btLogin = document.querySelector("#btLogin");
// const _btLogout = document.querySelector("#btLogout");
// const _btSave = document.querySelector("#btSave");
// const _content = document.querySelector("#noteTxt");
// const _lists = document.querySelector(".lists");

// nowKey = 
// // 인증기능 만들기
// // $("#btLogin").click(function(e){});
// auth.onAuthStateChanged(data => {
// 	user = data;
// 	console.log(user);
// 	if(user == null) viewChg('');
// 	else {
// 		viewChg('R');
// 		dbInit();
// 	}
// });
// _btLogin.addEventListener("click", e => {
// 	auth.signInWithPopup(google);
// 	//auth.signInWithRedirect(google);
// });
// _btLogout.addEventListener("click", e => {
// 	auth.sㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔ하기
// _btSave.addEventListener("click", (e) => {
// 	var content = _content.value.trim();
// 	if(content === "") {
// 		alert("내용을 입력하세요.");
// 		_content.focus();
// 		return false;
// 	}
// 	db.ref("root/notes/"+user.uid).push({
// 		content: content,
// 		time: new Date().getTime(),
// 		icon: content.substring(0, 1)
// 	}).key;
// 	_content.value = "";
// });

// // Database init
// function dbInit() {
// 	_lists.innerHTML = "";
// 	db.ref("root/notes/"+user.uid).on("child_added", onAdd);
// 	db.ref("root/notes/"+user.uid).on("child_removed", onRev);
// 	db.ref("root/notes/"+user.uid).on("child_changed", onChg);
// }

// // Database onAdd 콜백함수
// function onAdd(data) {
// 	var html = '';
// 	html += '<ul class="list border border-white rounded p-3 mt-3 bg-primary text-light position-relative" id="'+data.key+'">';
// 	html += '<li class="d-flex">';
// 	html += '<h1 class="bg-light text-primary rounded-circle text-center mr-3 flex-shrink-0" style="width: 56px; height: 56px;">'+data.val().icon+'</h1>';
// 	html += '<div>'+data.val().content.substring(0,60)+'</div>';
// 	html += '</li>';
// 	html += '<li>'+dspDate(new Date(data.val().time))+'</li>';
// 	html += '<li class="position-absolute" style="bottom: 5px; right: 10px; cursor: pointer;">';
// 	html += '<i class="fas fa-trash-alt" onclick="dataRev(this);></i>';
// 	html += '</li>';
// 	html += '</ul>';
// 	_lists.innerHTML = html + _lists.innerHTML;
// }

// // Database onRev 콜백함수 (onremove 가 실행후 화면에서 지운 것임)
// function onRev(data) {
// document.querySelector("#"+id).remove();
// }

// // Database onChg 콜백함수
// function onChg(data) {

// }

// // onclick 함수 : dataRev();  // firebase에서 지운 것임.
// function dataRev(obj) {
// 	event.stopPropagation();
// 	// console.log(obj.parentNode.parentNode.getAttribute("id"));
// 	if(confirm("진심 삭제?")){
// 		var key = obj.parentNode.parentNode.getAttribute("id");
// 		db.ref("root/notes/"+user.uid+"/"+key).remove();
// 		}
//   }

// // // onclick 함수 : dataGet();  // dataGet(this)
// function dataGet(obj) {
// 	var key = obj.getAttribute("id");
// 	db.ref("root/notes/"+user.uid+"/"+nowkey).once("value").then((data)
// 	 => { 

// 	});
// }

// // 화면전환 함수
// function viewChg(state){
// 	switch(state) {
// 		case "R" :
// 			imagesLoaded(document.querySelector(".email img"), () => {
// 				document.querySelector(".email img").setAttribute("src", user.photoURL);
// 				document.querySelector(".email-txt").innerHTML = user.email;
// 				document.querySelector(".email").style.display = "flex";
// 				document.querySelector("#btLogin").style.display = "none";
// 			});
// 			document.querySelector(".email img").setAttribute("src", user.photoURL);	
// 			break;
// 		default :
// 		document.querySelector(".email-txt").innerHTML = "";
// 			document.querySelector(".email").style.display = "none";
// 			document.querySelector("#btLogin").style.display = "inline-block";
// 			break;
// 	}
// }

const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();
const db = firebase.database();

var user = null;	// 로그인한 사용자의 정보를 저장하는 변수
var nowKey = null;

const _btLogin = document.querySelector("#btLogin");
const _btLogout = document.querySelector("#btLogout");
const _btSave = document.querySelector("#btSave");
const _content = document.querySelector("#noteTxt");
const _lists = document.querySelector(".lists");
const _btWing = document.querySelector("#btWing");

// 인증기능 만들기
// $("#btLogin").click(function(e){});
auth.onAuthStateChanged(data => {
	user = data;
	console.log(user);
	if(user == null) viewChg('');
	else {
		viewChg('R');
		dbInit();
	}
});
_btLogin.addEventListener("click", e => {
	auth.signInWithPopup(google);
	//auth.signInWithRedirect(google);
});
_btLogout.addEventListener("click", e => {
	auth.signOut();
});

// 노트 추가/수정하기
_btSave.addEventListener("click", (e) => {
	var content = _content.value.trim();
	if(content === "") {
		alert("내용을 입력하세요.");
		_content.focus();
		return false;
	}
	if(nowKey == null) {
		// 신규작성
		db.ref("root/notes/"+user.uid).push({
			content: content,
			time: new Date().getTime(),
			icon: content.substring(0, 1)
		}).key;
	}
	else {
		// 수정
		db.ref("root/notes/"+user.uid+"/"+nowKey).update({
			content: content,
			icon: content.substring(0, 1)
		});
	}
	_content.value = "";
	nowKey = null;
});

// Database init
function dbInit() {
	_lists.innerHTML = '';
	db.ref("root/notes/"+user.uid).on("child_added", onAdd);
	db.ref("root/notes/"+user.uid).on("child_removed", onRev);
	db.ref("root/notes/"+user.uid).on("child_changed", onChg);
}

// Database onAdd 콜백함수
function onAdd(data) {
	var html = '';
	html += '<ul class="list border border-white rounded p-3 mt-3 bg-primary text-light position-relative" id="'+data.key+'" onclick="dataGet(this);">';
	html += '<li class="d-flex">';
	html += '<h1 class="icon bg-light text-primary rounded-circle text-center mr-3 flex-shrink-0" style="width: 56px; height: 56px;">'+data.val().icon+'</h1>';
	html += '<div class="cont">'+data.val().content.substring(0, 60)+'</div>';
	html += '</li>';
	html += '<li>'+dspDate(new Date(data.val().time))+'</li>';
	html += '<li class="position-absolute" style="bottom: 5px; right: 10px; cursor: pointer;">';
	html += '<i class="fas fa-trash-alt" onclick="dataRev(this);"></i>';
	html += '</li>';
	html += '</ul>';
	_lists.innerHTML = html + _lists.innerHTML;
}

// Database onRev 콜백함수
function onRev(data) {
	var id = data.key;
	document.querySelector("#"+id).remove();
}

// Database onChg 콜백함수
function onChg(data) {
	var id = data.key;
	document.querySelector("#"+id+" .icon").innerHTML = data.val().icon;
	document.querySelector("#"+id+" .cont").innerHTML = data.val().content.substring(0, 60);
}

// onclick 함수 : dataRev(this)
function dataRev(obj) {
	event.stopPropagation();
	//console.log(obj.parentNode.parentNode.getAttribute("id"));
	if(confirm("진심 삭제?")) {
		var key = obj.parentNode.parentNode.getAttribute("id");
		db.ref("root/notes/"+user.uid+"/"+key).remove();
	}
}

// onClick 함수 : dataGet(this)
function dataGet(obj) {
	nowKey = obj.getAttribute("id");
	db.ref("root/notes/"+user.uid+"/"+nowKey).once("value").then((data) => {
		_content.value = data.val().content;
	});
}

// onClikc - btWing
_btWing.addEventListener("click", () => {
	var left = getComputedStyle(_lists).left.replace("px", "");
	var tarLeft = "-"+getComputedStyle(_lists).width;
	if(left == 0) {
		_lists.style.left = tarLeft;
		_btWing.querySelector(".fas").classList.remove("fa-angle-left");
		_btWing.querySelector(".fas").classList.add("fa-angle-right");
	}
	else {
		_lists.style.left = 0;
		_btWing.querySelector(".fas").classList.add("fa-angle-left");
		_btWing.querySelector(".fas").classList.remove("fa-angle-right");
	}
});

// onResize 함수
window.addEventListener("resize", function(e){
	var position = getComputedStyle(_lists).position;
	if(position === "absolute") {
	}
	else {
	}
});

// 화면전환 함수
function viewChg(state){
	switch(state) {
		case "R" :
			imagesLoaded(document.querySelector(".email img"), () => {
				document.querySelector(".email img").setAttribute("src", user.photoURL);
				document.querySelector(".email-txt").innerHTML = user.email;
				document.querySelector(".email").style.display = "flex";
				document.querySelector("#btLogin").style.display = "none";
			});
			document.querySelector(".email img").setAttribute("src", user.photoURL);	
			break;
		default :
		document.querySelector(".email-txt").innerHTML = "";
			document.querySelector(".email").style.display = "none";
			document.querySelector("#btLogin").style.display = "inline-block";
			break;
	}
}



