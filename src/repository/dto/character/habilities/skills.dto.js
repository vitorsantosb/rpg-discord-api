function CreateBasementSkills(skill){
  return {
    name: skill.name,
    description: skill.description,
    damage: skill.damage,
    cooldown: skill.cooldown,
    stamina_cost: skill.stamina_cost,
    mana_cost: skill.mana_cost
  }
}

module.exports = {
  CreateBasementSkills
}