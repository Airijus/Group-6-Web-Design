document.addEventListener("DOMContentLoaded", function () {
    fetch("Courses.json") 
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#courseTable tbody");

            // Iterate through the courses and create table rows
            data.courses.forEach((course, index) => {
                const row = document.createElement("tr");

                // Set the content for each row
                row.innerHTML = `
                    <td>${course.course_code}</td>
                    <td>${course.course_title}</td>
                    <td>${course.duration}</td>
                    <td><a href="#">${course.booking_link}</a></td>
                `;

                // Add a class for animation
                row.classList.add("staggered");

                // Dynamically set the animation delay based on the index
                row.style.animationDelay = `${index * 0.2}s`;  // 0.2s delay per row

                // Add the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
