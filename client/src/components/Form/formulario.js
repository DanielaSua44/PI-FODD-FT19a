import styled from 'styled-components';


const Main = styled.section`
  font-family: 'Roboto',sans-serif;
  max-width: 800px;
  color:#fff;
  width: 90%;
  margin: auto;
  background: #fac771;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(0 0 0 / 65%);
  padding: 100px 100px 30px 100px;
  border-style: solid;
  border-color: #c69c6d;
 `

const Formulario = styled.form`
    display:grid;
    grid-template-columns: 1fr 1fr ;
    gap:20px;

    @media(max-width: 800px){
      grid-template-columns: 1fr;
    }
`
const colores = {
  border: "#3d697a",
  error: "#bb2929",
  exito: "#3d697a"

}
const CreateTitle = styled.p `
   font-size: 50px;
  color: #fac771;
  z-index: -100;
  padding-right: 20px !important;
  position: fixed;
  display: flex;
  margin-top: -7%;
  flex-direction: row;
  z-index: -100;
`
const Label = styled.label`
  display:block;
  font-weight:700;
  padding:10px;
  min-height:40px;
  cursor:pointer;
`
//input.danger {
 // border: 2px solid red;
//}
const Input = styled.input`
   position: relative;
   z-index: 90;
   background:#fff;
   border-radius:3px;
   height:45px ;
   line-height:45px;
   padding: 0px 40px 0px 18px;
   transition: .3s ease all;
   border: 3px solid transparent;
   width: 400px;
  height: 20px;
  background-color: black;
  border-color: #ffffff;
  border-radius: 4px;
  color: whitesmoke;
  font-family: "Playfair Disp";

   &:focus{
     border: 5px solid ${colores.border};
     outline: none;
     box-shadow: 3px 0px 30px rgba(163,163,163,0.4)
   }
`
const TypeCheck = styled.input`
  display: inline;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Textarea= styled.textarea` 
   width: 400px;
  height: 100px;
  resize: none;
  color: whitesmoke;
  background-color: black;
  border-color: #ffffff;
  border-radius: 4px;
  font-family: "Playfair Display", serif;

`

const Perror = styled.p`
   font-size:15px;
   margin-bottom:0px;
   color: ${colores.error};
   
`
const ConteinerButton = styled.div`
   display: flex;
   flex-direction: column;
   align-items:center;
   grid-column:span 2;
`

const Boton = styled.button`
  height: 45px;
  line-height:45px;
  width: 30%;
  background: #f4651a;
  color:#fff;
  font-weight:bold;
  border: none;
  border-radius:3px;
  cursor: pointer;
  transition: .1s ease all;

  &:hover{
    box-shadow: 3px 0px 30px rgba(163,63,163, 1);
  }
`;

const MensjExito = styled.p`
   font-size:14px;
   color:${colores.exito} ;
  // display: none;
`;

const MensjError = styled.div`
  height: 45px;
  line-height: 45px;
  background: ${colores.error};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
     margin: 0px;
    }
  b{
    margin-left:10px;
  }
  `
export {
  Main,
  Formulario,
  Label,
  Input,
  Perror,
  ConteinerButton,
  Boton,
  MensjError,
  MensjExito,
  CreateTitle,
  TypeCheck,
  Textarea
}