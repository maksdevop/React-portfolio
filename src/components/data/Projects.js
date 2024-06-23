import todo from '../img/todo.png';
import todoAddTasks from '../img/todoAddTasks.png';
import todoCheked from '../img/todoCheked.png';
import todoDelete from '../img/todoDelete.png';

import modal from '../img/modal.png';
import modalErrorName from '../img/modalErrorName.png';
import modalErrorrPass from '../img/modalErrorrPass.png';
import modalOpenPass from '../img/modalOpenPass.png';
import modalPost from '../img/modalPost.png';
import modalResult from '../img/modalResult.png';

import kinoMax from '../img/kinoMax.png';
import kinoMaxFuture from '../img/kinoMaxFuture.png';
import kinoMaxFavorite from '../img/kinoMaxFavorite.png';
import kinoMaxAuthorization from '../img/kinoMaxAuthorization.png';
import kinoMaxRegistration from '../img/kinoMaxRegistration.png';
import kinoMaxAuthorized from '../img/kinoMaxAuthorized.png';

import bookLibrary from '../img/bookLibrary.png';
import bookList from '../img/bookList.png';
import bookListFavorite from '../img/bookListFavorite.png';
import bookListFilter from '../img/bookListFilter.png';
import bookListChecked from '../img/bookListChecked.png';

import sneakers from '../img/sneakers.png';
import sneakersFilter from '../img/sneakersFilter.png';
import sneakersChecked from '../img/sneakersChecked.png';
import sneakersDrawer from '../img/sneakersDrawer.png';
import sneakersSuccessculOrder from '../img/sneakersSuccessculOrder.png';

const projects = [
    {
        slug: 'Todos',
        title: 'Todos React',
        id: 1,
        imgScreensaver: todo,
        images: [todoAddTasks, todoCheked, todoDelete],
        stack: 'React , Css , ReactHooks',
        gitHub: 'https://github.com/maksdevop/Todos-React',
    },
    {
        slug: 'Modal',
        title: 'Registration Modal',
        id: 2,
        imgScreensaver: modal,
        images: [modal, modalErrorName, modalErrorrPass, modalOpenPass, modalPost, modalResult],
        stack: 'JavaScript , Css , HTML',
        gitHub: 'https://github.com/maksdevop/form-registration',
    },
    {
        slug: 'Redux Book',
        title: 'Redux Library Book',
        id: 3,
        imgScreensaver: bookLibrary,
        images: [bookList, bookListFavorite, bookListFilter, bookListChecked],
        stack: 'Redux , React , React Hooks',
        gitHub: 'https://github.com/maksdevop/Redux-Library-Book',
    },
    {
        slug: 'Kinopoisk',
        title: 'Personal Kinopoisk',
        id: 4,
        imgScreensaver: kinoMax,
        images: [kinoMax, kinoMaxFuture, kinoMaxFavorite, kinoMaxAuthorization, kinoMaxRegistration, kinoMaxAuthorized],
        stack: 'JavaScript ( MVC , Module ) , FireBase Realtime Database , HTML , CSS',
        gitHub: 'https://github.com/maksdevop/maksdevop.github.io',
    },

    {
        slug: 'Sneakers',
        title: 'Sneakers Shop',
        id: 5,
        imgScreensaver: sneakers,
        images: [sneakers, sneakersFilter, sneakersChecked, sneakersDrawer, sneakersSuccessculOrder],
        stack: 'React , MockApi , Hooks : useState , useContext , useEffect',
        gitHub: 'https://github.com/maksdevop/Sneakers-React',
    },
];

export default projects;
