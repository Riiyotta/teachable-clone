import { useLocation } from 'react-router-dom'
import { shellFor } from '../routes.js'

// Shell config ({ marquee, nav }) for the current route. See SHELLS in src/routes.js.
export default function useShell() {
  return shellFor(useLocation().pathname)
}
