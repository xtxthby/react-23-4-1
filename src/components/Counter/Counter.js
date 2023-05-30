// import { useState, useEffect } from 'react';
// import styles from './Counter.module.css';

// export default function Counter() {
//   const [counterA, setCounterA] = useState(0);
//   const [counterB, setCounterB] = useState(0);

//   const handleCounterAIncrement = () => {
//   state те саме що prevState
//     setCounterA(state => state + 1);
//   };

//   const handleCounterBIncrement = () => {
//     setCounterB(state => state + 1);
//   };

//   useEffect(() => {
//     const totalClicks = counterA + counterB;
//     document.title = `Всего кликнули ${totalClicks} раз`;
//   }, [counterA, counterB]);

//   return (
//     <>
//       <button
//         className={styles.btn}
//         type="button"
//         onClick={handleCounterAIncrement}
//       >
//         Кликнули counterA {counterA} раз
//       </button>

//       <button
//         className={styles.btn}
//         type="button"
//         onClick={handleCounterBIncrement}
//       >
//         Кликнули counterB {counterB} раз
//       </button>
//     </>
//   );
// }
// ======================================================






// class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

// componentDidMount() {
//   const { counterA, counterB } = this.state;
//   const totalClicks = counterA + counterB;

//   document.title = `Всего кликнули ${totalClicks} раз`;
// }

// componentDidUpdate(prevProps, prevState) {
//   const { counterA, counterB } = this.state;

//   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//     const totalClicks = counterA + counterB;

//     document.title = `Всего кликнули ${totalClicks} раз`;
//   }
// }

//   render() {
//     return (
//       <>
//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Кликнули counterA {this.state.counterA} раз
//         </button>

//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Кликнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }


// ============================================================


// import { useState, useEffect } from 'react';
// import styles from './Counter.module.css';


// export default function Counter() {
//   const [counterA, setCounterA] = useState(0);
//   const [counterB, setCounterB] = useState(0);

//   // при кожному натисканні на кнопку збільшуємо попередне число на 1
//   const handleCounterAIncrement = () => {
//     setCounterA(prevState => prevState + 1);
//   };

//   const handleCounterBIncrement = () => {
//     setCounterB(prevState => prevState + 1);
//   };

//   // componentDidMount() {
//   //   const { counterA, counterB } = this.state;
//   //   const totalClicks = counterA + counterB;

//   //   document.title = `Всего кликнули ${totalClicks} раз`;
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   const { counterA, counterB } = this.state;

//   //   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//   //     const totalClicks = counterA + counterB;

//   //     document.title = `Всего кликнули ${totalClicks} раз`;
//   //   }
//   // }

  
//   return (
//     <>
//       <button
//         className={styles.btn}
//         type="button"
//         // тепер передаємо силку на функцію
//         onClick={handleCounterAIncrement}
//       >
//         Кликнули counterA {counterA} раз
//       </button>

//       <button
//         className={styles.btn}
//         type="button"
//         onClick={handleCounterBIncrement}
//       >
//         Кликнули counterB {counterB} раз
//       </button>
//     </>
//   );
  
// }

// ==================================================

// useEffect  використовують для синхронизації 
// внутрішнього комронента з наружним -це функція яка оновлюється 
// кожен раз коли ми оновлюємо проп або стейт 
import { useState, useEffect } from 'react';
import styles from './Counter.module.css';


export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  // при кожному натисканні на кнопку збільшуємо попередне число на 1
  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1);
  };
  // другим аргументом useEffect приймає []- якщо він пустий
  // спрацює тільки один раз
  // useEffect(() => {
  //   console.log('запускаємо useEffect')
  // }, []);

  // тепер я хочу щоб він запустився тільки тоді коли
  // змінеться counterA
  // useEffect(() => {
  //   console.log('запускаємо useEffect')
  // }, [counterA]);
  
  // тепер я хочу щоб він запустився тільки тоді коли
  // змінеться counterA i counterB та вивело в документ назви
  //  з самого верху відкритого файлу в браузері 
  // document.title = `Всего кликнули ${totalClicks} раз`;
  useEffect(() => {
    // console.log('запускаємо useEffect')
    const totalClicks = counterA + counterB;
    document.title = `Всего кликнули ${totalClicks} раз`;
  }, [counterA, counterB]);


  
  return (
    <>
      <button
        className={styles.btn}
        type="button"
        // тепер передаємо силку на функцію
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
  
}

