import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { SuperheroesService } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
    constructor(private readonly superheroesService: SuperheroesService) { }

    @Post()
    create(@Body() createSuperheroDto: CreateSuperheroDto) {
        return this.superheroesService.create(createSuperheroDto);
    }

    @Get()
    findAll() {
        return this.superheroesService.findAll();
    }
}
