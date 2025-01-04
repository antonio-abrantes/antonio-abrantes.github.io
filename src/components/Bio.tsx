import { Briefcase, Code, Target } from 'lucide-react';

export function Bio() {
  return (
    <div className="text-gray-300 max-w-2xl text-justify space-y-6">
    <p className="text-sm leading-relaxed indent">
    Sou graduado em Análise e Desenvolvimento de Sistemas (2018), pós-graduado em Engenharia de Software (2020), 
    Desenvolvimento Web Mobile (2021) e Desenvolvimento e Produção de Games (2022). Minha paixão pela programação 
    me levou a desenvolver habilidades abrangentes tanto no front-end quanto no back-end. Atualmente, estou entusiasmado 
    e dedicado ao estudo dos avanços em inteligência artificial, explorando tanto o uso de ferramentas inovadoras quanto 
    o desenvolvimento de códigos que alavancam o poder da IA.
    </p>

<div className="text-gray-300 max-w-2xl text-center space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-white flex items-center justify-center gap-2 text-lg font-medium">
            <Code className="w-5 h-5 text-yellow-500" />
            Especialidades Técnicas
          </h3>
          <ul className="text-sm space-y-1">
            <li><span style={{fontWeight: "700"}} >Front-End:</span> JavaScript, TypeScript, React, HTML e CSS</li>
            <li><span style={{fontWeight: "700"}} >Back-End:</span> Node.js, PHP, C#, Python e Java</li>
            <li><span style={{fontWeight: "700"}} >Banco de Dados:</span> MySQL e PostgreSQL</li>
            <li><span style={{fontWeight: "700"}} >Ferramentas:</span> Git, SVN, UML, Scrum e XP</li>
            <li><span style={{fontWeight: "700"}} >Servidores:</span> Windows Server, Debian e CentOS</li>
            <li><span style={{fontWeight: "700"}} >Infra:</span> Docker, Portainer, Coolify</li>
            <li><span style={{fontWeight: "700"}} >LowCode:</span> FlutterFlow, N8N, Dify, Bubble, TypeBot</li>
            <li><span style={{fontWeight: "700"}} >IA:</span> Flowise, Langflow, LangChain, Cursor, Bolt.new</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-white flex items-center justify-center gap-2 text-lg font-medium">
            <Briefcase className="w-5 h-5 text-yellow-500" />
            Perfil Profissional
          </h3>
          <p className="text-sm text-justify indent">
            Sou disciplinado, proativo e comprometido, com facilidade para aprender novas tecnologias 
            e me adaptar a diferentes cenários. Minha abordagem autodidata me mantém constantemente 
            atualizado e apto a abraçar desafios em projetos de alta complexidade.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-white flex items-center justify-center gap-2 text-lg font-medium">
            <Target className="w-5 h-5 text-yellow-500" />
            Objetivos
          </h3>
          <p className="text-sm text-justify indent">
            Procuro estabilidade em ambientes de trabalho colaborativos e satisfatórios, 
            onde possa contribuir para o crescimento da equipe. Estou sempre em busca de 
            aprimorar minhas habilidades e explorar novas tecnologias para entregar 
            soluções eficientes e inovadoras.
          </p>
        </div>
      </div>
  </div>
    </div>
  );
}