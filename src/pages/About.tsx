import { css } from '../../styled-system/css';
 
export default function About() {
  return (
    <div
    className={css({
      display: 'flex',
      height: '100vh',
      backgroundColor: '#fefeff',
    })}>
      <nav
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '10vmin',
        width: '80vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        marginTop: '3vh',
        border: '1vmin solid #d35657',
        borderRadius: '15',
      })}>
        <a
        className={css({
          font: 'Virgil',
          fontSize: '4vmin',
          fontWeight: 'bold',
          height: '100%',
          width: '26vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}>
          - About -
        </a>
        <text
        className={css({
          font: 'Virgil',
          fontSize: '5vmin',
          width: '1vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '1vh',
        })}>
          |
        </text>
        <a
        className={css({
          font: 'Virgil',
          fontSize: '4vmin',
          fontWeight: 'bold',
          height: '100%',
          width: '26vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}>
          Products
        </a>
        <text
        className={css({
          font: 'Virgil',
          fontSize: '5vmin',
          width: '1vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '1vh',
        })}>
          |
        </text>
        <a
        className={css({
          font: 'Virgil',
          fontSize: '4vmin',
          fontWeight: 'bold',
          height: '100%',
          width: '26vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}>
          Blog
        </a>
      </nav>
    </div>
  )
}