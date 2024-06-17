// Define e exporta o objeto API_Routes
export const API_Routes = {
  NAASP: {
    // Objeto que contém as rotas da API para o serviço NAASP
    users: {
      // Objeto que contém as rotas da API para o recurso de usuários
      login: "/login", // Rota para o endpoint de login
      password_reset: "/solicitar-nova-senha", // Rota para o endpoint de redefinição de senha
      getAll: "/", // Rota para o endpoint que retorna todos os usuários
      getById: "/usuarios/:id", // Rota para o endpoint que retorna um usuário específico pelo ID
      create: "/usuarios", // Rota para o endpoint que cria um novo usuário
      edit: "/", // Rota para o endpoint que edita um usuário existente
      delete: "/", // Rota para o endpoint que exclui um usuário existente
    },
    family: {
      getAll: "/buscarTodasFamilias",
      create: "/novaFamilia",
    },
  },
}
