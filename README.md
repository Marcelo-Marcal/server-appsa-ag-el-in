# AGENDAMENTO ELETRÔNICO INTEGRADO (SulAmérica)


Criando a API com Node.JS

Configurando ts-node-dev

Instalação do Eslint

Debugando a aplicação
```
{
  "type": "node",
  "request": "attach",
  "name": "Launch Program",
  "skipFiles": ["<node_internals>/**"],
  "outFiles": ["${workspaceFolder}/**/*.js"]
}
```


A plataforma de Agendamento Eletrônico Integrado tem como objetivo disponibilizar serviços de
agendamento direto, ou seja, dado um hub de parceiros conectados à mesma, os beneficiários têm a opção
de selecionar especificamente a unidade, médico e agenda desejada.
A conexão de novos parceiros à plataforma é totalmente transparente ao beneficiário, sendo perceptivo
apenas o aumento da rede médica disponível ao mesmo.

Seleção da Especialidade > Seleção de Unidade (local físico) > Seleção de Médico e Horário > Confirmação

Atualmente a SulAmérica possui uma plataforma de Agendamento capaz de “plugar” parceiros à sua jornada
de agendamento eletrônico. Tal plataforma se integra com os parceiros através de API’s, que são
disponibilizadas pelos mesmos e acessadas pela plataforma de tempos em tempos para coletar as
informações (jobs), ou seja, a mesma acionará as APIs do parceiro para buscar as informações necessárias,
que serão parametrizadas conforme necessidade.
Uma observação importante é que o parceiro precisa estar preparado para não ter problemas de
performance quando as API’s forem acionadas.


Toda a integração se dá por API’s seguindo o padrão REST, retornando JSON como respostas, códigos HTTP e
autenticação.
Todos os passos descritos no documento abaixo são importantes para que a integração se dê por completa,
sendo compostos pelas seguintes APIs:

- Obter Unidades
- Obter Profissionais
- Obter Agendas Disponíveis
- Criar Agendamento
- Cancelar Agendamento
- Obter Detalhes de Especialidades (Verificar necessidade)

Descrição técnica: Essa API é responsável por retornar as unidades médicas (local físico de atendimento ao
beneficiário) disponíveis para agendamentos de consultas.

Method GET
Path /api/v1/units

Retornou unidades com sucesso.
```
{
  "data": [
    {
      "id": "1",
      "name": "Metrô Sacomã",
      "shortName": "Sacomã",
      "address": {
        "postalCode": "04208002",
        "neighborhood": "Ipiranga",
        "city": "São Paulo",
        "state": "SP",
        "street": "Rua Silva Bueno, 2201 - Próximo ao terminal Sacomã - Ipiranga"
      },
      "phone": "1140101210",
      "descriptionOperation": "2ª a sábado das 6:55 às 19h",
      "latitude": -23.19943700,
      "longitude": -46.20031300,
      "type": "VIRTUAL"
    }
  ]
}
```

Não existem unidades para serem retornadas, porém a requisição retorna com sucesso.
```
{
  "data": []
}
```

