import React from 'react';
import { screen, render } from '@testing-library/react';
import About from '../components/About';

describe('Testa o component About', () => {
  beforeEach(() => render(<About />));

  it('Testa se "About" exibe infos sobre a pokédex', () => {
    const about = screen.getByText(/About Pokédex/i);
    expect(about).toBeDefined();
  });

  it('Verifica se há um heading h2 com o texto "About Pokédex"', () => {
    const h2 = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(h2).toBeDefined();
  });

  it('Verifica se há dois parágrafos com o texto sobre a Pokédex', () => {
    const paragraphs = screen.getAllByText(/Pokémons/i);
    const size = 2;
    expect(paragraphs.length).toBe(size);
  });

  it('Verifica se há uma imagem na pagina', () => {
    const img = screen.getByRole('img', { name: /Pokédex/i });
    const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(img).toBeDefined();
    expect(img.src).toBe(src);
  });
});
