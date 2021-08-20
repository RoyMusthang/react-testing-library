describe('Testes do componente App.js', () => {
  test('Verifica se existe um link "Home"', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /Home/i });
    expect(home).toBeDefined();
  });

  it('Testa redirecionamento para a URL "/"', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /Home/i });
    expect(home).toBeDefined();
    userEvent.click(home);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('Verifica se existe um link "About"', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /About/i });
    expect(about).toBeDefined();
  });

  it('Testa redirecionamento para a URL "/about"', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /About/i });
    expect(about).toBeDefined();
    userEvent.click(about);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  it('Verifica se existe um link "Favorite Pokémons"', () => {
    renderWithRouter(<App />);
    const favoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favoritePokemons).toBeDefined();
  });

  it('Testa redirecionamento para a URL "/favorites"', () => {
    const { history } = renderWithRouter(<App />);
    const favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favorite).toBeDefined();
    userEvent.click(favorite);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });

  it('Testa pagina "Not Found"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/page-not-found');
    const pageNotFound = screen.getByText('Page requested not found');
    expect(pageNotFound).toBeDefined();
  });
});
