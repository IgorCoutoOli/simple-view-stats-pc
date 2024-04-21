# Sistema de Monitoramento de RAM

Este � um simples sistema de monitoramento de RAM implementado em Node.js, que fornece estat�sticas sobre o sistema, incluindo informa��es sobre a quantidade total de RAM, RAM livre, uso da RAM, sistema operacional e arquitetura do sistema.

## Como usar

1. Certifique-se de ter o Node.js instalado em seu sistema. Voc� pode baix�-lo em https://nodejs.org/.

2. Clone este reposit�rio em seu ambiente de desenvolvimento:
- `git clone https://github.com/seu-usuario/monitor-ram.git`

3. Inicie o servidor executando o seguinte comando:
- `node .`

5. O servidor estar� funcionando na porta 4001 por padr�o. Acesse `http://localhost:4001` em seu navegador ou fa�a solicita��es diretamente ao endpoint `/stats` para obter as estat�sticas do sistema.

## Estrutura do Projeto

- `core.js`: Este arquivo cont�m o c�digo do servidor HTTP que cria um endpoint `/stats` para fornecer as estat�sticas do sistema.
- `viewStats.js`: Este arquivo cont�m a l�gica para coletar as estat�sticas do sistema, incluindo a quantidade total de RAM, RAM livre, uso da RAM, sistema operacional e arquitetura do sistema.
