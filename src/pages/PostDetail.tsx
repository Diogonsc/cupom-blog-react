
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Chip,
  CircularProgress,
  Alert,
} from '@mui/material';
import { ArrowBack, Person, Calendar } from '@mui/icons-material';
import { fetchPosts } from '../services/api';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
}

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      try {
        const posts = await fetchPosts();
        const foundPost = posts.find((p: Post) => p.id === Number(id));
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Post não encontrado.');
        }
      } catch (err) {
        setError('Erro ao carregar o post. Tente novamente.');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" py={8}>
          <CircularProgress size={60} />
        </Box>
      </Container>
    );
  }

  if (error || !post) {
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 4 }}>
          {error || 'Post não encontrado'}
        </Alert>
        <Box mt={2}>
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={() => navigate('/posts')}
          >
            Voltar aos Posts
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box mb={4}>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/posts')}
          sx={{ mb: 3 }}
        >
          Voltar aos Posts
        </Button>
      </Box>

      <Paper elevation={2} sx={{ overflow: 'hidden', borderRadius: 3 }}>
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{
            width: '100%',
            height: { xs: '250px', md: '400px' },
            objectFit: 'cover',
          }}
        />
        
        <Box p={{ xs: 3, md: 5 }}>
          <Box mb={3}>
            <Chip
              icon={<Calendar />}
              label={formatDate(post.publishedAt)}
              variant="outlined"
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip
              icon={<Person />}
              label={post.author}
              color="primary"
            />
          </Box>

          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' },
              color: '#1e293b',
            }}
          >
            {post.title}
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ 
              mb: 4, 
              fontStyle: 'italic',
              borderLeft: '4px solid #f97316',
              pl: 2,
              py: 1,
            }}
          >
            {post.excerpt}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: '1.1rem',
              color: '#374151',
              '& p': { mb: 2 },
            }}
          >
            {post.content.split('\n').map((paragraph, index) => (
              <Box component="p" key={index} mb={2}>
                {paragraph}
              </Box>
            ))}
          </Typography>

          <Box 
            mt={5} 
            pt={3} 
            borderTop="1px solid #e5e7eb"
            display="flex" 
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/posts')}
              sx={{
                bgcolor: '#f97316',
                '&:hover': { bgcolor: '#ea580c' },
                px: 4,
                py: 1.5,
              }}
            >
              Ver Mais Artigos
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostDetail;
