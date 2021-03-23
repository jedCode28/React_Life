import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import {useLocation} from 'react-router-dom'
// import LessText from './LessText'

const NavBar = () => {
    const {pathname} = useLocation()
    return (
        <Menu>
            <Link to='/'>
                <Menu.Item active={pathname === '/'}>
                    Home
                </Menu.Item>
            </Link>
            <Link to={{pathname:'/passdata/1', thingToPass:'Hello'}}>
                <Menu.Item>
                    pass data demo
              </Menu.Item>
            </Link>
            <Link to='/LessText'>
                <Menu.Item active={pathname === '/LessText'}>
                   LessText
                </Menu.Item>
            </Link>
            <Link to='/StepTracker'>
                <Menu.Item active={pathname === '/Step'}>
                   StepTracker
                </Menu.Item>
            </Link>
            <Link to='/ListOfThings'>
                <Menu.Item active={pathname === '/ListOfThings'}>
                   List Of Things...
                </Menu.Item>
            </Link>
            <Link to='/LoginForm'>
                <Menu.Item active={pathname === '/LoginForm'}>
                   LoginForm
                </Menu.Item>
            </Link>
            <Link to='/Login2Form'>
                <Menu.Item active={pathname === '/Login2Form'}>
                   The Same Damn Form, but Coded Differently
                </Menu.Item>
            </Link>

        </Menu>
    )
}

export default NavBar