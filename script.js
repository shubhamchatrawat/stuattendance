document
  .getElementById("attendanceForm")
  .addEventListener("submit", function () {
    // Get input values
    const studentName = document.getElementById("studentName").value;
    const date = document.getElementById("date").value;

    // Create an object to store attendance data
    const attendanceData = {
      studentName: studentName,
      date: date,
    };

    // Retrieve existing attendance data or initialize an empty array
    let existingAttendance =
      JSON.parse(localStorage.getItem("attendance")) || [];

    // Add the new attendance data to the array
    existingAttendance.push(attendanceData);

    // Save the updated attendance data back to local storage
    localStorage.setItem("attendance", JSON.stringify(existingAttendance));

    // Clear the form fields for the next entry
    document.getElementById("studentName").value = "";
    document.getElementById("date").value = "";

    alert("Attendance submitted successfully!");
  });
