const heroRoles = {
  tank: {id: 1, name: 'Tank'},
  damage: {id: 2, name: 'Damage'},
  support: {id: 3, name: 'Support'},
};

export const deriveHeroRole = id => {
  const {tank, damage, support} = heroRoles;
  switch (id) {
    case tank.id:
      return tank.name;
    case damage.id:
      return damage.name;
    case support.id:
      return support.name;
    default:
      return null;
  }
};
export default heroRoles;
