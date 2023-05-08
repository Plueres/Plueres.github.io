<?php include("../header.php") ?>
<?php

if (!isset($_SESSION['username'])) {
    $_SESSION['msg'] = "You must log in first";
    header('location: /Pluers.github.io/admin/login.php');
}
if (isset($_GET['logout'])) {
    session_destroy();
    unset($_SESSION['username']);
    header("location: /Pluers.github.io/admin/login.php");
}
?>
<!DOCTYPE html>
<html>

    <head>
        <title>Account</title>
    </head>

    <body>

        <div class="create_pages">
            <!-- notification message -->
            <?php if (isset($_SESSION['success'])): ?>
                <div class="error success">
                    <h3>
                        <?php
                        echo $_SESSION['success'];
                        unset($_SESSION['success']);
                        ?>
                    </h3>
                </div>
            <?php endif ?>

            <!-- logged in user information -->
            <?php if (isset($_SESSION['username'])):
                ?>
                <p>Welcome
                    <strong>
                        <?php
                        if ($_SESSION['username'] == 'Admin' || $_SESSION['username'] == 'admin') {
                            ?>
                            <i class="fluent-icons-filled-20">shield_keyhole</i>
                            <?php
                        } else {
                            ?>
                            <i class="fluent-icons-filled-20">person</i>
                            <?php
                        }
                        echo $_SESSION['username'];
                        ?>
                    </strong>
                </p>

                <a href="account.php?logout='1'" style="color: red;">
                    <i class="fluent-icons-filled-20">person_arrow_left</i>
                    logout
                </a>
            <?php endif ?>
        </div>

    </body>

</html>