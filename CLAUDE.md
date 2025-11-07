# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Edit Quest: The Style Guide Game** is an interactive educational website that teaches students, writers, and editors MLA, APA, and CMS style conventions through gamified, level-based challenges.

## Technology Stack

- **Front-end**: HTML, CSS, JavaScript (vanilla JS)
- **Data Persistence**: LocalStorage for progress tracking
- **Version Control**: Git/GitHub

## Project Architecture

### Core Structure

The game follows a multi-page architecture with the following components:

1. **Home/Landing Page** (`index.html`)
   - Style guide selection (MLA, APA, CMS)
   - Game introduction and instructions

2. **Game Levels** (separate HTML files or dynamically loaded)
   - Each style guide has themed challenge areas:
     - **The Comma Castle**: Grammar and punctuation rules
     - **MLA Mountain**: Citation identification challenges
     - **APA Abyss**: Formatting and reference practice
     - **CMS City**: Stylistic choices and capitalization

3. **Lesson Mode**
   - Pre-level tutorial screens introducing key concepts
   - Should be brief but informative

4. **Game Engine** (JavaScript modules)
   - Question/challenge management
   - Answer validation logic
   - Scoring system (points, streaks, speed bonuses)
   - Feedback display system
   - Progress tracking and badge/rank management

### Data Management

**LocalStorage Schema**:
- User progress per style guide
- Completed levels and scores
- Earned badges and Style Ranks
- Current streak information

Store data in structured JSON format to allow easy retrieval and updates.

### UI/UX Components

- **Feedback Pop-ups**: Display after each answer with:
  - Correctness indicator
  - Explanation of the underlying rule
  - Link to relevant style guide section (if applicable)

- **Progress Tracker**: Visual representation of:
  - Level completion
  - Badges earned
  - Current Style Rank
  - Overall statistics

## Development Workflow

### Testing Locally

Since this is a static website with vanilla JavaScript:

```bash
# Option 1: Use Python's built-in HTTP server
python3 -m http.server 8000

# Option 2: Use Node.js http-server (if installed)
npx http-server -p 8000

# Then open browser to http://localhost:8000
```

### Testing LocalStorage

- Open browser DevTools → Application/Storage → LocalStorage
- Test clearing progress: `localStorage.clear()`
- Inspect stored data: `localStorage.getItem('key')`

### File Organization

Recommended structure:
```
/
├── index.html              # Home page
├── css/
│   ├── main.css           # Global styles
│   ├── game.css           # Game-specific styles
│   └── components.css     # Reusable UI components
├── js/
│   ├── main.js            # Entry point
│   ├── game-engine.js     # Core game logic
│   ├── question-bank.js   # Challenge questions/data
│   ├── scoring.js         # Scoring and progress logic
│   └── storage.js         # LocalStorage utilities
├── assets/
│   ├── images/            # Graphics, badges, icons
│   └── sounds/            # Optional: sound effects
└── levels/
    ├── mla.html           # MLA challenges
    ├── apa.html           # APA challenges
    └── cms.html           # CMS challenges
```

## Code Conventions

### JavaScript

- Use ES6+ features (const/let, arrow functions, modules)
- Keep functions small and focused
- Separate concerns: UI rendering vs. game logic vs. data management
- Comment complex logic, especially citation rule validation

### CSS

- Use CSS custom properties (variables) for theming
- Follow BEM or similar naming convention for clarity
- Make responsive design a priority (mobile-first approach)

### Question/Challenge Format

Structure challenge data consistently:
```javascript
{
  id: "unique-id",
  type: "multiple-choice" | "fill-in-blank" | "drag-drop",
  styleGuide: "MLA" | "APA" | "CMS",
  level: "comma-castle" | "mla-mountain" | etc.,
  question: "Question text",
  options: ["A", "B", "C", "D"],
  correctAnswer: "B",
  explanation: "Detailed explanation of the rule",
  points: 10,
  timeLimit: 30 // seconds (optional)
}
```

## Key Considerations

### Educational Quality

- Ensure explanations are accurate and cite official style guide rules
- MLA: [MLA Handbook, 9th edition](https://www.mla.org/MLA-Style)
- APA: [APA Style 7th edition](https://apastyle.apa.org/)
- CMS: [Chicago Manual of Style, 17th edition](https://www.chicagomanualofstyle.org/)

### Accessibility

- Proper semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Alt text for images

### Performance

- Lazy-load questions/levels to reduce initial load time
- Optimize images and assets
- Minimize CSS/JS bundle sizes

## Deployment

This is a static site suitable for:
- GitHub Pages (recommended)
- Netlify
- Vercel
- Any static hosting service

To deploy to GitHub Pages:
```bash
# Ensure code is on main branch or gh-pages branch
git push origin main

# Enable GitHub Pages in repository settings
# Settings → Pages → Source: main branch / root folder
```

## Common Tasks

### Adding New Questions

1. Edit `js/question-bank.js`
2. Follow the challenge format structure
3. Test in browser to verify formatting
4. Ensure explanation is clear and accurate

### Adding New Levels

1. Create level in appropriate style guide section
2. Update navigation/routing logic
3. Add level metadata to game engine
4. Design level-specific challenges
5. Add completion badge/reward

### Updating Scoring Logic

Scoring is in `js/scoring.js`:
- Base points per correct answer
- Streak multipliers
- Speed bonuses
- Penalty for incorrect attempts (if any)

### Debugging LocalStorage Issues

```javascript
// View all stored data
console.log(localStorage);

// Clear specific key
localStorage.removeItem('editquest_progress');

// Reset all progress
localStorage.clear();
```
