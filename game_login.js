function addUser() {

    user_name = document.getElementById("player1_name").value;
    user_name2 = document.getElementById("player2_name").value;

    localStorage.setItem("user_name", user_name);
    localStorage.setItem("user_name2", user_name2);
    window.location = "game_page.html";

}
