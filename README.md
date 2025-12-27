# RPG-Style Developer Portfolio

A unique, interactive portfolio website designed as a 2D game map where a developer's career journey is represented as an RPG adventure.

## 🎮 Concept

This portfolio transforms the traditional developer portfolio into an immersive game-like experience:

- **Career Journey** = Adventure through different map areas
- **Projects** = Quests with objectives, challenges, and rewards
- **Skills** = Unlocked abilities in a skill tree
- **Experience** = Quest log and timeline
- **Contact** = Final NPC to start new quests together

## 🗺️ Map Areas

### 1. Starter Village (About Me)
- Character introduction
- Developer backstory
- Role and goals
- Displayed via NPC dialogue system

### 2. Forest of Fundamentals
- Beginner projects
- Learning quests
- Foundation skills development

### 3. Desert of APIs
- Backend and API projects
- Server-side challenges
- "Boss Fight" modals for complex projects

### 4. Castle of Mastery
- Advanced projects
- Full case studies
- Architecture and scalability challenges

### 5. Skill Tree
- Visual skill tree with categories
- Frontend, Backend, and Tools
- Unlocked skills with levels

### 6. Quest Log (Resume)
- Experience timeline
- Education and certifications
- Download resume functionality

### 7. Contact NPC
- Email, GitHub, LinkedIn links
- Call-to-action for collaboration

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Flexbox, Grid, Animations
- **Vanilla JavaScript** - No frameworks or libraries
- **SVG/Emoji Icons** - Lightweight visual elements

## 🎨 Design Features

- **Dark Theme** - Professional game-inspired aesthetic
- **RPG Fonts** - Orbitron for headings, Inter for body
- **Smooth Animations** - Hover effects, transitions
- **Interactive Modals** - Quest details, NPC dialogues
- **Responsive Design** - Mobile-friendly layout
- **Keyboard Navigation** - ESC to close modals
- **HUD Display** - Level, XP, Quest counter

## 📁 File Structure

```
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── main.js         # Game logic and interactivity
└── README.md       # This file
```

## 🚀 Features

### Interactive Elements
- Clickable map areas
- Quest markers with pulse animations
- Modal system for detailed information
- NPC dialogue system
- Skill tree visualization
- Progress indicators

### Game Mechanics
- Level system (currently Level 15)
- XP tracking (2450/3000)
- Quest completion counter
- Locked areas (Coming Soon)

### Accessibility
- Keyboard navigation support
- Semantic HTML structure
- Clear visual feedback
- Mobile responsive

## 🎯 Usage

1. **Explore the Map** - Click on different areas to discover content
2. **View Quests** - Click quest markers or areas to see project details
3. **Check Skills** - Visit the Skill Tree to see unlocked abilities
4. **Read Resume** - Open Quest Log for experience and education
5. **Contact** - Click Contact NPC to get in touch

## 🎮 Controls

- **Click** - Interact with map areas and quests
- **ESC** - Close any open modal or dialogue
- **HUD Buttons** - Toggle sound, fullscreen mode

## 📱 Responsive Design

The portfolio is fully responsive:
- Desktop: Grid layout with multiple columns
- Tablet: Adjusted grid spacing
- Mobile: Single column, vertical scrolling

## 🔧 Customization

### Adding New Quests

Edit the `gameData.quests` object in `main.js`:

```javascript
quests: {
    forest: [
        {
            id: 'f4',
            title: 'New Project',
            objective: 'Project description',
            challenge: 'Challenges faced',
            reward: 'What was learned',
            tech: ['Tech1', 'Tech2'],
            difficulty: 'Beginner'
        }
    ]
}
```

### Updating Skills

Modify the `gameData.skills` object:

```javascript
skills: {
    frontend: [
        { name: 'New Skill', level: 'Expert', icon: '🎯' }
    ]
}
```

### Changing Player Stats

Update `gameData.player`:

```javascript
player: {
    level: 16,
    xp: 2500,
    xpMax: 3000,
    questsCompleted: 13
}
```

## 🎨 Styling Customization

All colors and styling are defined in CSS variables at the top of `style.css`:

```css
:root {
    --bg-primary: #0a0e27;
    --accent-gold: #ffd700;
    /* ... more variables */
}
```

## 📝 Notes

- No external dependencies required
- Works in all modern browsers
- Optimized for performance
- Clean, commented code
- Scalable architecture

## 🚧 Future Enhancements

- Sound effects toggle (currently UI only)
- More interactive animations
- Achievement system
- Save/load game state
- Multi-language support

## 📄 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ for developers who love games and code**
