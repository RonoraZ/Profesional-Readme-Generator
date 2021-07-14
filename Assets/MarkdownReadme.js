//Creating the function to generate markdown for the README .

function generateMarkdownReadme(data){ 
    return `#${data.title} 
    
    ##Description:${data.description} 
    
    ## Table of Contents 
    [Description](#description)
    [Installation](#installation)
    [Contribution](#contribution)
    [License](#license)
    [Usage](#usage) 
    [Testing](#testing)
    [Information](#information)
    
    ##Installation:${data.installation} 
    
    ##Contribution:${data.contribution} 
    
    ##License:${data.license} 
    ## Licensing:
    [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io) 
    
    ##Usage:${data.Usage} 
    
    ##Testing:${data.testing} 
    
    ##Information: 
    Add your Github:[${data.github}](https://github.com/${data.github}) 
    Add your Username:${data.username} 
    Add your email:${data.email}`;
} 

module.exports = generateMarkdownReadme;