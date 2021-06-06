import React, { useEffect, useState } from 'react';
import Link from '../../../commons/Link';
import { Box } from '../../../../foundation/Layout/Box';
import { Grid } from '../../../../foundation/Layout/Grid';
import Text from '../../../../foundation/Text';
import { WebsitePageContext } from '../../../wrappers/WebSitePage';
import { Logo } from '../../../../theme/Logo';
import MenuProfile from '../../../commons/MenuProfile';
import Modal from '../../../commons/Modal';
import UploadImageModal from '../../../pattern/UploadImage';

export default function ProfileScreen({ userData, ...props }) {
  const [modalState, setModalState] = useState(false);

  return (
    <div>
      <MenuProfile onAddClick={() => setModalState(true)} />
      <Modal
        isOpen={modalState}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => <UploadImageModal propsDoModal={propsDoModal} />}
      </Modal>
      Página de Profile!
      {userData.loading && 'Loading...'}
      {!userData.loading && userData.data && 'Carregou com sucesso'}
      {!userData.loading && userData.error}
      {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
      {/* <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" /> */}
    </div>
  );
}
