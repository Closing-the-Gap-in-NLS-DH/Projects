import entriesRaw from '../../data/ENTRIES.json';
import type { JsonStuff } from '$lib/utils.svelte';


export function createData(){

	interface Dependency {
		source: string,
		target: string
	}

	const entries = entriesRaw as [string, JsonStuff][];
	const siblingDependencies: Dependency[] = []
	const parentChildDependencies: Dependency[] = []
	const cooperationDependencies: Dependency[] = []


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
    

	for (const row of entries ) { 
		const uuid = row[1]['record_metadata']['uuid'] 
		const relations=  row[1]['project']['related_entities']      
		

		//create projects array       
		function appendProjects(id: string, parentname: string, uuid: string){  
			let name;    
			if (row[1]['project']['title'].length <= 50){
				name= row[1]['project']['title']        
			} else{       
				name=row[1]['project']['title'].slice(0, 50) + "...";
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


		//create dependencies 
		function appendDependencies(relationType:string, dependencyType:Dependency[], uuid:string){
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
	return {projects, siblingDependencies, parentChildDependencies, cooperationDependencies}
	
}