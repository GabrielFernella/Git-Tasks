module.exports = {

  User: {
    async tasks(_, user, {dataSources}){
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

//6:10