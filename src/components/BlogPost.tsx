import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BlogPost as BlogPostType, useBlogPosts } from '@/hooks/useBlogPosts';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const { getRelatedPosts } = useBlogPosts();
  const [showFullContent, setShowFullContent] = useState(false);
  const relatedPosts = getRelatedPosts(post);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback para browsers que não suportam Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  const formatContent = (content: string) => {
    // Converter markdown básico para HTML
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-4 mt-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-3 mt-4">$1</h3>')
      .replace(/^\* (.*$)/gm, '<li class="mb-1">$1</li>')
      .replace(/^- (.*$)/gm, '<li class="mb-1">$1</li>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>')
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(?!<[h|l|p])/gm, '<p class="mb-4">')
      .replace(/(?<!>)$/gm, '</p>');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-6 hover:bg-background/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Separator className="mb-8" />
                  
                  <div 
                    className="prose prose-gray max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: formatContent(
                        showFullContent ? post.content : post.content.slice(0, 2000) + '...'
                      ) 
                    }}
                  />
                  
                  {post.content.length > 2000 && !showFullContent && (
                    <div className="mt-8 text-center">
                      <Button onClick={() => setShowFullContent(true)}>
                        <BookOpen className="w-4 h-4 mr-2" />
                        Ler artigo completo
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                {/* Author Info */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Sobre o Autor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">
                          Consultor Especialista
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Especialista em {post.category.toLowerCase()} com mais de 10 anos de experiência 
                      ajudando empresas a implementar soluções tecnológicas robustas.
                    </p>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Artigos Relacionados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost, index) => (
                          <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                            <h4 className="font-medium text-sm leading-tight mb-2">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Badge variant="outline" className="text-xs">
                                {relatedPost.category}
                              </Badge>
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}