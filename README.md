

# JobOrganizer

**Conteúdo da Disciplina**: Programação Dinâmica<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 18/0132385  |  Vitor Diniz Pagani |
| 17/0112004  |  Nathan Fernandes Sales de Serra |

## Sobre 
JobOrganizer é uma página web que tem como objetivo, pegar todas as suas atividades do dia a dia, com seus respectivos horários de começo e fim, e também com seu respectivo lucro(peso), e retornar o maior lucro possível, sem que as atividades se sobreponham.

## Screenshots
<img src="/joborganizer/images/tela-inicial.png" alt="Github" width="500"/>
<img src="/joborganizer/images/lista-trabalhos.png" alt="Github" width="500"/>
<img src="/joborganizer/images/valor-calculo.png" alt="Github" width="500"/>

## Instalação 
**Linguagem**: JavaScript<br>
**Framework**: React<br>
É necessário possuir o node instalado na máquina

## Uso 
```powershell
# Clone o repositório
https://github.com/projeto-de-algoritmos/PD_JobOrganizer

# Entre no diretório e instale as dependencias
cd PD_JobOrganizer && npm install

# Inicie o projeto
npm start(ou yarn start) e em outro terminal npx json-server --watch data/db.json --port 8000 (o json-server está configurado para rodar na porta 8000)
(Atenção para não rodar mais de um serviço na mesma porta!!!)
(O react é normalmente executado na porta 3000, e o json-server na porta 8000)
```
Após rodar o projeto, apenas acessar http://localhost:3000 para usá-lo.



