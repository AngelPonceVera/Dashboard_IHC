export const linkStyles = {
  components: {
    Link: {
      // 3. We can add a new visual variant
      decoration: 'none',
      baseStyle: {
        borderRadius: 'none',
        _hover: {
          textDecoration: 'none',
          borderRadius: 'none'
        },
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  }
};
