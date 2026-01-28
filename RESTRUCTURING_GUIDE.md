# File Structure Restructuring Guide

## Target Structure

```
app/
├── layout.tsx
├── globals.css
├── page.tsx (home/flowchart entry)
├── pages/
│   ├── about.tsx
│   ├── flowchart/
│   │   ├── self-care.tsx
│   │   ├── gauge-overwhelm.tsx
│   │   ├── regulate.tsx
│   │   ├── reaction.tsx
│   │   ├── change-situation.tsx
│   │   ├── problem-solve.tsx
│   │   ├── check-facts.tsx
│   │   ├── soothe.tsx
│   │   ├── change.tsx
│   │   ├── changing-feelings.tsx
│   │   ├── feelings.tsx
│   │   └── body-check-in.tsx
│   ├── mindfulness/
│   │   ├── mindfulness.tsx (main page)
│   │   ├── meditation.tsx
│   │   ├── body-scan.tsx
│   │   ├── awareness.tsx
│   │   ├── breathing.tsx
│   │   ├── wise-mind.tsx
│   │   ├── what.tsx
│   │   ├── one-mindfulness.tsx
│   │   └── mental-noting.tsx
│   ├── distress-tolerance/
│   │   ├── distress-tolerance.tsx (main page)
│   │   ├── stop.tsx
│   │   ├── tip.tsx
│   │   ├── accepts.tsx
│   │   ├── improve.tsx
│   │   ├── radical-acceptance.tsx
│   │   ├── pros-cons.tsx
│   │   ├── cost-benefit.tsx
│   │   ├── resistt.tsx
│   │   ├── effective-rethinking.tsx
│   │   ├── muscle-relaxation.tsx
│   │   ├── soothe.tsx
│   │   ├── turning-mind.tsx
│   │   ├── willingness-half-smile.tsx
│   │   └── nightmare-protocol.tsx
│   ├── emotional-regulation/
│   │   ├── emotional-regulation.tsx (main page)
│   │   ├── opposite-action.tsx
│   │   ├── build-mastery.tsx
│   │   ├── cope-ahead.tsx
│   │   ├── pleasant-activities.tsx
│   │   ├── letting-go.tsx
│   │   ├── being-effective.tsx
│   │   ├── mental-noting.tsx
│   │   ├── cognitive-vulnerability.tsx
│   │   ├── mindful-emotions.tsx
│   │   ├── check-facts.tsx
│   │   ├── problem-solve.tsx
│   │   └── abc-please.tsx
│   ├── interpersonal-skills/
│   │   ├── interpersonal-skills.tsx (main page)
│   │   ├── dear-man.tsx
│   │   ├── give.tsx
│   │   ├── fast.tsx
│   │   ├── interpersonal-intensity.tsx
│   │   ├── interpersonal-myths.tsx
│   │   ├── communication-styles.tsx
│   │   ├── assertiveness.tsx
│   │   ├── conflict.tsx
│   │   ├── ending-relationships.tsx
│   │   ├── interpersonal-mindfulness.tsx
│   │   └── finding-friends.tsx
│   ├── crisis/
│   │   └── crisis.tsx
│   ├── landing-page.tsx
│   ├── sleep-hygiene.tsx
│   └── timer.tsx
```

## Key Changes

1. **File Naming**: All pages are now named after their folder (e.g., `meditation.tsx` instead of `page.tsx`)
2. **Flowchart Steps**: Moved to `pages/flowchart/` folder
3. **Module Organization**: Each module (mindfulness, distress-tolerance, etc.) has its own folder under `pages/`
4. **Main Pages**: Each module has a main page named after the module (e.g., `mindfulness.tsx`)

## Routing

Next.js App Router will automatically create routes based on the file structure:
- `/pages/mindfulness/meditation.tsx` → `/pages/mindfulness/meditation`
- `/pages/flowchart/feelings.tsx` → `/pages/flowchart/feelings`
- `/pages/about.tsx` → `/pages/about`

## Migration Steps

1. Move all `page.tsx` files to their new locations with new names
2. Update all internal links and imports
3. Update the routing in components (Header, ProgressBar, etc.)
4. Test all navigation paths

