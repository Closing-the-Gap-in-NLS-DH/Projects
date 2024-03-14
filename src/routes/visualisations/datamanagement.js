'use strict';

import { log } from 'console';
import entriesRaw from '../../data/ENTRIES.json' assert { type: 'json' };


//let createItems = function()

const siblingDependencies=[]
const parentChildDependencies=[]
const cooperationDependencies=[]


const projects = [
        {
            id: 'd05b72be-a5aa-40e4-9458-cd39a739ee5a',
            name: 'projects'
        },
        {
            id: 'f472c52a-6da4-4392-9f8c-464fde1ef0f2',
            name: 'research',
            parent: 'd05b72be-a5aa-40e4-9458-cd39a739ee5a'
        },
        {
            id: 'e62091d9-1840-49aa-ba52-2fa18374e4fd',
            name: 'infra',
            parent: 'd05b72be-a5aa-40e4-9458-cd39a739ee5a'
        },
        {
            id: '125eeb61-6a53-4ece-9a5f-a94c6be92ea9',
            name: 'other',
            parent: 'd05b72be-a5aa-40e4-9458-cd39a739ee5a'
        },
        {
            id: 'de7d562f-b513-4b00-a64d-78f9c60d77d0',
            name: 'digital_preservation',
            parent: 'f472c52a-6da4-4392-9f8c-464fde1ef0f2'
        },
        {
            id: 'd17170ad-a131-4478-9d00-75231fd9a8cd',
            name: 'tools_and_analysis',
            parent: 'f472c52a-6da4-4392-9f8c-464fde1ef0f2'
        },
        {
            id: 'dc646dac-666b-4734-9dbf-409576635a4a',
            name: 'infrastructure',
            parent: 'e62091d9-1840-49aa-ba52-2fa18374e4fd'
        },
        {
            id: '90886ac6-e53d-417a-960c-688a530cd4ea',
            name: 'other',
            parent: '125eeb61-6a53-4ece-9a5f-a94c6be92ea9'
        }
    ];
    
// try to shorten the title with regex  
for (const row of entriesRaw ) { 
    const uuid = row[1]['record_metadata']['uuid'] 
    const relations=  row[1]['project']['related_entities']      
    

    //create projects array       
    function appendProjects(id, parentname, uuid){  
        let name;    
        if (row[1]['project']['title'].length <= 32){
            name= row[1]['project']['title']        
        } else{       
            name=row[1]['project']['title'].slice(0, 32) + "...";
        }  
        if(row[1]['project']['category']==parentname){
        const projectItem={
            "id": uuid,
            "name": name,
            "parent": id,
            "parentname": parentname,
            "url": row[1]['project']['websites'][0]
        };
     
        projects.push(projectItem)
        };                    
    };
    appendProjects("90886ac6-e53d-417a-960c-688a530cd4ea", "other", uuid);
    appendProjects("de7d562f-b513-4b00-a64d-78f9c60d77d0","digital_preservation", uuid);
    appendProjects("d17170ad-a131-4478-9d00-75231fd9a8cd", "tools_and_analysis", uuid);
    appendProjects("dc646dac-666b-4734-9dbf-409576635a4a", "infrastructure", uuid);

   // console.log(projects)

    //create dependencies 
    function appendDependencies(relationType, dependencyType, uuid){
        for( const row of relations){
            if (row["relation_type"]== relationType){
               const dependencyItem = {
                    "source": uuid,
                    "target": row["uuid"]
                    }
                //console.log(dependencyItem)
                dependencyType.push(dependencyItem) 
            }      
        }
    }

    appendDependencies("sibling", siblingDependencies, uuid)
    appendDependencies("child", parentChildDependencies, uuid)
    appendDependencies("cooperation", cooperationDependencies, uuid)

}

//console.log(projects)



// mess arroud stuff

//figure out how to shorten the title

/*
for (const row of entriesRaw ) {
    let name;
    const maxLength = 32;
    if (row[1]['project']['title'].length <= maxLength){
        name= row[1]['project']['title']        
    } else{       
        name=row[1]['project']['title'].slice(0, maxLength) + "...";
     }
}
let kwd = "Kalila and Dimna – AnonymClassic"
console.log(kwd.length)


    const title = row[1]['project']['title']
    console.log(title)
    const abbr =  row[1]['project']['abbr']
    console.log(abbr)
}
*/
/*

for (let i = 0; i < entriesRaw.length; i++){
    console.log(Object.keys(entriesRaw[i][1]));
    console.log(Object.keys(entriesRaw[i][1]["project"]));
    console.log(entriesRaw[i][1]["project"]["websites"][0]);
}

*/
//console.log(entriesRaw[1][1]['project']['category']);
