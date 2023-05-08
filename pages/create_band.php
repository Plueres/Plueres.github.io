<?php
include_once("../header.php");
include('../connection.php');
if ($_SESSION['username'] == 'Admin' || $_SESSION['username'] == 'admin') {
} else {
    $_SESSION['msg'] = "You must log in to access this page";
    header('location: /Pluers.github.io/admin/login.php');
}
?>
<!DOCTYPE html>
<html>

    <head>
        <title>create band</title>
    </head>

    <body>
        <div class="create_pages">
            <h1>Create Band</h1>
            <form action="" method="post">
                <?php include('../admin/errors.php'); ?>
                <i class="fluent-icons-filled-20">rename</i>
                <input id="bandname" type="text" name="bandname" placeholder="Bandnaam"></input><br>
                <i class="fluent-icons-filled-20">music_note</i>
                <input id="genre" type="text" name="genre" placeholder="Genre"></input><br>
                <i class="fluent-icons-filled-20">earth</i>
                <input id="herkomst" type="text" name="herkomst" placeholder="Herkomst"></input><br>
                <i class="fluent-icons-filled-20">text_field</i>
                <input id="omschrijving" type="text" name="omschrijving" placeholder="Omschrijving"></input><br>
                <button type="submit" name="create_band">Create Band</button>
            </form>
        </div>
    </body>

</html>