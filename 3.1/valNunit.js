function valAndUnits(input) {
    const match = input.match(/^(-?\d*\.?\d+)(\s*(.*))?$/);

    const value = parseFloat(match[1]);
    const units = match[3] || '';

    return { val: value, units: units };
}
