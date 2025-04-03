document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
        <nav>
            <a href="main.html">{{username}}'s Home</a> | 
            <a href="workout.html">Workout Input</a> | 
            <a href="proflie.html">Profile</a> |
            <a href="equip.html">Equipment</a> 
        </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbar;
})