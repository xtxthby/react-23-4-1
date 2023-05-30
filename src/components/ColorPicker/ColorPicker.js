// import { useState } from 'react';
// import styles from './ColorPicker.module.css';

// export default function ColorPicker({ options }) {
//   const [activeOptionIdx, setActiveOptionIdx] = useState(0);

//   const makeOptionClassName = index => {
//     return index === activeOptionIdx ? styles.activeOption : styles.option;
//   };

//   const { label } = options[activeOptionIdx];

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Color Picker</h2>
//       <p>Выбран цвет: {label}</p>
//       <div>
//         {options.map(({ label, color }, index) => (
//           <button
//             key={label}
//             aria-label={label}
//             className={makeOptionClassName(index)}
//             style={{ backgroundColor: color }}
//             onClick={() => setActiveOptionIdx(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
// =========================================================

// стара версія



// class OldColorPicker extends PureComponent {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     return index === this.state.activeOptionIdx
//       ? styles.activeOption
//       : styles.option;
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];

//     return (
//       <div className={styles.container}>
//         <h2 className={styles.title}>Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               aria-label={label}
//               className={this.makeOptionClassName(index)}
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
// ===================================================


import { useState } from 'react';
import styles from './ColorPicker.module.css';

// експорт функції
//  заміст this.props; ми деструктуруємо в options
export default function ColorPicker({options}) {
  // в стейті був activeOptionIdx далі метод якій буде змінювати стейт
  //  і по айді він = 0
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  // це функція яка отримує індекс, але ця функція є просто обгортка
  // дому вона не потрібна
  // const setActiveIdx = index => {
  //   setActiveOptionIdx( index );
  // };
  // Нам потрібен  label тому витягнемо його з  options по індексу
  const { label } = options[activeOptionIdx];
  // можна так options[activeOptionIdx].label;
  

  // це функція яка міняє стан по індексу кнопки (кнопка якщо активна то більша)
  const makeOptionClassName = index => {
    return index === activeOptionIdx ? styles.activeOption : styles.option;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      {/* можна так */}
      {/* <p>Выбран цвет: {options[activeOptionIdx].label}</p> */}
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            // тому ми на пряму її передамо сюди
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
  
}
