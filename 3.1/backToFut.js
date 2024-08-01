function backToTheFuture (inbound) {
    const alignedMonths = {
      'January': { outbound: 'October', maxDays: 31},
      'April': { outbound: 'July', maxDays: 31},
      'September': { outbound: 'December', maxDays: 31},
      'February': { outbound: 'March', maxDays: 31},
      'March': { outbound: 'November', maxDays: 30},
    }
    
    inbound = inbound.split(' ')
  
    const match = alignedMonths[inbound[2]]
  
    if (match && inbound[1] <= match.maxDays) {
      return `I'm leaving here on ${inbound[0]} ${inbound[1]} ${match.outbound}!`
    }
  
    return "Doc, I can't get back to the future!"
  }