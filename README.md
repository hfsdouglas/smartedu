# SmartEdu

## Visão Geral
O projeto SmartEdu visa criar uma plataforma educacional abrangente, composta por um painel administrativo web para professores e um aplicativo móvel para estudantes. Este repositório contém os protótipos e o código inicial para ambas as aplicações, focando na usabilidade e na experiência do usuário.

## Tecnologias do Projeto
Este projeto está sendo construído com as seguintes tecnologias:

| Componente          | Tecnologia Principal | Outras Tecnologias                                |
|---------------------|----------------------|---------------------------------------------------|
| **Servidor (API)**  | Laravel              |                                                   |
| **Front-end (Painel Admin)** | React                | Tailwind CSS, React Hook Form, TypeScript         |
| **Mobile**          | React Native         | Expo                                              |

## Painel Administrativo Web (Para Professores)

### Descrição
O painel administrativo web é uma interface intuitiva e responsiva desenvolvida para que os professores possam gerenciar suas aulas e conteúdos de forma eficiente. Ele oferece funcionalidades essenciais para upload de vídeos, organização de materiais e acompanhamento do desempenho das aulas.

### Funcionalidades Principais
- **Autenticação de Usuário:** Tela de login segura para acesso restrito aos professores.
- **Dashboard Interativa:** Visão geral das estatísticas de aulas, visualizações e engajamento dos alunos.
- **Gestão de Aulas:** Adicione, edite e visualize suas aulas, incluindo título, descrição e URL de vídeos do YouTube.
- **Perfil do Professor:** Mantenha suas informações pessoais e profissionais atualizadas, com opção de edição.
- **Configurações:** Personalize as preferências de notificação, privacidade e aparência da plataforma.
- **Sidebar Retrátil:** Navegação lateral que pode ser expandida ou recolhida para otimizar o espaço da tela.

### Tecnologias Utilizadas
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva, garantindo um design moderno e limpo.
- **React Hook Form:** Para gerenciamento eficiente de formulários e validação.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.

## Aplicativo Mobile (Para Estudantes)

### Descrição
O aplicativo mobile é projetado para estudantes consumirem o conteúdo educacional de forma prática e acessível. O protótipo visualiza as principais telas e fluxos de usuário, com foco em uma experiência de aprendizado envolvente.

### Funcionalidades Principais (Protótipo)
- **Autenticação de Usuário:** Tela de login segura para acesso restrito aos estudantes.
- **Tela Inicial (Home):** Apresenta as aulas mais recentes e professores em destaque, com navegação intuitiva.
- **Lista de Professores:** Permite pesquisar e filtrar professores por área de atuação, facilitando a descoberta de novos conteúdos.
- **Perfil do Estudante:** Exibe o histórico de aulas, professores favoritos e opções de configuração de conta.
- **Player de Vídeo:** Interface otimizada para visualização de aulas em vídeo, com informações sobre a aula e o professor.

### Tecnologias Utilizadas
- **React Native:** Framework JavaScript para construção de aplicativos móveis nativos para iOS e Android.
- **Expo:** Conjunto de ferramentas e serviços que facilitam o desenvolvimento, construção e implantação de aplicativos React Native.

## Servidor (API)

### Descrição
O backend do projeto será desenvolvido como uma API RESTful para servir dados tanto para o painel administrativo quanto para o aplicativo móvel. Ele será responsável pela gestão de usuários, aulas, autenticação e outras lógicas de negócio.

### Tecnologias Utilizadas
- **Laravel:** Framework PHP robusto e elegante para desenvolvimento web, conhecido por sua sintaxe expressiva e ferramentas poderosas para construção de APIs.

## Contribuição
Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.