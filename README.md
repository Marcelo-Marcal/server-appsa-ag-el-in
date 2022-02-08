# AGENDAMENTO ELETRÔNICO INTEGRADO (SulAmérica)

Criando a API com Node.JS

A plataforma de Agendamento Eletrônico Integrado tem como objetivo disponibilizar serviços de
agendamento direto, ou seja, dado um hub de parceiros conectados à mesma, os beneficiários têm a opção
de selecionar especificamente a unidade, médico e agenda desejada.
A conexão de novos parceiros à plataforma é totalmente transparente ao beneficiário, sendo perceptivo
apenas o aumento da rede médica disponível ao mesmo.

Seleção da Especialidade > Seleção de Unidade (local físico) > Seleção de Médico e Horário > Confirmação

Toda a integração se dá por API’s seguindo o padrão REST, retornando JSON como respostas, códigos HTTP e
autenticação.
Todos os passos descritos no documento abaixo são importantes para que a integração se dê por completa,
sendo compostos pelas seguintes APIs:

- Obter Unidades - Ok
- Obter Profissionais - Ok
- Obter Agendas Disponíveis
- Criar Agendamento - 
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

Method GET

Path /api/v1/professionals

Retornou médicos ou técnicos com sucesso.
```
{
  "data": [
    {
      "id": "10001",
      "unitId": "1",
      "name": "Leandro Augusto Franco Nascimento",
      "gender": "MALE",
      "document": {
        "type": "CRM",
        "state": "SP",
        "number": "129128"
      },
      "photo": "https://s2pics-dev.s3.amazonaws.com/profissionais/fotos/103038_s.jpg"
    }
  ]
}
```
Não existem médicos ou técnicos para serem retornados, porém a requisição retorna com sucesso.
```
{
  "data": []
}
```

Method GET

Path /api/v1/slots?date={yyyy-MM-dd}

schedule time
diary schedule
schedule

Query Params date

Retornou horários de agendas com sucesso.
```
{
  "data": [
    {
      "id": "20001",
      "professionalId": "10001",
      "unitId": "1",
      "productId": "9000001",
      "healthPlan": "DiretoSP",
      "date": "2021-01-01T11:30:00",
      "requirement": {
        "gender": "MALE",
        "minAge": 18,
        "maxAge": 50
      }
    }
  ]
}
```
Não existem horários de agendas para serem retornados, porém a requisição retorna com sucesso.
```
{
  "data": []
}
```
QUERY:
```

--Obter Profissionais
                                                                  
SELECT DISTINCT (agenda_central.cd_prestador),prestador.nm_prestador, conselho.ds_conselho, conselho.cd_uf, prestador.nr_documento
FROM dbamv.agenda_central 
LEFT JOIN dbamv.prestador ON prestador.CD_PRESTADOR = agenda_central.CD_PRESTADOR
LEFT JOIN dbamv.conselho ON conselho.CD_CONSELHO = prestador.CD_CONSELHO
WHERE agenda_central.cd_prestador IS NOT NULL


--Obter Agendas Disponiveis

SELECT it_agenda_central.cd_it_agenda_central,agenda_central.cd_prestador,agenda_central.cd_unidade_atendimento,it_agenda_central.hr_agenda,'ALL' Genero 
FROM agenda_central    
LEFT JOIN dbamv.it_agenda_central ON it_agenda_central.cd_agenda_central= agenda_central.cd_agenda_central
WHERE sn_ativo = 'S'


--Obter Unidades

SELECT DISTINCT (agenda_central.cd_unidade_atendimento),unidade_atendimento.ds_unidade_atendimento,multi_empresas.nr_cep,multi_empresas.nm_bairro,cidade.nm_cidade,multi_empresas.ds_endereco,multi_empresas.cd_uf,multi_empresas.nr_telefone_empresa,'PHYSICAL' Tipo  
FROM dbamv.agenda_central
LEFT JOIN dbamv.multi_empresas ON multi_empresas.cd_multi_empresa= agenda_central.cd_multi_empresa
LEFT JOIN dbamv.unidade_atendimento ON unidade_atendimento.cd_unidade_atendimento= agenda_central.cd_unidade_atendimento
LEFT JOIN dbamv.cidade ON cidade.cd_cidade= multi_empresas.cd_cidade
```




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