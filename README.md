# DeepSeek Harness · tradução pt-BR

[English](README.en.md) | [中文](README.zh-CN.md) | Português

> **Fork não oficial da comunidade.** Este repositório é um fork independente do [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) cujo objetivo é disponibilizar o projeto em **português brasileiro**: a interface e esta documentação. Ele **não** é produzido, endossado nem afiliado à [DeepSeek AI](https://deepseek.com). Para a versão e os lançamentos oficiais, use o [repositório original](https://github.com/deepseek-ai/deepseek-harness). Veja o [NOTICE](NOTICE.md) para os detalhes deste fork.

O DeepSeek Harness (`dsh`) é um harness de agente de código aberto desenvolvido pela [DeepSeek AI](https://deepseek.com). Neste fork, o projeto é oferecido com a **interface e a documentação em português brasileiro (pt-BR)**, enquanto o conteúdo técnico mantém o inglês como fonte autoritativa.

Ele é construído sobre uma arquitetura **tudo-é-um-plugin** e é movido pelo [Cordis](https://github.com/cordiverse/cordis), cujo design é descrito em [_A Programming Paradigm for Spatiotemporal Composability_](https://arxiv.org/abs/2608.25512).

Documentação oficial: [https://deepseek-harness.github.io/deepseek-harness/](https://deepseek-harness.github.io/deepseek-harness/)

## O que este fork oferece em pt-BR

- **Interface:** um pacote de idioma para a interface Web (`packages/client/locale-pt`). Depois de executar o projeto, escolha **Configurações → Geral → Idioma → Português (Brasil)**.
- **Documentação:** traduções em pt-BR adicionadas como arquivos paralelos (por exemplo `README.en.md`/docs) ao lado do conteúdo original em inglês, que é mantido intacto para facilitar o acompanhamento do upstream.

## Pré-visualização para desenvolvedores

O DeepSeek Harness está em _pré-visualização para desenvolvedores_ e itera rapidamente. **HAVERÁ MUDANÇAS QUE QUEBRAM COMPATIBILIDADE.**

Antes de executar o projeto, leia o [aviso de segurança](SAFETY.pt.md).

<a id="run"></a>

## Executar

### Executar a partir do `npm`

Instale o `Node.js` e execute:

```sh
npx @deepseek-ai/dsh web
```

O comando inicia a interface Web em `http://127.0.0.1:3080` por padrão e a abre no navegador padrão em uma execução local. Em uma execução via SSH, apenas a URL do host é impressa, pois o cliente SSH ou o editor é o dono do endereço encaminhado localmente. Use `--no-open` para executar o servidor sem abrir um navegador. Veja o [guia da interface Web](docs/user/guide/index.md).

### Executar a partir do código-fonte

Para executar a partir de um checkout do repositório:

```sh
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

`pnpm run build` prepara os artefatos do repositório. `pnpm dsh web` usa esses artefatos já construídos, sem reconstruí-los.

## Comunidade e suporte

- Envie feedback ou relatórios de bug pelo [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions).
- Adicione o tópico [`dsh-plugin`](https://github.com/topics/dsh-plugin) ao repositório do seu plugin para facilitar sua descoberta.
- Participe da <a href="https://discord.gg/Ycq5dCaS4">comunidade DeepSeek Harness no Discord</a>.

> Por se tratar de um fork de tradução, dúvidas e suporte sobre o produto oficial devem ser direcionados à comunidade upstream acima.

## Contribuir

Veja [CONTRIBUTING.md](CONTRIBUTING.md).

## Desenvolvimento

Comece pelo [guia de desenvolvimento](docs/development.md) e pela [documentação de arquitetura](docs/architecture.md).

Para agentes, siga o [AGENTS.md](AGENTS.md).

## Licença

[MIT](LICENSE)

As dependências de terceiros e suas licenças estão listadas em [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
