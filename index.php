<!DOCTYPE html>
<html>

    <head>
        <?php include_once("header.php") ?>
        <?php include('connection.php') ?>
        <link rel="stylesheet" href="/Pluers.github.io/style/index.css">
    </head>

    <body>
        <div class="create_pages">
            <h1>
                Agenda
                <?php
                if (isset($selectedmonth)) {
                    // MONTH
                    echo $selectedMonthName;
                    // YEAR
                    if ($selectedmonth >= date('n')) {
                        $year = date('Y');
                        echo " " . $year;
                    } else {
                        $year = date('Y', strtotime('+1 years'));
                        echo " " . $year;
                    }
                }
                ?>
            </h1>
            <!-- Search for event count -->
            <?php
            if (isset($selectedmonth)) {
                echo "Aantal Events: ";
            }
            if (isset($selectedmonth)) {
                $sql = "SELECT idevent FROM event WHERE MONTH(date) = " . $selectedmonth;
                if ($result = mysqli_query($db, $sql)) {
                    // Return the number of rows in result set
                    $rowcount = mysqli_num_rows($result);
                    echo $rowcount;
                    // Free result set
                    mysqli_free_result($result);
                }
            }
            ?>
            <!-- LIST OF MONTHS -->
            <form action="" method="post">
                <i class="fluent-icons-filled-20">calendar_month</i>
                <select name="select_month_list" id="month">
                    <option value="Default" disabled selected>Select a month</option>
                    <option value="1">Januari</option>
                    <option value="2">Februari</option>
                    <option value="3">Maart</option>
                    <option value="4">April</option>
                    <option value="5">Mei</option>
                    <option value="6">Juni</option>
                    <option value="7">Juli</option>
                    <option value="8">Augustus</option>
                    <option value="9">September</option>
                    <option value="10">Oktober</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <button type="submit" name="select_month" value="Submit">Select</button>
            </form>

            <?php
            if (isset($selectedmonth)) {
                // QUERY FOR AMOUNT OF EVENTS
                $resultofevents = mysqli_query($db, "SELECT * FROM event WHERE MONTH(date) = $selectedmonth;");

                // AMOUNT OF TABLES FOR EVENTS
                while ($table = mysqli_fetch_array($resultofevents)) {
                    echo '<br /><table class="table table-bordered table-condensed">';
                    echo '<thead class="table_eventname_header"><tr>';
                    echo '<th>' . $table['eventname'] . '</th>';
                    echo '<th>' . 'Datum: ' . $table['date'] . '</th>';
                    echo '<th>' . 'Aanvangstijd: ' . $table['time'] . '</th>';
                    echo '<th>' . 'Entree: €' . $table['price'] . '</th>';
                    echo '</tr></thead>';
                    echo '<thead><tr>';
                    echo '<th>Bandnaam</th>';
                    echo '<th>Genre</th>';
                    echo '<th>Herkomst</th>';
                    echo '<th>Omschrijving</th>';
                    echo '</tr></thead>';
                    echo '<tbody>';

                    // ↓ Has to be made otherwise the query won't be accepted 
                    $tableid = $table['idevent'];
                    $resultofbandandevents = mysqli_query($db, "SELECT event_idevent, bandname, genre, herkomst, omschrijving FROM event, band JOIN band_has_event WHERE band_has_event.event_idevent = event.idevent AND band_has_event.band_idband = band.idband AND $tableid = idevent;");
                    while ($row = mysqli_fetch_array($resultofbandandevents)) {
                        // if the id's are both the same, show the bands in a list
                        if ($table['idevent'] == $table['idevent']) {
                            echo '<tr>';
                            echo "<td>" . $row['bandname'] . "</td>";
                            echo "<td>" . $row['genre'] . "</td>";
                            echo "<td>" . $row['herkomst'] . "</td>";
                            echo "<td>" . $row['omschrijving'] . "</td>";
                            echo '</tr>';
                        }
                    }
                    echo '</tbody></table>';
                }
            }
            ?>
        </div>
    </body>

</html>