import useTheme from "../hooks/useTheme"
import "./ThemeSelector.css"
import darkIcon from '../../assets/dark_mode.svg'
import lightIcon from '../../assets/light_mode.svg'

const colors = ['#293462', "#4A403A", "#4B8673"]
export default function ThemeSelector() {
  const { setColor } = useTheme()

  function changeColor(color) {
    setColor(color)
  }
  return (
    <div className="theme">
      <div className="mode">

      </div>
      <div className="theme-buttons">
        {colors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ backgroundColor: color }}>

          </div>
        ))}
      </div>
    </div>
  )
}
