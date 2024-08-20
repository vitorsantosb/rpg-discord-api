const SessionAdapter = {
  session: (session) => {
    return {
      id: session.id,
      guild: {
        id: session.guild.id,
        name: session.guild.name
      },
      name: session.name,
      maxMemberCount: session.maxMemberCount,
      isPublic: session.isPublic,
      owner: SessionAdapter.sessionOwner(session.owner),
      gameMaster: SessionAdapter.sessionGameMasterList(session.gameMaster),
      members: session.members ?? [],
      botChannels: session.botChannels ?? [],
      sessionRole: session.sessionRole ?? [],
      isInitialized: session.isInitialized
    }
  },
  sessionOwner: (owner) => {
    return {
      user: {
        id: owner.user.id,
        username: owner.user.username,
        discriminator: owner.user.discriminator
      },
      guild: {
        id: owner.guild.id,
        name: owner.guild.name
      }
    }
  },
  sessionGameMaster: (gameMaster) => {
    return {
      user: {
        id: gameMaster.user.id,
        username: gameMaster.user.username,
        discriminator: gameMaster.user.discriminator
      },
      guild: {
        id: gameMaster.guild.id,
        name: gameMaster.guild.name
      }
    }
  },
  sessionGameMasterList: (gameMaster) => {
    const gameMastersList = []
    for(const row of gameMaster){
      gameMastersList.push(SessionAdapter.sessionGameMaster(row))
    }

    return gameMastersList;
  },

};

module.exports = {
  SessionAdapter
};

