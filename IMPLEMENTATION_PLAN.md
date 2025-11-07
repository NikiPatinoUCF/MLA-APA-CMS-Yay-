# Edit Quest: The Style Guide Game - Implementation Plan

## Project Overview
An interactive educational website teaching MLA, APA, and CMS style conventions through gamified, level-based challenges. Uses HTML, CSS, JavaScript, and P5.js for interactive demonstrations.

## Phase 1: Project Setup & Foundation
1. **Initialize project structure**
   - Create folder structure: `/css`, `/js`, `/assets/images`, `/assets/sounds`, `/levels`
   - Set up HTML templates for all core pages
   - Create base CSS with CSS custom properties for theming (MLA blue, APA teal, CMS gold)
   - Integrate P5.js library via CDN

2. **Core data architecture**
   - Create `js/storage.js` for LocalStorage utilities (save/load progress, badges, scores)
   - Define data schema for user progress (completed levels, current rank, badges earned)
   - Create `js/question-bank.js` with sample questions for each style guide and level

3. **Styling foundation**
   - Design responsive mobile-first layout
   - Create reusable UI components (buttons, cards, modals, progress bars)
   - Implement color scheme and typography (sans-serif body, stylized headers)
   - Add subtle background animations (CSS: floating quills, scrolling particles)

## Phase 2: Navigation & Core Pages
4. **Home/Landing Page (`index.html`)**
   - Hero section with game title and tagline
   - "Start Your Quest" CTA button
   - Brief explanation of the game concept
   - Visual theme introduction (medieval quest aesthetic)

5. **Style Guide Selection Page**
   - Three large interactive cards for MLA, APA, CMS
   - Each card shows style guide color, icon, and locked/unlocked status
   - Display progress percentage for each guide
   - Navigation to level selection

6. **Level Selection Page (per style guide)**
   - Display themed regions (Comma Castle, MLA Mountain, APA Abyss, CMS City)
   - Show 3 difficulty levels per region (Beginner, Intermediate, Expert)
   - Visual indicators: locked/unlocked, completed, current score
   - "Start Lesson" button for pre-level tutorials

7. **Profile/Progress Page**
   - Display current Style Rank (Novice → Grammar Guardian → Citation Sage → Master Stylist)
   - Badge collection showcase
   - Overall statistics: total points, completion %, streaks
   - Option to reset progress

8. **Instructions/Help Page**
   - Game controls explanation
   - Scoring system breakdown
   - Links to official MLA, APA, CMS style resources
   - Keyboard shortcuts reference

## Phase 3: Game Engine & Mechanics
9. **Core game engine (`js/game-engine.js`)**
   - Question loader from question bank
   - Answer validation logic
   - Score calculation (base points + streak multipliers + time bonuses)
   - Level progression controller (unlock next level on completion)
   - Feedback pop-up system with explanations

10. **Scoring system (`js/scoring.js`)**
    - Points per correct answer (10-50 based on difficulty)
    - Streak multiplier (×1.5 for 3+ consecutive correct)
    - Time bonus (bonus points for quick answers)
    - Badge unlock conditions
    - Rank progression thresholds

11. **Progress tracking**
    - Save completed levels to LocalStorage
    - Update badges and ranks in real-time
    - Track per-guide and overall statistics
    - Implement "Final Boss Level" unlock condition (all 3 guides complete)

## Phase 4: Standard Challenge Types (HTML/CSS/JS)
12. **Multiple choice questions**
    - Display question with 4 options
    - Click to select answer
    - Instant feedback with explanation modal
    - Highlight correct/incorrect choice

13. **True/False rapid-fire**
    - Timed quick succession questions
    - Visual feedback (green checkmark / red X)
    - Score tracking with combo counter

14. **Fill-in-the-blank**
    - Text input field for citation completion
    - Partial credit for close answers
    - Show correct answer with formatting explanation

## Phase 5: P5.js Interactive Challenges
15. **Drag-and-drop citation builder (P5.js)**
    - Draggable elements (author names, dates, titles, punctuation)
    - Drop zones for correct citation order
    - Visual snap-to-grid feedback
    - Validate complete citation structure

16. **Animated "Spot the Error" (P5.js)**
    - Display text with deliberate style errors
    - Click to highlight errors
    - Animated "editor's pen" cursor
    - Correct errors turn green with explanation

17. **Catching falling punctuation (P5.js)**
    - Commas, periods, semicolons fall from top
    - User catches correct punctuation for sentence
    - Timer-based mini-game
    - Score multiplier for accuracy

18. **Sentence repair simulation (P5.js)**
    - Animated before/after sentence transformations
    - Drag corrections to fix grammar
    - Visual "repair" animations (sparks, checkmarks)

