function introduction(name) {
    console.log(name);
    return `Hi, my name is ${name}.`
}

introduction("Aki")

function introductionWithLanguage(name, language) {
    console.log(name, language);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguage("Aki")

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(name, language);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional("Aki")