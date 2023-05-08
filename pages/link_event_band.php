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

    <body>
        <div class="create_pages">
            <h1>Link event & band</h1>
            <form name="link_band_event" action="" method="post">
                <?php include('../admin/errors.php'); ?>
                <i class="fluent-icons-filled-20">people_team</i>
                <select name="Band" id="band">
                    <option value="Default" disabled selected>Select a band</option>
                    <?php

                    $sql = "SELECT bandname, idband FROM band";
                    $sqlresult = mysqli_query($db, $sql);

                    $rows = mysqli_fetch_all($sqlresult, MYSQLI_ASSOC);
                    foreach ($rows as $row) {
                        echo ("<option name='bandname' value='" . $row["idband"] . "'>" . $row["bandname"] . "</option>" . "\n");
                        echo $row;
                    }
                    ?>
                </select><br>
                <i class="fluent-icons-filled-20">calendar_day</i>
                <select name="Event" id="event" class="selection">
                    <option value="Default" disabled selected>Select an event</option>
                    <?php

                    $sql = "SELECT eventname, idevent FROM event";
                    $sqlresult = mysqli_query($db, $sql);

                    $rows = mysqli_fetch_all($sqlresult, MYSQLI_ASSOC);
                    foreach ($rows as $row) {
                        echo ("<option name='eventname' value='" . $row["idevent"] . "'>" . $row["eventname"] . "</option>" . "\n");
                        echo $row;
                    }
                    ?>
                </select><br>
                <button name="link_event_band" type="submit" onmousedown="validate()">Link</button>
            </form>
        </div>

    </body>

    <script>
        function validate() {
            if (document.link_band_event.Band.value == "Default" || document.link_band_event.Event.value == "Default") {

                window.alert("Please make sure you have selected both a band and an event");
                document.link_band_event.Band.focus();
            }
        }
    </script>

</html>