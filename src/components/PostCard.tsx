
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      
      <CardContent className="flex-1 flex flex-col p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="text-xs">
            {formatDate(post.publishedAt)}
          </Badge>
          <Badge className="text-xs bg-blue-600">
            {post.author}
          </Badge>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {post.title}
        </h2>
        
        <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Button 
          onClick={() => navigate(`/posts/${post.id}`)}
          className="bg-orange-500 hover:bg-orange-600 w-full"
        >
          Leia mais
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCard;
