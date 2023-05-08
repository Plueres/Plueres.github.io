<?php session_start(); ?>
<!DOCTYPE html>
<html>

    <head>
        <link rel="stylesheet" href="/Pluers.github.io/style/style.css">
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/wazybr/fluentui-system-icons-font/webfonts/css/fluent-icons-filled-20.css">
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/wazybr/fluentui-system-icons-font/webfonts/css/fluent-icons-regular-20.css">
        <nav>
            <div>
                <ul class="main_panel">
                    <li class="calendar">
                        <a href="/Pluers.github.io/"><i class="fluent-icons-filled-20">calendar</i>
                            <span>Calendar</span>
                        </a>
                    </li>
                </ul>


                <ul class="admin_panel">
                    <?php
                    if (isset($_SESSION['username'])) {
                        ?>
                        <li class="link_event_band">
                            <a href="/Pluers.github.io/pages/link_event_band.php">
                                <i class="fluent-icons-filled-20">link</i>
                                <span>Link Event & Band</span>
                            </a>
                        </li>
                        <li class="create_event">
                            <a href="/Pluers.github.io/pages/create_event.php">
                                <i class="fluent-icons-filled-20">collections</i>
                                <span>Create Event</span></a>
                        </li>
                        <li class="create_band">
                            <a href="/Pluers.github.io/pages/create_band.php">
                                <i class="fluent-icons-filled-20">people_team_add</i>
                                <span>Create Band</span></a>
                        </li>

                        <?php
                    }
                    if (isset($_SESSION['username'])) { ?>
                        <li class="account">
                            <a href="/Pluers.github.io/admin/account.php">
                                <?php
                                if ($_SESSION['username'] == 'Admin' || $_SESSION['username'] == 'admin') { ?>
                                    <i class="fluent-icons-filled-20">shield_keyhole</i>
                                    <span>
                                        <?php echo ' ' . $_SESSION['username']; ?>
                                    </span>
                                    <?php
                                } else { ?>
                                    <i class="fluent-icons-filled-20">person</i>
                                    <span>
                                        <?php echo ' ' . $_SESSION['username']; ?>
                                    </span>
                                    <?php
                                }
                                ?>
                            </a>
                        </li>
                        <?php
                    } else { ?>
                        <li class="login">
                            <a href="/Pluers.github.io/admin/login.php">
                                <i class="fluent-icons-filled-20">person_arrow_right</i>
                                <span>
                                    log in
                                </span>
                            </a>
                        </li>
                        <?php
                    }
                    ?>
                </ul>
            </div>
        </nav>
    </head>

</html>