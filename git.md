# git reference

daily work:
- switch to development `git checkout development`
- committing (checkpointing): `git add .` [or `git add src/filename.svelte`] --> `git commit -m "commit message"`
- pushing to github: `git push`

bonus commands:
- store files away from commit: `git stash push filename`
- restore last stashed file: `git stash pop`

pushing to production:
- switch to production `git checkout production`
- `git merge development` --> `git push`
