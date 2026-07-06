# Pangu Skill Replica Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `pangu-skill` as a high-quality branded replica of `darwin-skill-master`, preserving Darwin's skill optimizer mechanics while replacing user-facing identity, examples, paths, templates, and docs with Pangu branding.

**Architecture:** Copy the Darwin Skill project into the clean `pangu` repository while preserving `pangu/.git`, then rewrite the executable skill surface (`SKILL.md`), docs, references, test prompts, templates, scripts, and editable visual assets. Keep the optimizer algorithm unchanged: 9-dimension rubric, Phase 0-3 lifecycle, validation-gated edits, git ratchet, human checkpoints, dry-run fallback, and result cards.

**Tech Stack:** Agent Skills `SKILL.md`, Markdown, JSON, HTML/CSS templates, SVG assets, Node.js screenshot helper, git, shell verification commands.

---

## File Structure

**Source project:**
- Read from `/Users/liuzeyu03/Desktop/test/pangu-skill/darwin-skill-master`.

**Target project:**
- Preserve: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/.git`
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README.md`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README_EN.md`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/runtime-neutrality.md`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/skilllens-evidence.md`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates/result-card.html`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates/result-card-dark.html`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates/result-card-white.html`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates/result-card.png`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/scripts/screenshot.mjs`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*`
- Optional create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/docs/index.html`
- Optional create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/showcase.html`

**Responsibility boundaries:**
- `SKILL.md` is the executable skill behavior and must be coherent on its own.
- `README.md` and `README_EN.md` are distribution docs and must not claim new Pangu empirical results.
- `references/` keeps research evidence and runtime-neutrality rules.
- `test-prompts.json` validates pangu-skill behavior.
- `templates/` and `scripts/` produce result cards.
- `assets/` supports README and docs visuals; binary Darwin-branded images must not be referenced by first-pass public docs.

---

### Task 1: Copy Source Project Into Target Repository

**Files:**
- Read: `/Users/liuzeyu03/Desktop/test/pangu-skill/darwin-skill-master/**`
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README.md`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README_EN.md`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/**`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates/**`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/scripts/**`
- Create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/**`
- Optional create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/docs/index.html`
- Optional create: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/showcase.html`

- [ ] **Step 1: Verify target repository is clean except ignored system noise**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu status --short
```

Expected: either empty output or only `.DS_Store` files. If any non-`.DS_Store` file appears, stop and inspect it before copying.

- [ ] **Step 2: Copy Darwin files without copying source git metadata**

Run:

```bash
rsync -a --exclude='.git' /Users/liuzeyu03/Desktop/test/pangu-skill/darwin-skill-master/ /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/
```

Expected: command exits 0 and creates Darwin project files inside `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu`.

- [ ] **Step 3: Verify target git repository still points to pangu**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu rev-parse --show-toplevel
```

Expected:

```text
/Users/liuzeyu03/Desktop/test/pangu-skill/pangu
```

- [ ] **Step 4: Inspect copied file set**

Run:

```bash
find /Users/liuzeyu03/Desktop/test/pangu-skill/pangu -maxdepth 2 -type f | sort
```

Expected: output includes `SKILL.md`, `README.md`, `README_EN.md`, `test-prompts.json`, `references/runtime-neutrality.md`, `references/skilllens-evidence.md`, `scripts/screenshot.mjs`, and template files. `.git` internals may appear if the command includes hidden directories; do not edit them.

- [ ] **Step 5: Commit source copy checkpoint**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu add SKILL.md README.md README_EN.md test-prompts.json references scripts templates assets docs/index.html showcase.html
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu commit -m "chore: copy darwin skill source for pangu replica"
```

Expected: commit succeeds. If `docs/index.html` or `showcase.html` is intentionally omitted, remove those paths from `git add`.

---

### Task 2: Rewrite Core Skill Identity

**Files:**
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md`
- Test: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md`

- [ ] **Step 1: Replace frontmatter with pangu-skill identity**

Edit `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md` so the frontmatter is:

```markdown
---
name: pangu-skill
description: "Pangu Skill 1.0 (盘古.skill 1.0): autonomous skill optimizer derived from Darwin Skill 2.0 mechanics. Uses the SkillLens 9-dimension rubric + SkillOpt-style validation-gated edits + human-in-the-loop checkpoints to evaluate and improve SKILL.md files. Runs baseline scoring, test-prompt validation, git ratchet keep/revert decisions, independent judge review when available, dry-run fallback when unavailable, and visual result-card generation. Use when user mentions \"优化skill\", \"skill评分\", \"自动优化\", \"auto optimize\", \"skill质量检查\", \"盘古\", \"pangu\", \"帮我改改skill\", \"skill怎么样\", \"提升skill质量\", \"skill review\", \"skill打分\"."
---
```

Expected: first line is `---`, `name` is exactly `pangu-skill`, and the description includes both Chinese and English triggers.

- [ ] **Step 2: Rewrite the title and opening block**

Replace the initial title and brand intro with:

```markdown
# Pangu Skill 1.0

> **v1.0 · 2026-07-06** — A Pangu-branded replica of Darwin Skill 2.0's optimizer architecture: SkillLens 9-dimension rubric + SkillOpt-style validation-gated edits + human-in-the-loop checkpoints.
>
> Core idea: **evaluate → improve → validate → human confirm → keep or revert → generate result cards**.
> Project identity: `pangu-skill`.
```

Expected: the top section no longer says `# Darwin Skill 2.0`, `达尔文.skill`, or `github.com/alchaincyf/darwin-skill`.

- [ ] **Step 3: Apply controlled textual replacements in SKILL.md**

Use editor or scripted replacement to update only user-facing identity:

```text
darwin-skill -> pangu-skill
Darwin Skill -> Pangu Skill
Darwin.skill -> Pangu.skill
Darwin -> Pangu
darwin.skill -> pangu.skill
darwin -> pangu
达尔文.skill -> 盘古.skill
达尔文 -> 盘古
```

Expected: optimizer concepts, phase names, rubric weights, and academic references stay intact.

- [ ] **Step 4: Rewrite Darwin-specific author and ecosystem lines**

In `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md`, replace source-project promotion lines with neutral project text:

```markdown
### 学术依据 & Credits

- **SkillLens**（arXiv [2605.23899](https://arxiv.org/abs/2605.23899)）：9 维 rubric 的实证来源（LLM 自评 46.4% → 加 meta-skill 三维度后 73.8%）。
- **SkillOpt**（arXiv [2605.23904](https://arxiv.org/abs/2605.23904)）：validation-gated edits 形式化框架。
- **autoresearch**：[github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch)：自主实验循环与 git ratchet 思路来源。
- **Darwin Skill 2.0**：`pangu-skill` 的机制蓝本。本项目保留其优化器架构，并重写为 Pangu 品牌。
```

Expected: no source author bio, source repository footer, or source ecosystem promotional line remains in `SKILL.md`.

- [ ] **Step 5: Update result paths inside SKILL.md**

Ensure path examples in `SKILL.md` use:

```text
.skills/pangu-skill/results.tsv
pangu-skill/scripts/screenshot.mjs
pangu-skill/templates/result-card.html
```

Expected: no path example uses `.claude/skills/darwin-skill`.

- [ ] **Step 6: Verify SKILL.md identity**

Run:

```bash
sed -n '1,40p' /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md
rg -n "darwin-skill|Darwin Skill|Darwin\\.skill|达尔文|alchaincyf/darwin-skill|\\.claude/skills/darwin-skill|/Users/alchain" /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md
```

Expected: `sed` output shows `name: pangu-skill`. The `rg` command exits 1 with no output, except if a single explicit credit line mentions `Darwin Skill 2.0` as the source mechanism. If that credit line remains, it must not include the source repository or old paths.

- [ ] **Step 7: Commit SKILL.md rewrite**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu add SKILL.md
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu commit -m "feat: rewrite core skill as pangu optimizer"
```

Expected: commit succeeds.

---

### Task 3: Rewrite Test Prompts

**Files:**
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json`
- Test: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json`

- [ ] **Step 1: Replace test-prompts.json content**

Set `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json` to:

```json
[
  {
    "id": 1,
    "scenario": "典型场景：单 skill 优化",
    "prompt": "用 pangu-skill 优化 example-skill 这个 skill",
    "expected": "skill 应引导：Phase 0 检查 git/分支 → Phase 0.5 设计 2-3 个 test-prompts → Phase 1 spawn 独立 judge 评 9 维 rubric → 找最低维度（注意 dim2/3/4 相关簇）→ Phase 2 hill climbing（每轮 1 个维度，git ratchet）→ 检测触顶（连续 2 轮 Δ<2 自动 break）→ Phase 3 汇总 + 结果卡片"
  },
  {
    "id": 2,
    "scenario": "典型场景：全量评估",
    "prompt": "评估所有 skills 的质量",
    "expected": "skill 应执行 Phase 0.5-1：扫描所有 SKILL.md → 跑 runtime 中立性 gate → 用 9 维 rubric 打基线分 → 输出评分卡片（按分数排序，标注短板维度），不进入 Phase 2 优化循环"
  },
  {
    "id": 3,
    "scenario": "歧义/失败场景",
    "prompt": "我想让你帮我把这个 skill 改得更好一点",
    "expected": "skill 应识别为优化任务 → 询问优化范围（全量 / 单个）→ 检查异常（不在 git 仓库 / results.tsv 缺失等）按异常表 fallback → 设计测试 prompt 前展示给用户确认（检查点）"
  }
]
```

- [ ] **Step 2: Validate JSON**

Run:

```bash
python3 -m json.tool /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json >/tmp/pangu-test-prompts.json
```

Expected: command exits 0 and prints no error.

- [ ] **Step 3: Verify old prompt names are gone**

Run:

```bash
rg -n "darwin|Darwin|达尔文|huashu" /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json
```

Expected: command exits 1 with no output.

- [ ] **Step 4: Commit test prompts**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu add test-prompts.json
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu commit -m "test: add pangu skill behavior prompts"
```

Expected: commit succeeds.

---

### Task 4: Rewrite README Files

**Files:**
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README.md`
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README_EN.md`
- Test: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README.md`
- Test: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README_EN.md`

- [ ] **Step 1: Rewrite Chinese README as Pangu project page**

Edit `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README.md` with these required sections:

```markdown
<div align="right">

**[English](README_EN.md)** | 中文

</div>

# 盘古.skill 1.0

**像开辟系统一样重塑你的 Agent Skills。**

`pangu-skill` 是一个基于 Darwin Skill 2.0 机制复刻的 Agent Skill 优化器。它保留 Darwin 的 9 维评分、validation-gated edits、git ratchet 和 human-in-the-loop 检查点，同时将项目身份、文档、测试提示词和结果卡片重写为 Pangu 品牌。

```bash
npx skills add pangu-skill
```

## 核心能力

- 用 9 维 rubric 评估 `SKILL.md` 的结构和实测表现。
- 为每个 skill 设计或复用 `test-prompts.json`。
- 基线评估后再进入单维度优化循环。
- 使用独立 judge agent 评分；不可用时使用 dry-run 并标注风险。
- 用 git ratchet 保留提升，使用 `git revert` 回滚退步。
- 在关键阶段暂停，等待用户确认。
- 生成优化结果卡片。

## 优化循环

1. Phase 0：确认范围、检查 git、初始化结果表。
2. Phase 0.5：设计并确认测试 prompts。
3. Phase 1：按 9 维 rubric 做基线评估。
4. Phase 2：每轮只优化一个维度，验证后 keep 或 revert。
5. Phase 2.5：必要时做探索性重写。
6. Phase 3：汇总报告和结果卡片。

## 使用方式

```text
优化所有 skills
优化 example-skill 这个 skill
评估所有 skills 的质量
看看 skill 优化历史
```

## 设计来源

`pangu-skill` 的机制来源于 Darwin Skill 2.0，并继续采用 SkillLens、SkillOpt 与 autoresearch 启发的验证式优化框架。本项目不声称拥有新的实证结果；所有研究依据应以引用论文和源项目记录为准。

## License

MIT
```

Expected: Chinese README is Pangu-branded and does not advertise source author accounts or the old repository.

- [ ] **Step 2: Rewrite English README as Pangu project page**

Edit `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README_EN.md` with these required sections:

```markdown
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
```

- [ ] **Step 3: Remove README references to missing binary banners**

Run:

```bash
rg -n "assets/.*\\.(png|gif|svg)|raw.githubusercontent|github.com/alchaincyf|bookai|huasheng|花叔|达尔文|Darwin|darwin-skill" /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README.md /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README_EN.md
```

Expected: command exits 1 with no output, except `Darwin Skill 2.0` may appear in the design-source paragraph.

- [ ] **Step 4: Commit README rewrite**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu add README.md README_EN.md
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu commit -m "docs: rewrite readmes for pangu skill"
```

Expected: commit succeeds.

---

### Task 5: Rewrite References

**Files:**
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/runtime-neutrality.md`
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/skilllens-evidence.md`
- Test: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/runtime-neutrality.md`
- Test: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/skilllens-evidence.md`

- [ ] **Step 1: Update runtime-neutrality examples**

In `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/runtime-neutrality.md`, rewrite source-specific examples:

```text
花叔的 skills -> Agent Skills
nuwa-skill 因 README 写 -> a skill can be rejected if its README says
huashu-slides-codex -> example-codex-skill
跟 darwin-skill 配套 -> follows the pangu-skill optimization workflow
```

Keep the red-light scan command concept, but update the scan to include Pangu-relevant old-brand detection:

```bash
grep -nE "(在 Claude Code|Claude Code skill|Claude Code 用户|Cursor only|Codex 中|^\[!\[Claude Code|~/\.claude/skills/[a-z]|/plugin install\b|darwin-skill|达尔文)" SKILL.md README.md 2>/dev/null
```

- [ ] **Step 2: Update SkillLens evidence document**

In `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references/skilllens-evidence.md`:

```text
# SkillLens 实证基线 + darwin-skill 本机验证数据
```

becomes:

```text
# SkillLens Evidence Baseline For Pangu Skill
```

Keep research findings and historical case data as source-derived evidence, but add this note near the top:

```markdown
> This document preserves evidence inherited from Darwin Skill 2.0. `pangu-skill` uses these records as design rationale and does not claim new Pangu-specific empirical validation until such validation is run and logged.
```

Replace self-referential wording:

```text
对 darwin-skill 的意义 -> 对 pangu-skill 的意义
darwin-skill 在细粒度判别上仍有失效风险 -> pangu-skill inherits the same fine-grained judgment risk
darwin-skill (self-fix) -> Darwin Skill self-fix source record
```

- [ ] **Step 3: Verify old repository and author references are gone from references**

Run:

```bash
rg -n "alchaincyf/darwin-skill|bookai|huasheng|花叔的 skills|跟 darwin-skill 配套|\\.claude/skills/darwin-skill" /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/references
```

Expected: command exits 1 with no output.

- [ ] **Step 4: Commit references rewrite**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu add references/runtime-neutrality.md references/skilllens-evidence.md
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu commit -m "docs: adapt reference material for pangu skill"
```

Expected: commit succeeds.

---

### Task 6: Rewrite Result Card Templates And Screenshot Script

**Files:**
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates/result-card.html`
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates/result-card-dark.html`
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates/result-card-white.html`
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/scripts/screenshot.mjs`
- Test: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/scripts/screenshot.mjs`

- [ ] **Step 1: Replace result-card template brand strings**

In all `templates/*.html`, replace:

```text
Darwin Skill -> Pangu Skill
Darwin.skill -> Pangu.skill
Darwin -> Pangu
darwin-skill -> pangu-skill
github.com/alchaincyf/darwin-skill -> pangu-skill
by 花叔 -> by pangu-skill
huashu-proofreading -> example-skill
审校降AI味 -> Example Skill
```

Expected: templates display Pangu branding and neutral sample skill names.

- [ ] **Step 2: Replace screenshot script with portable implementation**

Set `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/scripts/screenshot.mjs` to:

```javascript
#!/usr/bin/env node
/**
 * Pangu Skill - result-card screenshot helper.
 *
 * Usage: node scripts/screenshot.mjs [html-file-path] [output-png-path]
 */

