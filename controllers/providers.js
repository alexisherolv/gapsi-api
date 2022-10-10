const fs = require("fs");
  
//Reading JSON file
const providers = require("../bd");

//Get All Providers
async function getProviders(){
    try{
        return providers;
    }catch(error){
        console.log(error)
    }
}

//Get Providers By Pagination
async function getProvidersByPagination(params){
    try{
        var response = []
        var page_number = parseInt(params,10);
        response = providers.slice((page_number - 1) * 3, page_number * 3);
        return response;
    }catch(error){
        console.log(error)
    }
}

//Delete Provider By Index
async function deleteProvider(params){
    try{
        var indice = 0;

        for(var i=0; i<providers.length; i++)
        {
            if(providers[i].name === params)
            {
                indice = i;
            }
        }
        var response = {}
        providers.splice(indice, 1);
        fs.writeFileSync("bd.json", JSON.stringify(providers), err => {
            // Checking for errors
            if (err) throw err; 
        });

        response = {
            message: "Success"
        }

        return response;
    }catch(error){
        console.log(error)
    }
}

//Insert Provider
async function deleteProvider(params){
    try{
        var indice = 0;

        for(var i=0; i<providers.length; i++)
        {
            if(providers[i].name === params)
            {
                indice = i;
            }
        }
        var response = {}
        providers.splice(indice, 1);
        fs.writeFileSync("bd.json", JSON.stringify(providers), err => {
            // Checking for errors
            if (err) throw err; 
        });

        response = {
            message: "Success"
        }

        return response;
    }catch(error){
        console.log(error)
    }
}

//Get Pages
async function getPages(){
    try{
        var responsive = {
            pages: Math.round(providers.length/3)
        }
        return responsive;
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getProviders: getProviders,
    getPages: getPages,
    getProvidersByPagination, getProvidersByPagination,
    deleteProvider: deleteProvider
}