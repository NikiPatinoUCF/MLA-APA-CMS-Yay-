# Edit Quest: The Style Guide Game

An interactive educational website that teaches students, writers, and editors MLA, APA, and CMS style conventions through gamified, level-based challenges.

🎮 **[Play Now](#)** | 📖 [Documentation](CLAUDE.md) | 🗺️ [Implementation Plan](IMPLEMENTATION_PLAN.md)

## Overview

Edit Quest transforms the learning of academic writing styles into an engaging adventure. Players progress through themed regions, earning points, badges, and ranks as they master grammar, punctuation, citations, and formatting rules.

### Key Features

- **🎯 Three Style Guides**: Master MLA, APA, and Chicago Manual of Style
- **🏰 Themed Regions**: Explore Comma Castle, MLA Mountain, APA Abyss, and CMS City
- **📈 Progressive Difficulty**: Beginner, Intermediate, and Expert levels
- **🏆 Gamification**: Points, streaks, badges, and rank progression system
- **💡 Interactive Learning**: Instant feedback with detailed explanations
- **💾 Progress Tracking**: LocalStorage saves your achievements
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices

## How to Play

1. **Choose a Style Guide**: Select MLA, APA, or CMS
2. **Pick a Region**: Explore themed challenge areas
3. **Select Difficulty**: Start with Beginner and progress to Expert
4. **Answer Questions**: Multiple choice, true/false, and fill-in-the-blank challenges
5. **Earn Rewards**: Build streaks, unlock badges, and rank up from Novice Editor to Master Stylist

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, flexbox, grid, and animations
- **Vanilla JavaScript**: ES6+ with modular architecture
- **LocalStorage**: Client-side progress persistence
- **No Dependencies**: Pure vanilla JavaScript, no frameworks required

## Project Structure

```
/
├── index.html                # Landing page
├── style-selection.html      # Choose style guide
├── level-selection.html      # Select level/difficulty
├── game.html                 # Main game interface
├── profile.html              # Progress tracker
├── help.html                 # Instructions
├── css/
│   ├── main.css             # Global styles and theme
│   ├── components.css       # Reusable UI components
│   └── game.css             # Game-specific styles
├── js/
│   ├── storage.js           # LocalStorage management
│   ├── question-bank.js     # Challenge questions
│   ├── scoring.js           # Points and progression
│   └── game-engine.js       # Core game logic
└── assets/
    ├── images/              # Graphics and badges
    └── sounds/              # Optional sound effects
```

## Development

### Running Locally

Since this is a static website, you can run it with any local server:

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js
npx http-server -p 8000

# Then open http://localhost:8000
```

### Testing LocalStorage

Open browser DevTools → Application/Storage → LocalStorage to inspect saved data:

```javascript
// View all data
localStorage.getItem('editquest_data');

// Clear progress
localStorage.clear();
```

## Scoring System

### Points
- **Beginner**: 10-20 points per question
- **Intermediate**: 25-35 points per question
- **Expert**: 40-50 points per question

### Bonuses
- **Streak Bonus**: 1.5x multiplier for 3+ consecutive correct answers
- **Time Bonus**: Up to 20 extra points for answering within 10 seconds

### Ranks
- 🎓 **Novice Editor**: 0 points
- 🛡️ **Grammar Guardian**: 500 points
- 📜 **Citation Sage**: 1,500 points
- 👑 **Master Stylist**: 3,000 points

## Adding New Content

### Adding Questions

Edit `js/question-bank.js`:

```javascript
{
  id: 'unique-id',
  type: 'multiple-choice',
  styleGuide: 'mla',
  region: 'comma-castle',
  difficulty: 'beginner',
  question: 'Your question here?',
  options: ['A', 'B', 'C', 'D'],
  correctAnswer: 'B',
  explanation: 'Detailed explanation...',
  points: 10,
  timeLimit: 30
}
```

### Adding Badges

Edit `js/scoring.js` and add to the `BADGES` object:

```javascript
'badge-id': {
  name: 'Badge Name',
  description: 'How to earn it',
  icon: '🏅'
}
```

## Deployment

### GitHub Pages

1. Push code to your repository:
```bash
git push origin main
```

2. Enable GitHub Pages in repository settings:
   - Settings → Pages
   - Source: main branch / root folder

3. Your site will be live at: `https://username.github.io/repo-name/`

### Alternative Hosting

This static site works on:
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

## Educational Resources

Official style guide references:

- **MLA**: [MLA Handbook, 9th Edition](https://www.mla.org/MLA-Style)
- **APA**: [APA Style, 7th Edition](https://apastyle.apa.org/)
- **CMS**: [Chicago Manual of Style, 17th Edition](https://www.chicagomanualofstyle.org/)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5
- ARIA labels for interactive elements
- Keyboard navigation support
- WCAG AA color contrast compliance
- Reduced motion support

## Future Enhancements

Potential additions for future versions:

- [ ] P5.js interactive challenges (drag-and-drop, animated games)
- [ ] Lesson mode with animated tutorials
- [ ] More questions per level (currently 3-6 per difficulty)
- [ ] Sound effects and music
- [ ] Leaderboard with shareable scores
- [ ] Timed challenge modes
- [ ] Achievement system
- [ ] Dark mode toggle

## Contributing

This is an educational project. To add content:

1. Fork the repository
2. Add new questions to `js/question-bank.js`
3. Ensure explanations cite official style guide editions
4. Test thoroughly in browser
5. Submit a pull request

## License

This project is created for educational purposes.

Style guide content references:
- MLA Handbook, 9th Edition
- APA Publication Manual, 7th Edition
- The Chicago Manual of Style, 17th Edition

## Author

Created as an interactive learning tool for academic writing and editing students.

---

**Start your editing quest today!** 🚀
