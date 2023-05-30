// import { useState, useEffect, useRef } from 'react';
// import styles from './Clock.module.css';

// export default function Clock() {
//   const [time, setTime] = useState(() => new Date());
//   const intervalId = useRef(null);

//   useEffect(() => {
//     intervalId.current = setInterval(() => {
//       console.log('Это интервал каждые 2000ms ' + Date.now());
//       setTime(new Date());
//     }, 2000);

//     return () => {
//       console.log('Это функция очистки перед следующим вызовом useEffect');
//       stop();
//     };
//   }, []);

//   const stop = () => {
//     clearInterval(intervalId.current);
//   };

//   return (
//     <div className={styles.container}>
//       <p className={styles.clockface}>
//         Текущее время: {time.toLocaleTimeString()}
//       </p>
//       <button type="button" onClick={stop}>
//         Остановить
//       </button>
//     </div>
//   );
// }
// ===============================================================
// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }
// =====================================================


// початок


// import { useState, useEffect, useRef} from 'react';
// import styles from './Clock.module.css';

// export default function Clock() {
//   // ця функція визветься один раз () => new Date() бо вона лінива
//   const [time, setTime] = useState(() => new Date());
//   //  в функціях ця змінна буде завжди оновлюватия і буде null
//   let intervalId = null;
//  // при першому рендері ми хочемо запустити інтервал часу 
//   useEffect(() => {
//     intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       setTime(new Date());
//     }, 1000);
//   }, []);
// //   componentDidMount() {
// //     this.intervalId = setInterval(() => {
// //       console.log('Это интервал каждые 1000ms ' + Date.now());
// //       this.setState({ time: new Date() });
// //     }, 1000);
// //   }

// //   componentWillUnmount() {
// //     console.log('Эот метод вызывается перед размонтированием компонента');
// //     this.stop();
// //   }
  
//   // при кліку на кнопку зупиняємо часи-таймер
//   const stop = () => {
//     clearInterval(intervalId);
//   };

//   console.log(intervalId);
//   return (
//     <div className={styles.container}>
//       <p className={styles.clockface}>
//         Текущее время: {time.toLocaleTimeString()}
//       </p>
//       <button type="button" onClick={stop}>
//         Остановить
//       </button>
//     </div>
//   );
  
  
// }



// ===============================================

//  рефи 


// import { useState, useEffect, useRef} from 'react';
// import styles from './Clock.module.css';

// export default function Clock() {
//   // ця функція визветься один раз () => new Date() бо вона лінива
//   const [time, setTime] = useState(() => new Date());
//   //  в функціях ця змінна буде завжди оновлюватия і буде null
//   // застосуємо рефи де в зиінну запишеться обєкт де є свойство 
//   // carent -- поточний / useRef не буде викликатися кожен раз
//   const intervalId = useRef(null);
//  // при першому рендері ми хочемо запустити інтервал часу 
//   useEffect(() => {
//     // тут тепер цей carent будемо оновлюватиы айдішник буде 
//     // один і той самий так як реф визвався один раз
//     intervalId.current = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       setTime(new Date());
//     }, 1000);
//   }, []);

// //   componentWillUnmount() {
// //     console.log('Эот метод вызывается перед размонтированием компонента');
// //     this.stop();
// //   }
  
//   // при кліку на кнопку зупиняємо часи-таймер за допоиогою current
//   // таким чином можливо зробити троє часів але код буде один
//   // а годинник кожен окремо можна зупинити
//   const stop = () => {
//     clearInterval(intervalId.current);
//   };

//   console.log(intervalId);
//   return (
//     <div className={styles.container}>
//       <p className={styles.clockface}>
//         Текущее время: {time.toLocaleTimeString()}
//       </p>
//       <button type="button" onClick={stop}>
//         Остановить
//       </button>
//     </div>
//   );
  
  
// }

// =======================================================
//  зробимо функцію очистки

import { useState, useEffect, useRef} from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  // ця функція визветься один раз () => new Date() бо вона лінива
  const [time, setTime] = useState(() => new Date());
  //  в функціях ця змінна буде завжди оновлюватия і буде null
  // застосуємо рефи де в зиінну запишеться обєкт де є свойство 
  // carent -- поточний / useRef не буде викликатися кожен раз
  const intervalId = useRef(null);
 // при першому рендері ми хочемо запустити інтервал часу 
  useEffect(() => {
    // тут тепер цей carent будемо оновлюватиы айдішник буде 
    // один і той самий так як реф визвався один раз
    intervalId.current = setInterval(() => {
      console.log('Это интервал каждые 2000ms ' + Date.now());
      setTime(new Date());
    }, 2000);
    // зробимо функцію очистки вона спрацює коли ми перейдемо на 
    // другу сторінку
    return () => {
      console.log('Это функция очистки перед следующим вызовом useEffect');
      // тут визмемо функцію зупинки-очищення
      stop();
    };
  }, []);
  
  // при кліку на кнопку зупиняємо часи-таймер за допоиогою current
  // таким чином можливо зробити троє часів але код буде один
  // а годинник кожен окремо можна зупинити
  const stop = () => {
    clearInterval(intervalId.current);
  };

  console.log(intervalId);
  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Текущее время: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
  
  
}


