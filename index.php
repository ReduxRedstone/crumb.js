<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="files/css/toast.css">
</head>
<body>
	<button onclick="popToast({'text':'pop','timeOut':5000})">Toast with just text</button><br><br>
	<button onclick="popToast({'text':'click me!','timeOut':5000,'clickRemove':true})">Toast That can be clicked</button><br><br>
	<button onclick="popToast({'text':'Toast popped','timeOut':5000,'clickRemove':true,'front':'Alert'})">Toast with header</button>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="files/js/toast.js"></script>
</body>
</html>