//Aqui é uma Arry com seus objetos.
const alunosA = [
    {
        nome: "Nicolly",
        nota: 9  
    },
    {
        nome: "Gabrela",
        nota: 10
    },
    {
        nome: "Ana",
        nota: 8
    },
    {
        nome: "Elena",
        nota: 10
    }
]
//Aqui é uma Arry com seus objetos.
const alunosB = [
    {
        nome: "Nick",
        nota: 2  
    },
    {
        nome: "Gabi",
        nota: 2
    },
    {
        nome: "Anne",
        nota: 2
    },
    {
        nome: "Ester",
        nota: 10
    }
]
    
function calcularMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calcularMedia(alunosA)
const media2 = calcularMedia(alunosB)

function enviaMensagem(media, turma) {
    if(media > 5){
        console.log(`A média da turma ${turma} foi de : ${media}. Parabéns`)
    } else{
        console.log(`A média da turma ${turma} deve ser maior que 5.`)
    }
}

enviaMensagem(media1, "turmaA")
enviaMensagem(media2, "turmaB")

