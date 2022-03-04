module.exports = {

  User: {
    async tasks(user, _, {dataSources}){ // a ordem dos parametros passados influenciam o resultado
      return await dataSources.tasksRegisterService.getTasks(user.id)
    }
  },

  Query: {
    async user(_, {login}, {dataSources}){
      const userFound = await dataSources.userRegisterService.getUserByLogin(login);

      if(userFound) return userFound;

      const {login: loginGit, avatar_url} = await dataSources.githubService.getUser(login);

      return await dataSources.userRegisterService.addUser({
        login: loginGit,
        avatar_url
      })
    }
  }
}
