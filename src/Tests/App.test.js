// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
// import renderWithRouter from '../renderWithRouter';

// describe('Verifica funcionamento de links presentes no componente App', () => {
//   test('Verifica rota após clicar em About', async () => {
//     const { history } = renderWithRouter(<App />);
//     const user = userEvent.setup();
//     const aboutLink = screen.getByRole('link', { name: 'Sobre' });
//     expect(aboutLink).toBeInTheDocument();
//     await user.click(aboutLink);
//     const { pathname } = history.location;
//     expect(pathname).toBe('/about');
//     expect(screen.getByText(/naturalidade/i)).toBeInTheDocument();
//   });
// });
