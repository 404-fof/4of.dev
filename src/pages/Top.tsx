import { css } from '../../styled-system/css';
 
export default function App() {
  return (
    <div
    className={css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      border: '3vmin solid #d35657',
      backgroundColor: '#fefeff',
    })}
    >
      <img 
        src='./icon.png'
        className={css({
          height: '40vmin',
          aspectRatio: '1/1',
          rounded: '100%',
          border: '0.5vmin solid black',
          marginLeft: '2vw',
        })}
      />
      <div>
      <text
      className={css({
        fontFamily: 'Virgil',
        fontSize: '9vmin',
        marginLeft: '2vw',
      })}
      >
      Mukai Sora a.k.a. fof
      </text>
      <p
      className={css({
        fontFamily: 'Virgil',
        fontSize: '6vmin',
        marginLeft: '2vw',
      })}
      >
      @4OF-fof
      </p>
      </div>
      </div>
  )
}