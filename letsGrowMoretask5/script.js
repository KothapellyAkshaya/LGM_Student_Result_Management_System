document.getElementById("result-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var studentName = document.getElementById("student-name").value;
    var subject = document.getElementById("subject").value;
    var marks = document.getElementById("marks").value;
  
    // Create a new row in the table
    var table = document.getElementById("results-table");
    var newRow = table.insertRow(table.rows.length);
    var nameCell = newRow.insertCell(0);
    var subjectCell = newRow.insertCell(1);
    var marksCell = newRow.insertCell(2);
  
    // Populate the new row with form values
    nameCell.innerHTML = studentName;
    subjectCell.innerHTML = subject;
    marksCell.innerHTML = marks;
  
    // Reset the form
    document.getElementById("result-form").reset();
  });
  