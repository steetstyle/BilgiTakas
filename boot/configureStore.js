import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";
import LessonStore from "../store/DomainStore/LessonStore";

export default function() {
	const mainStore = new MainStore();
	const loginForm = new LoginStore();
	const lessonStore = new LessonStore();

	return {
		loginForm,
		mainStore,
		lessonStore
	};
}
