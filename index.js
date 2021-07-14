//Requirements in order to populate the questions 

const inquire = require('inquire'); 
const fs =  require('fs'); 
const generateMarkdownReadme = require('./Assets/MarkdownReadme');  
const { type } = require('os');
const { title } = require('process');

//Creating an array of questions to ask the user in order to create Readme 

const questions = [ 
    //Input a title 

    { 
        type: 'input', 
        name:'title', 
        message: 'What is the title of your project?(Required)', 
        validate: titleRequired =>{ 
            if(titleRequired){ 
                return true ;
            }else{ 
                console.log('You need a Title!! to move on !!'); 
                return false ;
            }
        }
    }, 
    //Input a description
    { 
        type: 'input', 
        name:'description', 
        message: 'Give a description of your project(Required)', 
        validate: descriptionRequired =>{ 
            if(descriptionRequired){ 
                return true ;
            }else{ 
                console.log('You need a Description!! to move on !!'); 
                return false ;
            }
        }
    }, 
    //Input a installation 
    { 
        type: 'input', 
        name:'installation', 
        message: 'Provide an installation for your project(Required)', 
        validate: installationRequired =>{ 
            if(installationRequired){ 
                return true ;
            }else{ 
                console.log('You need a Installation!! to move on !!'); 
                return false ;
            }
        }
    }, 
    //Input a contribution
    { 
        type: 'input', 
        name:'contribution', 
        message: 'Add contributions(Required)', 
        validate: titleRequired =>{ 
            if(titleRequired){ 
                return true ;
            }else{ 
                console.log('You need constributions!! to move on !!'); 
                return false ;
            }
        }
    }, 
    //Input a license
    { 
        type: 'checkbox', 
        name:'license', 
        message: 'Select a licence to use for your project(Required)', 
        choices:['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution','ISC','Open','None'],
        validate: licenseRequired =>{ 
            if(licenseRequired){ 
                return true ;
            }else{ 
                console.log('You need a License selection!! to move on !!'); 
                return false ;
            }
        }
    }, 
    //Input Usage
    { 
        type: 'input', 
        name:'usage', 
        message: 'What is the use of this project?(Required)', 
        validate: usageRequired =>{ 
            if(usageRequired){ 
                return true ;
            }else{ 
                console.log('Provide information on how to use project!! In order to move on !!'); 
                return false ;
            }
        }
    }, 
    //Input Test
    { 
        type: 'input', 
        name:'test', 
        message: 'How to test project?(Required)', 
        validate: testRequired =>{ 
            if(testRequired){ 
                return true ;
            }else{ 
                console.log('Add a description on how to test project!! to move on !!'); 
                return false ;
            }
        }
    }, 
    //Inputing Github info
    { 
        type: 'input', 
        name:'Github', 
        message: 'Enter Github username(Required)', 
        validate: GithubRequired =>{ 
            if(GithubRequired){ 
                return true ;
            }else{ 
                console.log('Add Github username !! to move on !!'); 
                return false ;
            }
        }
    }, 

    { 
        type: 'input', 
        name:'username', 
        message: 'Enter a username(Required)', 
        validate: usernameRequired =>{ 
            if(usernameRequired){ 
                return true ;
            }else{ 
                console.log('Add a username!! to move on !!'); 
                return false ;
            }
        }
    }, 

    { 
        type: 'input', 
        name:'email', 
        message: 'Enter an email(Required)', 
        validate: emailRequired =>{ 
            if(emailRequired){ 
                return true ;
            }else{ 
                console.log('Add an email!! to move on !!'); 
                return false ;
            }
        }
    }
]; 

//Creating a function in order to utilize the app . 

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Readme created ')
    });
}; 

//Getting the app to work  

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md",generateMarkdownReadme(userInput));
    });
};  

//To get the app started 
init();