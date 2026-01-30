# Simple Express + Handlebars App

Use this tiny app to practice essential Git workflow steps. Follow the checklist below as if you were onboarding to a team project.

## What to do
1) Initialize a repo
- Run `git init` in the project root.

2) Ignore local-only files
- Ensure `.gitignore` lists: `.env` and `node_modules/`.

3) Make the first commit
- Stage everything that should be tracked.
- Commit with the exact message: `initial`.

4) Record a subsequent change
- Make a small, meaningful edit (e.g., tweak text in `views/home.handlebars` or `public/styles.css`).
- Stage only the files you changed.
- Commit the change with a clear message describing what you updated.

## Tips for students
- Verify `git status` before every commit; it’s your snapshot preview.
- Keep commits focused and messages specific.
- Don’t commit secrets: `.env` stays untracked.
- If you aren’t sure what changed, use `git diff` before staging, and `git diff --staged` before committing.

## Reminder
- Start the app locally with `npm install` then `npm start` (uses `.env` for `PORT` and `APP_NAME`).
- Keep your history clean: small changes, clear messages.
