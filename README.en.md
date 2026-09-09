# DeepSeek Harness · pt-BR translation

[Português](README.md) | English | [中文](README.zh-CN.md)

> **Unofficial community fork.** This repository is an independent fork of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) whose purpose is to make the project available in **Brazilian Portuguese**: the interface and this documentation. It is **not** produced, endorsed by, or affiliated with [DeepSeek AI](https://deepseek.com). For the official version and releases, use the [upstream repository](https://github.com/deepseek-ai/deepseek-harness). See [NOTICE](NOTICE.md) for the details of this fork.

DeepSeek Harness (`dsh`) is an open-source agent harness developed by [DeepSeek AI](https://deepseek.com). In this fork it is offered with the **interface and documentation in Brazilian Portuguese (pt-BR)**, while technical content keeps English as the authoritative source.

It is built on an **everything-is-a-plugin** architecture and powered by [Cordis](https://github.com/cordiverse/cordis), whose design is described in [_A Programming Paradigm for Spatiotemporal Composability_](https://arxiv.org/abs/2608.25512).

Official documentation: [https://deepseek-harness.github.io/deepseek-harness/](https://deepseek-harness.github.io/deepseek-harness/)

## What this fork offers in pt-BR

- **Interface:** a language pack for the Web UI (`packages/client/locale-pt`). After running the project, choose **Settings → General → Language → Português (Brasil)**.
- **Documentation:** pt-BR translations added as parallel files next to the original English content, which is kept intact so the fork stays easy to sync with upstream.

## Developer preview

DeepSeek Harness is in _developer preview_ and iterating rapidly. **THERE WILL BE COMPATIBILITY-BREAKING CHANGES.**

Review the [safety notice](SAFETY.md) before running the project.

## Run

### Run from `npm`

Install `Node.js`, then run:

```sh
npx @deepseek-ai/dsh web
```

The command starts the Web UI at `http://127.0.0.1:3080` by default and opens it in the default browser for a local launch. An SSH launch only prints the host URL because the SSH client or editor owns the local forwarded address. Pass `--no-open` to run the server without opening a browser. See [Web UI guide](docs/user/guide/index.md).

### Run from source

To run from a repository checkout:

```sh
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

`pnpm run build` prepares the repository artifacts. `pnpm dsh web` uses those built artifacts without rebuilding.

## Community and support

- Submit feedback or bug reports through [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions).
- Add the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic to your plugin repository for discoverability.
- Join the <a href="https://discord.gg/Ycq5dCaS4">DeepSeek Harness Discord community</a>.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Development

Start with the [development guide](docs/development.md) and [architecture documentation](docs/architecture.md).

For agents, follow [AGENTS.md](AGENTS.md).

## License

[MIT](LICENSE)

Third-party dependencies and their licenses are disclosed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