import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

const require = createRequire(import.meta.url);

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  try {
    ({ chromium } = require('playwright-core'));
  } catch {
    console.error('Screenshot failed: install playwright or playwright-core, then rerun this script.');
    process.exit(1);
  }
}

const htmlPath = process.argv[2] || new URL('../templates/result-card.html', import.meta.url).pathname;
const outputPath = process.argv[3] || new URL('../templates/result-card.png', import.meta.url).pathname;

async function screenshot() {
  const browser = await chromium.launch();

  try {
    const context = await browser.newContext({
      viewport: { width: 920, height: 1600 },
      deviceScaleFactor: 2,
    });

    const page = await context.newPage();
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1000);

    const card = page.locator('.card');
    await card.screenshot({
      path: outputPath,
      type: 'png',
    });

    const box = await card.boundingBox();
    console.log(`Screenshot complete: ${outputPath}`);
    console.log(`Card size: ${Math.round(box.width)}x${Math.round(box.height)}px CSS`);
    console.log(`Output size: ${Math.round(box.width * 2)}x${Math.round(box.height * 2)}px at 2x`);
  } finally {
    await browser.close();
  }

  if (process.platform === 'darwin' && process.env.PANGU_OPEN_RESULT !== '0') {
    execFileSync('open', [outputPath]);
  }
}

