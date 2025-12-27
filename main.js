// ============================================
// RPG Portfolio - Main JavaScript
// ============================================

// Game Data
const gameData = {
    player: {
        level: 15,
        xp: 2450,
        xpMax: 3000,
        questsCompleted: 12
    },
    quests: {
        forest: [
            {
                id: 'f1',
                title: 'Portfolio Website',
                objective: 'Build a modern, responsive portfolio website using vanilla HTML, CSS, and JavaScript',
                challenge: 'Creating smooth animations and mobile-first design without frameworks',
                reward: 'Mastered CSS Grid, Flexbox, and JavaScript DOM manipulation',
                tech: ['HTML5', 'CSS3', 'JavaScript'],
                difficulty: 'Beginner'
            },
            {
                id: 'f2',
                title: 'Weather Dashboard',
                objective: 'Create a responsive weather application with real-time data and interactive charts',
                challenge: 'Integrating multiple APIs and handling async data flow',
                reward: 'Learned API integration, error handling, and data visualization',
                tech: ['React', 'API Integration', 'Chart.js'],
                difficulty: 'Beginner'
            },
            {
                id: 'f3',
                title: 'Todo List App',
                objective: 'Build a feature-rich todo application with local storage',
                challenge: 'Managing state and implementing CRUD operations',
                reward: 'Understood state management and browser storage APIs',
                tech: ['JavaScript', 'LocalStorage', 'CSS'],
                difficulty: 'Beginner'
            }
        ],
        desert: [
            {
                id: 'd1',
                title: 'RESTful API Server',
                objective: 'Develop a complete REST API with authentication and database integration',
                challenge: 'Implementing secure authentication and handling complex data relationships',
                reward: 'Mastered Node.js, Express, JWT authentication, and MongoDB',
                tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
                difficulty: 'Intermediate',
                bossFight: true
            },
            {
                id: 'd2',
                title: 'Real-time Chat Application',
                objective: 'Build a real-time messaging app with WebSocket support',
                challenge: 'Managing concurrent connections and real-time data synchronization',
                reward: 'Learned WebSocket protocol and real-time application architecture',
                tech: ['Node.js', 'Socket.io', 'Express', 'React'],
                difficulty: 'Intermediate',
                bossFight: true
            },
            {
                id: 'd3',
                title: 'E-commerce Backend',
                objective: 'Create a complete e-commerce backend with payment integration',
                challenge: 'Handling payment processing, inventory management, and order fulfillment',
                reward: 'Mastered payment gateways, database design, and complex business logic',
                tech: ['Node.js', 'PostgreSQL', 'Stripe API', 'Express'],
                difficulty: 'Intermediate'
            }
        ],
        castle: [
            {
                id: 'c1',
                title: 'Full-Stack SaaS Platform',
                objective: 'Build a complete SaaS application with subscription management',
                challenge: 'Architecting scalable systems, implementing microservices, and handling high traffic',
                reward: 'Achieved mastery in system design, cloud architecture, and DevOps',
                tech: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
                difficulty: 'Advanced',
                caseStudy: true
            },
            {
                id: 'c2',
                title: 'AI-Powered Analytics Dashboard',
                objective: 'Develop an analytics platform with machine learning predictions',
                challenge: 'Integrating ML models, processing large datasets, and creating intuitive visualizations',
                reward: 'Mastered data science, ML integration, and advanced data visualization',
                tech: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
                difficulty: 'Advanced',
                caseStudy: true
            }
        ]
    },
    skills: {
        frontend: [
            { name: 'HTML5', level: 'Expert', icon: '🌐' },
            { name: 'CSS3', level: 'Expert', icon: '🎨' },
            { name: 'JavaScript', level: 'Expert', icon: '⚡' },
            { name: 'React', level: 'Advanced', icon: '⚛️' },
            { name: 'TypeScript', level: 'Advanced', icon: '📘' },
            { name: 'Next.js', level: 'Intermediate', icon: '▲' }
        ],
        backend: [
            { name: 'Node.js', level: 'Expert', icon: '🟢' },
            { name: 'Express', level: 'Expert', icon: '🚂' },
            { name: 'Python', level: 'Advanced', icon: '🐍' },
            { name: 'MongoDB', level: 'Advanced', icon: '🍃' },
            { name: 'PostgreSQL', level: 'Intermediate', icon: '🐘' },
            { name: 'REST APIs', level: 'Expert', icon: '🔌' }
        ],
        tools: [
            { name: 'Git', level: 'Expert', icon: '📦' },
            { name: 'Docker', level: 'Intermediate', icon: '🐳' },
            { name: 'AWS', level: 'Intermediate', icon: '☁️' },
            { name: 'Linux', level: 'Advanced', icon: '🐧' },
            { name: 'CI/CD', level: 'Intermediate', icon: '🔄' }
        ]
    },
    experience: [
        {
            title: 'Full Stack Developer',
            company: 'Tech Company',
            date: '2022 - Present',
            description: 'Leading development of scalable web applications and mentoring junior developers'
        },
        {
            title: 'Software Engineer',
            company: 'Startup Inc',
            date: '2020 - 2022',
            description: 'Built and maintained multiple client projects using modern web technologies'
        }
    ],
    education: [
        {
            title: 'Bachelor of Computer Science',
            institution: 'University',
            date: '2016 - 2020',
            description: 'Focused on software engineering and web development'
        }
    ]
};

