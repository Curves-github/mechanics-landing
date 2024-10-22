import codeSrc from '../assets/features/code.png'
import navigationSrc from '../assets/features/navigation.png'
import laptopSrc from '../assets/features/laptop.png'
import internetSrc from '../assets/features/internet.png'
import { DefineComponent } from 'vue'
import BookIcon from '../components/icons/BookIcon.vue'
import ShieldIcon from '../components/icons/ShieldIcon.vue'
import ScaleIcon from '../components/icons/ScaleIcon.vue'
import LoadingIcon from '../components/icons/LoadingIcon.vue'
import LayoutIcon from '../components/icons/LayoutIcon.vue'
import CodeIcon from '../components/icons/CodeIcon.vue'

export const icons: Record<string, string> = {
  code: codeSrc,
  navigation: navigationSrc,
  laptop: laptopSrc,
  internet: internetSrc,
}

export const featuresIcons: Record<string, DefineComponent<any, any, any>> = {
  book: BookIcon,
  code: CodeIcon,
  layout: LayoutIcon,
  loading: LoadingIcon,
  scale: ScaleIcon,
  shield: ShieldIcon
}