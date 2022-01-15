import { SideMenuComponent, SideMenuContainerClosed, Title } from './styles';
import { MdMenu } from 'react-icons/md';
import { Typogrpahy } from '../Typography';
import { LinkComponent } from '../Link/styles';
import React from 'react';

export const SideMenu = () => {
  return (
   <LinkComponent cursor='pointer'>
      <SideMenuComponent>
      <SideMenuContainerClosed>
        <Title>
          <MdMenu size={30} />
          <Typogrpahy fontFamily='fontBMedium' ml={10}>Menu</Typogrpahy>
        </Title>
      </SideMenuContainerClosed>
    </SideMenuComponent>
   </LinkComponent>
  )
}