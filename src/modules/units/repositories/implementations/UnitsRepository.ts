import { Unit } from '../../model/Unit';
import { IUnitsRepository } from '../IUnitsRepository';
import { db } from '../../../../database/db';
import knex from "../../../../database/db.js";


class UnitsRepository implements IUnitsRepository {

  private static INSTANCE: UnitsRepository;

  private constructor() {
  }
  public static getInstance(): UnitsRepository {
    if (!UnitsRepository.INSTANCE) {
      UnitsRepository.INSTANCE = new UnitsRepository();
    }
    return UnitsRepository.INSTANCE;
  }

  // module.exports = {
  //   async store(request, response) {

  // const integrador = await db.integrador();

  // class UnitsRepository implements IUnitsRepository {

  //   private static INSTANCE: UnitsRepository;

  //   private constructor() {
  //   }
  //   public static getInstance(): UnitsRepository {
  //     if (!UnitsRepository.INSTANCE) {
  //       UnitsRepository.INSTANCE = new UnitsRepository();
  //     }
  //     return UnitsRepository.INSTANCE;
  // }

  // list(): Unit[] {
  // const integrador = await db.integrador()

  // return [
  //   {
  //     id: "1",
  //     name: "Metrô Sacomã",
  //     shortName: "Sacomã",
  //     address: {
  //       postalCode: "04208002",
  //       neighborhood: "Ipiranga",
  //       city: "São Paulo",
  //       state: "SP",
  //       street: "Rua Silva Bueno, 2201 - Próximo ao terminal Sacomã - Ipiranga"
  //     },
  //     phone: "1140101210",
  //     descriptionOperation: "2ª a sábado das 6:55 às 19h",
  //     latitude: -23.19943700,
  //     longitude: -46.20031300,
  //     type: "VIRTUAL"
  //   }
  // ];
  // try {
  // const units: Unit[] = db("dbamv.agenda_central").select("*")

  // return units
  const integrador = async () => {
    let result = await db.raw(`select agenda_central.cd_unidade_atendimento`);

    const res = await knex.raw(`
        SELECT DISTINCT(agenda_central.cd_unidade_atendimento),
          unidade_atendimento.ds_unidade_atendimento,
          multi_empresas.nr_cep,
          multi_empresas.nm_bairro,
          cidade.nm_cidade,
          multi_empresas.ds_endereco,
          multi_empresas.cd_uf,
          multi_empresas.nr_telefone_empresa,
          'PHYSICAL' Tipo 
        FROM dbamv.agenda_central
        LEFT JOIN dbamv.multi_empresas ON multi_empresas.cd_multi_empresa = agenda_central.cd_multi_empresa
        LEFT JOIN dbamv.unidade_atendimento ON unidade_atendimento.cd_unidade_atendimento = agenda_central.cd_unidade_atendimento
        LEFT JOIN dbamv.cidade ON cidade.cd_cidade = multi_empresas.cd_cidade        
        `)

    const date = {
      data: [
        {
          id: result[0].CD_UNIDADE_ATENDIMENTO,
          name: result[0].DS_UNIDADE_ATENDIMENTO,
          shortName: 'aa',
          address: {
            postalCode: result[0].NR_CEP,
            neighborhood: result[0].NM_BAIRRO,
            city: result[0].NM_CIDADE,
            state: result[0].CD_UF,
            street: result[0].DS_ENDERECO
          },
          phone: result[0].NR_TELEFONE_EMPRESA,
          descriptionOperation: '2ª a sábado das 6:55 às 19h',
          latitude: '-23.19943700',
          longitude: '-46.20031300',
          type: result[0].TIPO
        }
      ]
    };


    res.json(date)
  })
