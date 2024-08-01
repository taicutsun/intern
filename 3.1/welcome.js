const languageDatabase = new Map([
    ["english", "Welcome"],
    ["czech", "Vitejte"],
    ["danish", "Velkomst"],
    ["dutch", "Welkom"],
    ["estonian", "Tere tulemast"],
    ["finnish", "Tervetuloa"],
    ["flemish", "Welgekomen"],
    ["french", "Bienvenue"],
    ["german", "Willkommen"],
    ["irish", "Failte"],
    ["italian", "Benvenuto"],
    ["latvian", "Gaidits"],
    ["lithuanian", "Laukiamas"],
    ["polish", "Witamy"],
    ["spanish", "Bienvenido"],
    ["swedish", "Valkommen"],
    ["welsh", "Croeso"]
  ]);
  
  function greet(language) {
    if (typeof language !== 'string') return "IP_ADDRESS_REQUIRED - no language was supplied";
    
    if (languageDatabase.has(language.toLowerCase())) return languageDatabase.get(language.toLowerCase());
    else  return "Welcome"; 
  }