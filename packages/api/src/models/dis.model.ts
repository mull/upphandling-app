import { Entity, hasMany, model, property } from '@loopback/repository'
import { Company } from '.'
import { Participation } from './participation.model'

@model()
export class Dis extends Entity {
  @property({
    type: 'string',
    id: true,
    required: false,
  })
  id?: string

  @property({
    type: 'string',
    required: true,
  })
  title: string

  @property({
    type: 'date',
    required: true,
  })
  startDate: string

  @property({
    type: 'string',
    required: true,
  })
  organisation: string

  @property({
    type: 'string',
  })
  description?: string

  @property({
    type: 'string',
  })
  status?: string

  @property({
    type: 'string',
  })
  repo?: string

  @property({
    type: 'number',
  })
  stars?: number

  @property({
    type: 'array',
    itemType: 'string',
  })
  tech?: string[]

  @property({
    type: 'array',
    itemType: 'string',
  })
  services?: string[]

  @hasMany(() => Company, { through: { model: () => Participation } })
  participatingCompanies: Company[]

  constructor(data?: Partial<Dis>) {
    super(data)
  }
}

export interface DisRelations {
  // describe navigational properties here
}

export type DisWithRelations = Dis & DisRelations
