document.getElementById('employeeBtn').addEventListener('click', function () {
    document.getElementById('formTitle').textContent = 'Apply as an Employee';
    this.classList.add('active');
    document.getElementById('hirerBtn').classList.remove('active');
});

document.getElementById('hirerBtn').addEventListener('click', function () {
    document.getElementById('formTitle').textContent = 'Apply as a Hirer';
    this.classList.add('active');
    document.getElementById('employeeBtn').classList.remove('active');
});
