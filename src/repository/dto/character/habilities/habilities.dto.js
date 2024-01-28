function CreateBasementHabilite(habilite){
  return {
    name: habilite.name,
    description: habilite.description,
    damage: habilite.damage,
    cooldown: habilite.cooldown,
    stamina_cost: habilite.stamina_cost,
    mana_cost: habilite.mana_cost
  }
}

module.exports = {
  CreateBasementHabilite
}