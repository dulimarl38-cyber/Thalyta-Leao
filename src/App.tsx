import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Circle,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Play,
  Plus,
  Sparkles,
  X,
} from 'lucide-react';

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  eyebrow: string;
  description: string;
  participation: string;
  deliverables: string[];
  accent: string;
  visual: string;
};

const projects: Project[] = [
  {
    id: 'cartao-de-todos',
    number: '01',
    title: 'Cartão de TODOS',
    category: 'Comunicação institucional / marketing',
    eyebrow: 'Comunicação e marketing',
    description: 'Um recorte de trabalhos desenvolvidos para a unidade São Miguel Paulista — entre conteúdos, campanhas e materiais que aproximam serviços, parceiros e pessoas.',
    participation: 'Criação visual, produção de conteúdo, organização de informações e desenvolvimento de materiais para diferentes pontos de contato.',
    deliverables: ['Conteúdo para redes sociais', 'Peças gráficas e promocionais', 'Divulgação de parceiros', 'Materiais para eventos', 'Vídeos e conteúdos digitais'],
    accent: 'lime',
    visual: 'visual-cartao',
  },
  {
    id: 'catalogo-parceiros',
    number: '02',
    title: 'Catálogo de parceiros',
    category: 'Design editorial / comunicação institucional',
    eyebrow: 'Design editorial',
    description: 'Uma experiência de leitura para apresentar parceiros, estabelecimentos e benefícios de maneira organizada, acessível e visualmente consistente.',
    participation: 'Estruturação do conteúdo, hierarquia visual, diagramação e padronização dos elementos gráficos.',
    deliverables: ['Arquitetura de informação', 'Diagramação de páginas', 'Organização por categorias', 'Apresentação de benefícios', 'Galeria reservada para páginas reais'],
    accent: 'mint',
    visual: 'visual-catalogo',
  },
  {
    id: 'campanhas-conteudos',
    number: '03',
    title: 'Campanhas & conteúdos',
    category: 'Marketing digital / conteúdo / audiovisual',
    eyebrow: 'Conteúdo digital',
    description: 'Uma seleção para reunir campanhas promocionais, conteúdos institucionais e peças pensadas para o ritmo das plataformas digitais.',
    participation: 'Conceito, adaptação de mensagens, criação de peças e produção de conteúdos para redes sociais.',
    deliverables: ['Campanhas promocionais', 'Conteúdos institucionais', 'Vídeos para redes sociais', 'Peças publicitárias', 'Conteúdos comerciais'],
    accent: 'lime',
    visual: 'visual-conteudo',
  },
  {
    id: 'criacao-visual',
    number: '04',
    title: 'Criação visual',
    category: 'Design gráfico / comunicação visual',
    eyebrow: 'Direção de arte',
    description: 'Uma galeria para valorizar cartazes, peças digitais, materiais promocionais e composições desenvolvidas para diferentes necessidades.',
    participation: 'Pesquisa de referências, composição visual, adaptação de formatos e refinamento de peças.',
    deliverables: ['Cartazes', 'Materiais impressos', 'Peças digitais', 'Composições para redes', 'Apresentações visuais'],
    accent: 'mint',
    visual: 'visual-criacao',
  },
  {
    id: 'producao-audiovisual',
    number: '05',
    title: 'Produção audiovisual',
    category: 'Conteúdo audiovisual / comunicação digital',
    eyebrow: 'Audiovisual',
    description: 'Um espaço preparado para receber vídeos, miniaturas, descrições e o contexto de cada produção visual.',
    participation: 'Planejamento, criação, captação e edição de conteúdos audiovisuais.',
    deliverables: ['Miniaturas', 'Vídeos incorporados', 'Descrições de contexto', 'Objetivos de cada produção', 'Participação no processo'],
    accent: 'lime',
    visual: 'visual-video',
  },
];

const services = [
  ['01', 'Estratégia de comunicação', 'Planejamento e organização de mensagens, campanhas e ações alinhadas aos objetivos de cada projeto.'],
  ['02', 'Marketing e campanhas', 'Materiais promocionais, campanhas comerciais e soluções para divulgação de marcas, produtos e serviços.'],
  ['03', 'Criação visual', 'Peças gráficas, materiais institucionais, apresentações e conteúdos visuais para diferentes plataformas.'],
  ['04', 'Conteúdo digital', 'Criação e adaptação de conteúdos para redes sociais, campanhas e comunicação institucional.'],
  ['05', 'Produção audiovisual', 'Captação, edição e desenvolvimento de vídeos e conteúdos para plataformas digitais.'],
  ['06', 'Comunicação e relacionamento', 'Informações e materiais que aproximam marcas, parceiros e públicos com clareza.'],
];

