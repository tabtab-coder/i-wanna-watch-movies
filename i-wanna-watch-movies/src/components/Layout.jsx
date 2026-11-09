import { NavLink, Outlet } from 'react-router'

import { AppBar, Toolbar, IconButton, Box, Button, Menu, MenuItem, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1a1a2e' },
    secondary: { main: '#e94560' },
  },
});

const links = [
  {to: '/', label: 'Calendar'}, 
  {to: 'films', label: 'Films'}, 
  {to: 'theaters', label: 'Theaters'},
  {to: 'import', label: 'Import'}]


const Layout = () => (
  <>
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="secondary">
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center' }}>
          {links.map(({to, label}) => (
            <Button
              key={to}
              to={to}
              component={NavLink}
              sx={{ my: 2, color: 'white', display: 'block', '&.active': { fontWeight: 700, backgroundColor: 'purple'  } }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </AppBar>
    </ThemeProvider>

    <main>
      <Outlet />
    </main>
  </>
)

export default Layout