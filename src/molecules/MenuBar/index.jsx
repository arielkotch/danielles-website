/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { styles } from './styles';

class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      menuItems: []
    };
  }

  componentDidMount() {
    const { menuItems } = this.props;
    this.setState({
      menuItems
    });
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    const { menuItems } = this.props;
    if (nextProps.menuItems !== menuItems) {
      this.setState({
        menuItems,
      });
    }
  }

    handleHamburgerClick = () => {
      const { isMenuOpen } = this.state;
      this.setState({
        isMenuOpen: !isMenuOpen,
      });
    }

    handleClick = (menuItem) => {
      const { menuItems } = this.state;

      const menuItemsCopy = [...menuItems];
      menuItemsCopy.forEach((item) => {
        if (item === menuItem) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      this.setState({
        menuItems: menuItemsCopy,
      });
    }

    handleCloseCallback = () => {
      const { isMenuOpen } = this.state;

      this.setState({
        isMenuOpen: !isMenuOpen,
      });
    }

    render() {
      const { menuItems } = this.state;
      const { brand } = this.props;
      return (
        <Segment>
          <Menu secondary>
            <Container>
              <Menu.Item style={styles.brand} position="left">
                {brand}
              </Menu.Item>
              {menuItems.map((menuItem) => (
                <Link to={`/${menuItem.name}`}>
                  <Menu.Item
                    style={styles.menuItem}
                    active={menuItem.active}
                    onClick={() => this.handleClick(menuItem)}
                  >
                    {menuItem.name}
                  </Menu.Item>
                </Link>
              ))}
            </Container>
            
          </Menu>
        </Segment>

      );
    }
}

export default MenuBar;
