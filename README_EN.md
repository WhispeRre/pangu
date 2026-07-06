<div align="right">

English | **[中文](README.md)**

</div>

# pangu.skill 1.0

**Reshape your Agent Skills with a validation loop.**

`pangu-skill` is an Agent Skill for evaluating and improving other Agent Skills. It treats each `SKILL.md` as a versioned working asset: define test prompts, score a baseline, make one targeted edit, validate the result, then let the user decide whether to keep or revert the change.

It is not just a format checker. It asks two practical questions:

- Is this skill clear, specific, and executable?
- Does the agent produce better output when the skill is used?

```bash
npx skills add WhispeRre/pangu@pangu-skill
```

---

## Why This Exists

As an Agent Skill library grows, maintenance gets harder. When a team has dozens of skills, manual review tends to miss three recurring problems:

- The document looks complete, but known failure paths are not encoded.
- The instructions are long, but lack concrete parameters, edge cases, and checkpoints.
- The structure scores well, but real task output is no better than the baseline.

`pangu-skill` turns skill improvement into a traceable, testable, reversible process. Every round edits one main asset, records what changed, validates the result, and pauses for human judgment at the important points.

---

## Core Loop

```text
Evaluate → Design Tests → Diagnose Weakness → Small Edit → Validate Output → Human Confirm → Keep or Revert
```

The workflow has five phases:

1. **Phase 0: Initialize**  
   Confirm scope, inspect git state, and initialize or read `results.tsv`.

2. **Phase 0.5: Design Test Prompts**  
   Prepare 2-3 realistic user prompts for the target skill before scoring effectiveness.

3. **Phase 1: Baseline Evaluation**  
   Score the target `SKILL.md` with the 9-dimension rubric and run runtime-neutrality checks.

4. **Phase 2: Validation-Gated Optimization**  
   Edit one main weakness per round. Re-score and validate afterward. Keep improvements and revert regressions with `git revert`.

5. **Phase 3: Summary Report**  
   Summarize score changes, keep/revert decisions, validation mode, and major improvements.

---

## Five Principles

| # | Principle | Meaning |
|---|---|---|
| 01 | Single editable asset | Optimize one `SKILL.md` per round so changes remain attributable. |
| 02 | Structure + behavior | Review both the written instructions and the actual output. |
| 03 | Test prompts first | No test prompts, no effectiveness score. |
| 04 | Git ratchet | Keep only validated improvements; revert regressions with `git revert`. |
| 05 | Human in the loop | Users confirm scope, tests, key edits, and final decisions. |

---

## 9-Dimension Rubric

`pangu-skill` uses a 100-point rubric with 9 dimensions:

| Dimension | Focus |
|---|---|
| Frontmatter quality | Clear name, description, and trigger terms |
| Workflow clarity | Linear executable steps with inputs and outputs |
| Failure mechanism encoding | Explicit failure conditions, fallbacks, and recovery paths |
| Checkpoint design | Visible STOP/CHECKPOINT markers before important decisions |
| Actionable specificity | Concrete parameters, formats, and examples |
| Resource integration | Reachable references, scripts, and templates |
| Overall architecture | Clear, non-redundant, complete structure |
| Live test performance | Whether output improves over baseline |
| Counterexamples and blacklist | Clear anti-patterns and high-risk actions |

Live test performance has the highest weight. A well-written skill that does not improve real output is not a strong skill.

---

## Usage

```text
optimize all skills
optimize example-skill
evaluate all skills
show skill optimization history
```

Typical outputs include:

- Baseline scorecards
- Test prompt lists
- Weakest-dimension diagnosis
- One-round improvement proposals
- Keep / revert records
- Summary reports and result cards

---

## Project Structure

```text
README.md / README_EN.md         Project documentation
pangu-skill/SKILL.md             Core workflow and scoring rules
pangu-skill/test-prompts.json    Self-test prompts for pangu-skill
pangu-skill/references/          Runtime-neutrality and rubric evidence
pangu-skill/templates/           Result-card templates
pangu-skill/scripts/             Result-card screenshot helper
pangu-skill/package.json         Node dependency entry for screenshot generation
```

The result-card screenshot helper depends on Playwright. Before first use, run:

```bash
cd pangu-skill
npm install
```

---

## Design Sources

`pangu-skill` draws from three ideas:

- **SkillLens**: failure mechanism encoding, actionable specificity, and risk-action blacklists as meta-skill dimensions.
- **SkillOpt**: validation-gated edits, where each change must be validated before it is kept.
- **autoresearch**: autonomous experiment loops and a git ratchet that preserves measurable improvements.

These sources provide the methodology; `pangu-skill` organizes them into a practical workflow for maintaining Agent Skills.

---

## License

MIT
