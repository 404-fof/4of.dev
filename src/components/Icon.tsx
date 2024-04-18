import { css } from '../../styled-system/css';
 
export default function App() {
  return (
    <img 
    src='./icon.png'
    className={css({
      width: 400,
      height: 400,
      rounded: 400,
      border: '1px solid black',
    })}
    />
  )
}