function CreateBasementSpell(spellAttrs){
  return {
    name: spellAttrs.name,
    description: spellAttrs.description,
    damage: spellAttrs.damage,
    cooldown: spellAttrs.cooldown,
    mana_cost: spellAttrs.mana_cost
  }
}

module.exports = {
  CreateBasementSpell
}