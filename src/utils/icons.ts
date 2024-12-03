import { DefineComponent } from 'vue';
import codeSrc from '../assets/features/code.png';
import internetSrc from '../assets/features/internet.png';
import laptopSrc from '../assets/features/laptop.png';
import navigationSrc from '../assets/features/navigation.png';
import BookIcon from '../components/icons/BookIcon.vue';
import CodeIcon from '../components/icons/CodeIcon.vue';
import LayoutIcon from '../components/icons/LayoutIcon.vue';
import LoadingIcon from '../components/icons/LoadingIcon.vue';
import ScaleIcon from '../components/icons/ScaleIcon.vue';
import ShieldIcon from '../components/icons/ShieldIcon.vue';

export const icons: Record<string, string> = {
	code: codeSrc,
	navigation: navigationSrc,
	laptop: laptopSrc,
	internet: internetSrc,
};

export const featuresIcons: Record<string, DefineComponent<any, any, any>> = {
	book: BookIcon,
	code: CodeIcon,
	layout: LayoutIcon,
	loading: LoadingIcon,
	scale: ScaleIcon,
	shield: ShieldIcon,
};
