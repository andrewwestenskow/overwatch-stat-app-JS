const gameModes = {
  control: {id: 1, name: 'Control'},
  assault: {id: 2, name: 'Assault'},
  escort: {id: 3, name: 'Escort'},
  hybrid: {id: 4, name: 'Hybrid'},
};

export const deriveGameMode = id => {
  const {control, assault, escort, hybrid} = gameModes;
  switch (id) {
    case control.id:
      return control.name;
    case assault.id:
      return assault.name;
    case escort.id:
      return escort.name;
    case hybrid.id:
      return hybrid.name;
    default:
      return null;
  }
};

export const deriveIsControl = id => (id === 1 ? true : false);

export default gameModes;
