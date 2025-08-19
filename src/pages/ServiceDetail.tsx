
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Layers, Cpu, CircuitBoard, Scan, GitBranch, Mail, MapPin, Phone } from "lucide-react";
import { MatrixRainingLetters } from "react-mdr";
import iconWhatsapp from "@/assets/svg/icon-whatsapp.svg";
import LogoIconsvg from "@/assets/svg/logo-prime-code.svg";
import { Link, useParams } from "react-router-dom";

const serviceIcons = {
    "Engenharia de Software": Code,
    "Arquitetura de Sistemas": Layers,
    "Desenvolvimento Avançado": Cpu,
    "UX/UI Moderno": CircuitBoard,
    "Testes Automatizados": Scan,
    "DevOps & CI/CD": GitBranch,
};

const serviceDetails = {
    "Engenharia de Software": {
        title: "Engenharia de Software",
        description: "Desenvolvimento planejado e escalável com princípios sólidos",
        detailedDescription: "Nossa abordagem à engenharia de software combina metodologias ágeis com práticas de desenvolvimento de ponta, garantindo soluções robustas, escaláveis e otimizadas para o seu negócio. Desde a concepção até a entrega, focamos em qualidade, performance e inovação.",
        features: [
            "Desenvolvimento full-stack com tecnologias modernas",
            "Integração com APIs e sistemas legados",
            "Manutenção e evolução contínua",
            "Código limpo e revisões rigorosas",
        ],
        benefits: [
            "Soluções personalizadas para suas necessidades",
            "Escalabilidade para crescimento futuro",
            "Redução de custos operacionais",
            "Entregas rápidas e iterativas",
        ],
    },
    "Arquitetura de Sistemas": {
        title: "Arquitetura de Sistemas",
        description: "Design de sistemas robustos e altamente escaláveis",
        detailedDescription: "Projetamos arquiteturas de sistemas que suportam alta demanda, garantem segurança e facilitam a manutenção. Utilizamos padrões de design modernos, como microsserviços e arquiteturas serverless, para criar soluções que crescem com seu negócio.",
        features: [
            "Design de arquiteturas baseadas em microsserviços",
            "Soluções serverless e baseadas em nuvem",
            "Planejamento de escalabilidade horizontal e vertical",
            "Documentação técnica detalhada",
        ],
        benefits: [
            "Alta disponibilidade e resiliência",
            "Redução de custos com infraestrutura",
            "Facilidade de integração com novos sistemas",
            "Suporte a picos de tráfego",
        ],
    },
    "Desenvolvimento Avançado": {
        title: "Desenvolvimento Avançado",
        description: "Soluções técnicas personalizadas para desafios complexos",
        detailedDescription: "Nossa equipe de especialistas desenvolve soluções sob medida para problemas técnicos complexos, utilizando tecnologias avançadas como inteligência artificial, blockchain e big data para entregar valor excepcional.",
        features: [
            "Integração de inteligência artificial e machine learning",
            "Desenvolvimento de soluções blockchain",
            "Processamento de big data e analytics",
            "Soluções personalizadas de alto desempenho",
        ],
        benefits: [
            "Inovação tecnológica de ponta",
            "Soluções exclusivas para seu mercado",
            "Otimização de processos críticos",
            "Vantagem competitiva no setor",
        ],
    },
    "UX/UI Moderno": {
        title: "UX/UI Moderno",
        description: "Interfaces intuitivas com foco em experiência do usuário",
        detailedDescription: "Criamos interfaces modernas e intuitivas que maximizam a usabilidade e o engajamento do usuário. Nosso processo de design centrado no usuário garante experiências digitais que encantam e convertem.",
        features: [
            "Prototipagem e testes de usabilidade",
            "Design responsivo para múltiplos dispositivos",
            "Interfaces acessíveis e inclusivas",
            "Design systems para consistência",
        ],
        benefits: [
            "Aumento da retenção de usuários",
            "Melhoria nas taxas de conversão",
            "Experiências digitais memoráveis",
            "Consistência visual da marca",
        ],
    },
    "Testes Automatizados": {
        title: "Testes Automatizados",
        description: "Garantia de qualidade através de automação avançada",
        detailedDescription: "Implementamos pipelines de testes automatizados para garantir a qualidade e a confiabilidade do software. Nossos testes cobrem desde unitários até end-to-end, reduzindo riscos e acelerando o desenvolvimento.",
        features: [
            "Testes unitários e de integração",
            "Testes end-to-end automatizados",
            "Integração com pipelines CI/CD",
            "Relatórios detalhados de qualidade",
        ],
        benefits: [
            "Redução de bugs em produção",
            "Aceleração do ciclo de desenvolvimento",
            "Maior confiança no software",
            "Manutenção simplificada",
        ],
    },
    "DevOps & CI/CD": {
        title: "DevOps & CI/CD",
        description: "Implementação de pipelines de entrega contínua",
        detailedDescription: "Nossa abordagem DevOps integra desenvolvimento e operações para entregar software de forma rápida e confiável. Configuramos pipelines CI/CD que automatizam builds, testes e deploys, garantindo eficiência e qualidade.",
        features: [
            "Configuração de pipelines CI/CD",
            "Automação de infraestrutura com IaC",
            "Monitoramento e logging em tempo real",
            "Gestão de ambientes em nuvem",
        ],
        benefits: [
            "Entregas mais rápidas e consistentes",
            "Redução de erros manuais",
            "Escalabilidade operacional",
            "Monitoramento proativo de sistemas",
        ],
    },
};

