import { styled } from '../styled-system/jsx';
 
function App() {
  return (
    <Hello>Hello 🐼!</Hello>
  )
}
 
const Hello = styled.div`
  font-size: 24px;
  font-weight: bold;
`

export default App;