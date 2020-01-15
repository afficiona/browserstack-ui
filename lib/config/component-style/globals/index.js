const globals = {
  colors: {
    primary: {
      color: (get) => get('colorScheme', 'primary'),
    },
    danger: {
      color: (get) => get('colorScheme', 'danger'),
    }
  }
};

export default globals;
