<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 정보 확인</title>
</head>
<body>
	<%
	request.setCharacterEncoding("utf-8");
	String id = request.getParameter("mId");
	String pw = request.getParameter("mPw");
	String name = request.getParameter("mName");
	String phone  = request.getParameter("mPhone");	
	%>
	
	<h3>회원 가입 정보</h3>
	<hr>
	아이디: <%= id %><br><br>
	비번: <%= pw %><br><br>
	이름: <%= name %><br><br>
	전화번호: <%= phone %>
	
</body>
</html>