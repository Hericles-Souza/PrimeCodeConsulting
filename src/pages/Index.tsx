import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Code, Users, Target, Brain, Rocket, Terminal,
  Cpu, Server, CircuitBoard, Scan, Layers, GitBranch,
  Briefcase, Star, Award, CheckCircle, Quote, Mail, Phone, MapPin, MessageCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LogoIconsvg from "@/assets/svg/logo-prime-code.svg";
import { MatrixRainingLetters } from "react-mdr";
import iconWhatsapp from "@/assets/svg/icon-whatsapp.svg";
import hericles from "@/assets/img/hericles.png";
import raphael from "@/assets/img/raphael.png"; 

const Index = () => {
  // Dados dos serviços
  const services = [
    { icon: Code, title: "Engenharia de Software", description: "Desenvolvimento planejado e escalável com princípios sólidos" },
    { icon: Layers, title: "Arquitetura de Sistemas", description: "Design de sistemas robustos e altamente escaláveis" },
    { icon: Cpu, title: "Desenvolvimento Avançado", description: "Soluções técnicas personalizadas para desafios complexos" },
    { icon: CircuitBoard, title: "UX/UI Moderno", description: "Interfaces intuitivas com foco em experiência do usuário" },
    { icon: Scan, title: "Testes Automatizados", description: "Garantia de qualidade através de automação avançada" },
    { icon: GitBranch, title: "DevOps & CI/CD", description: "Implementação de pipelines de entrega contínua" }
  ];

  // Estatísticas
  const stats = [
    { value: "500+", label: "Projetos Entregues", icon: Briefcase },
    { value: "98%", label: "Satisfação Clientes", icon: Star },
    { value: "50+", label: "Clientes Ativos", icon: Users },
    { value: "10x", label: "Retorno em Eficiência", icon: Award }
  ];

  // Depoimentos
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CTO - TechCorp",
      content: "A Prime Code revolucionou nossa infraestrutura técnica com soluções inovadoras e eficientes.",
      rating: 5
    },
    {
      name: "Ana Santos",
      role: "Gerente de Produto - StartupX",
      content: "Consultoria em UX/UI excepcional. Nossa taxa de conversão aumentou significativamente.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      role: "CEO - InnovaTech",
      content: "Equipe altamente qualificada que elevou o nível técnico da nossa organização.",
      rating: 5
    }
  ];

  // Processos de metodologia
  const methodologySteps = [
    {
      icon: Brain,
      title: "Descoberta",
      description: "Análise técnica detalhada para entender desafios e objetivos.",
      items: [
        "Workshops com stakeholders",
        "Análise de sistemas existentes",
        "Definição de requisitos"
      ]
    },
    {
      icon: Target,
      title: "Planejamento",
      description: "Definição da arquitetura e stack tecnológica ideal.",
      items: [
        "Design da arquitetura",
        "Seleção de tecnologias",
        "Cronograma detalhado"
      ]
    },
    {
      icon: Code,
      title: "Implementação",
      description: "Desenvolvimento ágil com entregas iterativas.",
      items: [
        "Sprints de 2 semanas",
        "Revisões de código",
        "Integração contínua"
      ]
    },
    {
      icon: Rocket,
      title: "Entrega",
      description: "Deploy seguro e suporte pós-implantação.",
      items: [
        "Automação de deploy",
        "Monitoramento 24/7",
        "Otimizações contínuas"
      ]
    }
  ];

  // Dados da equipe
  const teamMembers = [
    {
      name: "Raphael Chagas",
      role: "Fundador & CEO",
      bio: "Líder visionário com paixão por tecnologia e inovação, guiando a Prime Code na entrega de soluções digitais de impacto.",
      image: raphael // Corrected to use imported image
    },
    {
      name: "Hericles de Souza",
      role: "Fundador & CEO",
      bio: "Estrategista técnico focado em transformar ideias em realidade com soluções escaláveis e robustas.",
      image: hericles // Corrected to use imported image directly
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      {/* Efeitos de background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#3dffff]/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-[#191919] blur-[100px] animate-pulse delay-300"></div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <Button
          className="relative overflow-hidden bg-gradient-to-r from-[#20B125] to-[#20B125]/70 text-[#141414] shadow-lg shadow-[#20B125]/30 hover:shadow-[#20B125]/40 rounded-full w-16 h-16 flex items-center justify-center p-0 animate-bounce-slow"
        >
          <span className="absolute inset-0 rounded-full bg-[#20B125] opacity-75 animate-ping"></span>
          <span className="relative z-10">
            <img src={iconWhatsapp} alt="WhatsApp" className="h-[35px]" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#20B125]/70 to-[#20B125] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </Button>
      </a>

      {/* Header */}
      <header className="border-b border-[#3dffff]/20 bg-[#141414]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero">
            <div className="flex items-center">
              <img src={LogoIconsvg} alt="" className="h-10 mr-3" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/70 bg-clip-text text-transparent">PRIME</span>
              <span className="text-xl font-normal bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/70 bg-clip-text text-transparent">CODE</span>
            </div>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="relative group text-white/80 hover:text-white transition-colors">
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3dffff] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#methodology" className="relative group text-white/80 hover:text-white transition-colors">
              Metodologia
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3dffff] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative group text-white/80 hover:text-white transition-colors">
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3dffff] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="relative group text-white/80 hover:text-white transition-colors">
              Cases
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3dffff] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative group text-white/80 hover:text-white transition-colors">
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3dffff] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <a href="#contact">
            <Button className="relative overflow-hidden group bg-gradient-to-r from-[#3dffff] to-[#3dffff]/70 text-[#141414] shadow-lg shadow-[#3dffff]/30 hover:shadow-[#3dffff]/40">
              <span className="relative z-10">Fale Conosco</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#3dffff]/70 to-[#3dffff] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <MatrixRainingLetters
            key="matrix-rain"
            custom_class="w-full h-full"
            letters="01"
            timeout={50}
            font_size={14}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#3dffff]/10 to-[#191919] z-0"></div>
        <div className="absolute inset-0 bg-grid-small-[#3dffff]/10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] z-0"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <img src={LogoIconsvg} alt="Logo" className="h-14" />
          </div>
          <Badge className="mb-6 bg-[#3dffff]/10 text-[#3dffff] border-[#3dffff]/20 hover:bg-[#3dffff]/15 backdrop-blur-sm mx-auto">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3dffff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3dffff]"></span>
            </span>
            CONSULTORIA EM TECNOLOGIA
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff]/70 bg-clip-text text-transparent">
              Soluções Digitais
            </span> <br />
            <span className="text-white">para Negócios</span> <span className="text-[#ffffff]">Exponenciais</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos desafios complexos em vantagens competitivas através de engenharia de software de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-[#3dffff] to-[#3dffff] text-[#141414] transition-all duration-300">
              <span className="relative z-10 flex items-center">
                Explorar Soluções
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#3dffff]/70 to-[#3dffff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></span>
            </Button>
            <a href="#contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-[#3dffff] border-[0.5px] text-white hover:bg-[#3dffff]/10 transition-all duration-300">
                Agendar Diagnóstico
              </Button>
            </a>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-[120px]">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3dffff] to-[#191919] rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-[#141414] backdrop-blur-md rounded-lg p-6 h-full border border-[#3dffff]/20 hover:border-[#3dffff]/40 transition-all duration-300">
                  <stat.icon className="w-10 h-10 mb-4 text-[#3dffff]" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#3dffff] to-[#3dffff]/70 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-white/80 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#141414]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Nossos</span> <span className="text-[#3dffff]">Serviços</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Oferecemos soluções completas em engenharia de software para impulsionar sua transformação digital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3dffff] to-[#191919] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative h-full bg-[#141414] backdrop-blur-md rounded-xl p-6 border border-[#3dffff]/20 hover:border-[#3dffff]/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3dffff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-12 h-12 mb-4 rounded-lg bg-[#3dffff]/10 flex items-center justify-center group-hover:bg-[#3dffff]/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-[#3dffff]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/80 mb-4">{service.description}</p>
                  <button className="inline-flex items-center text-[#3dffff] hover:text-[#3dffff]/80 transition-colors group">
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-[#141414]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Nossa</span> <span className="text-[#3dffff]">Metodologia</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Processos ágeis e comprovados para garantir excelência técnica em cada projeto.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#3dffff] to-[#141414] -translate-x-1/2 hidden md:block"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="md:mt-0">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3dffff] to-[#191919] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-[#141414] backdrop-blur-md rounded-xl p-8 border border-[#3dffff]/20 hover:border-[#3dffff]/40 transition-all duration-300">
                    <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-[#3dffff] flex items-center justify-center md:-left-4">
                      <Brain className="w-4 h-4 text-[#141414]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Descoberta e Análise</h3>
                    <p className="text-white/80 mb-4">
                      Compreensão profunda dos desafios e objetivos do negócio para definir a estratégia técnica ideal.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Workshops com stakeholders</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Análise de sistemas existentes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Definição de requisitos técnicos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:mt-32">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3dffff] to-[#191919] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-[#141414] backdrop-blur-md rounded-xl p-8 border border-[#3dffff]/20 hover:border-[#3dffff]/40 transition-all duration-300">
                    <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-[#3dffff] flex items-center justify-center md:-left-4">
                      <Layers className="w-4 h-4 text-[#141414]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Design de Arquitetura</h3>
                    <p className="text-white/80 mb-4">
                      Criação de arquiteturas robustas e escaláveis utilizando as melhores práticas do mercado.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Definição de stack tecnológico</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Diagramas de arquitetura</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Plano de escalabilidade</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:mt-0">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3dffff] to-[#191919] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-[#141414] backdrop-blur-md rounded-xl p-8 border border-[#3dffff]/20 hover:border-[#3dffff]/40 transition-all duration-300">
                    <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-[#3dffff] flex items-center justify-center md:-left-4">
                      <Code className="w-4 h-4 text-[#141414]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Desenvolvimento Ágil</h3>
                    <p className="text-white/80 mb-4">
                      Implementação iterativa com entregas frequentes e feedback contínuo.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Sprints de 2 semanas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Revisões de código</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Integração contínua</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:mt-32">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3dffff] to-[#191919] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-[#141414] backdrop-blur-md rounded-xl p-8 border border-[#3dffff]/20 hover:border-[#3dffff]/40 transition-all duration-300">
                    <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-[#3dffff] flex items-center justify-center md:-left-4">
                      <Rocket className="w-4 h-4 text-[#141414]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Entrega e Evolução</h3>
                    <p className="text-white/80 mb-4">
                      Deploy seguro e melhoria contínua com monitoramento e otimizações.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Deploy automatizado</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Monitoramento 24/7</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#3dffff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">Otimizações contínuas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company and Team Section */}
      <section id="about" className="py-20 bg-[#191919]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Sobre a</span> <span className="text-[#3dffff]">Prime Code</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Somos uma consultoria tecnológica dedicada a transformar negócios através de soluções digitais inovadoras. Com uma equipe apaixonada e altamente qualificada, combinamos expertise técnica e visão estratégica para entregar resultados excepcionais.
            </p>
          </div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Nossa Equipe</h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Conheça os profissionais que impulsionam a inovação na Prime Code.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3dffff] to-[#191919] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-[#141414] backdrop-blur-md rounded-xl h-full border border-[#3dffff]/20 hover:border-[#3dffff]/40 transition-all duration-300 overflow-hidden">
                  <div className="p-8 text-center">
                    <Users className="absolute top-8 right-8 w-8 h-8 text-[#3dffff]/10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[#3dffff]/20 group-hover:border-[#3dffff]/40 transition-all duration-300 object-cover"
                    />
                    <p className="font-bold text-lg text-white">{member.name}</p>
                    <p className="text-[#3dffff] mb-4">{member.role}</p>
                    <p className="text-white/80">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#191919]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Cases de</span> <span className="text-[#3dffff]">Sucesso</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Projetos reais que transformaram negócios através da tecnologia.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3dffff] to-[#191919] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-[#141414] backdrop-blur-md rounded-xl h-full border border-[#3dffff]/20 hover:border-[#3dffff]/40 transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="absolute top-8 right-8 w-8 h-8 text-[#3dffff]/10" />
                    <p className="text-lg italic text-white/80 mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-[#3dffff]/20 pt-6">
                      <p className="font-bold text-lg text-white">{testimonial.name}</p>
                      <p className="text-white/80">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#141414]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Entre em</span> <span className="text-[#3dffff]">Contato</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Pronto para transformar seu negócio? Nossa equipe está aqui para ajudar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#191919] backdrop-blur-md rounded-xl p-6 border border-[#3dffff]/20">
              <div className="flex items-center gap-2 mb-6">
                <Mail className="w-5 h-5 text-[#3dffff]" />
                <h3 className="text-xl font-bold text-white">Envie uma Mensagem</h3>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-white/80">Nome</label>
                    <Input placeholder="Seu nome" className="bg-[#191919] border-[#3dffff]/20 text-white" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-white/80">Email</label>
                    <Input type="email" placeholder="seu@email.com" className="bg-[#191919] border-[#3dffff]/20 text-white" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-white/80">Empresa</label>
                  <Input placeholder="Nome da empresa" className="bg-[#191919] border-[#3dffff]/20 text-white" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-white/80">Mensagem</label>
                  <Textarea placeholder="Conte-nos sobre seu projeto" rows={4} className="bg-[#191919] border-[#3dffff]/20 text-white" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-[#3dffff] to-[#3dffff]/70 text-[#141414] hover:from-[#3dffff]/90 hover:to-[#3dffff]/50 shadow-lg shadow-[#3dffff]/30 hover:shadow-[#3dffff]/40">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Outras Formas de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#3dffff]/20 hover:bg-[#3dffff]/10 transition-colors">
                    <div className="w-12 h-12 bg-[#3dffff]/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#3dffff]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Telefone</p>
                      <p className="text-white/80">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#3dffff]/20 hover:bg-[#3dffff]/10 transition-colors">
                    <div className="w-12 h-12 bg-[#3dffff]/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#3dffff]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-white/80">contato@primecodeconsulting.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#3dffff]/20 hover:bg-[#3dffff]/10 transition-colors">
                    <div className="w-12 h-12 bg-[#3dffff]/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#3dffff]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Localização</p>
                      <p className="text-white/80">Passo Fundo-RS, Brasil</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#3dffff]/10 backdrop-blur-md rounded-xl p-6 border border-[#3dffff]/20">
                <h4 className="font-semibold mb-2 text-white">Consultoria Gratuita</h4>
                <p className="text-sm text-white/80 mb-4">
                  Oferecemos 30 minutos de consultoria gratuita para discutir seu projeto.
                </p>
                <Button variant="outline" className="w-full border-[#3dffff] text-[#3dffff] hover:bg-[#3dffff]/10">
                  Agendar Consultoria
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#3dffff]/20 py-12 bg-[#141414] backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src={LogoIconsvg} alt="" className="h-12 mr-3" />
                <span className="text-xl font-bold text-white">PRIME CODE</span>
              </div>
              <p className="text-white/80 mb-6">
                Consultoria especializada em engenharia de software para empresas que buscam excelência tecnológica.
              </p>
              <div className="flex space-x-4">
                {/* Ícones de redes sociais aqui */}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Serviços</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-[#3dffff] transition-colors">Engenharia de Software</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#3dffff] transition-colors">Arquitetura de Sistemas</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#3dffff] transition-colors">UX/UI Design</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#3dffff] transition-colors">Testes Automatizados</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#3dffff] transition-colors">DevOps & CI/CD</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-white/80 hover:text-[#3dffff] transition-colors">Sobre Nós</a></li>
                <li><a href="#about" className="text-white/80 hover:text-[#3dffff] transition-colors">Equipe</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-[#3dffff] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">contato@primecodeconsulting.com.br</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-[#3dffff] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">(11) 99999-9999</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#3dffff] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Passo Fundo-RS, Brasil</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#3dffff]/20 mt-12 pt-8 text-center text-white/80">
            <p>&copy; {new Date().getFullYear()} Prime Code. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;