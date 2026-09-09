# Usar a interface Web

[English](index.md) | [中文](index.zh.md) | Português

Inicie a interface Web primeiro — a partir de um checkout, execute `pnpm dsh web` e o comando imprime a URL dela. Este guia começa depois que o servidor está em execução. O processo `dsh` usa o diretório de onde foi invocado como local padrão no sistema de arquivos, mas uma interface Web recém-aberta não tem espaço de trabalho selecionado até você adicionar um.

## Configurar um modelo

Abra **Configurações → Modelos**, insira uma [chave de API DeepSeek](https://platform.deepseek.com/) e salve. A rota de modelo fica utilizável imediatamente, sem reiniciar o servidor.

O [guia de configuração de modelos](./providers.md) cobre outros provedores e endpoints personalizados compatíveis com OpenAI.

## Escolher um espaço de trabalho

Clique em **Escolher espaço de trabalho**, adicione o diretório do projeto onde você iniciou o `dsh` e selecione-o. O editor de sessão permanece indisponível até que um espaço de trabalho seja selecionado.

## Executar uma tarefa

Inicie uma sessão e envie:

> Resuma este repositório e identifique seus principais pacotes.

O agente consegue ler e editar arquivos do espaço de trabalho, executar comandos, delegar trabalho e manter um plano. A interface Web pergunta antes de operações que exigem aprovação sob a política de permissão ativa.

## Continuar

- [Configurar modelos](./providers.md)
- [Usar o SDK Python](./python-sdk.md)
- [Usar outros modos de CLI](../../../apps/cli/README.md)
- [Desenvolver um plugin](../develop/basic/index.md)
