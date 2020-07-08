import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
class MenuList extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      menuItems: [
        { name: "Home", active: true },
        { name: "Acting", active: false },
        { name: "Dance", active: false },
        { name: "Reel", active: false },
        { name: "Contact", active: false },
      ],
    };
  }
  handleHamburgerClick = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };
  handleClick = (menuItem) => {
    const menuItems = [...this.state.menuItems];
    menuItems.forEach(function (item) {
      if (item === menuItem) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    this.setState({
      menuItems,
    });
  };
  handleCloseCallback = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };
  render() {
    return (
      <React.Fragment>
        <CheeseburgerMenu
          isOpen={this.state.isMenuOpen}
          closeCallback={() => this.handleCloseCallback()}
        >
          <div className="my-menu-content">
            <Container>
              {this.state.menuItems.map((menuItem) => {
                return (
                  <Link to={"/" + menuItem.name}>
                    <Menu.Item
                      active={menuItem.active}
                      onClick={() => this.handleClick(menuItem)}
                    >
                      {menuItem.name}
                    </Menu.Item>
                  </Link>
                );
              })}
            </Container>
          </div>
        </CheeseburgerMenu>
        <Menu secondary>
          <Container>
            <Menu.Item>
              <img src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
            {this.state.menuItems.map((menuItem) => {
              return (
                <Link to={"/" + menuItem.name}>
                  <Menu.Item
                    active={menuItem.active}
                    onClick={() => this.handleClick(menuItem)}
                  >
                    {menuItem.name}
                  </Menu.Item>
                </Link>
              );
            })}
          </Container>
          <Menu.Item position="right">
            <HamburgerMenu
              isOpen={this.state.isMenuOpen}
              menuClicked={() => this.handleHamburgerClick()}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default MenuList;
