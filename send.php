<?php

mb_language("Japanese");
mb_internal_encoding("UTF-8");

$message = "名前：" . $_POST["name"] . "\n本文：" . $_POST["message"];

if (!mb_send_mail("gd30.a.chen@gmail.com", $_POST["subject"], $message, "From: " . $_POST["mail"])) {
  exit("error");
}

?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>sample</title>
<style type="text/css">
p {
	color: rgba(95,95,95,1.00);
	font-family: "ＭＳ ゴシック", "MS Gothic", "Osaka－等幅", Osaka-mono, monospace;
	font-size: 150%;
	line-height:1.25em;
	text-align:center;
}
</style>
</head>
<body>
<p>ありがとうございます。<br>メールが送信されました。</p>
</body>
</html>