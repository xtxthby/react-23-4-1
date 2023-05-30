// import useLocalStorage from '../../hooks/useLocalStorage';
// import { useState } from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
//   const [email, setEmail] = useLocalStorage('email', '');
//   const [password, setPassword] = useLocalStorage('password', '');

//   const handleChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         return;
//     }
//   };

//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           onChange={handleChange}
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }
// ==============================================







// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label className={styles.label}>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }



// ===========================================================
// початок


// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState } from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
//   // викликаємо функцію і передамо початковий стан ''
//   // порожні рядок
//   const inputState = useState('');
//   // повертає два значення . перше поточний стан '' а друге 
//   // це функція для оновлення
//   console.log(inputState);


//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // onChange={handleChange}
//           // value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           // onChange={handleChange}
//           // value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }
// =======================================================

// деструктуризація


// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState } from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
//   // викликаємо функцію і передамо початковий стан ''
//   // порожні рядок
//   // витягуємо значення першим а другім функцію яка буде
//   // змінювати початковий стан
//   const [email, setEmail] = useState('');
//   // повертає значення поточного  стану '' 
//   console.log(email);
//   console.log(setEmail);

//   // Обявляємо функцію
//   const handleChange = event => { 
//     console.log(event.target.value);
//     // обновляємо стан (що треба записати в середину email)
//     setEmail(event.target.value)
//   }


//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleChange}
//           // {email} прийшло з const [email, setEmail] = useState('');
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           // value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }



// ==================================================  

//  як зберігати обєкти в стейті

// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState } from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
// //  наприклад зберігаю в стейті обєкт. тобіш через = useState('')
//   //  будемо зберігари початковий стан email і password
//   const [state, setState] = useState({
//     email: '',
//     password: ''
//   });


//   // Обявляємо функцію для email
//   const handleemailChange = event => {
//     // console.log(event.target.value);
//     // обновляємо стан (що треба записати в середину email)
//     // але так робити не можна бо перезапише у стейті все
//     // і залишиться тільки email: 'werrt'
//     setState({ email: 'werrt' });
//   }

//     // Обявляємо функцію для  password
//   const handlepasswordChange = event => { 
//     // console.log(event.target.value);
//     // обновляємо стан (що треба записати в середину email)
//     // setEmail(event.target.value)
//   }


//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleemailChange}
//           // {email} прийшло з const [email, setEmail] = useState('');
//           //  тепер тут буде так
//           value={state.email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handlepasswordChange}
//           value={state.password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }
// ==========================================================


// як зберігати в хуках


// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState } from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
// //  наприклад зберігаю в стейті обєкт. тобіш через = useState('')
//   //  будемо зберігари початковий стан email і password
//   const [state, setState] = useState({
//     email: '',
//     password: ''
//   });


//   // Обявляємо функцію для email
//   const handleemailChange = event => {
//     // console.log(event.target.value);
//     // обновляємо стан (що треба записати в середину email)
//     // робимо для хуків оновлення через розпилення попереднього стану
//     // і оновлення яке нам потрібно і це не дуже вірно
//     setState(prevState => ({...prevState, email: 'werrt' }));
//   }

//     // Обявляємо функцію для  password
//   const handlepasswordChange = event => { 
//     // console.log(event.target.value);
//     // обновляємо стан (що треба записати в середину email)
//     // setEmail(event.target.value)
//   }


//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleemailChange}
//           // {email} прийшло з const [email, setEmail] = useState('');
//           //  тепер тут буде так
//           value={state.email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handlepasswordChange}
//           value={state.password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }

// ==============================================================



// //  як зберігати правильно -- треба окремо кожен стейт

// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState } from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
// //  наприклад зберігаю в стейті обєкт. тобіш через = useState('')
//   //  будемо зберігари початковий стан email і password
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   // Обявляємо функцію для email
//   const handleEmailChange = event => {
//     // console.log(event.target.value);
//     // обновляємо стан (що треба записати в середину email)
//     setEmail(event.target.value);
//   }

//     // Обявляємо функцію для  password
//   const handlePasswordChange = event => { 
//     // console.log(event.target.value);
//     // обновляємо стан (що треба записати в середину password)
//     setPassword(event.target.value)
//   }


//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleEmailChange}
//           // {email} прийшло з const [email, setEmail] = useState('');
//           //  тепер тут буде так
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handlePasswordChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }
// ==============================================================

// оптимізація функції

// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState } from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
// //  наприклад зберігаю в стейті обєкт. тобіш через = useState('')
//   //  будемо зберігари початковий стан email і password
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   // обявляємо загальну функцію
//   // і контролюємо по name значення яке ми вводимо
//   // тому що є  name="email" і   name="password"
//   // далі робимо svitch
//   const handleChange = event => {
//     console.log(event.target.name);
//       //  в залежності в яке поле ми вводимо спрацьовує case 
//      switch (event.target.name) {
//       case 'email':
//         setEmail(event.target.value);
//         break;

