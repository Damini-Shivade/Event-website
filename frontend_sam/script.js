const events = [
    { title: "AI/ML Workshop", date: "MAR 10, 2026", desc: "Deep dive into Neural Networks and TensorFlow basics." },
    { title: "Web Dev Bootcamp", date: "MAR 15, 2026", desc: "Master React and modern CSS layouts." },
    { title: "Flutter Hackathon", date: "APR 02, 2026", desc: "Build cross-platform apps and win exciting prizes." },
    { title: "Cloud Study Jam", date: "APR 12, 2026", desc: "Hands-on experience with Google Cloud Platform." },
    { title: "Cybersecurity Masterclass", date: "MAY 05, 2026", desc: "Learn to secure applications from threats." },
    { title: "Open Source Day", date: "MAY 20, 2026", desc: "Start contributing to world-class projects." },
    { title: "Gen AI Meetup", date: "JUN 01, 2026", desc: "Discussing the future of LLMs and Gemini." },
    { title: "Startup Pitch Night", date: "JUN 15, 2026", desc: "Showcase your tech startup to experts." }
];

let currentUser = "";

function toggleForm() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('signup-form').classList.toggle('hidden');
}

function handleLogin() {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;

    if(!email || !pass) {
        showErrors('login-form');
        return;
    }
    
    currentUser = "Member";
    onLoginSuccess();
}

function handleSignup() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if(!name || !email || !pass) {
        showErrors('signup-form');
        return;
    }

    currentUser = name;
    onLoginSuccess();
}

function showErrors(formId) {
    const inputs = document.querySelectorAll(`#${formId} input`);
    inputs.forEach(input => {
        if(!input.value) input.nextElementSibling.style.display = 'block';
        else input.nextElementSibling.style.display = 'none';
    });
}

function onLoginSuccess() {
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('main-nav').classList.remove('hidden');
    document.getElementById('user-name-display').innerText = currentUser;
    showSection('home');
}

function showSection(sectionId) {
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('events-section').classList.add('hidden');
    
    const activeSection = document.getElementById(`${sectionId}-section`);
    activeSection.classList.remove('hidden');

    if(sectionId === 'events') renderEvents();
}

function renderEvents() {
    const container = document.getElementById('event-container');
    container.innerHTML = events.map(ev => `
        <div class="event-card">
            <span class="event-date">${ev.date}</span>
            <h3>${ev.title}</h3>
            <p>${ev.desc}</p>
        </div>
    `).join('');
}

function logout() {
    currentUser = "";
    document.getElementById('main-nav').classList.add('hidden');
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('events-section').classList.add('hidden');
    document.getElementById('auth-section').classList.remove('hidden');
    // Clear inputs
    document.querySelectorAll('input').forEach(i => i.value = "");
}