function CreateBasementRpgCampaing(id, owner, campaingTitle, description, rpgAttrs, timestamp) {
  return {
    id: id,
    owner: {
      id: owner.id,
      username: owner.username,
      email: owner.email,
      avatarURL: owner.avatarURL
    },
    system: {
      model: rpgAttrs.model,
      players_count: rpgAttrs.players_count,
    },
    game: {
      campaing_title: campaingTitle,
      description: description,
      members: [],
      characters: [],
    }
  }
}

module.exports = {
  CreateBasementRpgCampaing
}