## Phase 6: Lesson Mode
19. **Pre-level tutorial system**
    - Brief animated lessons (1-2 minutes max)
    - P5.js demonstrations: sentence diagrams, citation breakdowns
    - "Skip" option for returning players
    - Key concept highlights per level

20. **Interactive demonstrations**
    - Animated examples of common errors
    - Before/after comparisons
    - Clickable elements to explore rule details

## Phase 7: Content Creation
21. **Question bank population**
    - Create 10-15 questions per level (Beginner/Intermediate/Expert)
    - Write accurate explanations citing MLA 9th, APA 7th, CMS 17th editions
    - Balance challenge types across each region
    - Ensure variety and progressive difficulty

22. **Badge and achievement design**
    - Design badge graphics (images or CSS art)
    - Define unlock criteria for each badge
    - Create "Master Stylist" final achievement
    - Design "Final Boss Level: The Editor's Desk" combining all styles

## Phase 8: Polish & Enhancements
23. **Visual polish**
    - Add theme-specific graphics (castles, mountains, scrolls)
    - Implement smooth page transitions
    - Add sound effects (optional: correct answer chime, level complete fanfare)
    - Responsive design testing across devices

24. **Accessibility**
    - ARIA labels for interactive elements
    - Keyboard navigation for all challenges
    - Color contrast compliance (WCAG AA)
    - Alt text for all images
    - Screen reader friendly feedback

25. **Optional features**
    - Local leaderboard (top 10 scores)
    - Export progress as shareable badge
    - "Hall of Fame" page with top ranks
    - About/Credits page

## Phase 9: Testing & Deployment
26. **Testing**
    - Cross-browser testing (Chrome, Firefox, Safari, Edge)
    - Mobile responsiveness verification
    - LocalStorage functionality testing
    - P5.js performance optimization
    - Validate educational content accuracy

27. **GitHub Pages deployment**
    - Push to main branch
    - Enable GitHub Pages in repository settings
    - Test live deployment
    - Create README with game description and link

## File Structure
```
/
├── index.html                    # Home/landing
├── style-selection.html          # Choose MLA/APA/CMS
├── level-selection.html          # Level map (dynamic per guide)
├── game.html                     # Main game interface
├── lesson.html                   # Lesson mode
├── profile.html                  # Progress tracker
├── help.html                     # Instructions
├── css/
│   ├── main.css                  # Global styles + theme variables
│   ├── game.css                  # Game-specific styling
│   └── components.css            # Buttons, cards, modals
├── js/
│   ├── main.js                   # App initialization
│   ├── game-engine.js            # Core game logic
│   ├── question-bank.js          # All questions & explanations
│   ├── scoring.js                # Points, streaks, ranks
│   ├── storage.js                # LocalStorage utilities
│   ├── p5-challenges.js          # P5.js interactive games
│   └── lessons.js                # Lesson mode content
├── assets/
│   ├── images/                   # Badges, icons, backgrounds
│   └── sounds/                   # Optional SFX
└── CLAUDE.md                     # Project documentation
```

## Key Features Summary

### Style Guides
- **MLA**: Sky blue theme, focus on citations and formatting
- **APA**: Deep teal theme, emphasis on references and structure
- **CMS**: Warm gold theme, stylistic choices and details

### Themed Regions
- **Comma Castle**: Grammar and punctuation challenges
- **MLA Mountain**: Citation identification (MLA-specific)
- **APA Abyss**: Formatting and reference practice (APA-specific)
- **CMS City**: Stylistic choices and capitalization (CMS-specific)

### Difficulty Levels
- Beginner (10-20 points per question)
- Intermediate (25-35 points per question)
- Expert (40-50 points per question)

### Progression System
- Sequential unlocks within each style guide
- Choose any style guide from start
- Master Stylist badge unlocks "Final Boss Level"

### Challenge Types
- Multiple choice questions
- True/false rapid-fire
- Fill-in-the-blank
- Drag-and-drop citation builder (P5.js)
- Spot the error (P5.js)
- Catching falling punctuation (P5.js)
- Sentence repair simulation (P5.js)

### Scoring & Rewards
- Base points per correct answer
- Streak multipliers (×1.5 for 3+ consecutive)
- Time-based bonuses
- Style Ranks: Novice Editor → Grammar Guardian → Citation Sage → Master Stylist
- Badge collection system
- Optional local leaderboard

## Technical Stack
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, animations, mobile-first responsive
- **Vanilla JavaScript**: ES6+ modules
- **P5.js**: Interactive visual challenges
- **LocalStorage**: Progress persistence
- **GitHub Pages**: Hosting

## Implementation Order
1. Setup + Foundation
2. Navigation pages
3. Game engine
4. Standard challenges
5. P5.js challenges
6. Lesson mode
7. Content creation
8. Polish & accessibility
9. Testing & deployment