//       case 'password':
//         setPassword(event.target.value);
//         break;

//       default:
//         return;
//     }
//   }


//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleChange }
//           // {email} прийшло з const [email, setEmail] = useState('');
//           //  тепер тут буде так
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }




// ==========================================================

// робимо деструкторизацію світча

// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState } from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
// //  наприклад зберігаю в стейті обєкт. тобіш через = useState('')
//   //  будемо зберігари початковий стан email і password
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   // обявляємо загальну функцію
//   // і контролюємо по name значення яке ми вводимо
//   // тому що є  name="email" і   name="password"
//   // далі робимо svitch
//   const handleChange = event => {
//     // console.log(event.target.name);
//     const { name, value } = event.target;
//     //  в залежності в яке поле ми вводимо спрацьовує case 
//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         return;
//     }
//   }


//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleChange }
//           // {email} прийшло з const [email, setEmail] = useState('');
//           //  тепер тут буде так
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }

// =====================================================================



// зберігаємо в локал сторадж за допомогою useEffect

// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState, useEffect} from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
// //  наприклад зберігаю в стейті обєкт. тобіш через = useState('')
//   //  будемо зберігари початковий стан email і password
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   // обявляємо загальну функцію
//   // і контролюємо по name значення яке ми вводимо
//   // тому що є  name="email" і   name="password"
//   // далі робимо svitch
//   const handleChange = event => {
//     // console.log(event.target.name);
//     const { name, value } = event.target;
//     //  в залежності в яке поле ми вводимо спрацьовує case 
//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         return;
//     }
//   }

//   useEffect(() => {
//     // тут одномоментно викликається і пароль дивитись 
//     // через консоль, тому треба ставити залежність
//     // в кінці в дужках[]
//     console.log('email useEffect');
//     //  зберігаємо в локал сторадж де ключ 'email' а 
//     // .значення JSON.stringify(email) хоча вона вже строка але.....
//     window.localStorage.setItem('email', JSON.stringify(email));
//   }, [email]);
//   //  те саме для password
//   useEffect(() => {
//     console.log('password useEffect');
//     window.localStorage.setItem('password', JSON.stringify(email));
//   }, [password]);

//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleChange }
//           // {email} прийшло з const [email, setEmail] = useState('');
//           //  тепер тут буде так
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }

// ============================================================

// при перезагрузці сторінки робимо так щоб дані приходили з 
// локалсторадж

// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState, useEffect} from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту
// export default function SignupForm() {
//   //  дані приходять з локалсторадж або це пустий рядок
//   // const [email, setEmail] = useState(
//   //   JSON.parse(window.localStorage.getItem('email')) ?? '',
//   // );

//     // але щоб useState викликав функцію (яка проводить якісь розрахунки)
//   //  один раз треба вираз обгорнути у функцію
//   const [email, setEmail] = useState(() => {
//     console.log('Робимо початковий стан');
//     return JSON.parse(window.localStorage.getItem('email')) ?? '';
//   });
//   const [password, setPassword] = useState(
//     () => JSON.parse(window.localStorage.getItem('password')) ?? '',
//   );


//   // обявляємо загальну функцію
//   // і контролюємо по name значення яке ми вводимо
//   // тому що є  name="email" і   name="password"
//   // далі робимо svitch
//   const handleChange = event => {
//     // console.log(event.target.name);
//     const { name, value } = event.target;
//     //  в залежності в яке поле ми вводимо спрацьовує case 
//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         return;
//     }
//   }

//   useEffect(() => {
//     // тут одномоментно викликається і пароль дивитись 
//     // через консоль, тому треба ставити залежність
//     // в кінці в дужках[]
//     // console.log('email useEffect');
//     //  зберігаємо в локал сторадж де ключ 'email' а 
//     // .значення JSON.stringify(email) хоча вона вже строка але.....
//     window.localStorage.setItem('email', JSON.stringify(email));
//   }, [email]);
//   //  те саме для password
//   useEffect(() => {
//     // console.log('password useEffect');
//     window.localStorage.setItem('password', JSON.stringify(password));
//   }, [password]);

//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleChange }
//           // {email} прийшло з const [email, setEmail] = useState('');
//           //  тепер тут буде так
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }

// ===================================================================== 


// робимо хук який буде використовувати локал сторадж

// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState, useEffect} from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту

