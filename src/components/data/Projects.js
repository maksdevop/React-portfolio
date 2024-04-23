import kinoMax from '../img/kinoMax.png';
import calculate from '../img/calculate.png';
import modalRegistration from '../img/modal-registration.png';
import todo from '../img/todo.png';
import firstTodo from '../img/todo_first.png';
import secondTodo from '../img/todo_second.png';
import thirdTodo from '../img/todo_third.png';
import kinoMaxfirst from '../img/kinoMax_first.png';
import firstModal from '../img/modal_first.png';
import secondModal from '../img/modal_second.png';
import thirdModal from '../img/modal_third.png';
import fourthModal from '../img/modal_fourth.png';
import fifthModal from '../img/modal_fifth.png';
import firstCalculate from '../img/calculate_first.png';
import secondCalculate from '../img/calculate_second.png';
import thirdCalculate from '../img/calculate_third.png';
import fourthCalculate from '../img/calculate_fourth.png';
import kinoMaxSecond from '../img/kinoMax_second.png';
import kinoMaxThird from '../img/kinoMax_third.png';
import kinoMaxFourth from '../img/kinoMax_fourth.png';
import kinoMaxFifth from '../img/kinoMax_fifth.png';
import kinoMaxSixth from '../img/kinoMax_sixth.png';

const projects = [
    {
        slug: 'Todos',
        title: 'Todos React',
        id: 1,
        imgScreensaver: todo,
        images: [firstTodo, secondTodo, thirdTodo],
        stack: 'React , Css , ReactHooks',
        gitHub: 'https://github.com/maksdevop/Todos-React',
    },
    {
        slug: 'Modal',
        title: 'Registration Modal',
        id: 2,
        imgScreensaver: modalRegistration,
        images: [modalRegistration, firstModal, secondModal, thirdModal, fourthModal, fifthModal],
        stack: 'JavaScript , Css , HTML',
        gitHub: 'https://github.com/maksdevop/form-registration',
    },
    {
        slug: 'Calculate',
        title: 'Calculate on TailwindCss',
        id: 3,
        imgScreensaver: calculate,
        images: [calculate, firstCalculate, secondCalculate, thirdCalculate, fourthCalculate],
        stack: 'HTML , JavaScript , TailwindCss',
        gitHub: 'https://github.com/maksdevop/calculate-tailwind',
    },
    {
        slug: 'Kinopoisk',
        title: 'Personal Kinopoisk',
        id: 4,
        imgScreensaver: kinoMax,
        images: [kinoMax, kinoMaxfirst, kinoMaxSecond, kinoMaxThird, kinoMaxFourth, kinoMaxFifth, kinoMaxSixth],
        stack: 'JavaScript ( MVC , Module ) , FireBase Realtime Database , HTML , CSS',
        gitHub: 'https://github.com/maksdevop/maksdevop.github.io',
    },
];

export default projects;
