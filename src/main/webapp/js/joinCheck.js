/**
 * 
 */

 function joinCheck() {
	/* 아이디가 공란으로 입력되었는지 유효성 검사*/
	if(document.joinForm.mId.value.length == 0) {
		alert("아이디는 필수 입력 사항입니다!");	
		document.joinForm.mId.focus();
		return false;
	}
	
	/* 아이디가 4자 이상 15자 이하만 가능하도록 유효성 검사*/
	if(document.joinForm.mId.value.length < 4 ||
	document.joinForm.mId.value.length > 15) {
		alert("아이디는 4자 이상 15자 이하만 가능!");
		document.joinForm.mId.focus();	
		return false;
	}	
	
	if(document.joinForm.mPw.value.length == 0) {
		alert("비번은 필수 입력 사항입니다!");	
		document.joinForm.mPw.focus();
		return false;
	}
	if(document.joinForm.mPw.value.length < 5) {
		alert("비번은 5자 이상만 가능!");	
		return false;
	}		
	
	
	if(document.joinForm.mName.value.length == 0) {
		alert("이름은 필수 입력 사항입니다!");	
		return false;
	}	
				
	/* 이름은 한글만 입력 가능 하도록 유효성 검사 */
	var hangul = /^[ㄱㅏ-힣]*$/;
	/* var alphabet = /^[a-z|A_Z]*$/; */
		
	if(!hangul.test(document.joinForm.mName.value)) {
		alert("이름은 한글만 입력 가능!");
		return false;	
	}	
	
		
	if(document.joinForm.mPhone.value.length == 0) {
		alert("전화번호는 필수 입력 사항입니다!");	
		return false;
	}
	var number = /^[0-9]*$/;
	if(!number.test(document.joinForm.mPhone.value)) {
		alert("전화번호는 숫자만 입력 가능!");
		return false;	
	}	
	
	return true;
 }