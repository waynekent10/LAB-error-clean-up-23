import '../styles/main.scss';
import htmlStructure from '../components/htmlStructure';
import { startSortingBtn } from '../components/buttons';
import header from '../components/header';
import events from '../utils/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
