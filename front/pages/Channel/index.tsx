import { Container, Header } from './styles';
import React, { useCallback, useState } from 'react';

import { IUser } from '@typings/db';
import InviteChannelModal from '@components/InviteChannelModal';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import useSWR from 'swr';

const Channel = () => {
  const { workspace, channel } = useParams<{ workspace: string; channel: string }>();
  const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);

  const { data: userData } = useSWR<IUser>('/api/users', fetcher);
  const { data: channelMembersData } = useSWR<IUser[]>(
    userData ? `/api/workspaces/${workspace}/channels/${channel}/members` : null,
    fetcher,
  );

  const onCloseModal = useCallback(() => {
    setShowInviteChannelModal(false);
  }, []);

  const onClickInviteChannel = useCallback(() => {
    setShowInviteChannelModal(true);
  }, []);
  return (
    <Container>
      <Header>
        <span>#{channel}</span>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <span>{channelMembersData?.length}</span>
          <button
            onClick={onClickInviteChannel}
            className="c-button-unstyled p-ia__view_header__button"
            aria-label="Add people to #react-native"
            data-sk="tooltip_parent"
            type="button"
          >
            <i className="c-icon p-ia__view_header__button_icon c-icon--add-user" aria-hidden="true" />
          </button>
        </div>
      </Header>

      <InviteChannelModal
        show={showInviteChannelModal}
        onCloseModal={onCloseModal}
        setShowInviteChannelModal={setShowInviteChannelModal}
      />
    </Container>
  );
};

export default Channel;
