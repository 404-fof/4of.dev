import { css } from '../../styled-system/css';
import Icon from '../components/Icon';
 
export default function App() {
  return (
    <div
    className={css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      border: '30px solid #d35657',
      backgroundColor: '#fefeff',
    })}
    >
      <Icon />
      <div>
      <p
      className={css({
        fontFamily: 'Virgil',
        fontSize: 85,
        marginLeft: 10,
        marginBottom: 0,
      })}
      >
      Mukai Sora a.k.a. fof
      </p>
      <p
      className={css({
        fontFamily: 'Virgil',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 0,
      })}
      >
      @4OF-fof
      </p>
      </div>
      </div>
  )
}