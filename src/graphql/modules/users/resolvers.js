const generator = require("../../../helpers/generator");

module.exports = {

  User: {
    async tasks(user, _, { dataSources }) { // a ordem dos parametros passados influenciam o resultado
      return await dataSources.tasksRegisterService.getTasks(user.id)
    }
  },

  Query: {
    async user(_, { login }, { dataSources }) {
      const userFound = await dataSources.userRegisterService.getUserByLogin(login);

      if (userFound) {
        userFound.token = generator.createToken(userFound.id)
        return userFound;
      }

      const { login: loginGit, avatar_url } = await dataSources.githubService.getUser(login);

      const newUser = await dataSources.userRegisterService.addUser({
        login: loginGit,
        avatar_url
      })

      newUser.token = generator.createToken(newUser.id);
      return newUser;
    }
  }
}
