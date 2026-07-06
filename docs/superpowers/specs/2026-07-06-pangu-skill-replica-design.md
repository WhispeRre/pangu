# Pangu Skill Replica Design

## Goal

Create `pangu-skill` as a high-quality branded replica of `darwin-skill-master`: preserve Darwin Skill 2.0's validated skill-optimization mechanics while replacing Darwin-specific identity, paths, examples, templates, and user-facing docs with Pangu branding.

## Confirmed Direction

Use Option 1: brand replica with the same core optimizer architecture.

`pangu-skill` will keep Darwin's core behavior:

- Evaluate `SKILL.md` files with the 9-dimension rubric.
- Use the Phase 0 through Phase 3 optimization lifecycle.
- Require test prompts before effect scoring.
- Use independent judge agents when available, with dry-run fallback when unavailable.
- Keep git ratchet behavior: retain improvements, revert regressions with `git revert`.
- Require human-in-the-loop checkpoints before risky or irreversible decisions.
- Generate visual result cards after single-skill or full-batch optimization.

`pangu-skill` will change the project identity:

- `darwin-skill` becomes `pangu-skill`.
- `Darwin` and `达尔文` become `Pangu` and `盘古`.
- User-facing examples, install commands, result-card footers, test prompts, and paths use Pangu naming.
- Academic grounding in SkillLens, SkillOpt, and autoresearch remains because it explains the optimizer mechanism.
- Darwin-specific author, repository, and ecosystem promotion references are removed or rewritten as Pangu-neutral project text.

## Source Project Summary

The source project at `/Users/liuzeyu03/Desktop/test/pangu-skill/darwin-skill-master` contains:

- `SKILL.md`: core optimizer instructions, rubric, lifecycle, constraints, failure handling, usage modes, and result-card generation flow.
- `README.md` and `README_EN.md`: Chinese and English project pages.
- `references/runtime-neutrality.md`: runtime-neutrality gate and red-light scan rules.
- `references/skilllens-evidence.md`: SkillLens evidence, controlled-study data, and high-leverage optimization cases.
- `test-prompts.json`: three test prompts for single optimization, full evaluation, and ambiguous optimization requests.
- `templates/`: three result-card templates plus an output example.
- `scripts/screenshot.mjs`: result-card screenshot helper.
- `assets/`: banners, charts, generated PNGs/GIFs, and HTML source for charts.
- `docs/index.html` and `showcase.html`: promotional/static site material.

The target repository at `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu` is a clean git repository with only the initial `README.md`.

## Architecture

The replica should remain a single Agent Skill project. `SKILL.md` is the executable instruction surface; README files are distribution docs; references carry evidence and runtime rules; `test-prompts.json` validates expected skill behavior; templates and screenshot scripts support visual reporting.

The implementation should copy the source structure into the target repository while preserving the target `.git` directory. After copying, rewrite text and lightweight SVG/HTML assets to Pangu branding. Binary PNG/GIF assets can be reused in the first pass if they do not block skill functionality, but any user-facing binary asset that visibly says Darwin should be tracked as a follow-up replacement or regenerated from edited HTML/SVG where practical.

## File Responsibilities

- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md`: Core pangu-skill optimizer instructions, frontmatter, rubric, workflow, constraints, examples, result-card flow, and anti-pattern blacklist.
- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README.md`: Chinese user-facing project page for pangu-skill.
- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README_EN.md`: English user-facing project page for pangu-skill.
- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/runtime-neutrality.md`: Runtime-neutrality gate, updated for pangu-skill naming and examples.
- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/skilllens-evidence.md`: Evidence document retaining research grounding while replacing Darwin-specific self-evaluation references with Pangu-compatible wording.
- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json`: Behavior tests using `pangu-skill` prompts and expectations.
- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates/*.html`: Result-card templates with Pangu brand names, repository text, and sample skill identifiers.
- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/scripts/screenshot.mjs`: Screenshot helper without hard-coded author-machine Playwright paths.
- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*.svg` and `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*.html`: Editable visual assets rewritten to Pangu branding where text appears.
- `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/docs/index.html` and `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/showcase.html`: Optional promotional pages rewritten only if included in the replica; otherwise remove them from the first functional skill package to avoid stale Darwin branding.

## Data Flow

1. User requests skill evaluation or optimization.
2. `SKILL.md` routes the request into one of the supported modes: full optimization, single skill optimization, evaluation only, or history review.
3. The skill scans target `SKILL.md` files and creates or reuses `test-prompts.json`.
4. The skill computes baseline scores with the 9-dimension rubric and runtime-neutrality gate.
5. If optimizing, each round edits one target dimension, commits the change, re-evaluates, and either keeps or reverts based on score improvement.
6. The skill logs results to `results.tsv`.
7. The skill summarizes results and generates result-card PNGs through the templates and screenshot script when the environment supports it.

## Error Handling

The Pangu replica keeps Darwin's existing fallback table:

- If the target is not in a git repository, ask the user whether to initialize git or use timestamped file backups.
- If `results.tsv` is missing, create it with the expected header.
- If `results.tsv` is malformed, back it up and rebuild the header.
- If branch creation fails, retry with a numeric suffix before asking the user.
- If `git revert` fails, stash conflicting work and retry; if it still fails, restore the prior `SKILL.md` content manually.
- If judge agents are unavailable, use dry-run validation and label the result as `dry_run`.
- If dry-run ratio exceeds 30%, warn that effect scoring is weak.
- If a generated skill grows beyond 150% of the original file size, reject the bloated edit and require simplification.
- If `SKILL.md` is missing in a target skill directory, record an error row and continue with the next target.

## Testing And Verification

The implementation plan must include these checks:

- `git status --short` before and after copying to confirm only intended target files changed.
- JSON validation for `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json`.
- A residual-brand scan for `darwin-skill`, `Darwin`, `达尔文`, `alchaincyf/darwin-skill`, and `.claude/skills/darwin-skill` in user-facing text files.
- A runtime-red-light scan based on `references/runtime-neutrality.md`.
- A path-hardcoding scan for `/Users/alchain` and other source-machine-specific paths.
- A smoke read of `SKILL.md` frontmatter to confirm `name: pangu-skill`.
- A git diff review before committing implementation changes.

## Scope Boundaries

This replica does not change the optimizer's core algorithm. It does not add skill creation as a new primary capability. It does not introduce new runtime dependencies. It does not rewrite the research basis or claim new empirical results for Pangu unless those results are actually produced later.

Binary visual assets may remain visually Darwin-branded temporarily only if they are not part of the minimal functional skill surface. Any binary asset used directly in README or result output must be replaced, regenerated, or removed from the first public-facing version.

## Open Follow-Ups For Implementation

- Decide whether to include `docs/index.html` and `showcase.html` in the first replica or omit them to reduce stale branding risk.
- Decide the public repository string for badges and result-card footers if the final remote is known. Use `pangu-skill` placeholder text when no remote exists.
- Regenerate chart PNGs from edited chart HTML if those PNGs remain referenced by README.

