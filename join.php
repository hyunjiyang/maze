<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <?php
    $id=$_GET["id"];
    $pw=$_GET["pwd"];
    $n=$_GET["name"];
    $d=$_GET["date"];
    $t=$_GET["tel"];
    $s=$_GET["sex"];
    ?>

    <script type="text/javascript">
    alert("회원가입이 완료되었습니다.");
    document.location.href="login.html";
    </script>
</body>
</html>