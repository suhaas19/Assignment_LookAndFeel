document.addEventListener('DOMContentLoaded', function() {
    const recentFormCells = document.querySelectorAll('.recent-form');

    recentFormCells.forEach(function(cell) {
        const recentForm = cell.textContent.trim();
        const recentFormSpans = recentForm.split('').map(function(form) {
            const span = document.createElement('span');
            if (form === 'W') {
                span.classList.add('win');
                span.title = 'Win';
            } else if (form === 'L') {
                span.classList.add('loss');
                span.title = 'Loss';
            }
            return span;
        });

        cell.innerHTML = '';
        recentFormSpans.forEach(function(span) {
            cell.appendChild(span);
        });
    });
});

function showDetails(memberId) {
    var modal = document.getElementById(memberId);
    modal.style.display = "block";
}

function hideDetails(memberId) {
    var modal = document.getElementById(memberId);
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}


let responses = []; // Global variable to store email and team choice

        function submitPoll() {
            const email = document.getElementById('email').value;
            const team = document.getElementById('team').value;
            responses.push({email: email, team: team});
            document.getElementById('pollForm').reset(); // Reset form after submission
            alert('Thank you for your response!');
        }

        function viewResponses1() {
            const responseDiv = document.getElementById('responses');
            let voteCounts = {}; // Object to store vote counts
            
            // Count votes
            responses.forEach(response => {
                voteCounts[response.team] = (voteCounts[response.team] || 0) + 1;
            });
        
            // Prepare data for the chart
            const data = {
                labels: Object.keys(voteCounts),
                datasets: [{
                    label: 'Votes per Team',
                    data: Object.values(voteCounts),
                    backgroundColor: ['red', 'blue', 'green', 'yellow'], // Add more colors as needed
                    borderColor: ['black'],
                    borderWidth: 1
                }]
            };
        
            // Configure the chart
            const config = {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };
        
            // Render the chart
            new Chart(document.getElementById('voteChart'), config);
        
            // Optional: Display text results as well
            responseDiv.innerHTML = '';
            Object.keys(voteCounts).forEach(team => {
                const p = document.createElement('p');
                p.textContent = `Team: ${team}, Votes: ${voteCounts[team]}`;
                responseDiv.appendChild(p);
            });
        }
        
/*

     function viewResponses1() {
            const responseDiv = document.getElementById('responses');
            responseDiv.innerHTML = ''; // Clear previous responses
            responses.forEach(response => {
                const p = document.createElement('p');
                p.textContent = `Email: ${response.email}, Team: ${response.team}`;
                responseDiv.appendChild(p);
            });
        }
*/
