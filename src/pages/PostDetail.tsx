
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPosts } from '../services/api';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert, AlertDescription } from '../components/ui/alert';
import { ArrowLeft, User, Calendar } from 'lucide-react';

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
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4">
        <Alert className="mt-8 border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">
            {error || 'Post não encontrado'}
          </AlertDescription>
        </Alert>
        <div className="mt-4">
          <Button
            variant="outline"
            onClick={() => navigate('/posts')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos Posts
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-6">
        <Button
          variant="outline"
          onClick={() => navigate('/posts')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar aos Posts
        </Button>
      </div>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover"
        />
        
        <div className="p-6 md:p-10">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(post.publishedAt)}
            </Badge>
            <Badge className="flex items-center gap-1 bg-blue-600">
              <User className="w-3 h-3" />
              {post.author}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="border-l-4 border-orange-500 pl-6 py-4 mb-8 bg-orange-50">
            <p className="text-lg text-gray-700 italic">
              {post.excerpt}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <Button
              onClick={() => navigate('/posts')}
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3"
            >
              Ver Mais Artigos
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
