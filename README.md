```markdown
# NAASP-FRONTEND

## Descrição

Este projeto é uma aplicação web que permite aos usuários fazer login, redefinir a senha e navegar por várias páginas. Ele usa React para a interface do usuário, Redux para gerenciamento de estado, react-router-dom para roteamento, antd para componentes de interface do usuário e axios para solicitações HTTP.

## Estrutura Detalhada do Projeto

- `src/`: Diretório raiz para o código fonte do projeto.
  - `components/`: Contém todos os componentes React reutilizáveis.
    - `AuthComponents/`: Componentes específicos para autenticação.
    - `CommonComponents/`: Componentes comuns usados em várias partes da aplicação.
    - `FormComponents/`: Componentes de formulário personalizados.
    - `LayoutComponents/`: Componentes relacionados ao layout da aplicação.
  - `hooks/`: Contém todos os hooks personalizados para lógica de estado e outros comportamentos reutilizáveis.
  - `pages/`: Contém todos os componentes de página que representam as diferentes vistas na aplicação.
    - Cada página tem seu próprio diretório com um arquivo `.js` e potencialmente arquivos `.css` ou `.scss` para estilos específicos da página.
  - `store/`: Contém toda a configuração e fatias do Redux para gerenciamento de estado global da aplicação.
  - `services/`: Contém serviços, como instâncias do axios configuradas para fazer solicitações HTTP aos endpoints da API.
  - `constants/`: Contém constantes utilizadas em toda a aplicação, como URLs das rotas da API e strings de texto fixas.

## Arquivos Adicionais

- Alguns diretórios contêm arquivos adicionais como `.test.js` indicando testes unitários ou de integração associados aos componentes ou lógica correspondente.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

## Uso

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm start
```

## Contribuição

As contribuições são bem-vindas. Para contribuir, faça um fork do projeto, crie uma nova branch, faça suas alterações e abra um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.
```