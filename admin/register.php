<?php include("../header.php") ?>
<?php include('../connection.php') ?>
<!DOCTYPE html>
<html>

    <head>
        <title>Registration</title>
    </head>

    <body>
        <div class="create_pages">
            <h2>Register</h2>
            <form method="post" action="register.php">
                <?php include('errors.php'); ?>
                <div class="input-group">
                    <i class="fluent-icons-filled-20">number_symbol</i>
                    <input type="text" name="username" value="<?php echo $username; ?>">
                </div>
                <div class="input-group">
                    <i class="fluent-icons-filled-20">mention</i>
                    <input type="email" name="email" value="<?php echo $email; ?>">
                </div>
                <div class="input-group">
                    <i class="fluent-icons-filled-20">lock</i>
                    <input type="password" name="password_1">
                </div>
                <div class="input-group">
                    <i class="fluent-icons-filled-20">lock_shield</i>
                    <input type="password" name="password_2">
                </div>
                <div class="input-group">
                    <button type="submit" class="btn" name="reg_user">Register</button>
                </div>
                <p>
                    Already have an account? <a href="login.php"><i
                            class="fluent-icons-filled-20">person_arrow_right</i> Log in</a> here
                </p>
            </form>
        </div>
    </body>

</html>