// // робимо кастомний хук який буде керувати локал стораджем
// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });
//   // також ти контролюєш useEffect де по ключу будеш записувати значення 
//   // з інпуту state
//   useEffect(() => {
//     // console.log('password useEffect');
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   // так як це функція то треба повернути масив
//   return [state, setState];
// }

// export default function SignupForm() {
//     // але щоб useState викликав функцію (яка проводить якісь розрахунки)
//   //  один раз треба вираз обгорнути у функцію
//   // const [email, setEmail] = useState(() => {
//   //   // console.log('Робимо початковий стан');
//   //   return JSON.parse(window.localStorage.getItem('email')) ?? '';
//   // });
//   // замість верхнього запису
//   const [email, setEmail] = useLocalStorage('email', '');
//   //   так само з низу
//   const [password, setPassword] = useLocalStorage('password', '');
//   // const [password, setPassword] = useState(
//   //   () => JSON.parse(window.localStorage.getItem('password')) ?? '',
//   // );


//   // обявляємо загальну функцію
//   // і контролюємо по name значення яке ми вводимо
//   // тому що є  name="email" і   name="password"
//   // далі робимо svitch
//   const handleChange = event => {
//     // console.log(event.target.name);
//     const { name, value } = event.target;
//     //  в залежності в яке поле ми вводимо спрацьовує case 
//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         return;
//     }
//   }

//   // // тепер це все не потрібно!!!!!!!!!!

//   // useEffect(() => {
//   //   // тут одномоментно викликається і пароль дивитись 
//   //   // через консоль, тому треба ставити залежність
//   //   // в кінці в дужках[]
//   //   // console.log('email useEffect');
//   //   //  зберігаємо в локал сторадж де ключ 'email' а 
//   //   // .значення JSON.stringify(email) хоча вона вже строка але.....
//   //   window.localStorage.setItem('email', JSON.stringify(email));
//   // }, [email]);
//   // //  те саме для password
//   // useEffect(() => {
//   //   // console.log('password useEffect');
//   //   window.localStorage.setItem('password', JSON.stringify(password));
//   // }, [password]);

//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleChange }
//           // {email} прийшло з const [email, setEmail] = useState('');
//           //  тепер тут буде так
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }



// ===============================================================

// робимо серіалізацію  --- serialize-----






// // викликаэмо з реакту ( useState)- щось зробити -це функція
// import { useState, useEffect} from 'react';
// import styles from './SignupForm.module.css';
// // експорт функції яка повертає розмітку , тут немає класу тому не 
// // треба {Component} з реакту

// // робимо кастомний хук який буде керувати локал стораджем і тут 
// // робимо  робимо серіалізацію (деструктурізація)
// const useLocalStorage = (key, defaultValue, serialize = JSON.stringify,
// deserialize = JSON.parse) => {
//   const [state, setState] = useState(() => {
//     return deserialize(window.localStorage.getItem(key)) ?? defaultValue;
//   });
//   // також ти контролюєш useEffect де по ключу будеш записувати значення 
//   // з інпуту state
//   useEffect(() => {
//     // console.log('password useEffect');
//     window.localStorage.setItem(key, serialize(state));
//   }, [key, state, serialize]);
//   // так як це функція то треба повернути масив
//   return [state, setState];
// }

// export default function SignupForm() {

//   const [email, setEmail] = useLocalStorage('email', '');
//   const [password, setPassword] = useLocalStorage('password', '');

//   // обявляємо загальну функцію
//   // і контролюємо по name значення яке ми вводимо
//   // тому що є  name="email" і   name="password"
//   // далі робимо svitch
//   const handleChange = event => {
//     // console.log(event.target.name);
//     const { name, value } = event.target;
//     //  в залежності в яке поле ми вводимо спрацьовує case 
//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         return;
//     }
//   }

//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           // було так
//           // onChange={this.handleChange}
//           // value={this.state.email}
//           // стало так
//           onChange={handleChange }
//           // {email} прийшло з const [email, setEmail] = useState('');
//           //  тепер тут буде так
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }


// ===================================================================

// але ми залишимо як було ш перенесемо кастомний хук в окремий файл

// імпортуємо наш хук
import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './SignupForm.module.css';
// експорт функції яка повертає розмітку , тут немає класу тому не 
// треба {Component} з реакту



export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  // обявляємо загальну функцію
  // і контролюємо по name значення яке ми вводимо
  // тому що є  name="email" і   name="password"
  // далі робимо svitch
  const handleChange = event => {
    // console.log(event.target.name);
    const { name, value } = event.target;
    //  в залежності в яке поле ми вводимо спрацьовує case 
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  }

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          // було так
          // onChange={this.handleChange}
          // value={this.state.email}
          // стало так
          onChange={handleChange }
          // {email} прийшло з const [email, setEmail] = useState('');
          //  тепер тут буде так
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
