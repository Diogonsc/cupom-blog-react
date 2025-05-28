
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!isAuthenticated) return null;

  return (
    <AppBar position="static" sx={{ bgcolor: '#2563eb', mb: 4 }}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img 
            src="https://cdn.meucupom.com/app-assets/5.07.46/novomc/assets/images/logo.png" 
            alt="Meu Cupom" 
            style={{ height: '40px', marginRight: '16px' }}
          />
          <Typography variant="h6" component="div">
            Blog Meu Cupom
          </Typography>
        </Box>
        <Button color="inherit" onClick={handleLogout}>
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
