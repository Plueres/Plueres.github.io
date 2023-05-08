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
        <title>create event</title>
    </head>

    <body>
        <div class="create_pages">
            <h1>Create Event</h1>
            <form action="" method="post">
                <?php include('../admin/errors.php'); ?>
                <i class="fluent-icons-filled-20 tooltip">text_field<span class="tooltiptext">Eventnaam</span></i>
                <input id="eventname" type="text" name="eventname" placeholder="Eventname"></input><br>
                <i class="fluent-icons-filled-20 tooltip">calendar<span class="tooltiptext">Datum</span></i>
                <input id="date" type="date" value="" name="date" placeholder="Datum"></input><br>
                <i class="fluent-icons-filled-20 tooltip">shifts_activity<span
                        class="tooltiptext">Aanvangstijd</span></i>
                <input id="time" type="time" value="" name="time" placeholder="Aanvangstijd"></input><br>
                <i class="fluent-icons-filled-20 tooltip">savings<span class="tooltiptext">Prijs</span></i>
                <input id="price" type="text" name="price" pattern="[0-9]{2}.[0-9]{2}|[0-9]{2} "
                    placeholder="Price"></input><br>
                <button type="submit" name="create_event">Create Event</button>
            </form>
        </div>
    </body>

</html>