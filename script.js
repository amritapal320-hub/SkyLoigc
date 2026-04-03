// --- Helper Function: Digital Number Animation ---
function animateValue(obj, start, end, duration, isDecimal = false) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentVal = progress * (end - start) + start;
        
        obj.innerHTML = isDecimal ? currentVal.toFixed(4) : Math.floor(currentVal);
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = isDecimal ? end.toFixed(4) : end;
        }
    };
    window.requestAnimationFrame(step);
}

// --- TOOL 1: AI Token & Energy Counter ---
document.getElementById('calculateTokensBtn').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const charCount = text.length;
    const tokenEstimate = Math.ceil(charCount / 4);
    const energyPerToken = 0.0003; 
    const totalEnergy = tokenEstimate * energyPerToken;

    animateValue(document.getElementById('tokenCount'), 0, tokenEstimate, 800, false);
    animateValue(document.getElementById('energyCount'), 0, totalEnergy, 800, true);
});

// --- TOOL 2: Cloud Cost Calculator ---
document.getElementById('calculateCostBtn').addEventListener('click', function() {
    const provider = document.getElementById('providerSelect').value;
    const region = document.getElementById('regionSelect').value;
    const hours = parseFloat(document.getElementById('hoursInput').value) || 0;

    const rates = {
        aws: { 'us-east-1': 0.0104, 'eu-west-1': 0.0114, 'ap-south-1': 0.0118 },
        azure: { 'us-east-1': 0.0108, 'eu-west-1': 0.0118, 'ap-south-1': 0.0125 },
        gcp: { 'us-east-1': 0.0094, 'eu-west-1': 0.0105, 'ap-south-1': 0.0110 }
    };

    const hourlyRate = rates[provider][region];
    const totalCost = hourlyRate * hours;
    const costElement = document.getElementById('totalCost');
    
    animateValue(costElement, 0, totalCost, 1000, true);
    setTimeout(() => { costElement.innerHTML = totalCost.toFixed(2); }, 1050); 
});

// --- TOOL 3: Stable Chart.js Cloud Comparison Graph ---
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('cloudChart').getContext('2d');
    
    // Cyberpunk Chart Configuration
    Chart.defaults.color = '#a0aec0';
    Chart.defaults.font.family = "'Space Mono', monospace";

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pricing', 'Scalability', 'Compute'],
            datasets: [
                {
                    label: 'AWS',
                    data: [8, 10, 9],
                    backgroundColor: 'rgba(255, 153, 0, 0.7)',
                    borderColor: '#ff9900',
                    borderWidth: 1,
                    borderRadius: 4
                },
                {
                    label: 'Azure',
                    data: [7, 9, 8],
                    backgroundColor: 'rgba(0, 164, 239, 0.7)',
                    borderColor: '#00a4ef',
                    borderWidth: 1,
                    borderRadius: 4
                },
                {
                    label: 'GCP',
                    data: [9, 9, 10],
                    backgroundColor: 'rgba(0, 229, 255, 0.7)', // Cyan to match Sky Logic
                    borderColor: '#00e5ff',
                    borderWidth: 1,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Prevents infinite resizing bug in tabs
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' }
                },
                x: {
                    grid: { display: false }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: { boxWidth: 12 }
                }
            }
        }
    });
});

// --- EASTER EGG: Anti-Gravity Protocol ---
document.getElementById('antiGravityBtn').addEventListener('click', function() {
    const cards = document.querySelectorAll('.cyber-card');
    const isFloating = this.classList.contains('active-gravity');
    
    if (!isFloating) {
        // Turn ON Anti-Gravity
        this.classList.add('active-gravity');
        this.classList.replace('cyber-btn', 'cyber-btn-alt');
        this.innerHTML = '<i class="fa-solid fa-anchor me-2"></i> Disable Anti-Gravity';
        
        cards.forEach(card => card.classList.add('anti-gravity-active'));
    } else {
        // Turn OFF Anti-Gravity
        this.classList.remove('active-gravity');
        this.classList.replace('cyber-btn-alt', 'cyber-btn');
        this.innerHTML = '<i class="fa-solid fa-rocket me-2"></i> Initialize Anti-Gravity';
        
        cards.forEach(card => card.classList.remove('anti-gravity-active'));
    }
});