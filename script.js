const modal = document.getElementById("modal");
const newUserBtn = document.getElementById("newUserBtn");
const closeModal = document.getElementById("closeModal");
const userRows = document.getElementById("userRows");
const userForm = document.getElementById("userForm");

let users = [
    { username: "abraham", fullname: "Abraham Lincon", email: "abraham@au.edu" },
    { username: "columbus", fullname: "Christopher Columbus", email: "columbus@au.edu" }
];

function renderTable() {
    userRows.innerHTML = "";
    users.forEach(u => {
        userRows.innerHTML += `
            <tr>
                <td>${u.username}</td>
                <td>${u.fullname}</td>
                <td>${u.email}</td>
            </tr>
        `;
    });
}

renderTable();

newUserBtn.onclick = () => {
    modal.style.display = "flex";
};

closeModal.onclick = () => {
    modal.style.display = "none";
};

userForm.onsubmit = (e) => {
    e.preventDefault();

    users.push({
        username: document.getElementById("username").value,
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value
    });

    renderTable();
    userForm.reset();
    modal.style.display = "none";
};
