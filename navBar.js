document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
        <nav>
            <a href="main.html" id="home">Home</a> | 
            <a href="workout.html" id="workout">Workout Input</a> | 
            <a href="profile.html" id="profile">Profile</a> |
            <a href="equip.html" id="equip">Equipment</a> 
        </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbar;
})