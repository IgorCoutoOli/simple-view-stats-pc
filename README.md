# Sistema de Monitoramento de RAM

Este é um simples sistema de monitoramento de RAM implementado em Node.js, que fornece estatísticas sobre o sistema, incluindo informações sobre a quantidade total de RAM, RAM livre, uso da RAM, sistema operacional e arquitetura do sistema.

## Como usar

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em https://nodejs.org/.

2. Clone este repositório em seu ambiente de desenvolvimento:
- `git clone https://github.com/seu-usuario/monitor-ram.git`

3. Inicie o servidor executando o seguinte comando:
- `node .`

5. O servidor estará funcionando na porta 4001 por padrão. Acesse `http://localhost:4001` em seu navegador ou faça solicitações diretamente ao endpoint `/stats` para obter as estatísticas do sistema.

## Estrutura do Projeto

- `core.js`: Este arquivo contém o código do servidor HTTP que cria um endpoint `/stats` para fornecer as estatísticas do sistema.
- `viewStats.js`: Este arquivo contém a lógica para coletar as estatísticas do sistema, incluindo a quantidade total de RAM, RAM livre, uso da RAM, sistema operacional e arquitetura do sistema.