const process = [
  ['01', 'Entender', 'Compreender o contexto, os objetivos, o público e o desafio de comunicação.'],
  ['02', 'Pesquisar', 'Investigar referências, identificar oportunidades e explorar possibilidades criativas.'],
  ['03', 'Conceber', 'Construir conceitos, narrativas, estratégias e soluções visuais.'],
  ['04', 'Executar', 'Transformar ideias em conteúdos, campanhas, peças e experiências.'],
  ['05', 'Analisar', 'Observar resultados disponíveis, avaliar o desempenho e identificar melhorias.'],
];

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return <div className={`placeholder ${className}`}><span>{label}</span><Circle size={10} strokeWidth={1.5} /></div>;
}

function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`project-visual ${project.visual} ${large ? 'project-visual-large' : ''}`}>
      <div className="visual-grid" />
      <div className="visual-stamp">{project.number} / 05</div>
      {project.visual === 'visual-video' && <div className="play-mark"><Play fill="currentColor" size={22} /></div>}
      {project.visual === 'visual-catalogo' && <div className="catalog-pages"><span /><span /><span /></div>}
      {project.visual === 'visual-conteudo' && <div className="content-orbit"><div /><div /><div /></div>}
      {project.visual === 'visual-criacao' && <div className="creation-type">A<br />R<br />T</div>}
      {project.visual === 'visual-cartao' && <div className="cartao-signal"><span>CONEXÃO</span><b>+</b><span>ACESSO</span></div>}
      <div className="visual-caption">ESPAÇO RESERVADO<br />PARA MATERIAL REAL</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll((window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)) * 100);
    const onHash = () => setSelectedProject(window.location.hash.replace('#projeto-', '') || null);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('hashchange', onHash); };
  }, []);

  const project = useMemo(() => projects.find((item) => item.id === selectedProject), [selectedProject]);
  const goTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const openProject = (id: string) => { window.location.hash = `projeto-${id}`; window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const closeProject = () => { window.location.hash = ''; setSelectedProject(null); };

  if (project) {
    return <ProjectDetail project={project} onBack={closeProject} onOpen={openProject} />;
  }

  return (
    <div className="site-shell">
      <div className="progress-line" style={{ width: `${scroll}%` }} />
      <header className="site-header">
        <button className="brand" onClick={() => goTo('inicio')} aria-label="Voltar ao início">THALYTA LEÃO<sup>®</sup></button>
        <span className="header-index">PORTFÓLIO / 2026</span>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {['projetos', 'sobre', 'especialidades', 'experiencia', 'contato'].map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <nav className="mobile-nav">{['projetos', 'sobre', 'especialidades', 'experiencia', 'contato'].map((item) => <button key={item} onClick={() => goTo(item)}>{item}<ArrowUpRight size={16} /></button>)}</nav>}

      <main>
        <section className="hero section-pad" id="inicio">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-meta"><span>01 — PORTFÓLIO AUTORAL</span><span>COMUNICAÇÃO · ESTRATÉGIA · CRIAÇÃO</span></div>
          <div className="hero-main">
            <div className="hero-kicker"><Sparkles size={16} /><span>Ideias em movimento.</span></div>
            <h1>IDEIAS NÃO<br />NASCERAM PARA<br /><em>FICAR PARADAS.</em></h1>
            <div className="hero-bottom"><p>Comunicação, estratégia e criatividade para transformar ideias em experiências que conectam pessoas, marcas e histórias.</p><div className="hero-actions"><button className="button button-lime" onClick={() => goTo('projetos')}>Explorar projetos <ArrowDownRight size={18} /></button><button className="text-button" onClick={() => goTo('sobre')}>Conheça meu trabalho <ArrowUpRight size={16} /></button></div></div>
          </div>
          <div className="hero-side-note">SCROLL TO<br />EXPLORE <ArrowDownRight size={18} /></div>
          <div className="hero-number">[ 01 / 08 ]</div>
        </section>

        <section className="statement section-pad" id="sobre"><div className="section-label"><span>02</span><span>MANIFESTO</span></div><div className="statement-content"><h2>CRIATIVIDADE É COMO EU PENSO.<br /><span>COMUNICAÇÃO É COMO<br />EU TRANSFORMO.</span></h2><div className="statement-grid"><div className="portrait-frame"><Placeholder label="FOTOGRAFIA PESSOAL" /><div className="frame-note">REGISTRO A SER INSERIDO<br />PELA AUTORA</div></div><div className="statement-copy"><p className="lead">Sou Thalyta Leão, estudante de Publicidade e Propaganda e apaixonada por transformar ideias em projetos que conectam pessoas, marcas e histórias.</p><p>Minha trajetória na comunicação envolve criação visual, marketing, produção de conteúdo, materiais institucionais e desenvolvimento de campanhas.</p><p>Tenho uma relação muito próxima com a música, a cultura e as experiências artísticas. Essas referências fazem parte da minha identidade e influenciam a maneira como observo o mundo e construo narrativas.</p><button className="text-button" onClick={() => goTo('projetos')}>Ver projetos selecionados <ArrowUpRight size={16} /></button></div></div></div></section>

        <section className="projects section-pad" id="projetos"><div className="section-heading"><div className="section-label"><span>03</span><span>PROJETOS SELECIONADOS</span></div><h2>REPERTÓRIO<br /><span>EM CONSTRUÇÃO.</span></h2><p>Uma seleção de frentes de trabalho preparada para receber os materiais, imagens e resultados reais de cada projeto.</p></div><div className="project-list">{projects.map((item, index) => <article className={`project-card ${index % 2 ? 'offset-card' : ''}`} key={item.id} onClick={() => openProject(item.id)}><ProjectVisual project={item} /><div className="project-card-info"><div><span className="project-number">{item.number}</span><h3>{item.title}</h3><p>{item.category}</p></div><ArrowUpRight className="card-arrow" size={22} /></div></article>)}</div></section>

        <section className="services section-pad" id="especialidades"><div className="section-label"><span>04</span><span>ESPECIALIDADES</span></div><div className="services-intro"><h2>DA IDEIA À<br /><span>EXECUÇÃO.</span></h2><p>Soluções criativas que conectam estratégia, identidade e comunicação.</p></div><div className="services-list">{services.map(([number, title, description]) => <div className="service-row" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><button onClick={() => goTo('contato')} aria-label={`Entrar em contato sobre ${title}`}><ArrowUpRight size={20} /></button></div>)}</div></section>

        <section className="process section-pad"><div className="section-label"><span>05</span><span>PROCESSO CRIATIVO</span></div><div className="process-heading"><h2>NÃO É SÓ SOBRE CRIAR.<br /><span>É SOBRE FAZER SENTIDO.</span></h2><p>Uma abordagem que começa na escuta e termina em uma comunicação com intenção.</p></div><div className="process-list">{process.map(([number, title, description]) => <div className="process-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></section>

        <section className="experience section-pad" id="experiencia"><div className="section-label"><span>06</span><span>EXPERIÊNCIA & FORMAÇÃO</span></div><div className="experience-grid"><div><h2>CRIATIVIDADE<br /><span>APLICADA À PRÁTICA.</span></h2><p className="experience-lead">Experiência com desenvolvimento de materiais de comunicação, produção de conteúdo digital, peças gráficas, campanhas promocionais, divulgação de parceiros e criação de soluções visuais para diferentes demandas institucionais e comerciais.</p><div className="editable-note"><Plus size={16} /> CAMPOS PROFISSIONAIS A SEREM PREENCHIDOS</div></div><div className="experience-details"><div className="detail-block"><span>ATUAÇÃO</span><h3>Cartão de TODOS <small>/ São Miguel Paulista</small></h3><p>Comunicação e Marketing</p></div><div className="detail-block"><span>FORMAÇÃO</span><h3>Publicidade e Propaganda</h3><p>Instituição, período e previsão de conclusão a inserir.</p></div><div className="detail-block"><span>COMPETÊNCIAS</span><div className="tag-cloud">{['Comunicação', 'Marketing digital', 'Planejamento', 'Conteúdo', 'Design gráfico', 'Audiovisual', 'Pensamento criativo', 'Análise'].map((tag) => <span key={tag}>{tag}</span>)}</div></div><button className="button button-outline disabled-button" disabled>Baixar currículo <span>arquivo em breve</span></button></div></div></section>

        <section className="beyond section-pad"><div className="beyond-grid"><div><div className="section-label"><span>07</span><span>REPERTÓRIO & IDENTIDADE</span></div><h2>ALÉM<br /><span>DA TELA.</span></h2></div><div className="beyond-copy"><p>A comunicação não acontece isolada do mundo. Ela se alimenta de histórias, movimentos, sons, pessoas e experiências.</p><p>A música, a cultura e as diferentes manifestações artísticas fazem parte do meu repertório e ampliam minha maneira de pensar e criar.</p><p>É desse encontro entre referências e experiências que surgem novas possibilidades de comunicação.</p></div></div><div className="reference-grid"><Placeholder label="SHOWS / EXPERIÊNCIAS" /><Placeholder label="CULTURA / REGISTROS" /><Placeholder label="REFERÊNCIAS VISUAIS" /></div></section>

        <section className="contact section-pad" id="contato"><div className="section-label"><span>08</span><span>VAMOS CONVERSAR</span></div><div className="contact-content"><h2>TEM UMA IDEIA?<br /><span>VAMOS MOVIMENTÁ-LA.</span></h2><p>Estou aberta a oportunidades profissionais, projetos criativos, parcerias e novas conexões.</p><div className="contact-actions"><a className="contact-link primary-link" href="mailto:thalytaleaom@gmail.com?subject=Oportunidade profissional | Thalyta Leão"><span>Quero conversar sobre uma oportunidade</span><ArrowUpRight size={22} /></a><a className="contact-link" href="https://wa.me/5511964749159?text=Ol%C3%A1%2C%20Thalyta!%20Gostaria%20de%20conversar%20sobre%20um%20projeto." target="_blank" rel="noreferrer"><span>Quero desenvolver um projeto</span><ArrowUpRight size={22} /></a></div></div></section>
      </main>
      <footer className="site-footer"><div><button className="brand" onClick={() => goTo('inicio')}>THALYTA LEÃO<sup>®</sup></button><p>IDEIAS EM MOVIMENTO.</p></div><div className="footer-links"><a href="mailto:thalytaleaom@gmail.com"><Mail size={16} /> E-mail</a><a href="https://www.linkedin.com/in/thalyta-le%C3%A3o-21878a255/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="https://www.instagram.com/leao_manhoso/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a></div><span className="copyright">© 2026 Thalyta Leão.</span></footer>
    </div>
  );
}

function ProjectDetail({ project, onBack, onOpen }: { project: Project; onBack: () => void; onOpen: (id: string) => void }) {
  return <div className="site-shell detail-page"><header className="site-header"><button className="brand" onClick={onBack}>THALYTA LEÃO<sup>®</sup></button><span className="header-index">PROJETO / {project.number}</span><button className="back-button" onClick={onBack}><ArrowLeft size={17} /> Voltar ao portfólio</button></header><main><section className="detail-hero section-pad"><div className="section-label"><span>{project.number}</span><span>{project.eyebrow}</span></div><h1>{project.title}<br /><em>em movimento.</em></h1><p>{project.description}</p><ProjectVisual project={project} large /></section><section className="detail-body section-pad"><div><span className="eyebrow">CONTEXTO & PARTICIPAÇÃO</span><h2>Ideias com<br /><span>intenção.</span></h2></div><div className="detail-text"><p>{project.participation}</p><div className="editable-note"><Plus size={16} /> ÁREA PREPARADA PARA INSERIR CASE, IMAGENS E RESULTADOS REAIS</div><div className="deliverables"><span className="eyebrow">ENTREGAS</span>{project.deliverables.map((item) => <div key={item}><Check size={15} /> {item}</div>)}</div></div></section><section className="detail-gallery section-pad"><div className="section-label"><span>GALERIA</span><span>MATERIAIS DO PROJETO</span></div><div className="gallery-grid"><Placeholder label="IMAGEM / PEÇA 01" /><Placeholder label="IMAGEM / PEÇA 02" /><Placeholder label="VÍDEO / MATERIAL 03" /></div></section><section className="next-project section-pad"><span className="eyebrow">CONTINUAR EXPLORANDO</span><div>{projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length] && <button onClick={() => onOpen(projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length].id)}>Próximo projeto <ArrowUpRight size={22} /></button>}</div></section></main></div>;
}

export default App;
