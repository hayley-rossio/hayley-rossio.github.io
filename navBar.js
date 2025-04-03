document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
        <nav>
            <ul>
                <li><a href="">{{username}}'s Home</a></li>
                <li><a href="">Workout Input</a></li>
                <li><a href="">Profile</a></li>
                <li><a href="">Equipment</a></li>
            </ul>
        </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbar;
})