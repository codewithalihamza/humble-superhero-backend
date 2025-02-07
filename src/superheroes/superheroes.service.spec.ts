import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('should add and retrieve superheroes', () => {
    service.create({ name: 'Hero', superpower: 'Flight', humilityScore: 8 });
    service.create({ name: 'HumbleMan', superpower: 'Kindness', humilityScore: 10 });
    const result = service.findAll();
    expect(result[0].name).toBe('HumbleMan');
  });
});
