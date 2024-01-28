function PlayerCharacterDto (user, characterObject){
  return {
    owner: user,
    character: {
      name: characterObject.name,
      level: characterObject.level,
      character_race: characterObject.character_race,
      class: characterObject.className,
      image: characterObject.image,
      history: characterObject.history,
      attributes: {
        strength: characterObject.attributes.strength,
        dexterity: characterObject.attributes.dexterity,
        intelligence: characterObject.attributes.intelligence,
        constitution: characterObject.attributes.constitution,
        perception: characterObject.attributes.perception,
        wisdom: characterObject.attributes.wisdom,
        charisma: characterObject.attributes.charisma
      },
      spell_book: characterObject.spell_book ?? [],
      habilities: characterObject.habilities ?? []
    }
  }
}

module.exports = {
  PlayerCharacterDto
}