const ServiceDetail = () => {
    const { serviceTitle } = useParams();
    const decodedTitle = decodeURIComponent(serviceTitle);
    const service = serviceDetails[decodedTitle] || serviceDetails["Engenharia de Software"];
    const ServiceIcon = serviceIcons[decodedTitle] || Code;

    // Scroll to top when serviceTitle changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [serviceTitle]);

    // Filter out the current service from the list
    const otherServices = Object.keys(serviceDetails)
        .filter((title) => title !== decodedTitle)
        .map((title) => ({
            title,
            description: serviceDetails[title].description,
            icon: serviceIcons[title],
        }));

    return (
        <div className="min-h-screen bg-[#141414] text-white">
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#3dffff]/10 blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-[#191919] blur-[100px] animate-pulse delay-300"></div>
            </div>

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

            <header className="border-b border-[#3dffff]/20 bg-[#141414]/90 backdrop-blur-xl sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/">
                        <div className="flex items-center">
                            <img src={LogoIconsvg} alt="" className="h-10 mr-3" />
                            <div className="flex flex-col gap-0">
                                <span className="text-xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/70 bg-clip-text text-transparent">PRIMECODE</span>
                                <span className="ml-[2px] text-[13px] font-normal bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/70 bg-clip-text text-transparent -mt-1 tracking-[0.3em]">CONSULTING</span>
                            </div>
                        </div>
                    </Link>

                </div>
            </header>

            <section id="service-hero" className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <MatrixRainingLetters
                        key="matrix-rain-service"
                        custom_class="w-full h-full"
                        letters="01"
                        timeout={50}
                        font_size={14}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#3dffff]/10 to-[#191919] z-0"></div>
                <div className="absolute inset-0 bg-grid-small-[#3dffff]/10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] z-0"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-lg bg-[#3dffff]/10 flex items-center justify-center mx-auto group-hover:bg-[#3dffff]/20 transition-colors duration-300">
                        <ServiceIcon className="w-8 h-8 text-[#3dffff]" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff]/70 bg-clip-text text-transparent">
                            {service.title}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                        {service.description}
                    </p>
                    <Link to="/#contact">
                        <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-[#3dffff] to-[#3dffff] text-[#141414] transition-all duration-300">
                            <span className="relative z-10 flex items-center">
                                Fale Conosco
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#3dffff]/70 to-[#3dffff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></span>
                        </Button>
                    </Link>
                </div>
            </section>

            <section id="service-details" className="py-20 bg-[#141414]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="text-white">Sobre o</span> <span className="text-[#3dffff]">{service.title}</span>
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed">
                            {service.detailedDescription}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-[#191919] border-[#3dffff]/20">
                            <CardHeader>
                                <CardTitle className="text-white text-xl">Principais Características</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <ArrowRight className="w-5 h-5 text-[#3dffff] mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-[#191919] border-[#3dffff]/20">
                            <CardHeader>
                                <CardTitle className="text-white text-xl">Benefícios</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <ArrowRight className="w-5 h-5 text-[#3dffff] mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-white/80">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="service-cta" className="py-20 bg-[#191919]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-white">Pronto para transformar seu negócio com</span>{" "}
                        <span className="text-[#3dffff]">{service.title}?</span>
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Entre em contato com nossa equipe para discutir como podemos ajudar a alcançar seus objetivos tecnológicos.
                    </p>
                    <Link to="/#contact">
                        <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-[#3dffff] to-[#3dffff]/70 text-[#141414] transition-all duration-300">
                            <span className="relative z-10 flex items-center">
                                Fale Conosco
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#3dffff]/70 to-[#3dffff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></span>
                        </Button>
                    </Link>
                </div>
            </section>

            <section id="other-services" className="py-20 bg-[#141414]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="text-white">Outros</span> <span className="text-[#3dffff]">Serviços</span>
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed">
                            Explore nossas outras soluções para impulsionar sua transformação digital.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {otherServices.map((otherService, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3dffff] to-[#191919] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <Card className="relative h-full bg-[#141414] backdrop-blur-md rounded-xl p-6 border border-[#3dffff]/20 hover:border-[#3dffff]/40 transition-all duration-300 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#3dffff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-12 h-12 mb-4 rounded-lg bg-[#3dffff]/10 flex items-center justify-center group-hover:bg-[#3dffff]/20 transition-colors duration-300">
                                        <otherService.icon className="w-6 h-6 text-[#3dffff]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{otherService.title}</h3>
                                    <p className="text-white/80 mb-4">{otherService.description}</p>
                                    <Link
                                        to={`/services/${encodeURIComponent(otherService.title)}`}
                                        className="inline-flex items-center text-[#3dffff] hover:text-[#3dffff]/80 transition-colors group"
                                    >
                                        <span>Saiba mais</span>
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="border-t border-[#3dffff]/20 py-12 bg-[#141414] backdrop-blur-md">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <img src={LogoIconsvg} alt="" className="h-12 " />
                                <div className="flex flex-col gap-0">
                                    <span className="text-xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/70 bg-clip-text text-transparent">PRIMECODE</span>
                                    <span className=" ml-[2px] text-[13px] font-normal bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/70 bg-clip-text text-transparent -mt-1 tracking-[0.3em]">CONSULTING</span>
                                </div>
                            </div>
                            <p className="text-white/80 mb-6">
                                Consultoria especializada em engenharia de software para empresas que buscam excelência tecnológica.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-white">Serviços</h3>
                            <ul className="space-y-3">
                                {Object.keys(serviceDetails).map((title, index) => (
                                    <li key={index}>
                                        <Link to={`/services/${encodeURIComponent(title)}`} className="text-white/80 hover:text-[#3dffff] transition-colors">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
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

export default ServiceDetail;
