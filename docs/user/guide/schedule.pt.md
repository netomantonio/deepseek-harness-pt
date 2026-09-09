# Agendar lembretes locais da sessão

[English](schedule.md) | [中文](schedule.zh.md) | Português

Este overlay faz com que um processo `dsh web` opte pelos lembretes de Schedule sem mudar a composição Web padrão enviada:

```sh
dsh web --patch apps/cli/config/examples/schedule/cordis.yml
```

O overlay atual suporta lembretes criados com um `after_seconds` inteiro positivo, um destino `at` absoluto ou um intervalo de `every_seconds` de taxa fixa de pelo menos 300 segundos. O modelo os gerencia por meio de `schedule_create`, `schedule_list` e `schedule_delete`; todo resultado identifica a entrega como `session-local`.

Com este overlay ativado, uma Sessão aberta com lembretes ativos mostra um catálogo somente leitura no cabeçalho da conversa. Ele lista o prompt completo, o status agendado ou em atraso, a cadência única ou de repetição exata, o horário alvo local do navegador e o tempo relativo. A barra lateral também coloca um alarme não interativo após o título das linhas agrupadas, planas e de busca quando o valor de projeção atualmente disponível não está vazio. Essas superfícies nunca criam, editam, excluem nem confirmam lembretes, e o alarme em cache de uma Sessão fria pode estar brevemente ausente ou desatualizado.

O navegador anexa seu fuso IANA a cada prompt. O contexto de tempo informa ao modelo para interpretar datas e horas não qualificadas de outra forma no fuso do navegador daquela requisição. Essa suposição pertence apenas à interpretação em linguagem natural: `schedule_create.at` deve ser uma data-hora RFC 3339 estrita com `Z` ou um deslocamento numérico, ou `{ date, time, time_zone }` com um fuso `UTC` ou Área/Localização IANA explícito. O Schedule não mantém nem infere um fuso padrão da Sessão. Lacunas de horário de verão são rejeitadas, sobreposições escolhem o primeiro instante e os registros bem-sucedidos mantêm apenas o alvo UTC resultante.

O log original da Sessão é o dono de cada lembrete. Um Agente raiz ativo espera até ficar totalmente ocioso e então enfileira um turno de acompanhamento normal naquela conversa. Ele nunca desvia o trabalho atual e não adiciona recibo nem cartão de lembrete separados. Fechar o processo ou deixar a Sessão fria interrompe o temporizador em memória sem excluir o registro; reabrir a mesma Sessão restaura a espera e entrega um lembrete em atraso. Ler o histórico frio nunca o ativa, e uma ramificação não herda os lembretes do pai.

Todos os lembretes permanecem alinhados ao momento de criação. Se um estiver em atraso, apenas sua ocorrência devida mais recente é apresentada e o próximo alvo permanece na sequência original de taxa fixa. Todos os registros distintos `Every` em atraso na mesma decisão ociosa são combinados em um único acompanhamento com uma ocorrência cada; intervalos perdidos não criam acúmulo. One-shots devidos são executados antes desse lote. Expressões de calendário e Cron não são suportadas.

Operações de criação e exclusão real só confirmam sucesso depois que a persistência da Sessão confirma seu prefixo de evento. O Schedule não fornece notificação externa por navegador, sistema operacional, e-mail, SMS ou outro meio. Um despacho durável registra que o acompanhamento foi enfileirado; ele não confirma o sucesso do modelo nem o recebimento pelo usuário.
