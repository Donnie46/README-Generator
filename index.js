
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown')

// user input questions

const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please provide the title of your application:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a detailed description of your application:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide any installation instructions for your application:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for use of your application:',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please provide instructions for how to contribute to your application:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide any tests for your application:',
        },

        {
            type: 'list',
            name: 'license',
            choices: ['None', 'MIT', 'GNU', 'Apache'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your github username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address:',
        },

    ]).then((dataResponse) => {
        const readmeTxt = generateMarkdown(dataResponse);
        createFile(readmeTxt);
    })
};

// write README file 

const createFile = (readmeTxt) => {
    writeFile('README.md', readmeTxt);
}

// call questions function to start prmopts

questions();