// NPC Dialogue Data
const npcDialogues = {
    'starter-village': [
        { name: 'Village Elder', text: 'Welcome, traveler! I am the keeper of this realm.' },
        { name: 'Village Elder', text: 'You seek to learn about the developer who created this world?' },
        { name: 'Village Elder', text: 'Deep Pawar is a Full Stack Developer with a passion for creating innovative solutions.' },
        { name: 'Village Elder', text: 'With 2+ years of experience, they specialize in modern web technologies and cloud platforms.' },
        { name: 'Village Elder', text: 'Their journey began in the Forest of Fundamentals, mastering the basics...' },
        { name: 'Village Elder', text: 'Now they venture into the Castle of Mastery, tackling advanced challenges!' },
        { name: 'Village Elder', text: 'Explore the map to discover their quests and achievements. Good luck!' }
    ],
    'contact': [
        { name: 'Quest Master', text: 'Greetings, adventurer!' },
        { name: 'Quest Master', text: 'Interested in starting a quest together?' },
        { name: 'Quest Master', text: 'I am always open to new opportunities and exciting projects.' },
        { name: 'Quest Master', text: 'Connect with me through the links below. Let\'s build something amazing!' }
    ]
};

// Initialize Game
function initGame() {
    updateHUD();
    setupEventListeners();
    renderQuestMarkers();
    simulateLoading();
}

// Update HUD Stats
function updateHUD() {
    document.getElementById('player-level').textContent = gameData.player.level;
    document.getElementById('player-xp').textContent = `${gameData.player.xp.toLocaleString()} / ${gameData.player.xpMax.toLocaleString()}`;
    document.getElementById('quests-completed').textContent = gameData.player.questsCompleted;
}

// Setup Event Listeners
function setupEventListeners() {
    // Map Area Clicks
    document.querySelectorAll('.map-area').forEach(area => {
        if (!area.classList.contains('locked')) {
            area.addEventListener('click', () => handleAreaClick(area.dataset.area));
        }
    });

    // Modal Close
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay') closeModal();
    });

    // NPC Dialogue
    document.getElementById('dialogue-next').addEventListener('click', nextDialogue);

    // HUD Controls
    document.getElementById('sound-toggle').addEventListener('click', toggleSound);
    document.getElementById('fullscreen-toggle').addEventListener('click', toggleFullscreen);

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeSkillTree();
            closeDialogue();
        }
    });
}