screenshot().catch((err) => {
  console.error('Screenshot failed:', err.message);
  process.exit(1);
});
```

Expected: no `/Users/alchain` hard-coded path remains.

- [ ] **Step 3: Verify template and script branding**

Run:

```bash
rg -n "Darwin|darwin|达尔文|alchaincyf|花叔|huashu|/Users/alchain" /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/templates /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/scripts
```

Expected: command exits 1 with no output.

- [ ] **Step 4: Syntax-check screenshot script**

Run:

```bash
node --check /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/scripts/screenshot.mjs
```

Expected: command exits 0.

- [ ] **Step 5: Commit templates and script**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu add templates scripts
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu commit -m "feat: adapt result cards for pangu skill"
```

Expected: commit succeeds.

---

### Task 7: Rewrite Editable Assets And Handle Promotional Pages

**Files:**
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*.svg`
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*.html`
- Modify or remove from public references: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*.png`
- Optional modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/docs/index.html`
- Optional modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/showcase.html`
- Test: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets`

- [ ] **Step 1: Replace brand text in editable SVG and HTML assets**

In `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*.svg` and `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*.html`, replace:

```text
darwin.skill -> pangu.skill
Darwin -> Pangu
达尔文.skill -> 盘古.skill
达尔文 -> 盘古
```

