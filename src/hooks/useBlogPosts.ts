import { useState, useMemo } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
}

const blogPostsData: BlogPost[] = [
  {
    id: '1',
    title: "Microserviços vs Monolito: Quando Usar Cada Um?",
    excerpt: "Análise completa das vantagens e desvantagens de cada arquitetura, com casos de uso práticos e decisões estratégicas.",
    content: `A decisão entre arquitetura de microserviços e monolítica é uma das mais importantes no desenvolvimento de software moderno. Ambas têm seus méritos e o contexto do projeto determina qual é a melhor escolha.

## Arquitetura Monolítica

### Vantagens:
- **Simplicidade**: Desenvolvimento, deploy e debug mais simples
- **Performance**: Comunicação entre componentes é mais rápida
- **Menos complexidade operacional**: Um único processo para gerenciar
- **Ideal para MVPs**: Permite validação rápida de hipóteses

### Desvantagens:
- **Escalabilidade limitada**: Todo o sistema escala junto
- **Dependências acopladas**: Mudanças podem afetar todo o sistema
- **Tecnologia única**: Dificulta adoção de novas tecnologias

## Microserviços

### Vantagens:
- **Escalabilidade independente**: Cada serviço escala conforme necessário
- **Flexibilidade tecnológica**: Diferentes tecnologias por serviço
- **Times independentes**: Desenvolvimento paralelo e autônomo
- **Resiliência**: Falha em um serviço não derruba todo o sistema

### Desvantagens:
- **Complexidade operacional**: Múltiplos deploys, monitoramento
- **Latência de rede**: Comunicação entre serviços tem overhead
- **Consistency**: Gerenciamento de transações distribuídas

## Quando Usar Cada Um?

### Use Monolito quando:
- Equipe pequena (< 10 desenvolvedores)
- Projeto inicial ou MVP
- Domínio bem definido e estável
- Performance crítica

### Use Microserviços quando:
- Equipes grandes e distribuídas
- Sistema maduro com múltiplos domínios
- Necessidade de escalabilidade independente
- Tolerância a complexidade operacional

## Conclusão

A escolha não é binária. Muitas empresas começam com monolito e evoluem para microserviços conforme crescem. O importante é entender o contexto e tomar decisões baseadas em dados, não em hype tecnológico.`,
    date: "15 Jan 2024",
    readTime: "8 min",
    category: "Arquitetura",
    author: "João Silva",
    tags: ["microserviços", "arquitetura", "escalabilidade"]
  },
  {
    id: '2',
    title: "Testes Automatizados: Guia Completo 2024",
    excerpt: "Como implementar uma estratégia robusta de testes automatizados para garantir qualidade e agilidade no desenvolvimento.",
    content: `Os testes automatizados são fundamentais para o desenvolvimento de software moderno. Eles garantem qualidade, permitem refatoração segura e aceleram o ciclo de desenvolvimento.

## Pirâmide de Testes

### Testes Unitários (Base da Pirâmide)
- **70% dos testes**: Rápidos, isolados e focados
- **Ferramentas**: Jest, Vitest, pytest
- **Objetivo**: Testar unidades individuais de código

### Testes de Integração (Meio da Pirâmide)
- **20% dos testes**: Verificam comunicação entre componentes
- **Ferramentas**: Supertest, Testcontainers
- **Objetivo**: Testar interações entre módulos

### Testes E2E (Topo da Pirâmide)
- **10% dos testes**: Simulam jornadas completas do usuário
- **Ferramentas**: Playwright, Cypress
- **Objetivo**: Validar fluxos críticos do negócio

## Estratégias de Implementação

### 1. Test-Driven Development (TDD)
- Escreva o teste primeiro
- Implemente o código mínimo para passar
- Refatore mantendo os testes verdes

### 2. Behavior-Driven Development (BDD)
- Foco no comportamento do usuário
- Cenários em linguagem natural
- Colaboração entre técnicos e negócio

## Boas Práticas

1. **Arrange, Act, Assert**: Estruture testes de forma clara
2. **Nomes descritivos**: Testes devem ser documentação
3. **Isolamento**: Cada teste deve ser independente
4. **Dados de teste**: Use factories e fixtures
5. **Mocks inteligentes**: Mock apenas o necessário

Os testes automatizados são um investimento que paga dividendos a longo prazo através de maior confiança, velocidade e qualidade.`,
    date: "10 Jan 2024",
    readTime: "12 min",
    category: "Qualidade",
    author: "Maria Santos",
    tags: ["testes", "qualidade", "automação", "tdd"]
  },
  {
    id: '3',
    title: "DevOps e CI/CD: Acelere suas Entregas",
    excerpt: "Estratégias práticas para implementar pipelines de CI/CD eficientes e acelerar o ciclo de desenvolvimento.",
    content: `DevOps não é apenas uma ferramenta ou processo - é uma cultura que une desenvolvimento e operações para entregar valor mais rapidamente e com maior qualidade.

## Continuous Integration (CI)

### Princípios Fundamentais
- **Integração frequente**: Commits pequenos e frequentes
- **Build automatizado**: Compilação e testes automáticos
- **Feedback rápido**: Detecção precoce de problemas
- **Ambiente limpo**: Cada build em ambiente isolado

## Continuous Deployment (CD)

### Estratégias de Deploy
1. **Blue-Green**: Zero downtime com duas versões
2. **Canary**: Deploy gradual para subconjunto de usuários
3. **Rolling**: Atualização progressiva de instâncias
4. **Feature Flags**: Controle de funcionalidades em runtime

## Infrastructure as Code (IaC)

A implementação de DevOps é uma jornada, não um destino. Comece pequeno, meça resultados e evolua gradualmente.`,
    date: "5 Jan 2024",
    readTime: "10 min",
    category: "DevOps",
    author: "Carlos Lima",
    tags: ["devops", "ci/cd", "automação", "docker"]
  },
  {
    id: '4',
    title: "Clean Architecture: Princípios e Implementação",
    excerpt: "Como aplicar os princípios da Clean Architecture para criar sistemas mais testáveis, flexíveis e manuteníveis.",
    content: `A Clean Architecture, proposta por Robert C. Martin (Uncle Bob), é uma abordagem para estruturar código que prioriza a separação de responsabilidades e a independência de frameworks.

## Princípios Fundamentais

### 1. Independência de Frameworks
O sistema não deve depender de frameworks específicos. Frameworks são ferramentas, não arquiteturas.

### 2. Testabilidade
Regras de negócio devem ser testáveis sem UI, banco de dados ou serviços externos.

### 3. Independência de UI
A interface pode mudar sem afetar o resto do sistema.

## Camadas da Arquitetura

### Entities (Entidades)
- **Responsabilidade**: Regras de negócio críticas
- **Localização**: Centro da arquitetura
- **Características**: Estáveis, independentes

### Use Cases (Casos de Uso)
- **Responsabilidade**: Regras específicas da aplicação
- **Orquestração**: Coordena entities e adapters

## Dependency Rule

Dependências só podem apontar para dentro: Frameworks/Drivers → Interface Adapters → Use Cases → Entities

A Clean Architecture é um investimento em qualidade e sustentabilidade do código a longo prazo.`,
    date: "28 Dez 2023",
    readTime: "15 min",
    category: "Arquitetura",
    author: "Ana Costa",
    tags: ["clean-architecture", "design", "princípios", "qualidade"]
  },
  {
    id: '5',
    title: "Segurança em APIs: Melhores Práticas 2024",
    excerpt: "Guia completo sobre como proteger suas APIs contra as principais vulnerabilidades e ataques modernos.",
    content: `A segurança de APIs é crucial no desenvolvimento moderno. Com o crescimento de arquiteturas distribuídas, APIs se tornaram o principal vetor de ataque.

## OWASP API Security Top 10

### 1. Broken Object Level Authorization
**Problema**: Usuários acessam objetos de outros usuários
**Solução**: Validar autorização em cada request

### 2. Broken User Authentication
**Problema**: Falhas na autenticação
**Solução**: Implementar autenticação robusta

### 3. Excessive Data Exposure
**Problema**: APIs retornam dados desnecessários
**Solução**: Filtrar dados sensíveis

## Autenticação e Autorização

### JWT Best Practices
- Usar algoritmos assimétricos
- Tokens de curta duração
- Validação rigorosa

### OAuth 2.0 / OpenID Connect
Implementação com padrões de mercado para autenticação robusta.

## Rate Limiting e Throttling

Implementação essencial para proteger contra ataques de força bruta e sobrecarga.

## Validação de Input

Schema validation para garantir que apenas dados válidos sejam processados.

A segurança é um processo contínuo, não um destino final. Mantenha-se atualizado com as últimas ameaças e práticas.`,
    date: "20 Dez 2023",
    readTime: "18 min",
    category: "Segurança",
    author: "Roberto Ferreira",
    tags: ["segurança", "api", "autenticação", "owasp"]
  },
  {
    id: '6',
    title: "Performance Web: Otimizações Essenciais",
    excerpt: "Técnicas avançadas para otimizar a performance de aplicações web, desde o carregamento inicial até a experiência do usuário.",
    content: `Performance não é apenas sobre velocidade - é sobre experiência do usuário, conversão e sucesso do negócio. Cada 100ms de melhoria pode aumentar a conversão em 1%.

## Core Web Vitals

### Largest Contentful Paint (LCP) - < 2.5s
Mede quando o maior elemento é renderizado.

### First Input Delay (FID) - < 100ms
Tempo até a primeira interação ser processada.

### Cumulative Layout Shift (CLS) - < 0.1
Mede estabilidade visual da página.

## Otimização de JavaScript

### Bundle Splitting e Tree Shaking
Dividir o código em chunks menores e remover código não utilizado.

### Service Workers para Cache
Implementar estratégias de cache inteligente.

## Otimização de CSS

### Critical CSS
Extrair e inline o CSS crítico para renderização inicial.

### CSS-in-JS Performance
Otimizações específicas para styled components.

## Database Performance

### Indexação Estratégica
Criar índices otimizados para queries específicas.

### Query Optimization
Evitar problemas como N+1 e implementar paginação eficiente.

## Monitoring e Métricas

### Web Vitals Monitoring
Monitoramento contínuo das métricas de performance.

Performance é uma jornada contínua. Meça, otimize, monitore e repita.`,
    date: "15 Dez 2023",
    readTime: "16 min",
    category: "Performance",
    author: "Lucas Oliveira",
    tags: ["performance", "web-vitals", "otimização", "monitoring"]
  }
];

export function useBlogPosts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = useMemo(() => {
    const categorySet = new Set(['all']);
    blogPostsData.forEach(post => categorySet.add(post.category));
    return Array.from(categorySet);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const getPostById = (id: string) => {
    return blogPostsData.find(post => post.id === id);
  };

  const getRelatedPosts = (currentPost: BlogPost, limit: number = 3) => {
    return blogPostsData
      .filter(post => 
        post.id !== currentPost.id && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .slice(0, limit);
  };

  return {
    posts: filteredPosts,
    allPosts: blogPostsData,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    getPostById,
    getRelatedPosts
  };
}