// Handle Area Click
function handleAreaClick(areaId) {
    switch(areaId) {
        case 'starter-village':
            showDialogue('starter-village');
            break;
        case 'forest':
            showQuestsModal('forest', 'Forest of Fundamentals');
            break;
        case 'desert':
            showQuestsModal('desert', 'Desert of APIs');
            break;
        case 'castle':
            showQuestsModal('castle', 'Castle of Mastery');
            break;
        case 'skill-tree':
            showSkillTree();
            break;
        case 'quest-log':
            showQuestLog();
            break;
        case 'contact':
            showContact();
            break;
    }
}

// Show NPC Dialogue
let currentDialogue = null;
let dialogueIndex = 0;

function showDialogue(areaId) {
    const dialogues = npcDialogues[areaId];
    if (!dialogues) return;

    currentDialogue = dialogues;
    dialogueIndex = 0;
    const dialogueEl = document.getElementById('npc-dialogue');
    dialogueEl.classList.add('active');
    updateDialogue();
}

function updateDialogue() {
    if (!currentDialogue || dialogueIndex >= currentDialogue.length) {
        closeDialogue();
        return;
    }

    const dialogue = currentDialogue[dialogueIndex];
    document.getElementById('dialogue-name').textContent = dialogue.name;
    document.getElementById('dialogue-text').textContent = dialogue.text;
    
    const nextBtn = document.getElementById('dialogue-next');
    if (dialogueIndex === currentDialogue.length - 1) {
        nextBtn.textContent = 'Close';
    } else {
        nextBtn.textContent = 'Continue';
    }
}

function nextDialogue() {
    dialogueIndex++;
    if (dialogueIndex >= currentDialogue.length) {
        closeDialogue();
    } else {
        updateDialogue();
    }
}

function closeDialogue() {
    document.getElementById('npc-dialogue').classList.remove('active');
    currentDialogue = null;
    dialogueIndex = 0;
}

// Show Quests Modal
function showQuestsModal(area, title) {
    const quests = gameData.quests[area];
    if (!quests) return;

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 class="modal-title">${title}</h2>
        <p class="modal-subtitle">Explore completed quests and challenges</p>
        <div class="modal-section">
            ${quests.map(quest => `
                <div class="quest-card" onclick="showQuestDetail('${quest.id}', '${area}')">
                    <div class="quest-title">${quest.title} ${quest.bossFight ? '⚔️' : ''}</div>
                    <div class="quest-objective">${quest.objective}</div>
                    <div class="quest-tech">
                        ${quest.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                    <div class="quest-reward">Reward: ${quest.reward}</div>
                </div>
            `).join('')}
        </div>
    `;
    openModal();
}

// Show Quest Detail
function showQuestDetail(questId, area) {
    const quests = gameData.quests[area];
    const quest = quests.find(q => q.id === questId);
    if (!quest) return;

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 class="modal-title">${quest.title} ${quest.bossFight ? '⚔️ Boss Fight' : ''}</h2>
        <div class="modal-section">
            <h3>Quest Objective</h3>
            <p>${quest.objective}</p>
        </div>
        ${quest.challenge ? `
            <div class="modal-section">
                <h3>${quest.bossFight ? 'Boss Challenge' : 'Challenge Faced'}</h3>
                <p>${quest.challenge}</p>
            </div>
        ` : ''}
        <div class="modal-section">
            <h3>Technologies Used</h3>
            <div class="quest-tech">
                ${quest.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
        <div class="modal-section">
            <h3>Reward Unlocked</h3>
            <p class="quest-reward">${quest.reward}</p>
        </div>
        ${quest.caseStudy ? `
            <div class="modal-section">
                <h3>Architecture</h3>
                <p>This project utilized a microservices architecture with containerization for scalability and maintainability.</p>
            </div>
            <div class="modal-section">
                <h3>Outcome</h3>
                <p>Successfully deployed and scaled to handle thousands of concurrent users with 99.9% uptime.</p>
            </div>
        ` : ''}
    `;
    openModal();
}