Expected: editable assets no longer render old brand text.

- [ ] **Step 2: Update rubric chart title from 8 dimensions to 9 dimensions**

In both:

```text
/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/chart-rubric.html
/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/chart-rubric-en.html
```

replace title text:

```text
8 维度评估体系 -> 9 维度评估体系
8-Dimension Evaluation Rubric -> 9-Dimension Evaluation Rubric
```

Expected: chart source matches the actual 9-dimension rubric.

- [ ] **Step 3: Remove public README references to stale binary images**

Run:

```bash
rg -n "assets/.*\\.(png|gif)" /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README.md /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README_EN.md /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md
```

Expected: command exits 1 with no output, unless the referenced PNG/GIF has been regenerated with Pangu branding.

- [ ] **Step 4: Decide promotional page scope**

If `docs/index.html` and `showcase.html` are kept, rewrite old-brand text with:

```text
Darwin -> Pangu
darwin -> pangu
达尔文 -> 盘古
Claude Code Skill 生态 -> Agent Skill ecosystem
```

If they are not needed in the first replica, leave them unreferenced from README and mark them as internal stale assets by adding this comment near the top of each file:

```html
<!-- Internal inherited page. Not part of the first public pangu-skill surface until fully rebranded. -->
```

Expected: README does not link to stale pages.

