// CLONE_SPEC §11 Global scale — sticky 3-step slider (≥768) + stacked mobile section (≤767)
import ScaleSlider from './scale/ScaleSlider.jsx'
import ScaleMobile from './scale/ScaleMobile.jsx'

export default function Scale() {
  return (
    <>
      <ScaleSlider />
      <ScaleMobile />
    </>
  )
}