// Show Skill Tree
function showSkillTree() {
    const skillTreeModal = document.getElementById('skill-tree-modal');
    const container = document.getElementById('skill-tree-container');
    
    container.innerHTML = `
        <div class="skill-category">
            <h2 class="skill-category-title">Frontend Skills</h2>
            <div class="skill-nodes">
                ${gameData.skills.frontend.map(skill => `
                    <div class="skill-node unlocked">
                        <div class="skill-node-icon">${skill.icon}</div>
                        <div class="skill-node-name">${skill.name}</div>
                        <div class="skill-node-level">Level: ${skill.level}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="skill-category">
            <h2 class="skill-category-title">Backend Skills</h2>
            <div class="skill-nodes">
                ${gameData.skills.backend.map(skill => `
                    <div class="skill-node unlocked">
                        <div class="skill-node-icon">${skill.icon}</div>
                        <div class="skill-node-name">${skill.name}</div>
                        <div class="skill-node-level">Level: ${skill.level}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="skill-category">
            <h2 class="skill-category-title">Tools & Technologies</h2>
            <div class="skill-nodes">
                ${gameData.skills.tools.map(skill => `
                    <div class="skill-node unlocked">
                        <div class="skill-node-icon">${skill.icon}</div>
                        <div class="skill-node-name">${skill.name}</div>
                        <div class="skill-node-level">Level: ${skill.level}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    skillTreeModal.classList.add('active');
    
    // Close on overlay click
    skillTreeModal.addEventListener('click', (e) => {
        if (e.target.id === 'skill-tree-modal') {
            closeSkillTree();
        }
    });
}

function closeSkillTree() {
    document.getElementById('skill-tree-modal').classList.remove('active');
}

// Show Quest Log (Resume)
function showQuestLog() {
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 class="modal-title">Quest Log</h2>
        <p class="modal-subtitle">Experience & Education Timeline</p>
        
        <div class="modal-section">
            <h3>Experience</h3>
            ${gameData.experience.map(exp => `
                <div class="resume-item">
                    <h4>${exp.title}</h4>
                    <div class="date">${exp.company} • ${exp.date}</div>
                    <div class="description">${exp.description}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="modal-section">
            <h3>Education</h3>
            ${gameData.education.map(edu => `
                <div class="resume-item">
                    <h4>${edu.title}</h4>
                    <div class="date">${edu.institution} • ${edu.date}</div>
                    <div class="description">${edu.description}</div>
                </div>
            `).join('')}
        </div>
        
        <button class="download-btn" onclick="downloadResume()">💾 Save Game (Download Resume)</button>
    `;
    openModal();
}

// Show Contact
function showContact() {
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 class="modal-title">Start a Quest Together!</h2>
        <div class="contact-info">
            <p style="margin-bottom: 2rem; font-size: 1.1rem;">I'm always interested in new opportunities and exciting projects. Let's build something amazing together!</p>
            <a href="mailto:deeppawarofficial@gmail.com" class="contact-link">📧 Email</a>
            <a href="https://github.com/deeppawarofficial-sudo" target="_blank" class="contact-link">💻 GitHub</a>
            <a href="https://www.linkedin.com/in/deep-pawar-b1b897298" target="_blank" class="contact-link">💼 LinkedIn</a>
        </div>
    `;
    openModal();
}

// Render Quest Markers
function renderQuestMarkers() {
    Object.keys(gameData.quests).forEach(area => {
        const container = document.getElementById(`${area}-quests`);
        if (container) {
            const quests = gameData.quests[area];
            container.innerHTML = quests.map(() => '<div class="quest-marker"></div>').join('');
        }
    });
}

// Modal Functions
function openModal() {
    document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

// Download Resume
function downloadResume() {
    // In a real implementation, this would download a PDF
    alert('Resume download would be triggered here. In production, this would link to a PDF file.');
}

// Toggle Sound
function toggleSound() {
    const btn = document.getElementById('sound-toggle');
    const isOn = btn.textContent.includes('🔊');
    btn.innerHTML = isOn ? '<span>🔇</span>' : '<span>🔊</span>';
    // Sound toggle logic would go here
}

// Toggle Fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Simulate Loading
function simulateLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('loading-progress');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 200);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGame);
} else {
    initGame();
}

