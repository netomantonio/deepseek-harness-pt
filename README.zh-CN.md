# DeepSeek Harness · pt-BR 翻译

[Português](README.md) | [English](README.en.md) | 中文

> **非官方社区分支。** 本仓库是 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的一个独立 fork，目的是以**巴西葡萄牙语**提供本项目（界面与文档）。它与 [DeepSeek AI](https://deepseek.com) 无隶属、未被其背书。官方版本请使用[上游仓库](https://github.com/deepseek-ai/deepseek-harness)。详见 [NOTICE](NOTICE.md)。

DeepSeek Harness（`dsh`）是由 [DeepSeek AI](https://deepseek.com) 开发的开源 agent harness（智能体框架）。在此 fork 中，项目的**界面与文档以巴西葡萄牙语提供**，技术内容仍以英文为权威来源。

它构建于**一切皆插件**的架构之上，由 [Cordis](https://github.com/cordiverse/cordis) 驱动，其设计参见论文 [_A Programming Paradigm for Spatiotemporal Composability_](https://arxiv.org/abs/2608.25512)。

官方文档：[https://deepseek-harness.github.io/deepseek-harness/](https://deepseek-harness.github.io/deepseek-harness/)

## 此 fork 以 pt-BR 提供的内容

- **界面：** Web UI 语言包（`packages/client/locale-pt`）。运行后选择 **设置 → 常规 → 语言 → Português (Brasil)**。
- **文档：** 以平行文件形式添加的 pt-BR 翻译（如 `README.en.md`/docs），原始英文内容保持不变，便于与上游同步。

## 开发者预览

DeepSeek Harness 处于 _开发者预览_ 阶段，正在快速迭代。**未来将出现破坏兼容性的变更。**

运行本项目前，请阅读[安全说明](SAFETY.md)。

## 运行

### 通过 `npm` 运行

安装 `Node.js`，然后运行：

```sh
npx @deepseek-ai/dsh web
```

该命令默认会在 `http://127.0.0.1:3080` 启动 Web UI，本机启动时还会用默认浏览器打开页面。通过 SSH 启动时只打印宿主机 URL。传入 `--no-open` 可仅运行服务器而不打开浏览器。详见 [Web UI 指南](docs/user/guide/index.md)。

### 从源码运行

如需从仓库源码运行：

```sh
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

`pnpm run build` 会准备仓库产物。`pnpm dsh web` 会直接使用这些已构建产物，不会重新构建。

## 参与贡献

参见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 开发

请先阅读[开发指南](docs/development.md)与[架构文档](docs/architecture.md)。

面向 agent：请遵循 [AGENTS.md](AGENTS.md)。

## 许可证

[MIT](LICENSE)

第三方依赖及其许可证见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
