import { ThemeProvider } from 'styled-components';
import RoutesPage from './views/routes';
import dark from './views/styles/themes/dark';
import light from './views/styles/themes/light';
import { Container } from './views/widgets/container';
import React from 'react';
import ThemeContainer from './views/contents/theme';
import usePeristedState from './utils/useperisted';

const App = () => {

    const [theme, setTheme] = usePeristedState('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };


    return (

        <ThemeProvider theme={theme}>
            <Container width='100%' disp='flex' justify='center'>
                <ThemeContainer toggleTheme={toggleTheme}></ThemeContainer>
            </Container>
            <RoutesPage />

        </ThemeProvider>
    );
}

export default App;