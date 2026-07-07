<div align="right">

**[English](README_EN.md)** | 中文

</div>

# 盘古.skill 1.0

**用验证循环重塑你的 Agent Skills。**

`pangu-skill` 是一个面向 Agent Skill 的质量评估与优化 skill。它把一个 `SKILL.md` 当作可持续改进的工作资产：先建立测试提示词和基线评分，再针对短板做小步修改，用实测或干跑验证结果，最后由用户确认保留还是回滚。

它不是单纯检查格式的 linter。它关注两个问题：

- 这个 skill 写得是否清楚、具体、可执行？
- 带上这个 skill 后，agent 的实际输出有没有变好？

```bash
npx skills add WhispeRre/pangu@pangu-skill
```

---

## 为什么做这个

Agent Skills 越多，维护成本越高。一个团队有十几个甚至几十个 skills 时，靠人工逐个审查很容易漏掉三类问题：

- 文档结构看起来完整，但关键失败路径没有写清楚。
- 指令很长，但缺少可执行参数、边界条件和检查点。
- 格式评分不错，但真实任务输出并没有比 baseline 更好。

`pangu-skill` 的目标是让 skill 优化变成一个可追踪、可验证、可回滚的过程。每次只改一个核心资产，每次都留下记录，每次都让用户在关键节点做最终判断。

---

## 核心循环

```text
评估 → 设计测试 → 定位短板 → 小步优化 → 验证输出 → 用户确认 → 保留或回滚
```

这套循环由 5 个阶段组成：

1. **Phase 0：初始化**  
   确认优化范围，检查 git 状态，初始化或读取 `results.tsv`。

2. **Phase 0.5：测试提示词设计**  
   为目标 skill 准备 2-3 个典型用户 prompt，先确认测试方向，再进入评分。

3. **Phase 1：基线评估**  
   按 9 维 rubric 评估 `SKILL.md`，并运行 runtime 中立性检查。

4. **Phase 2：验证式优化**  
   每轮只改一个主要短板。改完后重新评分和验证，变好就 keep，退步就 `git revert`。

5. **Phase 3：总结报告**  
   汇总分数变化、保留/回滚记录、测试模式和主要改进点。

---

## 五条原则

| # | 原则 | 说明 |
|---|---|---|
| 01 | 单一可编辑资产 | 一轮只优化一个 `SKILL.md`，让变化可归因。 |
| 02 | 结构 + 效果双评估 | 不只看写法，也看带 skill 后的输出质量。 |
| 03 | 测试提示词先行 | 没有 test prompts，就不做效果评分。 |
| 04 | Git ratchet | 只保留明确改善的提交，退步用 `git revert` 回滚。 |
| 05 | 人在回路 | 基线、测试方向、关键改动和结果都需要用户确认。 |

---

## 9 维评估体系

`pangu-skill` 使用总分 100 的 9 维 rubric：

| 维度 | 关注点 |
|---|---|
| Frontmatter 质量 | name、description、触发词是否清楚 |
| 工作流清晰度 | 步骤是否线性、可执行、有输入输出 |
| 失败模式编码 | 是否写明失败条件、fallback 和恢复路径 |
| 检查点设计 | 关键决策前是否有显式 STOP/CHECKPOINT |
| 可执行具体性 | 是否避免空泛措辞，给出参数、格式、示例 |
| 资源整合度 | references、scripts、templates 是否路径可达 |
| 整体架构 | 是否不冗余、不遗漏、层次清楚 |
| 实测表现 | 带 skill 后的输出是否比 baseline 更好 |
| 反例与黑名单 | 是否明确说明不要做什么和高风险动作 |

其中“实测表现”权重最高，因为一个 skill 写得再漂亮，如果不能改善实际输出，就不算真正有效。

---

## 使用方式

```text
优化所有 skills
优化 example-skill 这个 skill
评估所有 skills 的质量
看看 skill 优化历史
```

常见输出包括：

- 基线评分表
- 测试提示词列表
- 最弱维度诊断
- 单轮改进方案
- keep / revert 决策记录
- 汇总报告和结果卡片

---

## 项目结构

```text
README.md / README_EN.md         项目说明
pangu-skill/SKILL.md             核心工作流和评分规则
pangu-skill/test-prompts.json    pangu-skill 自测提示词
pangu-skill/references/          runtime 中立性检查与 rubric 依据
pangu-skill/templates/           结果卡片模板
pangu-skill/scripts/             结果卡片截图脚本
pangu-skill/package.json         截图脚本的 Node 依赖入口
```

结果卡片截图脚本依赖 Playwright。首次使用前运行：

```bash
cd pangu-skill
npm install
```

---

## 设计来源

`pangu-skill` 的设计吸收了三类思路：

- **SkillLens**：强调失败模式编码、可执行具体性、风险动作黑名单等 meta-skill 维度。
- **SkillOpt**：强调 validation-gated edits，即每次修改都需要验证后才能保留。
- **autoresearch**：强调自主实验循环和 git ratchet，只保留可测量的改进。

这些来源提供了方法论基础；`pangu-skill` 将它们组织成一个可在 Agent Skill 日常维护中使用的优化流程。

---

## License

MIT. See [LICENSE](LICENSE).
