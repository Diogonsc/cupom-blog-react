
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { loginUser } from '../services/api';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginUser(email, password);
      login(response.token);
      navigate('/posts');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2 }}>
          <Box textAlign="center" mb={3}>
            <img 
              src="https://cdn.meucupom.com/app-assets/5.07.46/novomc/assets/images/logo.png" 
              alt="Meu Cupom" 
              style={{ height: '60px', marginBottom: '16px' }}
            />
            <Typography variant="h4" component="h1" gutterBottom color="primary">
              Blog Meu Cupom
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Faça login para acessar os melhores conteúdos sobre economia
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              disabled={loading}
            />
            <TextField
              fullWidth
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              disabled={loading}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ 
                mt: 3, 
                py: 1.5,
                bgcolor: '#f97316',
                '&:hover': { bgcolor: '#ea580c' }
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
            </Button>
          </form>

          <Box mt={3} p={2} bgcolor="#f8fafc" borderRadius={1}>
            <Typography variant="body2" color="text.secondary" align="center">
              <strong>Credenciais de teste:</strong><br />
              Email: eve.holt@reqres.in<br />
              Senha: cityslicka
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
