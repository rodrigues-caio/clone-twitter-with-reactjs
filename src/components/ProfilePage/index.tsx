import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Caio Rodrigues</h1>
        <h2>@rodrigues-caio</h2>

        <p>Estudante de Desenvolvimento de Software</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 05 de dezembro de 1996
          </li>
        </ul>

        <Followage>
        <span>
          seguindo <strong>85</strong>
        </span>
        <span>
          <strong>514 </strong> seguidores
        </span>
      </Followage>

      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;