- [ ] **Step 5: Verify editable assets**

Run:

```bash
rg -n "darwin\\.skill|Darwin|达尔文|Claude Code Skill 生态" /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*.svg /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/assets/*.html /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/docs/index.html /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/showcase.html
```

Expected: command exits 1 with no output, except inherited internal page comments may exist if Task 7 Step 4 chose not to fully rebrand promotional pages.

- [ ] **Step 6: Commit asset changes**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu add assets docs/index.html showcase.html README.md README_EN.md SKILL.md
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu commit -m "docs: rebrand editable assets for pangu skill"
```

Expected: commit succeeds if files changed. If no tracked files changed, skip commit and note that Task 7 required no commit.

---

### Task 8: Final Verification And Cleanup

**Files:**
- Test: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/**`
- Modify: `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/.gitignore`

- [ ] **Step 1: Add `.DS_Store` to gitignore if system files are present**

If `git status --short` shows `.DS_Store`, create or update `/Users/liuzeyu03/Desktop/test/pangu-skill/pangu/.gitignore` with:

```gitignore
.DS_Store
```

Then run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu add .gitignore
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu commit -m "chore: ignore macos metadata"
```

Expected: `.DS_Store` no longer appears as an untracked file after commit.

- [ ] **Step 2: Validate JSON**

Run:

```bash
python3 -m json.tool /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/test-prompts.json >/tmp/pangu-test-prompts.final.json
```

Expected: command exits 0.

- [ ] **Step 3: Smoke-check SKILL frontmatter**

Run:

```bash
sed -n '1,12p' /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md
```

Expected output includes:

```text
name: pangu-skill
```

- [ ] **Step 4: Run residual old-brand scan**

Run:

```bash
rg -n "darwin-skill|Darwin\\.skill|darwin\\.skill|达尔文|alchaincyf/darwin-skill|\\.claude/skills/darwin-skill|/Users/alchain|bookai|huasheng|花叔" /Users/liuzeyu03/Desktop/test/pangu-skill/pangu -g '!assets/*.png' -g '!assets/*.gif' -g '!templates/result-card.png' -g '!.git/**'
```

Expected: no output, except an explicitly allowed `Darwin Skill 2.0` credit line in README/SKILL/reference text. If the allowed credit line appears, verify it is explanatory and not active branding, pathing, install command, or footer text.

- [ ] **Step 5: Run runtime red-light scan**

Run:

```bash
grep -nE "(在 Claude Code|Claude Code skill|Claude Code 用户|Cursor only|Codex 中|^\[!\[Claude Code|~/\.claude/skills/[a-z]|/plugin install\b)" /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/SKILL.md /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/README.md 2>/dev/null
```

Expected: command exits 1 with no output.

- [ ] **Step 6: Syntax-check screenshot script**

Run:

```bash
node --check /Users/liuzeyu03/Desktop/test/pangu-skill/pangu/scripts/screenshot.mjs
```

Expected: command exits 0.

- [ ] **Step 7: Review final diff against source-copy baseline**

Run:

```bash
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu log --oneline --decorate -10
git -C /Users/liuzeyu03/Desktop/test/pangu-skill/pangu status --short
```

Expected: recent commits show copy, rewrite, docs, references, templates/assets, and cleanup commits. `status --short` is empty.

- [ ] **Step 8: Final implementation summary**

Record this summary for the user:

```text
pangu-skill replica complete.
- Core optimizer behavior preserved from Darwin Skill 2.0.
- User-facing brand and paths rewritten to Pangu.
- Test prompts validated as JSON.
- Screenshot script no longer hard-codes source-machine paths.
- Runtime red-light scan passes.
- Old active Darwin branding removed from text surfaces.
```

Expected: summary matches actual verification output.

