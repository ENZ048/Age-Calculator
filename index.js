const form = document.getElementById('ageForm');
const yearsRes = document.getElementById('years-res');
const monthsRes = document.getElementById('months-res');
const daysRes = document.getElementById('days-res');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if(dob > today){
        alert('Oops! Are you from the future? We can’t calculate age for unborn time travelers!');
        return
    }

    calculateAge(today, dob);
});

function calculateAge(today, dob) {
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if(days < 0){
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if(months < 0){
        years--;
        months += 12;
    }

    yearsRes.textContent = years;
    monthsRes.textContent = months;
    daysRes.textContent = days;

    if(years !== 0 && months === 0 && days === 0){
        alert('Happy Birthday!!');
    }
    
    return;
}