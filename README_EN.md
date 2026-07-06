<div align="right">

English | **[中文](README.md)**

</div>

# pangu.skill 1.0

**Reshape your Agent Skills like opening a system from first principles.**

`pangu-skill` is a Pangu-branded replica of the Darwin Skill 2.0 optimizer mechanics. It preserves the 9-dimension rubric, validation-gated edits, git ratchet, and human-in-the-loop checkpoints while rewriting the project identity, docs, test prompts, and result cards for Pangu.

```bash
npx skills add pangu-skill
```

## Core Capabilities

- Evaluate `SKILL.md` structure and real-world behavior with a 9-dimension rubric.
- Design or reuse `test-prompts.json` for each target skill.
- Run baseline scoring before optimization.
- Use independent judge agents when available; use labeled dry-run validation when unavailable.
- Keep improvements with a git ratchet and revert regressions with `git revert`.
- Pause at critical checkpoints for human confirmation.
- Generate visual result cards.

## Lifecycle

1. Phase 0: confirm scope, inspect git, initialize result logs.
2. Phase 0.5: design and confirm test prompts.
3. Phase 1: run baseline scoring with the 9-dimension rubric.
4. Phase 2: optimize one dimension per round, then keep or revert after validation.
5. Phase 2.5: use exploratory rewrites only when explicitly approved.
6. Phase 3: summarize results and generate result cards.

## Usage

```text
optimize all skills
optimize example-skill
evaluate all skills
show skill optimization history
```

## Design Sources

`pangu-skill` is derived from Darwin Skill 2.0 and keeps the SkillLens, SkillOpt, and autoresearch-inspired validation framework. This project does not claim new empirical results; research claims should trace back to the cited papers and source project records.

## License

MIT
