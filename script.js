document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        // Sample events data, replace it with actual event data
        {
          title: 'School Holiday',
          start: '2024-04-05',
          end: '2024-04-07'
        },
        {
          title: 'Parent-Teacher Meeting',
          start: '2024-04-15T10:00:00',
          end: '2024-04-15T12:00:00'
        }
        // Add more events as needed
      ]
    });
  
    calendar.render();
  });

  // script.js

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
    
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.text())
    .then(message => alert(message));
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.text())
    .then(message => alert(message));
});

  