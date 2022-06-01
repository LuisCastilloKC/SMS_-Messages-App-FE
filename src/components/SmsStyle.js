import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FABD4A;
`

export const Header = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;s
`

export const Input = styled.input`
min-height: 25px;
width: 350px;
border: solid 1px rgba(255,255,255,0.8);
padding: 10px 25px;
color: #002E40;
background: rgba(255,255,255,0.8);
box-shadow: 0 4px 6px rgba(0,0,0,0.2);
border-radius: 25px 0 0 0;
font-size: 11pt;
`

export const TextArea = styled.textarea`
font-size: 21pt;
border-radius: 0 0 0 25px;
min-height: 50px;
height: 50px;
border-top: none;
margin-top: 2px ;
padding-left: 16px;
padding-right: 34px;

min-height: 25px;
	width: 350px;
	border: solid 1px rgba(255,255,255,0.8);
	padding: 10px 25px;
	color: #002E40;
	background: rgba(255,255,255,0.8);
	box-shadow: 0 4px 6px rgba(0,0,0,0.2);
	border-radius: 25px 0 0 0;
	font-size: 11pt;
`

export const Button = styled.button`
  width: 180px;
  padding: 12px 25px;
  margin: 6px 0 4px;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  background-color: black;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
`