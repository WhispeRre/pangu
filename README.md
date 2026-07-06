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
