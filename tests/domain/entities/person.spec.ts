import { Person } from '@/domain/entities'

describe('Person', () => {
  it('Should create with phone number', () => {
    const sut = new Person(1, 'any_name', '123')

    expect(sut).toEqual({ id: 1, name: 'any_name', phone: '123' })
  })

  it('Should create without phone number', () => {
    const sut = new Person(1, 'any_name')

    expect(sut).toEqual({ id: 1, name: 'any_name', phone: undefined })
  })
})
