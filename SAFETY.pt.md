# Segurança

[English](SAFETY.md) | [中文](SAFETY.zh.md) | Português

## Status experimental

O DeepSeek Harness é software experimental em pré-visualização para desenvolvedores. Ele não passou por uma auditoria de segurança e não deve ser tratado como seguro nem pronto para produção.

O projeto pode executar código e comandos gerados por modelos, carregar plugins de terceiros e acessar a rede, processos, credenciais e arquivos que lhe forem disponibilizados. Saída incorreta do modelo, defeitos, configuração errada, entrada maliciosa ou plugins não confiáveis podem danificar o computador host, modificar ou excluir arquivos, expor dados ou credenciais ou causar outros efeitos indesejados.

## Limitações do sandbox

Sandbox, prompts de aprovação e controles de permissão podem reduzir o risco, mas não garantem isolamento nem evitam danos. Mesmo restrições corretamente aplicadas não protegem recursos aos quais o projeto tem permissão de acessar.

Não confie no DeepSeek Harness como o único controle de segurança para cargas de trabalho não confiáveis.

## Uso responsável

- Execute o projeto com o menor privilégio e o menor acesso necessários.
- Prefira uma máquina virtual descartável, um contêiner ou um ambiente dedicado.
- Mantenha backups dos arquivos que o projeto pode acessar.
- Não exponha credenciais ou dados sensíveis a menos que você aceite o risco.
- Revise plugins, configuração e comandos propostos antes de permitir que sejam executados.

## Sem garantia nem responsabilidade

Use o DeepSeek Harness por sua conta e risco. O software é fornecido sem garantia, sob a [Licença MIT](LICENSE). Na extensão máxima permitida pela lei aplicável, os autores e detentores dos direitos autorais não são responsáveis por danos a computadores, perda ou exposição de dados, perda de arquivos ou outros danos decorrentes do uso do projeto.
