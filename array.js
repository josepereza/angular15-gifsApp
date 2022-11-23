
let usuarios=[{nombre:'Jose',edad:22},{nombre:'Pedro',edad:23},{nombre:'Santi',edad:24}]

let usuarios2=[{nombre:'Felipe',edad:50},...usuarios]
usuarios2.push({nombre:'Catalino',edad:120})
usuarios2[3].nombre='santiago'
console.log('usuarios',usuarios)
console.log('usuarios2' ,usuarios2)
