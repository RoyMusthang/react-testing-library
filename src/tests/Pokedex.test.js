import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Testa o component Pokedex', () => {
  beforeEach(() => renderWithRouter(<App />));

  it('Testa se existe um h2 "Encountered pokémons" na tela', () => {
    const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(h2).toBeDefined();
  });

  it('Testa se é exibido o próximo Pokémon da lista', () => {
    const buttonNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(buttonNext).toBeDefined();

    const firstPoke = pokemons[0].name;
    pokemons.forEach((pokemon) => {
      expect(screen.getByText(`${pokemon.name}`)).toBeDefined();
      userEvent.click(buttonNext);
    });
    expect(screen.getByText(`${firstPoke}`)).toBeDefined();
  });

  it('Testa é renderizado apenas um por vez', () => {
    const pokemon = screen.getAllByTestId('pokemon-name');
    expect(pokemon.length).toBe(1);
  });

  it('Testa se a Pokédex possui os botões de filtro', () => {
    const typePokemon = pokemons.map((pokemon) => pokemon.type);
    const types = typePokemon.filter((type, index) => typePokemon.indexOf(type) === index);

    const allBtn = screen.getByRole('button', { name: /All/i });
    expect(allBtn).toBeDefined();
    const btnType = screen.getAllByTestId('pokemon-type-button');
    expect(btnType).toBeDefined();
    types.forEach((type) => {
      expect(allBtn).toBeDefined();
      const btnTypePk = screen.getByRole('button', { name: type });
      expect(btnTypePk).toBeDefined();
      userEvent.click(btnTypePk);
    });
    userEvent.click(allBtn);
    expect(screen.getByText(`${pokemons[0].name}`)).toBeDefined();
  });
});
