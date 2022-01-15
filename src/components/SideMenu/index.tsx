import { SideMenuComponent, SideMenuContainerClosed, Title } from './styles';
import { MdMenu } from 'react-icons/md';
import { Fonts } from '../Fonts';
import { LinkComponent } from '../Link/styles';
import React from 'react';

export const SideMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const OpenedMenu = () => {
    return (
      <div style={{backgroundColor: '#7159c1'}}>
        <h1>Opened</h1>
      </div>
    )
  }

  const handleOpenMenu = () => {
    

  }

  return (
   <LinkComponent onClick={handleOpenMenu} cursor='pointer'>
      <SideMenuComponent>
      <SideMenuContainerClosed>
        <Title>
          <MdMenu size={30} />
          <Fonts fontFamily='fontBMedium' ml={10}>Menu</Fonts>
        </Title>
      </SideMenuContainerClosed>
    </SideMenuComponent>
   </LinkComponent>
  )
}