function args(command) {
    const parts = command.trim().split(/(\s+|&|;|\||>)/);
    const args = [];
    for (const part of parts) {
      if (part.match(/&|;|\||>/)) {
        break;
      }
      if (part.trim() !== '') {
        args.push(part.trim());
      }
    }
    return args;
  }