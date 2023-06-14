import Menu from './menu'
import {MenuDark} from './menu'

export default function Header(props) {
  let h;
  if (props.mode == "dark") {
    h = HeaderDark(props)
  } else {
    h = HeaderRegular(props)
  }
  return (
    <header className='container'>
      {h}
    </header>
  )
}

export function HeaderDark(props) {
  return (
    <MenuDark></MenuDark>
  )
}

export function HeaderRegular(props) {
  return (
    <Menu></Menu>
  )
}
